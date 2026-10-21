import { products, categories } from './products.js';
import { cart } from './cart.js';

/* ========== STATE ========== */
const state = {
  category: 'all',
  brand: 'all',
  search: '',
  sort: 'default',
};

/* ========== ELEMENTS ========== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const els = {
  productsGrid: $('#productsGrid'),
  productsEmpty: $('#productsEmpty'),
  categoryFilters: $('#categoryFilters'),
  brandFilters: $('#brandFilters'),
  searchInput: $('#searchInput'),
  sortSelect: $('#sortSelect'),
  cartBtn: $('#cartBtn'),
  cartCount: $('#cartCount'),
  cart: $('#cart'),
  cartOverlay: $('#cartOverlay'),
  cartList: $('#cartList'),
  cartEmpty: $('#cartEmpty'),
  cartFoot: $('#cartFoot'),
  cartTotal: $('#cartTotal'),
  cartClose: $('#cartClose'),
  checkoutBtn: $('#checkoutBtn'),
  clearCartBtn: $('#clearCartBtn'),
  toast: $('#toast'),
};

/* ========== INIT ========== */
function init() {
  initAgeGate();
  initHeader();
  renderCategoryFilters();
  renderBrandFilters();
  renderProducts();
  renderCart();
  bindEvents();
  $('#year').textContent = new Date().getFullYear();
  cart.load()._emit();
}

/* ========== AGE GATE ========== */
function initAgeGate() {
  const gate = $('#ageGate');
  if (localStorage.getItem('age_ok') === '1') {
    gate.classList.add('hidden');
    return;
  }
  document.body.classList.add('locked');
  gate.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-age]');
    if (!btn) return;
    if (btn.dataset.age === 'yes') {
      localStorage.setItem('age_ok', '1');
      gate.classList.add('hidden');
      document.body.classList.remove('locked');
    } else {
      gate.innerHTML = '<div class="age-gate__card"><div class="age-gate__icon">🚫</div><h2>Доступ запрещён</h2><p class="age-gate__denied">Сайт доступен только лицам старше 18 лет.</p></div>';
    }
  });
}

/* ========== HEADER ========== */
function initHeader() {
  const header = $('#header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 10px 30px -10px rgba(0,0,0,.5)' : 'none';
  }, { passive: true });
}

/* ========== FILTERS ========== */
function renderCategoryFilters() {
  els.categoryFilters.innerHTML = categories.map(c => `
    <button class="filter-chip ${c.id === state.category ? 'active' : ''}" data-cat="${c.id}">
      ${c.icon} ${c.name}
    </button>
  `).join('');
}

function renderBrandFilters() {
  const brands = ['all', ...new Set(products.map(p => p.brand))];
  els.brandFilters.innerHTML = brands.map(b => `
    <button class="filter-chip ${b === state.brand ? 'active' : ''}" data-brand="${b}">
      ${b === 'all' ? 'Все бренды' : b}
    </button>
  `).join('');
}

/* ========== PRODUCTS ========== */
function getFiltered() {
  let list = [...products];
  if (state.category !== 'all') list = list.filter(p => p.category === state.category);
  if (state.brand !== 'all') list = list.filter(p => p.brand === state.brand);
  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.flavors.some(f => f.toLowerCase().includes(q))
    );
  }
  if (state.sort === 'price-asc') list.sort((a, b) => a.price - b.price);
  if (state.sort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (state.sort === 'rating') list.sort((a, b) => b.rating - a.rating);
  return list;
}

function renderProducts(list = getFiltered()) {
  els.productsEmpty.hidden = list.length > 0;
  els.productsGrid.innerHTML = list.map(p => productCard(p)).join('');
}

