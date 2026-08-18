import requests
import os
from googlesearch import search

# Создаём папку images, если нет
os.makedirs('images', exist_ok=True)

# ВСЕ 75 ТОВАРОВ ИЗ ТВОЕГО АССОРТИМЕНТА
products = [
    # ⚡ ЭНЕРГИТКИ (1-7)
    "D.L.T.A снюс vaping",
    "Red Bull снюс vaping",
    "Adrenaline RUSH PEPSI vaping",
    "Adrenaline RUSH ICE EFFECT vaping",
    "Adrenaline RUSH vaping",
    "Adrenaline VITAMIN POWER vaping",
    "MONSTER ENERGY снюс 15 pouches",
    
    # 🌼 BJORN LONG 80mg (8-20)
    "BJORN LONG 80mg снюс виноград арбуз",
    "BJORN LONG 80mg снюс виноградный чупа чупс",
    "BJORN LONG 80mg снюс вишня Dr Pepper",
    "BJORN LONG 80mg снюс киви яблоко",
    "BJORN LONG 80mg снюс клубника банан",
    "BJORN LONG 80mg снюс клюква апельсин",
    "BJORN LONG 80mg снюс малиновая газировка",
    "BJORN LONG 80mg снюс мандарин персик",
    "BJORN LONG 80mg снюс мята спрайт",
    "BJORN LONG 80mg снюс персик абрикос",
    "BJORN LONG 80mg снюс фруктовый мармелад",
    "BJORN LONG 80mg снюс ягодная жвачка",
    "BJORN LONG 80mg снюс арбузная жвачка",
    
    # 🔥 BJORN V МЁД 60mg (21-26)
    "BJORN V МЁД 60mg снюс арбузная жвачка",
    "BJORN V МЁД 60mg снюс вишневая кола",
    "BJORN V МЁД 60mg снюс клубника банан",
    "BJORN V МЁД 60mg снюс клубника малина вишня лёд",
    "BJORN V МЁД 60mg снюс клюквенный ред булл",
    "BJORN V МЁД 60mg снюс мятная вишнёвая жвачка",
    
    # 🦴 ANNIMA (27-29)
    "ANNIMA LOVE MISIDE снюс добрый арбуз",
    "ANNIMA САМОУБИЙЦА 80MG снюс арбуз малина",
    "ANNIMA САМОУБИЙЦА 80MG снюс скитлс",
    
    # ☠️ ГРЕХ САМОУБИЙЦА (30-33)
    "ГРЕХ САМОУБИЙЦА снюс земляника смородина лёд",
    "ГРЕХ САМОУБИЙЦА снюс фруктовый скитлс лёд",
    "ГРЕХ САМОУБИЙЦА снюс барбарис малина лёд",
    "ГРЕХ САМОУБИЙЦА снюс клюква смородина лайм",
    
    # 🤩 HOTSPOT (34)
    "HOTSPOT ICE снюс кола",
    
    # ⚠️ САМОУБИЙЦА V2 (35)
    "САМОУБИЙЦА V2 DANGER снюс малина виноград",
    
    # ⚡ LIT ENERGY (36-37)
    "LIT ENERGY CLASSIK снюс арбуз дыня фреш",
    "LIT ENERGY CLASSIK снюс вишня виноград",
    
    # ☠️ ЗЛАЯ МОНАШКА x TPL (38-40)
    "ЗЛАЯ МОНАШКА снюс кислый арбуз земляника",
    "ЗЛАЯ МОНАШКА снюс кислые вишневые червячки",
    "ЗЛАЯ МОНАШКА снюс кислые земляничные червячки",
    
    # 🧊 ЗЛАЯ МОНАШКА ICE (41-45)
    "ЗЛАЯ МОНАШКА ICE снюс лимонад малина черника",
    "ЗЛАЯ МОНАШКА ICE снюс малина арбуз лёд",
    "ЗЛАЯ МОНАШКА ICE снюс клубничный коктейль",
    "ЗЛАЯ МОНАШКА ICE снюс морс красные ягоды",
    "ЗЛАЯ МОНАШКА ICE снюс виноградные леденцы лёд",
    
    # 🔧 РАСХОДНИКИ (46-51)
    "Картридж xros 0.8 3мл vape",
    "Картридж xros 0.6 3мл vape",
    "Картридж xros 0.4 3мл vape",
    "Картридж xros 0.6 2мл vape",
    "Испаритель Aegis Coil B0 vape",
    "НИКОБУСТЕР SALT 20mg 30мл",
    
    # 🚬 MARLBORO (52-57)
    "Marlboro Red King Size cigarettes",
    "Marlboro Premium Black King Size cigarettes",
    "Marlboro Gold King Size cigarettes",
    "Marlboro Flavor code King Size cigarettes",
    "Marlboro Vista Compact cigarettes",
    "Marlboro Brown Compact cigarettes",
    
    # ☁️ LOST MARY (58-61)
    "LOST MARY 5000 клубничное мороженое disposable",
    "LOST MARY 5000 клубника гуава мята disposable",
    "LOST MARY 5000 клубника арбуз disposable",
    "LOST MARY 10000 матча мята лёд disposable",
    
    # ☁️ UÐN (62)
    "UÐN 12000 табак disposable vape",
    
    # ☁️ PODONKI (63-67)
    "PODONKI 11000 белый виноград disposable",
    "PODONKI 11000 клубника банан disposable",
    "PODONKI 10000 клубничное мороженое disposable",
    "PODONKI BAR 7000 тутовый виноград disposable",
    "PODONKI BAR 9000 нуга disposable",
    
    # ☁️ DUFT (68-70)
    "DUFT 7000 клубничный милкшейк disposable",
    "DUFT 7000 пина колада disposable",
    "DUFT 7000 клубничная маргарита disposable",
    
    # ☁️ PUFFMI (71)
    "PUFFMI 10000 ванильное мороженое disposable",
    
    # ☁️ HUSKY (72-73)
    "HUSKY 8000 клубничный молочный коктейль disposable",
    "HUSKY 8000 клубничное мороженое лёд disposable",
    
    # ☁️ PLONQ (74)
    "PLONQ 6000 мускатный табак disposable",
    
    # ☁️ SOAK (75)
    "SOAK 7000 имбирная хурма disposable"
]

