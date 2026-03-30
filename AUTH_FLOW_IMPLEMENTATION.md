# Флоу авторизации по номеру телефона - реализация

## ✅ Выполнено

### 1. Компоненты авторизации
Созданы 3 основных компонента с использованием design-tokens:

#### `LoginModal` (`src/features/auth-flow/ui/LoginModal.tsx`)
- Модальное окно авторизации
- Кнопка возврата назад
- Форма с полями: телефон и пароль
- Кнопка "Забыли пароль?"
- Кнопка переключения на email вход
- Обработка ошибок и состояния загрузки
- Использует: `colors`, `spacing`, `typography`, `borderRadius`, `componentSizes`, `shadows`

#### `PhoneInput` (`src/shared/ui/inputs/PhoneInput.tsx`)
- Инпут для номера телефона
- Фильтрация только цифр и спец символов
- Стили для нормального и ошибочного состояний
- Focus/Blur эффекты с синей границей
- Отображение сообщений об ошибке
- Использует: `colors`, `spacing`, `typography`, `borderRadius`

#### `PasswordInput` (`src/shared/ui/inputs/PasswordInput.tsx`)
- Инпут для пароля с кнопкой показа/скрытия
- Стили для нормального и ошибочного состояний
- Focus/Blur эффекты
- Отображение сообщений об ошибке
- Использует: `colors`, `spacing`, `typography`, `borderRadius`

### 2. Бизнес-логика
#### `useAuthFlow` hook (`src/features/auth-flow/model/useAuthFlow.ts`)
- Управление состоянием: phone, password, isLoading, error
- Функции:
  - `handleLogin()` - вход с валидацией
  - `handleForgotPassword()` - навигация на страницу восстановления
  - `resetForm()` - очистка формы
- Базовая валидация
- Готово к интеграции с API

### 3. Интеграция с OnboardingPage
#### `OnboardingPage` (`src/pages/onboarding/ui/OnboardingPage.tsx`)
- Добавлено состояние `showAuthFlow`
- Условный рендеринг: OnboardingCarousel или LoginModal
- При клике на "Вход" переключается на модало авторизации
- Обновлены импорты для использования design-tokens

### 4. Обновление UI компонентов
#### `AppButton` (`src/shared/ui/AppButton.tsx`)
- Использует `componentSizes.button.md` для высоты и паддинга
- Использует `borderRadius.md` для скругления
- Использует `typography.fontFamily.base.stack` для шрифта
- Варианты: contained, outlined, text с соответствующими цветами из токенов

#### `AppTextField` (`src/shared/ui/AppTextField.tsx`)
- Использует `componentSizes.input.md` для размера
- Использует `colors` для фокуса и ошибок
- Использует `typography.fontSize.base` для шрифта
- Использует `borderRadius.md` для скругления

### 5. Документация
- `README.md` - руководство использования компонентов
- `ARCHITECTURE.md` - архитектура и поток данных

## 📁 Созданная struktura

```
src/
├── features/
│   └── auth-flow/
│       ├── model/
│       │   └── useAuthFlow.ts (170 строк)
│       ├── ui/
│       │   └── LoginModal.tsx (200+ строк)
│       ├── index.ts
│       ├── README.md
│       └── ARCHITECTURE.md
├── shared/
│   ├── config/
│   │   └── theme/
│   │       └── design-tokens.ts (используется везде)
│   └── ui/
│       ├── AppButton.tsx (обновлен)
│       ├── AppTextField.tsx (обновлен)
│       └── inputs/
│           ├── PhoneInput.tsx (150+ строк)
│           ├── PasswordInput.tsx (150+ строк)
│           └── index.ts
└── pages/
    └── onboarding/
        └── ui/
            └── OnboardingPage.tsx (обновлен)
```

## 🎨 Использованные design-tokens

### Цвета
- `colors.primary[500]` - основной синий
- `colors.primary[600]` - темный синий для фокуса
- `colors.brand.primary` - brand цвет
- `colors.neutral[0]` - белый фон
- `colors.neutral[300]` - граница инпута
- `colors.neutral[500]` -text secondary
- `colors.neutral[900]` - text primary
- `colors.error[500]` - красный для ошибок

