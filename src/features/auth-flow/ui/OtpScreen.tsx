import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { colors, spacing, borderRadius, typography, shadows } from '@/shared/config/theme';
import { ActionButtons, MainButtons, LinkButtons } from '@/components/ui';
import { OtpInput } from '@/shared/ui/inputs';

// ============================================================================
// STYLES
// ============================================================================

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[6],
  width: '100%',
});

const Header = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[2],
  alignItems: 'flex-start',
  width: '100%',
});

const Title = styled('h1')({
  fontSize: typography.styles.h1.fontSize,
  fontWeight: 600,
  color: colors.neutral[900],
  margin: 0,
  lineHeight: '36px',
  letterSpacing: '-1px',
});

const Description = styled('p')({
  fontSize: typography.fontSize.base.size,
  fontWeight: 400,
  color: colors.neutral[500],
  margin: 0,
  lineHeight: '20px',
  maxWidth: '100%',
  
  '& strong': {
    color: colors.red[600],
    fontWeight: 500,
  },
});

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[4],
  width: '100%',
});

const TimerText = styled('p')({
  fontSize: typography.fontSize.sm.size,
  color: colors.neutral[500],
  textAlign: 'center',
  margin: 0,
});

const ResendLink = styled('button')({
  backgroundColor: 'transparent',
  border: 'none',
  color: colors.red[600],
  fontSize: typography.fontSize.sm.size,
  fontWeight: 600,
  cursor: 'pointer',
  padding: 0,
  textDecoration: 'none',
  transition: 'color 0.2s ease-in-out',

  '&:hover': {
    color: colors.red[700],
    textDecoration: 'underline',
  },

  '&:disabled': {
    color: colors.red[100],
    cursor: 'not-allowed',
  },
});

const ButtonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[3],
  width: '100%',
});

// ============================================================================
// TYPES
// ============================================================================

export interface OtpScreenProps {
  phone: string;
  otpCode: string;
  isLoading: boolean;
  error: string | null;
  otpTimer: number;
  onCodeChange: (code: string) => void;
  onSubmit: (code: string) => void;
  onResend?: () => void;
  onBack?: () => void;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const OtpScreen: React.FC<OtpScreenProps> = ({
  phone,
  otpCode,
  isLoading,
  error,
  otpTimer,
  onCodeChange,
  onSubmit,
  onResend,
  onBack,
}) => {
  const [localTimer, setLocalTimer] = useState(otpTimer);

  // Таймер для повторной отправки OTP
  useEffect(() => {
    setLocalTimer(otpTimer);
  }, [otpTimer]);

  useEffect(() => {
    if (localTimer <= 0) return;

    const timer = setInterval(() => {
      setLocalTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [localTimer]);

  const handleResend = () => {
    setLocalTimer(32); // Сбрасываем таймер
    onResend?.();
  };

  const handleSubmit = () => {
    if (otpCode.length === 4) {
      onSubmit(otpCode);
    }
  };

  const isResendDisabled = localTimer > 0;
  const isSubmitDisabled = otpCode.length !== 4 || isLoading;

  return (
    <Container>
      {/* Header */}
      <Header>
        <Title>Подтвердите вход</Title>
        <Description>
          Мы позвоним на номер <strong>{phone}</strong>. Введите последние 4 цифры входящего номера. Отвечать на звонок не нужно.
        </Description>
      </Header>

      {/* OTP Input */}
      <Content>
        <OtpInput
          value={otpCode}
          onChange={onCodeChange}
          onComplete={handleSubmit}
          disabled={isLoading}
          error={!!error}
          errorMessage={error || undefined}
          helpText={isResendDisabled ? `Повторный звонок будет доступен через ${localTimer} секунды` : undefined}
          autoFocus
        />
      </Content>

      {/* Buttons */}
      <ButtonContainer>
        <LinkButtons
          type="Primary"
          size="16"
          onClick={handleResend}
          disabled={isResendDisabled}
        >
          Повторить звонок
        </LinkButtons>
        
        <MainButtons
          type="Primary"
          size="48"
          fullWidth
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          {isLoading ? 'Проверка...' : 'Войти'}
        </MainButtons>

        {onBack && (
          <LinkButtons
            type="Secondary"
            size="14"
            icon={true}
            leftRight={false}
            onClick={onBack}
          >
            ← Назад
          </LinkButtons>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default OtpScreen;
