import { useState, useCallback } from 'react';

export interface AuthFlowState {
  phone: string;
  password: string;
  isLoading: boolean;
  error: string | null;
}

export interface UseAuthFlowReturn extends AuthFlowState {
  setPhone: (phone: string) => void;
  setPassword: (password: string) => void;
  setError: (error: string | null) => void;
  handleLogin: (phone: string, password: string) => Promise<void>;
  handleForgotPassword: () => void;
  resetForm: () => void;
}

/**
 * Хук для управления состоянием авторизации по номеру телефона
 */
export const useAuthFlow = (): UseAuthFlowReturn => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = useCallback(
    async (phoneValue: string, passwordValue: string) => {
      setIsLoading(true);
      setError(null);

      try {
        // Валидация
        if (!phoneValue.trim()) {
          setError('Введите номер телефона');
          return;
        }
        if (!passwordValue.trim()) {
          setError('Введите пароль');
          return;
        }

        // Здесь будет реальный API вызов
        // const response = await loginWithPhone(phoneValue, passwordValue);
        console.log('Login attempt:', { phone: phoneValue, password: passwordValue });

        // Имитация задержки
        await new Promise((resolve) => setTimeout(resolve, 500));

        // TODO: Сохранить токен и перейти на новую страницу
        console.log('Успешно вошли в систему');
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'Ошибка при попытке входа. Попробуйте снова'
        );
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const handleForgotPassword = useCallback(() => {
    // TODO: Перейти на страницу восстановления пароля
    console.log('Redirect to password recovery');
  }, []);

  const resetForm = useCallback(() => {
    setPhone('');
    setPassword('');
    setError(null);
  }, []);

  return {
    phone,
    password,
    isLoading,
    error,
    setPhone,
    setPassword,
    setError,
    handleLogin,
    handleForgotPassword,
    resetForm,
  };
};