### Размеры
- `spacing[2]` - 8px (малые отступы)
- `spacing[3]` - 12px (стандартный паддинг)
- `spacing[4]` - 16px (большой паддинг)
- `spacing[5]` - 20px
- `spacing[6]` - 24px (большие отступы)
- `spacing[9]` - 36px (высота инпута)

### Округления
- `borderRadius.md` - 6px (для инпутов и кнопок)

### Типография
- `typography.fontFamily.base.stack` - Inter sans-serif
- `typography.fontSize.base` / `fontSize.sm` - размеры и line-height
- `typography.styles.h3` - для заголовков
- `typography.styles.labelBase` - для лейблов и кнопок
- `typography.styles.bodySm` - для подзаголовков

### Компоненты
- `componentSizes.button.md` - высота 40px, паддинг
- `componentSizes.input.md` - высота 40px, паддинг

## 🔄 Процесс авторизации

```
OnboardingPage
     ↓
[Пользователь видит slides + кнопка "Вход"]
     ↓
onNext() → setShowAuthFlow(true)
     ↓
LoginModal рендерится
     ↓
PhoneInput + PasswordInput
     ↓
useAuthFlow hook управляет состоянием
     ↓
[Пользователь вводит данные]
     ↓
onSubmit() → handleLogin(phone, password)
     ↓
Валидация + API запрос (TODO)
     ↓
onLoginSuccess() → Redirect to dashboard (TODO)
```

## 🚀 Быстрый старт

### Использование LoginModal в компонентах

```tsx
import { useState } from 'react';
import { LoginModal } from '@/features/auth-flow';

export function MyPage() {
  const [showAuthFlow, setShowAuthFlow] = useState(false);

  return (
    <>
      <button onClick={() => setShowAuthFlow(true)}>
        Вход
      </button>

      {showAuthFlow && (
        <LoginModal
          onClose={() => setShowAuthFlow(false)}
          onLoginSuccess={() => {
            console.log('Login successful!');
            // Redirect to dashboard
          }}
        />
      )}
    </>
  );
}
```

### Использование PhoneInput в собственных компонентах

```tsx
import { PhoneInput } from '@/shared/ui/inputs';

function MyForm() {
  const [phone, setPhone] = useState('');

  return (
    <PhoneInput
      value={phone}
      onChange={setPhone}
      placeholder="Введите номер"
    />
  );
}
```

## ✨ Особенности

1. **Полная типизация TypeScript** - все компоненты и хуки типизированы
2. **Использование design-tokens** - все стили из централизованной системы
3. **Inline styles** - избегаем конфликтов CSS classes
4. **Переиспользуемость** - компоненты можно использовать в других местах
5. **Готовность к API** - структура позволяет легко подключить реальный API
6. **Доступность** - кнопки и инпуты имеют правильные атрибуты

## 📋 TODOs для завершения

### Функциональность
- [ ] Интегрировать с реальным API для авторизации
- [ ] Добавить сохранение токена в localStorage/sessionStorage
- [ ] Реализовать редирект после успешного входа
- [ ] Добавить страницу восстановления пароля
- [ ] Реализовать email логин

### Улучшения UI/UX
- [ ] Добавить loading spinner/skeleton
- [ ] Добавить success animation
- [ ] Добавить двухфакторную авторизацию (если нужна)
- [ ] Добавить валидацию номера телефона (libphonenumber-js)
- [ ] Добавить маску для ввода номера

### Тестирование
- [ ] Написать unit тесты для компонентов
- [ ] Написать integration тесты для флоу
- [ ] Тестирование на разных разрешениях (responsive)

## 🔗 Ссылки

- **Figma дизайн**: https://www.figma.com/design/df5Uto6GLK2KCwCy5qHzP2/...?node-id=18943-167147
- **Design tokens**: `src/shared/config/theme/design-tokens.ts`
- **Main auth файл**: `src/features/auth-flow/index.ts`
- **Onboarding**: `src/pages/onboarding/ui/OnboardingPage.tsx`

## 📝 Примеры

Смотрите подробные примеры в:
- `src/shared/config/theme/examples.ts` - примеры использования токенов
- `src/features/auth-flow/README.md` - примеры использования компонентов
- `src/features/auth-flow/ARCHITECTURE.md` - архитектурные детали

---

**Статус**: ✅ Готово к использованию
**Версия**: 1.0
**Дата**: 30 марта 2026
