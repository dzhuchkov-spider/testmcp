import { OnboardingSlideCard } from "@/entities/onboarding";
import { AppButton, Box, Stack } from "@/shared/ui";
import { styled } from "@mui/material";
import type { OnboardingSlide } from "@/entities/onboarding";
import { colors } from "@/shared/config/theme";
import type { Theme } from "@mui/material/styles";

interface OnboardingCarouselProps {
  slide: OnboardingSlide;
  activeIndex: number;
  total: number;
  onNext: () => void;
  onSkip: () => void;
  onDotSelect: (index: number) => void;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

/**
 * CarouselContainer - основной контейнер карусели
 * Использует flexbox и адаптивную ширину 424px
 */
const CarouselContainer = styled(Box)<{ theme?: Theme }>(({ theme }) => ({
  width: '100%',
  maxWidth: '424px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

/**
 * PaginationContainer - контейнер для точек пагинации
 */
const PaginationContainer = styled(Stack)<{ theme?: Theme }>(({ theme }) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.25),
  height: '8px',
  width: '100%',
}));

/**
 * PaginationDot - отдельная точка пагинации
 */
const PaginationDot = styled(Box)<{ active?: boolean; theme?: Theme }>(
  ({ theme, active }) => ({
    width: '8px',
    height: '8px',
    position: 'relative',
    cursor: 'pointer',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      backgroundColor: active ? colors.brand.primary : colors.neutral[300],
      borderRadius: active ? '3px' : '2px',
      inset: active ? 0 : '12.5%',
    },
  })
);

/**
 * ActionsContainer - контейнер для кнопок действий
 */
const ActionsContainer = styled(Stack)<{ theme?: Theme }>(({ theme }) => ({
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: '424px',
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const OnboardingCarousel = ({
  slide,
  activeIndex,
  total,
  onNext,
  onSkip,
  onDotSelect,
}: OnboardingCarouselProps) => {
  return (
    <CarouselContainer>
      {/* Карточка слайда */}
      <OnboardingSlideCard slide={slide} />

      {/* Точки пагинации */}
      <PaginationContainer>
        {Array.from({ length: total }, (_, index) => (
          <PaginationDot
            key={index}
            active={index === activeIndex}
            onClick={() => onDotSelect(index)}
            role="button"
            tabIndex={0}
            aria-label={`Слайд ${index + 1}`}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === 'Enter') {
                onDotSelect(index);
              }
            }}
          />
        ))}
      </PaginationContainer>

      {/* Кнопки действий */}
      <ActionsContainer>
        <AppButton
          variant="contained"
          onClick={onNext}
          fullWidth
          sx={{
            bgcolor: colors.brand.primary,
            color: colors.neutral[0],
            "&:hover": { bgcolor: colors.red[700] },
            textTransform: "none",
            height: '56px',
          }}
        >
          Вход
        </AppButton>

        <AppButton
          variant="outlined"
          onClick={onSkip}
          fullWidth
          sx={{
            borderColor: colors.brand.primary,
            color: colors.brand.primary,
            bgcolor: colors.neutral[0],
            "&:hover": {
              borderColor: colors.red[700],
              bgcolor: colors.red[50],
            },
            textTransform: "none",
            height: '56px',
          }}
        >
          Регистрация
        </AppButton>
      </ActionsContainer>
    </CarouselContainer>
  );
};
