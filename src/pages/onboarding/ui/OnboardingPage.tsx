import { useEffect, useState } from "react";
import { OnboardingCarousel, useOnboardingCarousel } from "@/features/onboarding-carousel";
import { Box } from "@/shared/ui";

const FRAME_WIDTH = 1512;
const FRAME_HEIGHT = 982;
const BACKGROUND = "#F4364C";

const LOGO_SRC = "https://www.figma.com/api/mcp/asset/965338eb-a067-4118-a67f-816f38866e9d";
const LOGO_WIDTH = 273.611572265625;
const LOGO_HEIGHT = 28;

const getViewportScale = () => {
  const horizontalScale = window.innerWidth / FRAME_WIDTH;
  const verticalScale = window.innerHeight / FRAME_HEIGHT;
  return Math.min(1, horizontalScale, verticalScale);
};

// Strict fixed-frame page with proportional scaling on resize.
export const OnboardingPage = () => {
  const { activeSlide, index, total, goNext, skip, setSlideIndex } = useOnboardingCarousel();

  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const recalc = () => setScale(getViewportScale());
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: BACKGROUND,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: FRAME_WIDTH * scale,
          height: FRAME_HEIGHT * scale,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <Box
            component="img"
            src={LOGO_SRC}
            alt="MTGAgro"
            sx={{
              position: "absolute",
              top: 64,
              left: (FRAME_WIDTH - LOGO_WIDTH) / 2,
              width: LOGO_WIDTH,
              height: LOGO_HEIGHT,
              objectFit: "contain",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              left: 544,
              top: activeSlide.modalTop,
              width: 424,
              height: activeSlide.modalHeight,
              bgcolor: "#FFFFFF",
              borderRadius: "16px",
              px: 4,
              pt: 3,
            }}
          >
            <OnboardingCarousel
              slide={activeSlide}
              activeIndex={index}
              total={total}
              onNext={goNext}
              onSkip={skip}
              onDotSelect={setSlideIndex}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
