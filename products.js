export const categories = [
  { id: 'all', name: 'Все', icon: '🛍' },
  { id: 'liquids', name: 'Жидкости', icon: '💧' },
  { id: 'pouches', name: 'Снюс / Паучи', icon: '🥶' },
  { id: 'consumables', name: 'Расходники', icon: '🔧' },
  { id: 'devices', name: 'Устройства', icon: '💨' },
];

export const products = [
  {
    id: 1, name: 'HQD Cuvie Plus', brand: 'HQD', category: 'liquids',
    volume: '50мл', strength: '20мг', price: 450, oldPrice: 550,
    badge: 'hit', rating: 4.8, reviews: 124, inStock: true,
    flavors: ['Клубника', 'Манго', 'Арбуз', 'Ледяной виноград'],
    flavorTags: ['сладкие', 'фруктовые'], img: 'images/product1.jpg'
  },
  {
    id: 2, name: 'Elf Bar BC5000', brand: 'Elf Bar', category: 'liquids',
    volume: '30мл', strength: '50мг', price: 890, oldPrice: null,
    badge: 'new', rating: 4.9, reviews: 312, inStock: true,
    flavors: ['Blueberry Ice', 'Strawberry Kiwi', 'Watermelon'],
    flavorTags: ['ледяные', 'фруктовые'], img: 'images/product2.jpg'
  },
  {
    id: 3, name: 'Chaser Real', brand: 'Chaser', category: 'liquids',
    volume: '30мл', strength: '20мг', price: 320, oldPrice: 400,
    badge: null, rating: 4.6, reviews: 87, inStock: true,
    flavors: ['Табачный', 'Кофе', 'Карамель'],
    flavorTags: ['табачные', 'сладкие'], img: 'images/product3.jpg'
  },
  {
    id: 4, name: 'Siberia -80°C', brand: 'Siberia', category: 'pouches',
    volume: '13г', strength: '33мг', price: 380, oldPrice: null,
    badge: 'hit', rating: 4.7, reviews: 203, inStock: true,
    flavors: ['Красный', 'Синий', 'Зелёный'],
    flavorTags: ['ледяные'], img: 'images/product4.jpg'
  },
  {
    id: 5, name: 'Corvus Cool', brand: 'Corvus', category: 'pouches',
    volume: '16г', strength: '50мг', price: 420, oldPrice: 500,
    badge: 'new', rating: 4.5, reviews: 56, inStock: true,
    flavors: ['Мята', 'Ментол', 'Ягоды'],
    flavorTags: ['ледяные', 'фруктовые'], img: 'images/product5.jpg'
  },
  {
    id: 6, name: 'Vaporesso XROS 3', brand: 'Vaporesso', category: 'devices',
    volume: '-', strength: '0мг', price: 1890, oldPrice: 2290,
    badge: null, rating: 4.9, reviews: 441, inStock: true,
    flavors: ['Чёрный', 'Серебряный', 'Синий'],
    flavorTags: [], img: 'images/product6.jpg'
  },
  {
    id: 7, name: 'Картриджи XROS (4 шт)', brand: 'Vaporesso', category: 'consumables',
    volume: '0.6Ω / 1.0Ω', strength: '0мг', price: 590, oldPrice: null,
    badge: null, rating: 4.8, reviews: 189, inStock: true,
    flavors: ['0.6Ω', '0.8Ω', '1.0Ω'],
    flavorTags: [], img: 'images/product7.jpg'
  },
  {
    id: 8, name: 'Испарители Voopoo PnP', brand: 'Voopoo', category: 'consumables',
    volume: '5 шт', strength: '0мг', price: 690, oldPrice: 790,
    badge: 'hit', rating: 4.7, reviews: 97, inStock: true,
    flavors: ['0.15Ω', '0.2Ω', '0.3Ω'],
    flavorTags: [], img: 'images/product8.jpg'
  },
];
