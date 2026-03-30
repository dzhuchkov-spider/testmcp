# Флоу авторизации по номеру телефона

## Структура

```
src/features/auth-flow/
├── index.ts                      # Главный экспорт
├── model/
│   └── useAuthFlow.ts           # Хук для управления состоянием авторизации
└── ui/
    └── LoginModal.tsx           # Модальное окно авторизации

src/shared/ui/inputs/
├── index.ts                      # Экспорт инпутов
├── PhoneInput.tsx               # Инпут для номера телефона
└── PasswordInput.tsx            # Инпут для пароля
```

## Компоненты

### LoginModal
Основной компонент модального окна авторизации.

```tsx
import { LoginModal } from '@/features/auth-flow';

export function MyPage() {
  return (
    <LoginModal
      onClose={() => console.log('Close modal')}
      onLoginSuccess={() => console.log('Logged in!')}
      onSwitchToEmail={() => console.log('Switch to email')}
    />
  );
}
```

**Props:**
- `onClose?: () => void` - Callback при закрытии модального окна
- `onLoginSuccess?: () => void` - Callback при успешном входе
- `onSwitchToEmail?: () => void` - Callback при переключении на email вход

### PhoneInput
Инпут для ввода номера телефона с валидацией.

```tsx
import { PhoneInput } from '@/shared/ui/inputs';

export function LoginForm() {
  const [phone, setPhone] = useState('');

  return (
    <PhoneInput
      value={phone}
      onChange={setPhone}
      placeholder="Телефон"
      error={phoneError}
      errorMessage="Неверный формат телефона"
    />
  );
}
```

**Props:**
- `value: string` - Значение инпута
- `onChange: (value: string) => void` - Callback при изменении
- `placeholder?: string` - Плейсхолдер
- `disabled?: boolean` - Отключить инпут
- `error?: boolean` - Показать стиль ошибки
- `errorMessage?: string` - Сообщение об ошибке

### PasswordInput
Инпут для пароля с кнопкой показа/скрытия пароля.

```tsx
import { PasswordInput } from '@/shared/ui/inputs';

export function LoginForm() {
  const [password, setPassword] = useState('');

  return (
    <PasswordInput
      value={password}
      onChange={setPassword}
      placeholder="Пароль"
    />
  );
}
```

**Props:**
- `value: string` - Значение инпута
- `onChange: (value: string) => void` - Callback при изменении
- `placeholder?: string` - Плейсхолдер
- `disabled?: boolean` - Отключить инпут
- `error?: boolean` - Показать стиль ошибки
- `errorMessage?: string` - Сообщение об ошибке

## Хук useAuthFlow

Хук для управления состоянием авторизации.

```tsx
import { useAuthFlow } from '@/features/auth-flow';

export function LoginForm() {
  const {
    phone,
    password,
    isLoading,
    error,
    setPhone,
    setPassword,
    handleLogin,
    handleForgotPassword,
    resetForm,
  } = useAuthFlow();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleLogin(phone, password);
    }}>
      {/* Inputs */}
    </form>
  );
}
```

**Возвращаемые значения:**
- `phone: string` - Номер телефона
- `password: string` - Пароль
- `isLoading: boolean` - Идет ли загрузка
- `error: string | null` - Сообщение об ошибке
- `setPhone: (phone: string) => void` - Установить номер
- `setPassword: (password: string) => void` - Установить пароль
- `handleLogin: (phone: string, password: string) => void` - Функция входа
- `handleForgotPassword: () => void` - Функция восстановления пароля
- `resetForm: () => void` - Очистить форму

## Интеграция с OnboardingPage

В файле `src/pages/onboarding/ui/OnboardingPage.tsx` уже интегрирована логика:

```tsx
const [showAuthFlow, setShowAuthFlow] = useState(false);

// При клике на "Вход" переключаемся на компонент LoginModal
{showAuthFlow ? (
  <LoginModal
    onClose={() => setShowAuthFlow(false)}
    onLoginSuccess={() => {
      console.log("User logged in successfully");
      // TODO: Redirect to dashboard
    }}
    onSwitchToEmail={() => {
      console.log("Switch to email login");
      // TODO: Implement email login flow
    }}
  />
) : (
  <OnboardingCarousel
    onNext={() => setShowAuthFlow(true)}
    // ...
  />
)}
```

## Использование Design Tokens

Все компоненты используют дизайн-токены из `@/shared/config/theme`:

- **Цвета**: `colors.primary`, `colors.neutral`, `colors.error`, `colors.success`
- **Отступы**: `spacing[2]`, `spacing[3]`, `spacing[4]`, и т.д.
- **Типография**: `typography.styles.h3`, `typography.styles.labelBase`
- **Border Radius**: `borderRadius.md`
- **Shadows**: `shadows.lg`
- **Размеры компонентов**: `componentSizes.button.md`, `componentSizes.input.md`

## Example использования

```tsx
import { useState } from 'react';
import { LoginModal } from '@/features/auth-flow';
import { PhoneInput } from '@/shared/ui/inputs';

export function AuthPage() {
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState('');

  return (
    <div>
      <PhoneInput
        value={phone}
        onChange={setPhone}
        placeholder="Введите номер"
      />

      {showModal && (
        <LoginModal
          onClose={() => setShowModal(false)}
          onLoginSuccess={() => {
            console.log('Login successful!');
            window.location.href = '/dashboard';
          }}
        />
      )}
    </div>
  );
}
```

## TODOs

### useAuthFlow
- [ ] Интегрировать с реальным API
- [ ] Добавить валидацию номера телефона (использовать libphonenumber-js)
- [ ] Сохранять токен в localStorage/sessionStorage
- [ ] Реализовать refresh token logic

### LoginModal  
- [ ] Добавить загрузку при отправке формы
- [ ] Добавить проверку капчи
- [ ] Реализовать двухфакторную авторизацию (если нужна)
- [ ] Добавить восстановление пароля по по номеру

### PhoneInput/PasswordInput
- [ ] Добавить маску для ввода номера телефона (react-input-mask)
- [ ] Реализовать copy-paste для пароля
- [ ] Добавить автодополнение городских кодов

## API Endpoints (TODO)

Требуется реализовать следующие endpoints:

```
POST /api/auth/login-phone
{
  phone: string;
  password: string;
}

Response:
{
  token: string;
  refreshToken: string;
  user: {
    id: string;
    phone: string;
    email?: string;
  }
}

POST /api/auth/forgot-password
{
  phone: string;
}

POST /api/auth/reset-password
{
  token: string;
  newPassword: string;
}
```

## Styling

Все стили используют токены из design tokens и применяются inline через React style prop. Это позволяет:
- Переиспользовать токены из design system
- Избежать конфликтов классов
- Легко кастомизировать компоненты

При необходимости можно добавить CSS Modules или styled-components.
