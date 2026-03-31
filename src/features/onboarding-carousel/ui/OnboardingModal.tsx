/**
 * OnboardingModal Component
 *
 * Модальное окно онбординга с слайдом, pagination точками и кнопками действий
 * Синхронизирован с Design Library Figma: Desktop / Onboarding 1
 * 
 * Структура:
 * - Заголовок слайда
 * - Изображение слайда
 * - Pagination points (dots)
 * - Описание
 * - Кнопки действия (Login / Register)
 */

import { forwardRef, useMemo } from 'react';
import { Box, Stack, styled } from '@mui/material';
import { MainButtons } from '@/components/ui';
import { Heading3, Body2 } from '@/shared/ui/Typography';
import type { OnboardingSlide } from '@/entities/onboarding';

export interface OnboardingModalProps {
  /** Текущий слайд данные */
  slide: OnboardingSlide;
  /** Индекс текущего слайда */
  activeIndex: number;
  /** Общее количество слайдов */
  total: number;
  /** Callback при клике на кнопку "Вход" */
  onLogin?: () => void;
  /** Callback при клике на кнопку "Регистрация" */
  onRegister?: () => void;
  /** Callback при выборе точки pagination */
  onSlideSelect?: (index: number) => void;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

/**
 * Container - основной контейнер модали
 * Используется для обеспечения правильного layout
 */
const ModalContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '424px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: (theme.shape.borderRadius as number) * 2, // 12px for modal
  padding: theme.spacing(3), // 24px
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

/**
 * ImageContainer - контейнер для изображения слайда
 * С паттерном градиента для образного фона
 */
const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '248px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[100],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

/**
 * PaginationContainer - контейнер для точек pagination
 */
const PaginationContainer = styled(Stack)(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  height: '8px',
}));

/**
 * PaginationDot - отдельная точка pagination
 */
const PaginationDot = styled(Box)<{ active?: boolean }>(
  ({ theme, active }) => ({
    width: '8px',
    height: '8px',
    borderRadius: active ? '3px' : '2px',
    backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[300],
    cursor: 'pointer',
    transition: 'all 200ms ease-in-out',
    '&:hover': {
      backgroundColor: active ? theme.palette.primary.main : theme.palette.grey[400],
    },
  })
);

/**
 * ContentContainer - контейнер для текста слайда
 */
const ContentContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
  textAlign: 'center',
  alignItems: 'center',
}));

/**
 * ActionsContainer - контейнер для кнопок действя
 */
const ActionsContainer = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

/**
 * StyledHeading3 - кастомизированный заголовок
 */
const StyledHeading3 = styled(Heading3)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: '32px',
  color: theme.palette.text.primary,
}));

/**
 * StyledBody2 - кастомизированный текст тела
 */
const StyledBody2 = styled(Body2)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  color: theme.palette.text.secondary,
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const OnboardingModal = forwardRef<HTMLDivElement, OnboardingModalProps>(
  (
    {
      slide,
      activeIndex,
      total,
      onLogin,
      onRegister,
      onSlideSelect,
    },
    ref
  ) => {
    // Мемоизируем рендеринг точек pagination для оптимизации
    const paginationDots = useMemo(() => {
      return Array.from({ length: total }).map((_, index) => (
        <PaginationDot
          key={index}
          active={index === activeIndex}
          onClick={() => onSlideSelect?.(index)}
          role="button"
          tabIndex={0}
          aria-label={`Слайд ${index + 1}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSlideSelect?.(index);
            }
          }}
        />
      ));
    }, [total, activeIndex, onSlideSelect]);

    return (
      <ModalContainer ref={ref}>
        {/* Image Slider */}
        <ImageContainer>
          {slide.imageUrl ? (
            <Box
              component="img"
              src={slide.imageUrl}
              alt={slide.title || `Слайд ${activeIndex + 1}`}
            />
          ) : (
            <Box sx={{ color: 'text.secondary', fontWeight: 500 }}>
              {slide.title || 'Иллюстрация'}
            </Box>
          )}
        </ImageContainer>

        {/* Pagination Dots */}
        <PaginationContainer role="tablist" aria-label="Слайды">
          {paginationDots}
        </PaginationContainer>

        {/* Content */}
        <ContentContainer>
          {/* Title */}
          {slide.title && <StyledHeading3>{slide.title}</StyledHeading3>}

          {/* Description */}
          {slide.description && <StyledBody2>{slide.description}</StyledBody2>}
        </ContentContainer>

        {/* Actions */}
        <ActionsContainer>
          {/* Login Button */}
          <MainButtons
            type="Primary"
            size="56"
            fullWidth
            onClick={onLogin}
          >
            Вход
          </MainButtons>

          {/* Register Button */}
          <MainButtons
            type="Secondary"
            size="56"
            fullWidth
            onClick={onRegister}
          >
            Регистрация
          </MainButtons>
        </ActionsContainer>
      </ModalContainer>
    );
  }
);

OnboardingModal.displayName = 'OnboardingModal';
