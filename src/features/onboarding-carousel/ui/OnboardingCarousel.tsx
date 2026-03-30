import { OnboardingSlideCard } from "@/entities/onboarding";
import { AppButton, Box, Stack } from "@/shared/ui";
import type { OnboardingSlide } from "@/entities/onboarding";
import { colors } from "@/shared/config/theme";

interface OnboardingCarouselProps {
  slide: OnboardingSlide;
  activeIndex: number;
  total: number;
  onNext: () => void;
  onSkip: () => void;
  onDotSelect: (index: number) => void;
}

export const OnboardingCarousel = ({
  slide,
  activeIndex,
  total,
  onNext,
  onSkip,
  onDotSelect,
}: OnboardingCarouselProps) => {
  return (
    <Box sx={{ position: "relative", width: 360, height: slide.modalHeight - 24 }}>
      <OnboardingSlideCard slide={slide} />

      {/* Slider dots (from Figma UI kit) */}
      <Stack alignItems="center" sx={{ position: "absolute", top: slide.dotsTop, left: 0, width: 360, height: 8 }}>
        <Stack direction="row" spacing={1.25} alignItems="center" justifyContent="center">
          {Array.from({ length: total }, (_, index) => {
            const active = index === activeIndex;

            return (
              <Box
                key={index}
                onClick={() => onDotSelect(index)}
                sx={{ width: 8, height: 8, position: "relative", cursor: "pointer" }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: active ? colors.brand.primary : colors.neutral[300],
                    borderRadius: active ? "3px" : "2px",
                    inset: active ? 0 : "12.5%",
                  }}
                />
              </Box>
            );
          })}
        </Stack>
      </Stack>

      {/* Action buttons */}
      <Stack
        spacing={2}
        sx={{ position: "absolute", left: 0, top: slide.headingTop + slide.headingHeight + 32, width: 360 }}
      >
        <AppButton
          variant="contained"
          onClick={onNext}
          sx={{
            bgcolor: colors.brand.primary,
            color: colors.neutral[0],
            "&:hover": { bgcolor: colors.red[700] },
            textTransform: "none",
          }}
        >
          Вход
        </AppButton>

        <AppButton
          variant="outlined"
          onClick={onSkip}
          sx={{
            borderColor: colors.brand.primary,
            color: colors.brand.primary,
            bgcolor: colors.neutral[0],
            "&:hover": {
              borderColor: colors.red[700],
              bgcolor: colors.red[50],
            },
            textTransform: "none",
          }}
        >
          Регистрация
        </AppButton>
      </Stack>
    </Box>
  );
};