function productCard(p) {
  const badgeMap = {
    hit: ['Хит', 'product__badge--hit'],
    new: ['Новинка', 'product__badge--new'],
  };
  const badge = p.badge ? badgeMap[p.badge] : null;
  return `
    <article class="product" data-id="${p.id}">
      <div class="product__img">
        ${badge ? `<span class="product__badge ${badge[1]}">${badge[0]}</span>` : ''}
        <img src="${p.img}" alt="${p.name}" loading="lazy" decoding="async"
             onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
        <div class="product__img-fallback" style="display:none">💨</div>
      </div>
      <div class="product__body">
        <div class="product__brand">${p.brand}</div>
        <h3 class="product__name">${p.name}</h3>
        <div class="product__meta">
          ${p.volume !== '-' ? `<span>${p.volume}</span>` : ''}
          ${p.strength !== '0мг' ? `<span>${p.strength}</span>` : ''}
          <span>★ ${p.rating}</span>
        </div>
        <div class="product__flavors">
          ${p.flavors.map((f, i) => `
            <button class="flavor ${i === 0 ? 'active' : ''}" data-flavor="${f}">${f}</button>
          `).join('')}
        </div>
        <div class="product__foot">
          <div class="product__price">
            <strong>${p.price} ₽</strong>
            ${p.oldPrice ? `<s>${p.oldPrice} ₽</s>` : ''}
          </div>
          <button class="product__add" data-add="${p.id}" aria-label="В корзину">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

/* ========== CART UI ========== */
function renderCart() {
  const { items, count, total } = cart;
  els.cartCount.textContent = count;
  els.cartCount.classList.toggle('active', count > 0);
  els.cartEmpty.hidden = items.length > 0;
  els.cartFoot.hidden = items.length === 0;
  els.cartTotal.textContent = `${total().toLocaleString('ru-RU')} ₽`;

  if (!items.length) {
    els.cartList.innerHTML = '';
    return;
  }
  els.cartList.innerHTML = items.map(i => `
    <div class="cart-item" data-key="${i.key}">
      <div class="cart-item__img">
        <img src="${i.img}" alt="" onerror="this.style.display='none'">
      </div>
      <div>
        <div class="cart-item__name">${i.name}</div>
        <div class="cart-item__flavor">${i.flavor}</div>
        <div class="cart-item__price">${(i.price * i.qty).toLocaleString('ru-RU')} ₽</div>
      </div>
      <div class="cart-item__controls">
        <button class="cart-item__remove" data-remove="${i.key}">✕</button>
        <div class="qty">
          <button data-qty="${i.key}" data-dir="-1">−</button>
          <span>${i.qty}</span>
          <button data-qty="${i.key}" data-dir="1">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

function openCart() {
  els.cart.classList.add('active');
  els.cartOverlay.classList.add('active');
  els.cart.setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
}

function closeCart() {
  els.cart.classList.remove('active');
  els.cartOverlay.classList.remove('active');
  els.cart.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('locked');
}

/* ========== TOAST ========== */
let toastTimer;
function toast(msg, type = '') {
  clearTimeout(toastTimer);
  els.toast.textContent = msg;
  els.toast.className = `toast show ${type}`;
  toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2200);
}

/* ========== EVENTS ========== */
function bindEvents() {
  // Filters
  els.categoryFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-cat]');
    if (!btn) return;
    state.category = btn.dataset.cat;
    renderCategoryFilters();
    renderProducts();
  });

  els.brandFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-brand]');
    if (!btn) return;
    state.brand = btn.dataset.brand;
    renderBrandFilters();
    renderProducts();
  });

  let searchTimer;
  els.searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.search = e.target.value.trim();
      renderProducts();
    }, 200);
  });

  els.sortSelect.addEventListener('change', (e) => {
    state.sort = e.target.value;
    renderProducts();
  });

  // Product actions (delegation)
  els.productsGrid.addEventListener('click', (e) => {
    const flavorBtn = e.target.closest('.flavor');
    if (flavorBtn) {
      const card = flavorBtn.closest('.product');
      card.querySelectorAll('.flavor').forEach(f => f.classList.remove('active'));
      flavorBtn.classList.add('active');
      return;
    }
    const addBtn = e.target.closest('[data-add]');
    if (addBtn) {
      const card = addBtn.closest('.product');
      const id = Number(addBtn.dataset.add);
      const product = products.find(p => p.id === id);
      const flavor = card.querySelector('.flavor.active')?.dataset.flavor || product.flavors[0];
      cart.add(product, flavor);
      toast(`✓ ${product.name} (${flavor})`, 'success');
    }
  });

  // Cart
  els.cartBtn.addEventListener('click', openCart);
  els.cartClose.addEventListener('click', closeCart);
  els.cartOverlay.addEventListener('click', closeCart);

  els.cartList.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('[data-remove]');
    if (removeBtn) return cart.remove(removeBtn.dataset.remove);
    const qtyBtn = e.target.closest('[data-qty]');
    if (qtyBtn) {
      const key = qtyBtn.dataset.qty;
      const item = cart.items.find(i => i.key === key);
      if (item) cart.updateQty(key, item.qty + Number(qtyBtn.dataset.dir));
    }
  });

  els.clearCartBtn.addEventListener('click', () => {
    if (confirm('Очистить корзину?')) cart.clear();
  });

  els.checkoutBtn.addEventListener('click', checkout);

  // Cart updates
  window.addEventListener('cart:change', renderCart);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });

  // Quiz
  initQuiz();
}

