const STORAGE_KEY = 'vape_cart_v1';

export const cart = {
  items: [],

  load() {
    try {
      this.items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { this.items = []; }
    return this;
  },

  save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    this._emit();
  },

  add(product, flavor) {
    const key = `${product.id}__${flavor}`;
    const existing = this.items.find(i => i.key === key);
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({
        key, id: product.id, name: product.name,
        price: product.price, img: product.img,
        flavor, qty: 1,
      });
    }
    this.save();
    return true;
  },

  remove(key) {
    this.items = this.items.filter(i => i.key !== key);
    this.save();
  },

  updateQty(key, qty) {
    const item = this.items.find(i => i.key === key);
    if (!item) return;
    if (qty <= 0) return this.remove(key);
    item.qty = qty;
    this.save();
  },

  clear() {
    this.items = [];
    this.save();
  },

  total() {
    return this.items.reduce((s, i) => s + i.price * i.qty, 0);
  },

  count() {
    return this.items.reduce((s, i) => s + i.qty, 0);
  },

  _emit() {
    window.dispatchEvent(new CustomEvent('cart:change'));
  },
};

