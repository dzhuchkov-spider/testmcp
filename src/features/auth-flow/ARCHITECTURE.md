# Архитектура флоу авторизации

## Обзор

Система авторизации по номеру телефона в приложении MTGAGRO.PRO состоит из:

- **UI компоненты**: LoginModal, PhoneInput, PasswordInput
- **Бизнес логика**: useAuthFlow hook
- **Дизайн токены**: Design tokens из @/shared/config/theme

## Поток данных

```
OnboardingPage
    ↓
[Пользователь нажимает "Вход"]
    ↓
setShowAuthFlow(true)
    ↓
LoginModal рендерится
    ↓
PhoneInput + PasswordInput
    ↓
useAuthFlow hook управляет состоянием
    ↓
handleLogin(phone, password)
    ↓
API запрос (TODO)
    ↓
onLoginSuccess() → Redirect to dashboard
```

## Компоненты

### LoginModal
**Файл**: `src/features/auth-flow/ui/LoginModal.tsx`

```
LoginModal
├── Header
│   ├── Back button
│   ├── Title: "С возвращением в Mtgagro.pro"
│   └── Subtitle: "Заполните поля..."
├── Form
│   ├── PhoneInput
│   ├── PasswordInput
│   └── Forgot password link
├── Error message (conditional)
├── Submit button
└── Switch to email link
```

**Использует токены**:
- `colors.brand.primary` - основной цвет
- `colors.neutral.*` - нейтральные цвета для текста
- `spacing[4]`, `spacing[6]` - отступы
- `typography.styles.h3` - заголовок
- `borderRadius.md` - скругление кнопок
- `componentSizes.button.md` - размер кнопки

### PhoneInput
**Файл**: `src/shared/ui/inputs/PhoneInput.tsx`

Инпут для номера телефона с:
- Фильтрацией только цифр и спец символов
- Цвет-код ошибок (красная граница)
- Focus/Blur стили (синяя граница при фокусе)
- Сообщение об ошибке

**Использует токены**:
- `colors.primary.*` - цвет фокуса
- `colors.error.*` - цвет ошибки
- `spacing[3]` - паддинг
- `typography.fontSize.base` - размер шрифта
- `borderRadius.md` - скругление

### PasswordInput
**Файл**: `src/shared/ui/inputs/PasswordInput.tsx`

Инпут для пароля с:
- Кнопкой показа/скрытия пароля
- Цвет-код ошибок
- Focus/Blur стили

**Использует токены**:
- `colors.primary.*` - цвет фокуса
- `colors.error.*` - цвет ошибки
- `spacing[2]`, `spacing[3]` - паддинги
- `typography.fontSize.base` - размер шрифта

## Состояние и логика

### useAuthFlow hook
**Файл**: `src/features/auth-flow/model/useAuthFlow.ts`

Управляет:
- `phone` - номер телефона
- `password` - пароль
- `isLoading` - статус загрузки
- `error` - сообщение об ошибке

Функции:
- `handleLogin(phone, password)` - основная функция входа
- `handleForgotPassword()` - восстановление пароля
- `resetForm()` - очистка формы

## Интеграция с OnboardingPage

**Файл**: `src/pages/onboarding/ui/OnboardingPage.tsx`

```tsx
// Состояние для переключения между онбордингом и авторизацией
const [showAuthFlow, setShowAuthFlow] = useState(false);

// Conditional rendering
{showAuthFlow ? (
  <LoginModal onClose={() => setShowAuthFlow(false)} />
) : (
  <OnboardingCarousel onNext={() => setShowAuthFlow(true)} />
)}
```

## Дизайн-токены

Все компоненты используют централизованные токены из `@/shared/config/theme`:

### Цвета
```typescript
colors.primary[500]    // Основной синий (#0ea5e9)
colors.primary[600]    // Темный синий (#0284c7)
colors.primary[700]    // Еще темнее (#0369a1)
colors.brand.primary   // Brand цвет
colors.neutral[0]      // Белый
colors.error[500]      // Красный для ошибок
```

### Размеры
```typescript
spacing[2]  // 8px
spacing[3]  // 12px
spacing[4]  // 16px
spacing[5]  // 20px
spacing[6]  // 24px

componentSizes.button.md    // { height: '40px', padding: '10px 20px' }
componentSizes.input.md     // { height: '40px', padding: '10px 12px' }
```

### Типография
```typescript
typography.styles.h3        // Заголовок 3-го уровня
typography.styles.labelBase // Кнопки, лейблы
typography.styles.bodySm    // Маленький текст
typography.fontSize.base    // 16px
```

## Процесс авторизации

### Шаг 1: Пользователь видит Onboarding slides
- Кнопка "Вход"
- Кнопка "Регистрация"

### Шаг 2: Нажимает "Вход"
```
onNext() → setShowAuthFlow(true)
```

### Шаг 3: Видит LoginModal
- Вводит номер телефона
- Вводит пароль
- Может нажать "Забыли пароль?"
- Может переключиться на "Войти по email"

### Шаг 4: Нажимает "Далее"
```
handleSubmit → handleLogin(phone, password)
```

### Шаг 5: Проверка данных
- Валидация номера телефона
- Валидация пароля
- API запрос (TODO)

### Шаг 6: Успех или ошибка
- Успех: `onLoginSuccess()` → Redirect to dashboard
- Ошибка: Показать сообщение об ошибке

## Будущие улучшения

### Authentication
- [ ] Реальный API интеграция
- [ ] Bearer token сохранение
- [ ] Refresh token logic
- [ ] Session expiry handling

### UI/UX
- [ ] Loading skeleton
- [ ] Success animation
- [ ] Two-factor authentication modal
- [ ] Email verification
- [ ] Phone verification

### Validation
- [ ] Phone number formatting (libphonenumber-js)
- [ ] Password strength meter
- [ ] CAPTCHA integration
- [ ] Rate limiting UI

### Features
- [ ] Remember me checkbox
- [ ] Social login (Google, Apple)
- [ ] Biometric login
- [ ] SMS code verification

## Файловая структура

```
src/
├── features/
│   └── auth-flow/
│       ├── model/
│       │   └── useAuthFlow.ts
│       ├── ui/
│       │   └── LoginModal.tsx
│       ├── index.ts
│       └── README.md
├── shared/
│   └── ui/
│       └── inputs/
│           ├── PhoneInput.tsx
│           ├── PasswordInput.tsx
│           └── index.ts
└── pages/
    └── onboarding/
        └── ui/
            └── OnboardingPage.tsx
```

## Связанные файлы

- Design tokens: `src/shared/config/theme/design-tokens.ts`
- Onboarding: `src/pages/onboarding/ui/OnboardingPage.tsx`
- Carousel: `src/features/onboarding-carousel/ui/OnboardingCarousel.tsx`
