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

const SuccessIcon = styled('div')({
  fontSize: '64px',
  color: colors.green[600],
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

const Description = styled('p')({
  fontSize: typography.fontSize.base.size,
  fontWeight: 400,
  color: colors.neutral[500],
  margin: 0,
  lineHeight: '20px',
  maxWidth: '100%',
});

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[3],
  width: '100%',
});

const CodeDisplay = styled('div')({
  padding: spacing[4],
  backgroundColor: colors.neutral[100],
  borderRadius: borderRadius.md,
  border: `1px solid ${colors.neutral[200]}`,
  display: 'flex',
  justifyContent: 'center',
  gap: spacing[2],
  fontSize: typography.fontSize.lg.size,
  fontWeight: 600,
  color: colors.neutral[900],
  letterSpacing: '8px',
  fontFamily: 'monospace',
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

export interface SuccessScreenProps {
  phone: string;
  otpCode: string;
  isLoading?: boolean;
  onContinue?: () => void;
  onBack?: () => void;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const SuccessScreen: React.FC<SuccessScreenProps> = ({
  phone,
  otpCode,
  isLoading = false,
  onContinue,
  onBack,
}) => {
  return (
    <Container>
      <SuccessIcon>✓</SuccessIcon>

      {/* Header */}
      <Header>
        <Title>Вход выполнен</Title>
        <Description>
          Вы успешно вошли в систему. Добро пожаловать в MTGAGRO.PRO!
        </Description>
      </Header>

      {/* Code Display */}
      <Content>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: typography.fontSize.sm.size, color: colors.neutral[500], margin: `0 0 ${spacing[2]} 0` }}>
            Введённый код:
          </p>
          <CodeDisplay>
            {otpCode.split('').join(' ')}
          </CodeDisplay>
        </div>
      </Content>

      {/* Buttons */}
      <ButtonContainer>
        <MainButtons
          type="Primary"
          size="48"
          fullWidth
          onClick={onContinue}
          disabled={isLoading}
        >
          {isLoading ? 'Загрузка...' : 'Перейти на главную'}
        </MainButtons>

        {onBack && (
          <LinkButtons
            type="Secondary"
            size="14"
            icon={true}
            leftRight={false}
            onClick={onBack}
          >
            ← Вернуться к входу
          </LinkButtons>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default SuccessScreen;
