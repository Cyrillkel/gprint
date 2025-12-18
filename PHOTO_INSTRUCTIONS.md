# Инструкции по добавлению фотографий для страниц продукции

## Страница "Стандартные голограммы"

### Основные изображения для замены:

1. **Главное изображение героя** (строка 48-54):

   ```tsx
   <Image
     src="/img/products/holograma_standart.jpg" // ЗАМЕНИТЬ НА ВАШЕ ФОТО
     alt="Стандартные голограммы - основное изображение с примерами различных дизайнов и эффектов"
     fill
     className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
     priority
   />
   ```

2. **Галерея "Обойные голограммы"** (строки 97-109):

   - 8 изображений в сетке
   - Каждое изображение нужно заменить на уникальное фото обойных голограмм

   ```tsx
   <Image
     src="/img/products/holograma_standart.jpg" // ЗАМЕНИТЬ НА ФОТО ОБОЙНОЙ ГОЛОГРАММЫ {item}
     alt={`Обойная голограмма ${item} - пример непрерывного голографического рисунка`}
     fill
     className="object-cover group-hover:scale-110 transition-transform duration-300"
   />
   ```

3. **Галерея "Фиксированный размер"** (строки 123-135):
   - 8 изображений в сетке
   - Каждое изображение нужно заменить на фото голограмм с фиксированным размером
   ```tsx
   <Image
     src="/img/products/holograma_standart.jpg" // ЗАМЕНИТЬ НА ФОТО ГОЛОГРАММЫ С ФИКСИРОВАННЫМ РАЗМЕРОМ {item}
     alt={`Голограмма с фиксированным размером ${item} - специализированный дизайн`}
     fill
     className="object-cover group-hover:scale-110 transition-transform duration-300"
   />
   ```

### Рекомендуемые размеры изображений:

- **Главное изображение**: 1200x800px или больше
- **Изображения галереи**: 400x400px (квадратные)
- **Формат**: JPG или PNG
- **Качество**: Высокое разрешение для четкого отображения

### Структура папок для изображений:

```
public/
  img/
    products/
      standard-holograms/
        hero.jpg                    // Главное изображение
        wallpaper/
          wallpaper-1.jpg          // Обойные голограммы
          wallpaper-2.jpg
          ...
          wallpaper-8.jpg
        fixed-size/
          fixed-1.jpg              // Фиксированный размер
          fixed-2.jpg
          ...
          fixed-8.jpg
```

### Пример обновления кода после добавления фотографий:

```tsx
// Главное изображение
<Image
  src="/img/products/standard-holograms/hero.jpg"
  alt="Стандартные голограммы - основное изображение с примерами различных дизайнов и эффектов"
  fill
  className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
  priority
/>

// Обойные голограммы
<Image
  src={`/img/products/standard-holograms/wallpaper/wallpaper-${item}.jpg`}
  alt={`Обойная голограмма ${item} - пример непрерывного голографического рисунка`}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-300"
/>

// Фиксированный размер
<Image
  src={`/img/products/standard-holograms/fixed-size/fixed-${item}.jpg`}
  alt={`Голограмма с фиксированным размером ${item} - специализированный дизайн`}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-300"
/>
```

## Создание аналогичных страниц для других продуктов

### Шаблон для копирования:

1. Скопируйте файл `/src/app/[locale]/products/standard-holograms/page.tsx`
2. Создайте новую папку для продукта, например: `/src/app/[locale]/products/individual-holograms/`
3. Обновите:
   - Заголовки и описания
   - Технические характеристики
   - Изображения
   - Breadcrumbs
   - Alt-тексты

### Обновление навигации:

После создания новых страниц обновите файлы:

- `/src/shared/components/products-dropdown.tsx` (строка 85)
- `/src/app/[locale]/products/page.tsx` (строка 43)

Добавьте условия для новых продуктов:

```tsx
href={
  index === 0 ? `/products/standard-holograms` :
  index === 1 ? `/products/individual-holograms` :
  index === 2 ? `/products/exclusive-holograms` :
  `/products/${product.id}`
}
```

### Список продуктов для создания страниц:

1. ✅ Стандартные голограммы (`/products/standard-holograms`)
2. ⏳ Индивидуальные голограммы (`/products/individual-holograms`)
3. ⏳ Эксклюзивные голограммы (`/products/exclusive-holograms`)
4. ⏳ Голограммы высокого разрешения (`/products/high-resolution-holograms`)
5. ⏳ Голограммы (ФГТ) (`/products/fgt-holograms`)
6. ⏳ Голограммы самоклеящиеся (`/products/self-adhesive-holograms`)
7. ⏳ Голографический ламинат (`/products/holographic-laminate`)
8. ⏳ Голограммы стирающиеся (`/products/erasable-holograms`)
9. ⏳ Электронные голограммы EHO (`/products/electronic-holograms`)

### Важные моменты:

- Каждое изображение должно иметь описательный alt-текст
- Используйте оптимизированные изображения для быстрой загрузки
- Поддерживайте единый стиль и структуру страниц
- Обновляйте навигацию при добавлении новых страниц


