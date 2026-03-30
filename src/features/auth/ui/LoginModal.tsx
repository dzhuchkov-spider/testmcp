/**
 * LoginModal Component
 * 
 * Экран авторизации по номеру телефона
 * Структура: Header | Inputs | Actions
 * 
 * На основе Figma: Desktop / Login phone 1/2 Default 1
 */

import { forwardRef, useState, useCallback } from 'react';
import {
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalInputs,
  ModalActions,
  BackButton,
  FormWrapper,
} from './LoginModal.styles';
import {
  Heading3,
  Body2,
  Button,
  Input,
  Link,
} from '@/shared/ui';

export interface LoginModalProps {
  /**
   * Callback при закрытии модала
   */
  onClose?: () => void;

  /**
   * Callback при успешной авторизации
   */
  onLoginSuccess?: (phone: string, password: string) => void;

  /**
   * Callback переключения на другой способ входа
   */
  onSwitchMethod?: () => void;
}

export const LoginModal = forwardRef<HTMLDivElement, LoginModalProps>(
  (
    {
      onClose,
      onLoginSuccess,
      onSwitchMethod,
    },
    ref
  ) => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(e.target.value);
      setError(null);
    }, []);

    const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setError(null);
    }, []);

    const handleSubmit = useCallback(
      (e: React.FormEvent) => {
        e.preventDefault();

        // Валидация
        if (!phone.trim()) {
          setError('Введите номер телефона');
          return;
        }
        if (!password.trim()) {
          setError('Введите пароль');
          return;
        }

        setIsLoading(true);
        setError(null);

        // Имитация API запроса
        setTimeout(() => {
          setIsLoading(false);
          onLoginSuccess?.(phone, password);
        }, 1000);
      },
      [phone, password, onLoginSuccess]
    );

    const handleForgotPassword = useCallback(() => {
      // TODO: Навигация на страницу восстановления пароля
      console.log('Redirect to password recovery');
    }, []);

    return (
      <ModalContainer ref={ref}>
        <ModalHeader>
          <BackButton onClick={onClose} aria-label="Вернуться назад">
            ←
          </BackButton>
          <div style={{ flex: 1 }}>
            <Heading3>
              С возвращением в Mtgagro.pro
            </Heading3>
          </div>
        </ModalHeader>

        <ModalContent>
          <Body2 style={{ marginBottom: '24px' }}>
            Заполните поля, чтобы выполнить вход в аккаунт
          </Body2>

          <FormWrapper onSubmit={handleSubmit}>
            <ModalInputs>
              <Input
                type="tel"
                placeholder="Номер телефона"
                value={phone}
                onChange={handlePhoneChange}
                disabled={isLoading}
                hasError={!!error?.includes('телефон')}
                aria-label="Номер телефона"
              />

              <Input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={handlePasswordChange}
                disabled={isLoading}
                hasError={!!error?.includes('пароль')}
                aria-label="Пароль"
              />
            </ModalInputs>

            {error && (
              <div
                style={{
                  padding: '12px 16px',
                  backgroundColor: '#FFDDD6',
                  border: '1px solid #FFCDD1',
                  borderRadius: '6px',
                  marginBottom: '16px',
                  fontSize: '14px',
                  color: '#C41E2B',
                }}
              >
                {error}
              </div>
            )}

            <ModalActions>
              <Link
                size="small"
                underline="hover"
                onClick={handleForgotPassword}
                style={{ marginBottom: '16px', display: 'block' }}
              >
                Забыли пароль?
              </Link>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                isLoading={isLoading}
                disabled={!phone || !password}
              >
                {isLoading ? 'Вход в систему...' : 'Далее'}
              </Button>

              {onSwitchMethod && (
                <Link
                  size="small"
                  underline="hover"
                  onClick={onSwitchMethod}
                  style={{ marginTop: '16px', display: 'block', textAlign: 'center' }}
                >
                  Войти по email
                </Link>
              )}
            </ModalActions>
          </FormWrapper>
        </ModalContent>
      </ModalContainer>
    );
  }
);

LoginModal.displayName = 'LoginModal';
