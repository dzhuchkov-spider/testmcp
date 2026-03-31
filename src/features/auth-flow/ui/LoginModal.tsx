import React, { useEffect, useRef, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { colors, spacing, borderRadius, typography } from '@/shared/config/theme';
import { ActionButtons, MainButtons } from '@/components/ui';
import { PhoneInput } from '@/shared/ui/inputs/PhoneInput';

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
  width: '100%',
});

const HeaderTop = styled('div')({
  display: 'flex',
  gap: spacing[5],
  alignItems: 'flex-start',
  width: '100%',
});

const Title = styled('h2')({
  fontSize: typography.styles.h3.fontSize,
  fontWeight: 600,
  color: colors.neutral[900],
  margin: 0,
  padding: 0,
});

const Subtitle = styled('p')({
  fontSize: typography.fontSize.sm.size,
  color: colors.neutral[500],
  margin: 0,
  padding: 0,
  lineHeight: '20px',
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[6],
  width: '100%',
});

const InputsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[4],
  width: '100%',
});

const ErrorMessage = styled('div')({
  padding: spacing[3],
  backgroundColor: colors.red[50],
  border: `1px solid ${colors.red[100]}`,
  borderRadius: borderRadius.md,
  fontSize: typography.fontSize.sm.size,
  color: colors.red[600],
});

const ForgotPasswordLink = styled('button')({
  alignSelf: 'flex-start',
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  fontSize: typography.fontSize.sm.size,
  fontWeight: 600,
  color: colors.red[600],
  transition: 'color 200ms ease-in-out',

  '&:hover': {
    color: colors.red[700],
    textDecoration: 'underline',
  },

  '&:active': {
    color: colors.red[800],
  },
});

// ============================================================================
// TYPES
// ============================================================================

export interface LoginModalProps {
  phone?: string;
  onPhoneChange?: (phone: string) => void;
  onSubmit?: (phone: string) => void;
  isLoading?: boolean;
  error?: string | null;
  onClose?: () => void;
  onSwitchToEmail?: () => void;
  onLoginSuccess?: () => void; // Deprecated, use onSubmit instead
}

// ============================================================================
// COMPONENT
// ============================================================================

export const LoginModal: React.FC<LoginModalProps> = ({
  phone = '',
  onPhoneChange,
  onSubmit,
  isLoading = false,
  error = null,
  onClose,
  onSwitchToEmail,
  onLoginSuccess,
}) => {
  const phoneInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    phoneInputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!phone.trim()) {
      return;
    }

    if (onSubmit) {
      await onSubmit(phone);
    } else if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  const handleButtonClick = async () => {
    if (!phone.trim()) {
      return;
    }

    if (onSubmit) {
      await onSubmit(phone);
    } else if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  const isSubmitDisabled = !phone.trim() || isLoading;

  return (
    <Container>
      {/* Header */}
      <Header>
        <HeaderTop>
          {onClose && (
            <ActionButtons
              type="Arrow Left"
              size="40"
              onClick={onClose}
            />
          )}
          <Title>Вход в аккаунт</Title>
        </HeaderTop>
        <Subtitle>
          Введите номер телефона, связанный с вашим аккаунтом. Мы отправим вам код подтверждения по звонку.
        </Subtitle>
      </Header>

      {/* Form */}
      <Form onSubmit={handleSubmit}>
        {/* Phone Input */}
        <InputsContainer>
          <PhoneInput
            ref={phoneInputRef}
            value={phone}
            onChange={onPhoneChange || (() => {})}
            placeholder="Введите номер телефона"
            disabled={isLoading}
            error={!!error}
          />
        </InputsContainer>

        {/* Error Message */}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {/* Forgot Password Link */}
        <ForgotPasswordLink
          type="button"
          onClick={onSwitchToEmail}
          disabled={isLoading}
        >
          Вход по электронной почте
        </ForgotPasswordLink>

        {/* Submit Button */}
        <MainButtons
          type="Primary"
          size="48"
          fullWidth
          disabled={isSubmitDisabled}
          onClick={handleButtonClick}
        >
          {isLoading ? 'Отправка кода...' : 'Далее'}
        </MainButtons>
      </Form>
    </Container>
  );
};

export default LoginModal;
