/**
 * Auth Page
 *
 * Экран авторизации: Desktop / Login phone 1/2 Default 1
 * Структура:
 * - Фоновый контейнер
 * - Лого в верхней части
 * - Модальное окно авторизации по центру
 */

import { useState, useCallback } from 'react';
import { Box } from '@mui/material';
import { theme } from '@/shared/config/theme';
import { LoginModal } from '@/features/auth';
import { PageWrapper, LogoContainer, ModalWrapper } from './AuthPage.styles';

const LOGO_SRC = 'https://www.figma.com/api/mcp/asset/965338eb-a067-4118-a67f-816f38866e9d';

export interface AuthPageProps {
  /**
   * Callback при успешной авторизации
   */
  onLoginSuccess?: (phone: string, password: string) => void;

  /**
   * Callback переключения на другой способ входа
   */
  onSwitchMethod?: () => void;
}

export const AuthPage = ({ onLoginSuccess, onSwitchMethod }: AuthPageProps) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleLoginSuccess = useCallback(
    (phone: string, password: string) => {
      console.log('Login success:', { phone, password });
      onLoginSuccess?.(phone, password);
      // TODO: Redirect to dashboard
    },
    [onLoginSuccess]
  );

  if (!showModal) {
    return (
      <PageWrapper>
        <Box sx={{ textAlign: 'center', color: theme.palette.text.secondary }}>
          Авторизация завершена
        </Box>
      </PageWrapper>
    );
  }

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
        <LoginModal
          onClose={handleClose}
          onLoginSuccess={handleLoginSuccess}
          onSwitchMethod={onSwitchMethod}
        />
      </ModalWrapper>
    </PageWrapper>
  );
};
