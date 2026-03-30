import { useMemo, useState } from "react";
import { onboardingSlides } from "@/entities/onboarding";

export const useOnboardingCarousel = () => {
  const [index, setIndex] = useState(0);

  const isLast = index === onboardingSlides.length - 1;

  const activeSlide = useMemo(() => onboardingSlides[index], [index]);

  const goNext = () => {
    setIndex((prev) => (prev < onboardingSlides.length - 1 ? prev + 1 : prev));
  };

  const skip = () => {
    setIndex(onboardingSlides.length - 1);
  };

  const setSlideIndex = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex > onboardingSlides.length - 1) {
      return;
    }
    setIndex(nextIndex);
  };

  return {
    index,
    activeSlide,
    total: onboardingSlides.length,
    isLast,
    goNext,
    skip,
    setSlideIndex,
  };
};
