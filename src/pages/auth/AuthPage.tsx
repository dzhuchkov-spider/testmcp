/**
 * Auth Page
 *
 * Экран авторизации: Desktop / Login phone 1/2 Default 1
 * Структура:
 * - Фоновый контейнер
 * - Лого в верхней части
 * - Модальное окно авторизации по центру (AuthFlowContainer)
 */

import { useCallback } from 'react';
import { Box } from '@mui/material';
import { theme } from '@/shared/config/theme';
import { AuthFlowContainer } from '@/features/auth-flow';
import { PageWrapper, LogoContainer, ModalWrapper } from './AuthPage.styles';

const LOGO_SRC = 'https://www.figma.com/api/mcp/asset/965338eb-a067-4118-a67f-816f38866e9d';

export interface AuthPageProps {
  /**
   * Callback для возврата к онбордингу
   * Вызывается при клике на кнопку "назад"
   */
  onBackToOnboarding?: () => void;

  /**
   * Callback при успешной авторизации
   */
  onLoginSuccess?: () => void;

  /**
   * Callback обработки ошибок
   */
  onError?: (error: string) => void;
}

export const AuthPage = ({
  onBackToOnboarding,
  onLoginSuccess,
  onError,
}: AuthPageProps) => {
  const handleClose = useCallback(() => {
    // Закрытие флоу авторизации и возврат к онбордингу
    onBackToOnboarding?.();
  }, [onBackToOnboarding]);

  const handleSuccess = useCallback(() => {
    console.log('Auth success');
    onLoginSuccess?.();
  }, [onLoginSuccess]);

  const handleError = useCallback(
    (error: string) => {
      console.log('Auth error:', error);
      onError?.(error);
    },
    [onError]
  );

  return (
    <PageWrapper>
      <LogoContainer>
        <img
          src={LOGO_SRC}
          alt="MTGAgro Logo"
          style={{
            maxWidth: '273px',
            height: 'auto',
            maxHeight: '28px',
          }}
        />
      </LogoContainer>

      <ModalWrapper>
        <AuthFlowContainer
          isOpen={true}
          onClose={handleClose}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      </ModalWrapper>
    </PageWrapper>
  );
};
