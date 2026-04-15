/**
 * Onboarding Page
 *
 * Экран онбординга: Desktop / Onboarding 1 и далее
 * Синхронизирован с Design Library Figma
 * https://www.figma.com/design/df5Uto6GLK2KCwCy5qHzP2/?node-id=26613-52648
 */

import { useCallback } from 'react';
import { Box, styled } from '@mui/material';
import { OnboardingModal, useOnboardingCarousel } from '@/features/onboarding-carousel';
import { AuthFlowContainer } from '@/features/auth-flow';

// ============================================================================
// CONSTANTS
// ============================================================================

/** Logo from local assets */
const LOGO_SRC = '/src/assets/icons/MTG logo white.svg';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

/**
 * PageWrapper - основной контейнер страницы
 * Красный фон, полный экран с flexbox выравниванием
 */
const PageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  boxSizing: 'border-box',
}));

/**
 * ContentContainer - контейнер для всего контента
 * Использует flexbox для центрирования и адаптивности
 */
const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(8),
  width: '100%',
  maxWidth: '424px',
  flex: 1,
}));

/**
 * LogoContainer - контейнер логотипа
 */
const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '274px',
}));

// ============================================================================
// COMPONENT
// ============================================================================

export interface OnboardingPageProps {
  /**
   * Callback при клике на кнопку "Вход"
   * Переводит пользователя на экран авторизации
   */
  onStartAuth?: () => void;
  /** Callback при успешной авторизации */
  onLoginSuccess?: () => void;
  /** Callback при регистрации */
  onRegisterClick?: () => void;
}

export const OnboardingPage = ({
  onStartAuth,
  onLoginSuccess,
  onRegisterClick,
}: OnboardingPageProps) => {
  const { activeSlide, index, total, setSlideIndex } = useOnboardingCarousel();

  // Обработчик для кнопки "Вход" - переход к экрану авторизации
  const handleLoginClick = useCallback(() => {
    console.log('User clicked "Вход" button on onboarding');
    onStartAuth?.();
  }, [onStartAuth]);

  const handleRegister = useCallback(() => {
    console.log('User clicked "Регистрация" button');
    onRegisterClick?.();
  }, [onRegisterClick]);

  const handleSlideSelect = useCallback((slideIndex: number) => {
    setSlideIndex(slideIndex);
  }, [setSlideIndex]);

  return (
    <PageWrapper>
      <ContentContainer>
        {/* Logo */}
        <LogoContainer>
          <Box
            component="img"
            src={LOGO_SRC}
            alt="MTGAgro.PRO"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </LogoContainer>

        {/* Onboarding Modal */}
        <OnboardingModal
          slide={activeSlide}
          activeIndex={index}
          total={total}
          onLogin={handleLoginClick}
          onRegister={handleRegister}
          onSlideSelect={handleSlideSelect}
        />
      </ContentContainer>
    </PageWrapper>
  );
};
