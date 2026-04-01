/**
 * Onboarding Page
 *
 * Экран онбординга: Desktop / Onboarding 1 и далее
 * Синхронизирован с Design Library Figma
 * https://www.figma.com/design/df5Uto6GLK2KCwCy5qHzP2/?node-id=26613-52648
 */

import { useEffect, useState, useCallback } from 'react';
import { Box, styled } from '@mui/material';
import { OnboardingModal, useOnboardingCarousel } from '@/features/onboarding-carousel';
import { AuthFlowContainer } from '@/features/auth-flow';

// ============================================================================
// CONSTANTS
// ============================================================================

/** Логотип из Figma Design Library */
const LOGO_SRC = 'https://www.figma.com/api/mcp/asset/965338eb-a067-4118-a67f-816f38866e9d';
const LOGO_WIDTH = 273.611572265625;
const LOGO_HEIGHT = 28;

/** Размеры фрейма из Figma */
const FRAME_WIDTH = 1512;
const FRAME_HEIGHT = 982;

/**
 * Расчёт масштаба для адаптивности
 * Масштабирует контент в зависимости от размера окна браузера
 */
const calculateViewportScale = () => {
  const horizontalScale = window.innerWidth / FRAME_WIDTH;
  const verticalScale = window.innerHeight / FRAME_HEIGHT;
  return Math.min(1, horizontalScale, verticalScale);
};

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

/**
 * PageWrapper - основной контейнер страницы
 * Красный фон, полный экран
 */
const PageWrapper = styled(Box)(({ theme }) => ({
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: theme.palette.primary.main, // Красный фон из theme
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

/**
 * FrameContainer - контейнер фрейма с масштабированием
 * Пропорционально масштабируется в зависимости от размера окна
 */
const FrameContainer = styled(Box)({
  position: 'relative',
  width: FRAME_WIDTH,
  height: FRAME_HEIGHT,
  transformOrigin: 'top left',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

/**
 * LogoContainer - контейнер логотипа в верхней части
 */
const LogoContainer = styled(Box)({
  position: 'absolute',
  top: 64,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

/**
 * ModalWrapper - контейнер модального окна по центру
 */
const ModalWrapper = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

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
  const [scale, setScale] = useState<number>(1);

  // Пересчёт масштаба при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      setScale(calculateViewportScale());
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <FrameContainer
        sx={{
          // Масштабирование при необходимости
          ...(scale < 1 && {
            width: FRAME_WIDTH * scale,
            height: FRAME_HEIGHT * scale,
            '& > *': {
              transform: `scale(${1 / scale})`,
              transformOrigin: 'top left',
            },
          }),
        }}
      >
        {/* Logo */}
        <LogoContainer>
          <Box
            component="img"
            src={LOGO_SRC}
            alt="MTGAgro.PRO"
            sx={{
              width: LOGO_WIDTH,
              height: LOGO_HEIGHT,
              objectFit: 'contain',
            }}
          />
        </LogoContainer>

        {/* Onboarding Modal */}
        <ModalWrapper>
          <OnboardingModal
            slide={activeSlide}
            activeIndex={index}
            total={total}
            onLogin={handleLoginClick}
            onRegister={handleRegister}
            onSlideSelect={handleSlideSelect}
          />
        </ModalWrapper>
      </FrameContainer>
    </PageWrapper>
  );
};
