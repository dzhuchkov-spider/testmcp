import { Box, Stack, Typography } from "@mui/material";
import type { OnboardingSlide } from "../model/types";
import { colors, typography, borderRadius } from "@/shared/config/theme";

interface OnboardingSlideCardProps {
  slide: OnboardingSlide;
}

/**
 * Карточка одного слайда онбординга
 * Отображает заголовок, описание и визуალку слайда
 */
export const OnboardingSlideCard = ({ slide }: OnboardingSlideCardProps) => {
  return (
    <Stack
      spacing={0}
      alignItems="center"
      sx={{ width: 360, position: "relative", height: slide.contentHeight }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 360,
          height: slide.sliderHeight,
          borderRadius: borderRadius.lg,
          bgcolor: colors.neutral[100],
          display: "grid",
          placeItems: "center",
          overflow: "hidden",
        }}
      >
        {slide.imageUrl ? (
          <Box
            component="img"
            src={slide.imageUrl}
            alt={slide.title}
            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        ) : (
          <Box
            sx={{
              width: 248,
              height: 150,
              borderRadius: "50%",
              bgcolor: colors.neutral[400],
              display: "grid",
              placeItems: "center",
            }}
          >
            <Typography sx={{ color: colors.neutral[600], fontWeight: 600 }}>
              Иллюстрация
            </Typography>
          </Box>
        )}
      </Box>

      <Stack
        spacing={2.5}
        sx={{
          position: "absolute",
          top: slide.headingTop,
          left: 0,
          width: 360,
          height: slide.headingHeight,
          textAlign: "center",
          pt: "2px",
          pb: "6px",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: typography.fontFamily.base.stack,
            fontWeight: typography.fontWeight.semibold,
            fontSize: "28px",
            lineHeight: "36px",
            letterSpacing: "-0.28px",
            color: colors.neutral[900],
          }}
        >
          {slide.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: typography.fontFamily.base.stack,
            fontWeight: typography.fontWeight.normal,
            fontSize: "16px",
            lineHeight: "20px",
            letterSpacing: "-0.24px",
            color: colors.neutral[500],
          }}
        >
          {slide.description}
        </Typography>
      </Stack>
    </Stack>
  );
};