print(f"🚀 Начинаю скачивание {len(products)} фото...\n")

success_count = 0
error_count = 0

for i, product_name in enumerate(products, 1):
    print(f"[{i}/{len(products)}] Скачиваю: {product_name}")
    try:
        # Ищем фото в Google Images
        query = f"{product_name} фото packaging product"
        found_url = None
        
        for url in search(query, num_results=3, lang="ru", stop=10):
            # Проверяем, что это картинка
            if url.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                found_url = url
                break
        
        if found_url:
            # Скачиваем фото
            response = requests.get(found_url, timeout=15)
            if response.status_code == 200:
                # Определяем расширение
                if found_url.endswith('.png'):
                    ext = '.png'
                elif found_url.endswith('.webp'):
                    ext = '.webp'
                else:
                    ext = '.jpg'
                
                filename = f"images/product{i}{ext}"
                with open(filename, 'wb') as f:
                    f.write(response.content)
                
                print(f"  ✓ Сохранено: {filename}")
                success_count += 1
            else:
                print(f"  ✗ Ошибка HTTP {response.status_code}")
                error_count += 1
        else:
            print(f"  ✗ Фото не найдено в Google")
            error_count += 1
            
    except Exception as e:
        print(f"  ✗ Ошибка: {str(e)[:50]}")
        error_count += 1
    
    print()

print(f"\n{'='*50}")
print(f"✅ ЗАВЕРШЕНО!")
print(f"✓ Успешно: {success_count}")
print(f"✗ Ошибки: {error_count}")
print(f"{'='*50}")