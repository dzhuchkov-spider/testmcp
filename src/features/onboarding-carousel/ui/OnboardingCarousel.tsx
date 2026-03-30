import { OnboardingSlideCard } from "@/entities/onboarding";
import { AppButton, Box, Stack } from "@/shared/ui";
import type { OnboardingSlide } from "@/entities/onboarding";

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
                    bgcolor: active ? "#F65E70" : "#DFE1E3",
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
            bgcolor: "#F4364C",
            color: "#FFFFFF",
            "&:hover": { bgcolor: "#E53349" },
            textTransform: "none",
          }}
        >
          Вход
        </AppButton>

        <AppButton
          variant="outlined"
          onClick={onSkip}
          sx={{
            borderColor: "#F4364C",
            color: "#F4364C",
            bgcolor: "#FFFFFF",
            "&:hover": {
              borderColor: "#E53349",
              bgcolor: "#FFF5F7",
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
