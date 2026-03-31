import React from 'react';
import { styled } from '@mui/material/styles';
import { Button as MuiButton } from '@mui/material';
import { colors, spacing, borderRadius, typography } from '@/shared/config/theme';
// Иконки будут добавлены позже

// ============================================================================
// STYLES
// ============================================================================

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[6],
  width: '100%',
  alignItems: 'center',
});

const ErrorIconStyled = styled('div')({
  fontSize: '64px',
  color: colors.red[600],
  marginBottom: spacing[4],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '64px',
  height: '64px',
});

const Header = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[2],
  alignItems: 'center',
  width: '100%',
  textAlign: 'center',
});

const Title = styled('h1')({
  fontSize: typography.styles.h1.fontSize,
  fontWeight: 600,
  color: colors.neutral[900],
  margin: 0,
  lineHeight: '36px',
  letterSpacing: '-1px',
});

const ErrorMessage = styled('p')({
  fontSize: typography.fontSize.base.size,
  fontWeight: 400,
  color: colors.red[600],
  margin: 0,
  lineHeight: '20px',
  maxWidth: '100%',
  padding: `${spacing[3]} ${spacing[4]}`,
  backgroundColor: colors.red[50],
  borderRadius: borderRadius.md,
  border: `1px solid ${colors.red[100]}`,
});

const Description = styled('p')({
  fontSize: typography.fontSize.sm.size,
  fontWeight: 400,
  color: colors.neutral[500],
  margin: 0,
  lineHeight: '20px',
  maxWidth: '100%',
});

const ButtonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[3],
  width: '100%',
});

const RetryButton = styled(MuiButton)({
  backgroundColor: colors.red[600],
  color: colors.neutral[0],
  padding: `${spacing[4]} ${spacing[5]}`,
  borderRadius: borderRadius.md,
  fontSize: typography.fontSize.base.size,
  fontWeight: 600,
  textTransform: 'none',
  width: '100%',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: colors.red[700],
  },

  '&:disabled': {
    backgroundColor: colors.red[100],
    color: colors.neutral[0],
    cursor: 'not-allowed',
  },
});

const BackButton = styled('button')({
  backgroundColor: 'transparent',
  border: 'none',
  color: colors.neutral[500],
  fontSize: typography.fontSize.sm.size,
  cursor: 'pointer',
  padding: spacing[2],
  marginTop: spacing[2],
  transition: 'color 0.2s ease-in-out',

  '&:hover': {
    color: colors.neutral[900],
  },
});

const SecondaryButton = styled('button')({
  backgroundColor: 'transparent',
  border: `1px solid ${colors.neutral[200]}`,
  color: colors.neutral[600],
  padding: `${spacing[3]} ${spacing[4]}`,
  borderRadius: borderRadius.md,
  fontSize: typography.fontSize.base.size,
  fontWeight: 600,
  cursor: 'pointer',
  width: '100%',
  textTransform: 'none',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: colors.neutral[100],
    borderColor: colors.neutral[300],
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
});

// ============================================================================
// TYPES
// ============================================================================

export interface ErrorScreenProps {
  phone: string;
  errorMessage?: string;
  isLoading?: boolean;
  onRetry?: () => void;
  onChangePhone?: () => void;
  onBack?: () => void;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const ErrorScreen: React.FC<ErrorScreenProps> = ({
  phone,
  errorMessage = 'Неверный код подтверждения. Попробуйте снова.',
  isLoading = false,
  onRetry,
  onChangePhone,
  onBack,
}) => {
  return (
    <Container>
      <ErrorIconStyled>⚠️</ErrorIconStyled>

      {/* Header */}
      <Header>
        <Title>Ошибка ввода</Title>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Header>

      {/* Additional Info */}
      <Description>
        Если проблема повторяется, попробуйте ввести номер заново или свяжитесь с поддержкой.
      </Description>

      {/* Buttons */}
      <ButtonContainer>
        <RetryButton
          onClick={onRetry}
          disabled={isLoading}
          variant="contained"
        >
          {isLoading ? 'Загрузка...' : 'Попробовать снова'}
        </RetryButton>

        {onChangePhone && (
          <SecondaryButton
            onClick={onChangePhone}
            disabled={isLoading}
            type="button"
          >
            Использовать другой номер
          </SecondaryButton>
        )}

        {onBack && (
          <BackButton onClick={onBack} type="button">
            ← Назад
          </BackButton>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default ErrorScreen;
