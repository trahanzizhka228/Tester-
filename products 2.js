const products = [
  {
    id: 1,
    name: "D.L.T.A ☠️",
    price: 16,
    category: "snus",
    brand: "D.L.T.A",
    flavors: [
      "Red Bull 🐂",
      "Adrenaline RUSH PEPSI 💙",
      "Adrenaline RUSH LIMITED EDITION ICE EFFECT 🔳",
      "Adrenaline RUSH 🤩",
      "Adrenaline VITAMIN POWER 🙃",
      "MONSTER ENERGY 🖤",
      "Red bull The blue edition",
      "Red bull The pink edition"
    ],
    description: "Cнюс , крепкий"
  },
  {
    id: 2,
    name: "D.L.T.A XS ☠️",
    price: 16,
    category: "snus",
    brand: "D.L.T.A",
    flavors: [
      "Микс ягод",
      "Зеленый виноград мята"
    ],
    description: "Снюс, крепкий"
  },
  {
    id: 301,
    name: "ICEBURN GHETTO",
    price: 16,
    category: "snus",
    brand: "iceburn",
    flavors: [
      "GHOST-энергетик Байкал",
      "DARTH VADER-перечная мята"
    ],
    description: "150 мг"
  },
  {
    id: 302,
    name: "ICEBERG RISING SUN ULTRA",
    price: 16,
    category: "snus",
    brand: "iceberg",
    flavors: [
      "Кислые ягоды",
      "Клубника-гранат",
      "Сладкая мята"
    ],
    description: "150 мг"
  },
  {
    id: 303,
    name: "ICEBERG HARDCORE",
    price: 16,
    category: "snus",
    brand: "iceberg",
    flavors: [
      "Black fury",
      "Frozen pulse",
      "Ice shock"
    ],
    description: "150мг"
  },
  {
    id: 304,
    name: "FAFF",
    price: 16,
    category: "snus",
    brand: "faff",
    flavors: [
      "Сливочные вафли"
    ],
    description: "150 мг"
  },
  {
    id: 8,
    name: "BJORN LONG 80mg 🧛",
    price: 20,
    category: "liquid",
    brand: "bjorn",
    flavors: [
   //   "Клюква апельсин 🍊",
      "Виноград арбуз",
    //  "Вишня Dr Pepper",
      "Клубника банан",
      "Морс из лесных ягод",
      "Мята спрайт",
      "Энергетик черника",
      "Ягодная жвачка"
    ],
    description: "80mg, 30мл"
  },
  {
    id: 101,
    name: "BJORN ТЕМНЫЙ ХОР",
    price: 20,
    category: "liquid",
    brand: "bjorn",
    flavors: [
      "Арбуз лед",
      "Арбуз мята",
      "Голубика лед",
     // "Кислая вишня",
      "Кислое зеленое яблоко",
      "Кислый ягодный микс",
      "Клубника мята",
      "Энергетик лед",
      "Ягодный микс ментол"
    ],
    description: "80 мг, 30мл"
  },
  {
    id: 102,
    name: "BJORN СОН ПРИЗРАКА",
    price: 20,
    category: "liquid",
    brand: "bjorn",
    flavors: [
      "Ледяная клубника личи",
      "Манго со льдом",
      "Ананас манго",
      "Кислое яблоко",
      "Яблоко персик"
    ],
    description: "30мл"
  },
  {
    id: 36,
    name: "САМОУБИЙЦА V2 DANGER ⚡️",
    price: 18,
    category: "liquid",
    brand: "самоубийцы",
    flavors: [
      "Арбузно дынный фреш 🤩"
    ],
    description: "30мл"
  },
  {
    id: 81,
    name: "Монашка HOTSPOT",
    price: 18,
    category: "liquid",
    brand: "hotspot , монашка",
    flavors: [
      "Мармеладные червячки",
      "Ледяной энергетик",
      "Кола тамаринд лайм"
    ],
    description: "30мл"
  },
  {
    id: 104,
    name: "ЗЛАЯ МОНАШКА",
    price: 18,
    category: "liquid",
    brand: "злая монашка",
    flavors: [
    //  "Кислый чупа чупс с холодком",
      "Энергетик арбуз",
     // "Черничный энергетик",
      "Малиновое варенье",
      "Жвачка арбуз",
      "Пина колада",
      "Клубнично ежевичный морс",
      "Доктор Пеппер черешня",
      "Клубника личи",
      "Энергетик смородина"
    ],
    description: "70mg, 30мл"
  },
  {
    id: 105,
    name: "ЗЛАЯ ЛАБУБУ ENERGY",
    price: 16,
    category: "liquid",
    brand: "злая лабуба",
    flavors: [
      "Флеш оригинал",
      "Адреналин оригинал",
      "Драйв оригинал",
      "HQD с мишками",
      "Лит энерджи малина"
    ],
    description: "70mg, 30мл"
  },
  {
    id: 115,
    name: "ЗЛАЯ ЛАБУБУ EXTRA HARD",
    price: 16,
    category: "liquid",
    brand: "злая лабуба",
    flavors: [
      "Виноград малина",
      "Мятная жвачка",
      "Виноград клубника",
      "Холодный виноград",
      "Фруктовые леденцы",
      "Вишня яблоко",
      "Клубника персик"
    ],
    description: "70 мг, 30мл"
  },
  {
    id: 116,
    name: "DOGSWILL",
    price: 15,
    category: "liquid",
    brand: "dogswill",
    flavors: [
      "Mountain dew",
      "Виноград черника смородина",
      "Кислый чупа чупс с холодком",
      "Клубнично банановая жвачка",
      "Ягодный морс"
    ],
    description: "60 мг, 30мл"
  },
  {
    id: 117,
    name: "ANIMMA LOVE KILLER",
    price: 17,
    category: "liquid",
    brand: "anima",
    flavors: [
      "Арбузный смузи",
      "Банан клубника",
      "Виноград вишня",
      "Виноград малина арбуз",
      "Вишневая газировка",
      "Вишня скитлс лимон",
      "Клубничный коктейль",
      "Лесные ягоды",
      "Редбулл с ананасом",
      "Чернично-малиновые червячки",
      "Яблочный лимонад",
      "Ягодная жвачка"
    ],
    description: "80 мг, 30мл"
  },
  {
    id: 118,
    name: "BJORN JOKER 🃏",
    price: 20,
    category: "liquid",
    brand: "bjorn",
    flavors: [
      "Арбуз дыня",
      "Виноград черная смородина",
     // "Виноград ягоды",
      "Клубника банан",
      "Кола вишня",
      "Черника мята",
      "Энергетик"
    ],
    description: "80 мг, 30мл"
  },
  {
    id: 201,
    name: "HOTSPOT DON'T CHEW IT 60 мг",
    price: 14,
    category: "liquid",
    brand: "hotspot",
    flavors: [
      "Жвачка арбуз",
      "Жвачка зеленое яблоко",
      "Жвачка ледяная вишня",
      "Жвачка ледяной виноград",
      "Жвачка маракуйя",
      "Жвачка сочный персик"
    ],
    description: "60мг"
  },
  {
    id: 202,
    name: "HOTSPOT DOT 60 мг",
    price: 14,
    category: "liquid",
    brand: "hotspot",
    flavors: [
      "Банан лайм",
      "Клубника мята",
      "Малина смородина",
    //  "Нектарин вишня"
    ],
    description: "60мг"
  },
  {
    id: 203,
    name: "HOTSPOT FUEL 60 мг",
    price: 14,
    category: "liquid",
    brand: "hotspot",
    flavors: [
      "Дыня черника",
      "Смородина мята"
    ],
    description: "60мг"
  },
  {
    id: 106,
    name: "HOTSPOT x PODONKI 60 мг",
    price: 14,
    category: "liquid",
    brand: "hotspot , podonki",
    flavors: [
      "Освежающая кола",
      "Освежающий лимонад лайм мята",
      "Холодное яблоко",
      "Холодный арбуз"
    ],
    description: "60мг"
  },
  {
    id: 107,
    name: "PODONKI INFERNO",
    price: 16,
    category: "liquid",
    brand: "podonki",
    flavors: [
      "Клубника банан",
      "Вишня слива груша",
      "Арбуз черника",
      "Черника лед"
    ],
    description: "60mg, 30мл"
  },
  {
    id: 108,
    name: "BJORN ZLOY V2.0",
    price: 16,
    category: "liquid",
    brand: "bjorn",
    flavors: [
      "Мармелад маршмеллоу",
      "Вишня клубника",
      "Смородина малина яблоко",
      "Ваниль вишня",
      "Яблоко виноград",
      "Мохито",
      "Ягодный напиток",
      "Энергетик монстер"
    ],
    description: "60mg, 30мл"
  },
  {
    id: 110,
    name: "CATSWILL X MONSTERVAPOR",
    price: 18,
    category: "liquid",
    brand: "catswill",
    flavors: [
     // "Виноградно-вишневый холм лед",
      "Красное сладкое яблоко с кислинкой"
    ],
    description: "50mg, 30мл"
  },
  {
    id: 111,
    name: "ANNIMA LOVE ZOMBIE",
    price: 17,
    category: "liquid",
    brand: "anima",
    flavors: [
      "Яблоко виноград",
      "Клубничный леденец",
      "Клубника банан",
      "Ежевичный лимонад",
      "Малина с кислинкой",
      "Арбузный Бабл гам",
      "Алоэ виноград"
    ],
    description: "60mg, 30мл"
  },
  {
    id: 114,
    name: "ANNIMA LOVE SOUR",
    price: 16,
    category: "liquid",
    brand: "anima",
    flavors: [
      "Кислая черника апельсин",
      "Кислая черника малина",
      "Кислое яблоко киви",
      "Кислые арбуз малина",
      "Кислые лесные ягоды",
      "Кислые малиновые червяки",
      "Кислый виноградный чупа-чупс",
      "Кислый зеленый виноград",
      "Кислый скитлс",
      "Энергетик кислая вишня"
    ],
    description: "50mg, 30мл"
  },
  {
    id: 48,
    name: "Картридж xros 0.4 (3мл)",
    price: 13,
    category: "consumables",
    brand: "vaporesso",
    flavors: [],
    description: "Оригинал, 3мл"
  },
  {
    id: 49,
    name: "Картридж xros 0.6 (3мл)",
    price: 13,
    category: "consumables",
    brand: "vaporesso",
    flavors: [],
    description: "Оригинал, 3мл"
  },
  {
    id: 112,
    name: "Картридж xros 0.8 (3мл)",
    price: 13,
    category: "consumables",
    brand: "vaporesso",
    flavors: [],
    description: "Оригинал, 3мл"
  },
  {
    id: 113,
    name: "Картридж xros 0.7 (3мл)",
    price: 13,
    category: "consumables",
    brand: "vaporesso",
    flavors: [],
    description: "Оригинал, 3мл"
  },
  {
    id: 50,
    name: "Испаритель Aegis Coil B0 (50-58w)",
    price: 13,
    category: "consumables",
    brand: "geekvape",
    flavors: [],
    description: "0.2Ω, 5 шт"
  },
  {
    id: 98,
    name: "испаритель PASITO 3/PASITO 2/KNIGHT 80",
    price: 12,
    category: "consumables",
    brand: "smoant",
    flavors: [],
    description: "0.15Ω,(70-90)"
  },
  {
    id: 97,
    name: "испаритель PASITO 3/PASITO 2/KNIGHT 80 (0.15Ω, (55-65))",
    price: 12,
    category: "consumables",
    brand: "smoant",
    flavors: [],
    description: "0.15Ω, (55-65)"
  },
  {
    id: 51,
    name: "НИКОБУСТЕР SALT (+20мг на 30 мл)",
    price: 3,
    category: "consumables",
    brand: "jord",
    flavors: [],
    description: "Для миксования"
  },
  {
    id: 87,
    name: "LOST MARY 5к тяг",
    price: 20,
    category: "disposable",
    brand: "lost mary",
    flavors: [
      "Клубничное мороженое",
      "Клубника гуава мята"
    ],
    description: "5000 тяг"
  },
  {
    id: 88,
    name: "MONSTERVAPOR 11к тяг",
    price: 30,
    category: "disposable",
    brand: "monstervapor",
    flavors: [
      "Белый виноград"
    ],
    description: "11000 тяг"
  },
  {
    id: 89,
    name: "HUSKY 8к тяг",
    price: 30,
    category: "disposable",
    brand: "husky",
    flavors: [
      "PINK SKY"
    ],
    description: "8000 тяг"
  },
  {
    id: 90,
    name: "SPACE PRO 18к тяг",
    price: 30,
    category: "disposable",
    brand: "space pro",
    flavors: [
      "Kentucky Tobacco"
    ],
    description: "18000 тяг"
  },
  {
    id: 91,
    name: "DUFT 7к",
    price: 20,
    category: "disposable",
    brand: "duft",
    flavors: [
      "Пина колада",
      "Клубничный Милкшэйк"
    ],
    description: "7000 тяг"
  },
  {
    id: 92,
    name: "PUFFMI 10к тяг",
    price: 20,
    category: "disposable",
    brand: "puffmi",
    flavors: [
      "Ванильное мороженое"
    ],
    description: "10000 тяг"
  },
  {
    id: 93,
    name: "PODONKI BAR 9к тяг",
    price: 20,
    category: "disposable",
    brand: "podonki bar",
    flavors: [
      "Тянучка нуга"
    ],
    description: "9000 тяг"
  },
  {
    id: 94,
    name: "SOAK CUBE 7к тяг",
    price: 15,
    category: "disposable",
    brand: "soak cube",
    flavors: [
      "Имбирная хурма"
    ],
    description: "7000 тяг"
  },
  {
    id: 95,
    name: "UDN BAR 12к тяг",
    price: 30,
    category: "disposable",
    brand: "udn bar",
    flavors: [
      "Табак"
    ],
    description: "12000 тяг"
  },
  {
    id: 96,
    name: "Lost Mary 5к тяг",
    price: 20,
    category: "disposable",
    brand: "lost mary",
    flavors: [
      "Клубника гуава мята"
    ],
    description: "5000 тяг"
  },
  {
    id: 103,
    name: "SiM 7000 PUFFS",
    price: 20,
    category: "disposable",
    brand: "Sim",
    flavors: [
      "Strawberry Avocado",
      "Rose milk",
      "Ice mint",
      "Mulberry grape"
    ],
    description: "7000 тяг"
  }
];
