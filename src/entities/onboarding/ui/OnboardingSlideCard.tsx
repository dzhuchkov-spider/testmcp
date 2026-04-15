import { Box, Stack, Typography, styled } from "@mui/material";
import type { OnboardingSlide } from "../model/types";
import { colors, typography, borderRadius } from "@/shared/config/theme";

interface OnboardingSlideCardProps {
  slide: OnboardingSlide;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

/**
 * CardContainer - основной контейнер карточки
 * Использует flexbox и адаптивную ширину 424px
 */
const CardContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  maxWidth: '424px',
  position: 'relative',
  alignItems: 'center',
  flex: 1,
}));

/**
 * ImageContainer - контейнер для изображения
 * Адаптивный размер с flexbox
 */
const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '248px',
  borderRadius: borderRadius.lg,
  backgroundColor: colors.neutral[100],
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
 * PlaceholderContainer - контейнер для заглушки изображения
 */
const PlaceholderContainer = styled(Box)(({ theme }) => ({
  width: '200px',
  height: '120px',
  borderRadius: '50%',
  backgroundColor: colors.neutral[400],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

/**
 * ContentContainer - контейнер для текстового контента
 */
const ContentContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(3, 0),
}));

/**
 * TitleTypography - стилизованный заголовок
 */
const TitleTypography = styled(Typography)(({ theme }) => ({
  fontFamily: typography.fontFamily.base.stack,
  fontWeight: typography.fontWeight.semibold,
  fontSize: '28px',
  lineHeight: '36px',
  letterSpacing: '-0.28px',
  color: colors.neutral[900],
}));

/**
 * DescriptionTypography - стилизованный текст описания
 */
const DescriptionTypography = styled(Typography)(({ theme }) => ({
  fontFamily: typography.fontFamily.base.stack,
  fontWeight: typography.fontWeight.normal,
  fontSize: '16px',
  lineHeight: '20px',
  letterSpacing: '-0.24px',
  color: colors.neutral[500],
}));

// ============================================================================
// COMPONENT
// ============================================================================

/**
 * Карточка одного слайда онбординга
 * Отображает заголовок, описание и визуалку слайда
 * Использует flexbox и адаптивную ширину 424px
 */
export const OnboardingSlideCard = ({ slide }: OnboardingSlideCardProps) => {
  return (
    <CardContainer>
      {/* Изображение слайда */}
      <ImageContainer>
        {slide.imageUrl ? (
          <Box
            component="img"
            src={slide.imageUrl}
            alt={slide.title}
          />
        ) : (
          <PlaceholderContainer>
            <Typography sx={{ color: colors.neutral[600], fontWeight: 600 }}>
              Иллюстрация
            </Typography>
          </PlaceholderContainer>
        )}
      </ImageContainer>

      {/* Текстовый контент */}
      <ContentContainer>
        <TitleTypography>
          {slide.title}
        </TitleTypography>
        <DescriptionTypography>
          {slide.description}
        </DescriptionTypography>
      </ContentContainer>
    </CardContainer>
  );
};
