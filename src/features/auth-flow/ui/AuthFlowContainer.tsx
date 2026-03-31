import React, { useCallback } from 'react';
import { styled } from '@mui/material/styles';
import { colors, spacing, borderRadius, shadows } from '@/shared/config/theme';
import { useAuthFlow } from '../model/useAuthFlow';
import { LoginModal, OtpScreen, SuccessScreen, ErrorScreen } from './index';

// ============================================================================
// STYLES
// ============================================================================

const ModalOverlay = styled('div')({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1300,
  padding: spacing[4],
});

const ModalContent = styled('div')({
  backgroundColor: colors.neutral[0],
  borderRadius: borderRadius.lg,
  padding: spacing[6],
  maxWidth: '480px',
  width: '100%',
  boxShadow: shadows.lg,
  maxHeight: '90vh',
  overflowY: 'auto',
});

// ============================================================================
// TYPES
// ============================================================================

export interface AuthFlowContainerProps {
  isOpen: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const AuthFlowContainer: React.FC<AuthFlowContainerProps> = ({
  isOpen,
  onClose,
  onSuccess,
  onError,
}) => {
  const authFlow = useAuthFlow();

  const handlePhoneSubmit = useCallback(
    async (phone: string) => {
      await authFlow.goToOtp(phone);
    },
    [authFlow]
  );

  const handleOtpSubmit = useCallback(
    async (code: string) => {
      await authFlow.submitOtp(code);
    },
    [authFlow]
  );

  const handleSuccessContinue = useCallback(() => {
    authFlow.resetFlow();
    onClose?.();
    onSuccess?.();
  }, [authFlow, onClose, onSuccess]);

  const handleRetryFromError = useCallback(() => {
    authFlow.setOtpCode('');
    authFlow.setError(null);
    // Остаёмся на экране OTP, чтобы пользователь мог ввести код заново
  }, [authFlow]);

  const handleErrorChangePhone = useCallback(() => {
    authFlow.goBack();
  }, [authFlow]);

  const handleBack = useCallback(() => {
    authFlow.goBack();
  }, [authFlow]);

  const handleClose = useCallback(() => {
    // На экране PHONE закрытие означает возврат с онбординга
    // На других экранах используется handleBack
    authFlow.resetFlow();
    onClose?.();
  }, [authFlow, onClose]);

  if (!isOpen) return null;

  // Обработка клика на фон (overlay) - закроет только на экране PHONE
  const handleOverlayClick = () => {
    if (authFlow.currentStep === 'PHONE') {
      handleClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {/* PHONE SCREEN */}
        {authFlow.currentStep === 'PHONE' && (
          <LoginModal
            phone={authFlow.phone}
            onPhoneChange={authFlow.setPhone}
            onSubmit={handlePhoneSubmit}
            isLoading={authFlow.isLoading}
            error={authFlow.error}
            onClose={handleClose}
            onSwitchToEmail={undefined} // TODO: добавить функциональность
          />
        )}

        {/* OTP SCREEN */}
        {authFlow.currentStep === 'OTP' && (
          <OtpScreen
            phone={authFlow.phone}
            otpCode={authFlow.otpCode}
            isLoading={authFlow.isLoading}
            error={authFlow.error}
            otpTimer={authFlow.otpTimer}
            onCodeChange={authFlow.setOtpCode}
            onSubmit={handleOtpSubmit}
            onResend={() => {
              // Здесь будет логика повторной отправки OTP
              console.log('Resending OTP to', authFlow.phone);
            }}
            onBack={handleBack}
          />
        )}

        {/* SUCCESS SCREEN */}
        {authFlow.currentStep === 'SUCCESS' && (
          <SuccessScreen
            phone={authFlow.phone}
            otpCode={authFlow.otpCode}
            isLoading={authFlow.isLoading}
            onContinue={handleSuccessContinue}
            onBack={handleBack}
          />
        )}

        {/* ERROR SCREEN */}
        {authFlow.currentStep === 'ERROR' && (
          <ErrorScreen
            phone={authFlow.phone}
            errorMessage={authFlow.error || 'Произошла ошибка. Попробуйте снова.'}
            isLoading={authFlow.isLoading}
            onRetry={handleRetryFromError}
            onChangePhone={handleErrorChangePhone}
            onBack={handleBack}
          />
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default AuthFlowContainer;