/* ========== QUIZ ========== */
function initQuiz() {
  const quiz = $('#quiz');
  const step1 = quiz.querySelector('[data-step="1"]');
  const step2 = quiz.querySelector('[data-step="2"]');
  const result = $('#quizResult');
  let flavor = null;

  quiz.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;

    if (chip.dataset.flavor) {
      step1.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      flavor = chip.dataset.flavor;
      setTimeout(() => {
        step1.hidden = true;
        step2.hidden = false;
      }, 250);
      return;
    }

    if (chip.dataset.strength) {
      step2.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const strength = chip.dataset.strength;

      let matches = products.filter(p =>
        p.flavorTags?.includes(flavor) &&
        (strength === 'any' || p.strength === `${strength}мг`)
      );
      if (!matches.length) {
        matches = products.filter(p => p.flavorTags?.includes(flavor));
      }
      if (!matches.length) {
        matches = products.filter(p => p.category === 'liquids').slice(0, 3);
      }

      step2.hidden = true;
      result.hidden = false;
      result.innerHTML = `
        <h3>Мы нашли ${matches.length} товар(а) для тебя 🎯</h3>
        ${matches.slice(0, 3).map(p => `
          <div class="product" data-id="${p.id}">
            <div class="product__img">
              <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">
            </div>
            <div class="product__body">
              <div class="product__brand">${p.brand}</div>
              <h3 class="product__name">${p.name}</h3>
              <div class="product__foot">
                <div class="product__price"><strong>${p.price} ₽</strong></div>
                <button class="product__add" data-add="${p.id}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
        <button class="btn btn--ghost" id="quizReset">Пройти заново</button>
      `;
      result.addEventListener('click', (e) => {
        const addBtn = e.target.closest('[data-add]');
        if (addBtn) {
          const p = products.find(x => x.id === Number(addBtn.dataset.add));
          cart.add(p, p.flavors[0]);
          toast(`✓ ${p.name}`, 'success');
        }
        if (e.target.id === 'quizReset') {
          result.hidden = true;
          step1.hidden = false;
          step2.hidden = true;
          quiz.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        }
      });
    }
  });
}

/* ========== CHECKOUT ========== */
function checkout() {
  if (!cart.items.length) return;
  const lines = cart.items.map(i =>
    `• ${i.name} (${i.flavor}) × ${i.qty} = ${i.price * i.qty} ₽`
  );
  const text = `🛒 Заказ:\n${lines.join('\n')}\n\n💰 Итого: ${cart.total()} ₽`;
  const tgUrl = `https://t.me/yourtelegram?text=${encodeURIComponent(text)}`;

  navigator.clipboard?.writeText(text).catch(() => {});
  toast('Заказ скопирован. Открываем Telegram…', 'success');
  setTimeout(() => window.open(tgUrl, '_blank'), 600);
}

/* ========== GO ========== */
init();
