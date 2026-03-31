# UI Components

Компоненты созданные на основе Figma дизайна MTGAgro.Pro. Используют MUI + styled components для стилизации.

## 📦 Установка

Все компоненты доступны из `src/components/ui`:

```typescript
import { MainButtons, ActionButtons, LinkButtons, Input } from '@/components/ui';
```

## 🎨 MainButtons

Основные кнопки дизайна из Figma.

### Props

```typescript
interface MainButtonsProps {
  size?: '56' | '52' | '48' | '40';
  type?: 'Primary' | 'Secondary';
  state?: 'Default' | 'Hover' | 'Disable';
  icon?: boolean;
  leftRight?: boolean;
  text?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
}
```

### Примеры использования

```typescript
// Основная кнопка
<MainButtons type="Primary" size="56">
  Войти
</MainButtons>

// Вторичная кнопка с иконками
<MainButtons 
  type="Secondary" 
  size="48" 
  icon={true} 
  leftRight={true}
>
  Далее
</MainButtons>

// Отключенная кнопка
<MainButtons type="Primary" size="40" disabled>
  Отправить
</MainButtons>
```

## 🔘 ActionButtons

Кнопки действий с иконками.

### Props

```typescript
interface ActionButtonsProps {
  size?: '56' | '48' | '40' | '32' | '24';
  type?: 'Favourit' | 'Arrow Right' | 'Arrow Left' | 'Plus' | 'Minus' | 'Trash' | 'Basket' | 'Sent' | 'Swap' | 'Menu' | 'Close' | 'Refresh' | 'В график' | 'В остаток' | 'Выйти' | 'Сменить пароль' | 'Add to basket';
  state?: 'Default' | 'Hover' | 'Active' | 'Disable';
  showCounter?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
```

### Примеры использования

```typescript
// Иконка избранного
<ActionButtons type="Favourit" size="48" state="Active" />

// Стрелка вправо
<ActionButtons type="Arrow Right" size="48" />

// Кнопка добавления в корзину
<ActionButtons type="Add to basket" size="48" />

// Кнопка смены пароля
<ActionButtons type="Сменить пароль" size="40" />
```

## 🔗 LinkButtons

Кнопки-ссылки для навигации.

### Props

```typescript
interface LinkButtonsProps {
  size?: '16' | '14';
  type?: 'Primary' | 'Secondary';
  state?: 'Default' | 'Hover' | 'Disable';
  icon?: boolean;
  leftRight?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
```

### Примеры использования

```typescript
// Основная ссылка
<LinkButtons type="Primary" size="16">
  Подробнее
</LinkButtons>

// Ссылка с иконками
<LinkButtons 
  type="Secondary" 
  size="14" 
  icon={true} 
  leftRight={true}
>
  Перейти
</LinkButtons>
```

## 📝 Input

Поля ввода с различными состояниями.

### Props

```typescript
interface InputProps {
  state?: 'Default' | 'Focused' | 'Valid' | 'Error' | 'Disable';
  hover?: boolean;
  label?: string;
  caption?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  maxLength?: number;
  endAdornment?: React.ReactNode;
}
```

### Примеры использования

```typescript
// Стандартное поле
<Input 
  label="Имя"
  placeholder="Введите ваше имя"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

// Поле с ошибкой
<Input 
  label="Email"
  state="Error"
  caption="Некорректный формат email"
  value={email}
  onChange={handleEmailChange}
/>

// Отключенное поле
<Input 
  label="Телефон"
  state="Disable"
  value="+7 (999) 999-99-99"
  disabled
/>

// Поле с фокусом
<Input 
  label="Пароль"
  type="password"
  state="Focused"
  value={password}
  onChange={handlePasswordChange}
/>
```

## 🎯 Особенности

### ✅ Соответствие Figma дизайну
- Все размеры, цвета и скругления взяты из дизайн-системы
- Поддерживаются все состояния из Figma
- Правильные типографика и отступы

### ✅ Интеграция с MUI
- Использует theme.palette для цветов
- Совместимо с существующими MUI компонентами
- Поддерживает темизацию

### ✅ TypeScript
- Полная типизация всех props
- Автодополнение в IDE
- Типобезопасность

### ✅ Доступность
- Правильные ARIA атрибуты
- Семантическая разметка
- Поддержка клавиатурной навигации

## 🔄 Состояния

Все компоненты поддерживают состояния:

- **Default** - Обычное состояние
- **Hover** - При наведении мыши
- **Active/Focused** - Активное состояние/фокус
- **Disable** - Отключенное состояние
- **Error** - Состояние ошибки (для Input)

## 🎨 Цветовая схема

Компоненты используют цвета из темы MUI:

- **Primary**: `theme.palette.primary.main` (#F4364C)
- **Secondary**: `theme.palette.secondary.main` (#4FC068)
- **Error**: `theme.palette.error.main` (#F4364C)
- **Text**: `theme.palette.text.primary/secondary`
- **Background**: `theme.palette.background.paper`

## 📐 Размеры

### MainButtons
- **56px**: Для основных действий
- **52px**: Средний размер
- **48px**: Стандартный размер
- **40px**: Компактный размер

### ActionButtons
- **56px**: Большие иконки
- **48px**: Стандартные иконки
- **40px**: Маленькие иконки
- **32px**: Очень маленькие
- **24px**: Минимальные

### LinkButtons
- **16px**: Стандартные ссылки
- **14px**: Маленькие ссылки

## 🚀 Миграция

Для замены существующих компонентов:

```typescript
// Было:
<Button variant="contained" size="large">
  Submit
</Button>

// Стало:
<MainButtons type="Primary" size="56">
  Submit
</MainButtons>
```
