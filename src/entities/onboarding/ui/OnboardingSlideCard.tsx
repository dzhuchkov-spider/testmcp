import { Box, Stack, Typography } from "@mui/material";
import type { OnboardingSlide } from "../model/types";

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
          borderRadius: "16px",
          bgcolor: "#F8F9F9",
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
              bgcolor: "#D1D3D6",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Typography sx={{ color: "#757C85", fontWeight: 600 }}>
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
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 28,
            lineHeight: "36px",
            letterSpacing: "-0.28px",
            color: "#192434",
          }}
        >
          {slide.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "20px",
            letterSpacing: "-0.24px",
            color: "#A3A7AE",
          }}
        >
          {slide.description}
        </Typography>
      </Stack>
    </Stack>
  );
};
