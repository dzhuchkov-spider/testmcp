export interface OnboardingSlide {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;

  // Desktop geometry from Figma (relative to modal content origin at x=32, y=24)
  modalHeight: number;
  modalTop: number;
  contentHeight: number;
  sliderHeight: number;
  headingTop: number;
  headingHeight: number;
  dotsTop: number;
}

export interface OnboardingState {}
