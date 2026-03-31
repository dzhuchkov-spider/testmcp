import React from 'react';
import { styled } from '@mui/material/styles';
import { colors, spacing, borderRadius, typography } from '@/shared/config/theme';
import { MainButtons, ActionButtons, LinkButtons } from '@/components/ui';
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
        <MainButtons
          type="Primary"
          size="48"
          fullWidth
          onClick={onRetry}
          disabled={isLoading}
        >
          {isLoading ? 'Загрузка...' : 'Попробовать снова'}
        </MainButtons>

        {onChangePhone && (
          <LinkButtons
            type="Secondary"
            size="16"
            onClick={onChangePhone}
            disabled={isLoading}
          >
            Использовать другой номер
          </LinkButtons>
        )}

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

export default ErrorScreen;
