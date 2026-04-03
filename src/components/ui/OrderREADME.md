# Order Component

Компонент Order создан на основе дизайна из Figma (Node ID: 77-36527) и представляет собой карточку заказа с различными состояниями.

## Design Tokens

Компонент использует переменные дизайна, извлеченные из Figma:

### Цвета
- **Cards**: 
  - `cardsBgWhite`: #ffffff (фон карточки)
  - `cardsBgGray`: #f6f7f7 (фон при hover)
  - `cardsTextBlack`: #192434 (основной текст)
  - `cardsTextLightGray`: #a3a7ae (второстепенный текст)
  - `cardsDisable`: #d1d3d6 (неактивное состояние)

- **Badges**:
  - `badgesBgWhite`: #ffffff (фон бейджа "Новый")
  - `badgesBgLightRed`: #ffd6d6 (фон бейджа "Отменен")
  - `badgesTextGreen`: #4fc068 (текст бейджа "Новый")
  - `badgesTextRed`: #f4364c (текст бейджа "Отменен")

### Отступы
- `4px`, `6px`, `8px`, `12px`, `16px`, `20px`

### Скругления
- `10px` (бейджи)
- `24px` (карточка)

### Типографика
- **Font Family**: Inter
- **Font Sizes**: 12px, 13px, 14px, 16px, 18px
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semibold)
- **Line Heights**: 16px, 18px, 20px, 22px, 24px

## Использование

```tsx
import { Order } from '@/components/ui';

<Order
  type="Default"
  orderNumber="Заказ 012345674"
  orderInternalNumber="№4009863758"
  cost="7 754.90 ₽"
  companyName="ООО «Добронравов групп»"
  companyAddress="Сызрань, Самарская область, ул. Свердлова, дом 322, стр. 2А"
  showProductTypes={true}
  productTypes={[
    {
      id: '1',
      name: 'Охлаждённые по графику',
      cost: '535.00 ₽',
      status: 'Отменен',
      date: '30 декабря 2021',
    }
  ]}
/>
```

## Props

| Prop | Тип | Описание | По умолчанию |
|------|-----|----------|-------------|
| `type` | `'Default' \| 'Hover' \| 'Disabled'` | Состояние карточки | `'Default'` |
| `orderNumber` | `string` | Номер заказа | - |
| `orderInternalNumber` | `string` | Внутренний номер заказа | - |
| `cost` | `string` | Стоимость заказа | - |
| `companyName` | `string` | Название компании | - |
| `companyAddress` | `string` | Адрес компании | - |
| `showProductTypes` | `boolean` | Показывать типы продуктов | `false` |
| `productTypes` | `ProductType[]` | Массив типов продуктов | `[]` |
| `showSwap` | `boolean` | Показывать иконки свапа | `false` |
| `className` | `string` | Дополнительные CSS классы | - |

## ProductType

```tsx
interface ProductType {
  id: string;
  name: string;
  cost: string;
  status: 'Новый' | 'Отменен';
  date: string;
  showSwap?: boolean;
}
```

## Состояния

### Default
- Белый фон
- Полная непрозрачность
- Все интерактивные элементы активны

### Hover
- Светло-серый фон (#f6f7f7)
- Полная непрозрачность
- Все интерактивные элементы активны

### Disabled
- Белый фон
- Непрозрачность 0.6
- Серый текст для неактивных элементов

## Особенности

- Использует Material-UI (MUI) как основу
- Следует дизайн-системе проекта
- Поддерживает различные состояния
- Адаптивен для разных размеров контента
- Включает в себя компонент StatusBadge для отображения статусов
