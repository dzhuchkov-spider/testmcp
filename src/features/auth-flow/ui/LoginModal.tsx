import React, { useEffect, useRef, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';
import { colors, spacing, borderRadius, typography } from '@/shared/config/theme';
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

const BackButton = styled('button')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  padding: 0,
  backgroundColor: colors.neutral[100],
  border: `1px solid ${colors.neutral[200]}`,
  borderRadius: borderRadius.md,
  cursor: 'pointer',
  color: colors.neutral[600],
  fontSize: '20px',
  transition: 'all 200ms ease-in-out',
  flexShrink: 0,

  '&:hover': {
    backgroundColor: colors.neutral[200],
  },

  '&:active': {
    backgroundColor: colors.neutral[300],
  },
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

const ErrorMessage = styled('div')({
  padding: spacing[3],
  backgroundColor: colors.red[50],
  border: `1px solid ${colors.red[100]}`,
  borderRadius: borderRadius.md,
  fontSize: typography.fontSize.sm.size,
  color: colors.red[600],
});

const SubmitButton = styled(MuiButton)({
  width: '100%',
  height: 56,
  padding: spacing[4],
  backgroundColor: colors.red[600],
  color: colors.neutral[0],
  border: 'none',
  borderRadius: borderRadius.md,
  fontSize: typography.fontSize.base.size,
  fontWeight: 600,
  textTransform: 'none',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',

  '&:hover': {
    backgroundColor: colors.red[700],
  },

  '&:disabled': {
    backgroundColor: colors.neutral[300],
    color: colors.neutral[600],
    cursor: 'not-allowed',
  },
});

const SwitchToEmailLink = styled('button')({
  alignSelf: 'flex-start',
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  fontSize: typography.fontSize.sm.size,
  fontWeight: 600,
  color: colors.neutral[600],
  transition: 'color 200ms ease-in-out',

  '&:hover': {
    color: colors.neutral[900],
    textDecoration: 'underline',
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

  const isSubmitDisabled = !phone.trim() || isLoading;

  return (
    <Container>
      {/* Header */}
      <Header>
        <HeaderTop>
          {onClose && (
            <BackButton onClick={onClose} title="Вернуться назад" type="button">
              ←
            </BackButton>
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
        <SubmitButton
          type="submit"
          disabled={isSubmitDisabled}
          variant="contained"
        >
          {isLoading ? 'Отправка кода...' : 'Далее'}
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default LoginModal;
