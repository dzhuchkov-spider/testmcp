# Пиксель-перфект Figma Компоненты

## Обзор
Созданы React компоненты на основе Figma дизайн библиотеки с точным соблюдением размеров и позиционирования. Используют Material-UI и TypeScript, следуя существующим паттернам проекта.

## Созданные компоненты

### 1. MenuItem Component
**Расположение**: `src/components/ui/MenuItem/`

**Точные размеры из Figma**:
- Web вариант: 360px × 60px
- Tablet вариант: 60px × 60px
- Border radius: 8px
- Padding: 18px 8px 18px 16px (web), 18px (tablet)
- Gap: 12px (web), 0px (tablet)

**Состояния**:
- Default, Hover, Focused
- Адаптивность: Web, Tablet
- Опциональный бейдж с уведомлением
- Полная TypeScript поддержка

**Props**:
- `variant?: 'web' | 'tablet'`
- `state?: 'Default' | 'Hover' | 'Focused'`
- `iconType?: MenuItemIconType`
- `text?: string`
- `showNotification?: boolean`
- `notificationCount?: number`
- `onClick?: () => void`
- `sx?: object`

### 2. MenuExit Component
**Расположение**: `src/components/ui/MenuExit/`

**Точные размеры из Figma**:
- Общий контейнер: 290px × 660px
- Menu контейнер: 290px с padding 8px
- Border radius: 16px (контейнер), 8px (пункты)
- Gap между пунктами: 4px
- Gap между меню и кнопкой выхода: 16px

**Функции**:
- Полное меню с 7 стандартными пунктами
- Кнопка выхода с иконкой
- Поддержка дополнительных пунктов меню
- Material-UI стилизация

## Точные Design Variables из Figma

### Цвета
```typescript
const COLORS = {
  white: '#ffffff',           // Основной фон
  grayBg: '#f6f7f7',         // Фон при hover/focused
  blackText: '#192434',       // Основной текст
  grayText: '#a3a7ae',        // Текст кнопки выхода
  redBadgeBg: '#f65e70',      // Фон бейджа уведомлений
  whiteBadgeText: '#ffffff',    // Текст в бейдже
  whiteBadgeBorder: '#ffffff',  // Рамка бейджа
}
```

### Отступы (Spacing)
```typescript
const SPACING = {
  2: '2px',   // Для бейджа
  4: '4px',   // Gap в меню
  8: '8px',   // Padding справа, padding контейнера
  12: '12px', // Gap между элементами, padding слева
  14: '14px', // Padding кнопки выхода слева
  16: '16px', // Padding кнопки выхода, gap между меню и выходом
  18: '18px', // Padding сверху/снизу
}
```

### Скругления (Border Radius)
```typescript
const CORNERS = {
  8: '8px',   // Пункты меню
  10: '10px', // Бейдж уведомлений
  16: '16px', // Контейнеры
}
```

### Типографика
```typescript
const TYPOGRAPHY = {
  fontFamily: '"Inter", sans-serif',
  fontSize14: '14px',    // Основной текст
  fontSize11: '11px',    // Текст в бейдже
  fontWeightMedium: 500,   // Основной текст
  fontWeightRegular: 400,  // Кнопка выхода
  lineHeight24: '24px',   // Основной текст
  lineHeight20: '20px',   // Кнопка выхода
  lineHeight16: '16px',   // Текст в бейдже
  letterSpacingNeg022: '-0.22px', // Бейдж
  letterSpacingNeg028: '-0.28px', // Кнопка выхода
}
```

### Иконки Material-UI
Используются аналогичные иконки из @mui/icons-material:
- Profile → Person
- Notification → Notifications  
- Wallet → AccountBalanceWallet
- Address → LocationOn
- Setting → Settings
- Review/Check → Star
- Requests → SupportAgent
- Exit → Logout

## Использование

### Базовый MenuItem
```tsx
import { MenuItem } from '@/components/ui';

<MenuItem
  variant="web"
  iconType="Profile"
  text="Контактные данные"
  onClick={() => console.log('Clicked')}
/>
```

### MenuItem с уведомлением
```tsx
<MenuItem
  variant="web"
  iconType="Notification"
  text="Уведомления"
  showNotification={true}
  notificationCount={5}
  onClick={() => console.log('Notifications')}
/>
```

### Tablet вариант
```tsx
<MenuItem
  variant="tablet"
  iconType="Profile"
  onClick={() => console.log('Tablet menu')}
/>
```

### Полное MenuExit
```tsx
<MenuExit
  onExitClick={() => console.log('Exit')}
  additionalItems={[
    { 
      text: 'Custom Item', 
      iconType: 'Check' 
    },
  ]}
/>
```

## Техническая реализация

### Архитектура
- Material-UI styled компоненты для соблюдения стилей проекта
- TypeScript с полной типизацией
- Forward refs для правильной композиции
- Точные размеры из Figma metadata

### Figma интеграция
- Design переменные извлечены через Figma MCP
- Структура компонентов точно повторяет Figma дизайн
- Все размеры, цвета и типографика сохранены
- Node IDs сохранены для потенциальной синхронизации

### Пиксель-перфект соответствие
- **MenuItem Web**: 360×60px (точно как в Figma)
- **MenuItem Tablet**: 60×60px (точно как в Figma)
- **MenuExit**: 290×660px (точно как в Figma)
- Все отступы, скругления и цвета соответствуют дизайну
- Состояния Hover/Focused реализованы с правильными цветами

## Файлы компонентов
1. `src/components/ui/MenuItem/MenuItem.tsx`
2. `src/components/ui/MenuItem/index.ts`
3. `src/components/ui/MenuExit/MenuExit.tsx`
4. `src/components/ui/MenuExit/index.ts`
5. `src/components/ui/MenuExample.tsx` (пример использования)

Все компоненты готовы к использованию и обеспечивают пиксель-перфект соответствие Figma дизайну.
