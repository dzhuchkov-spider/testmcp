/**
 * Типы для дизайн-токенов
 */

import { theme } from './design-tokens';

export type Theme = typeof theme;

export type ThemeTokens = {
  colors: typeof theme.colors;
  typography: typeof theme.typography;
  spacing: typeof theme.spacing;
  spacingAlias: typeof theme.spacingAlias;
  componentSizes: typeof theme.componentSizes;
  borderRadius: typeof theme.borderRadius;
  shadows: typeof theme.shadows;
  zIndex: typeof theme.zIndex;
  breakpoints: typeof theme.breakpoints;
  transitions: typeof theme.transitions;
};

// Color type utilities
export type ColorKey = keyof typeof theme.colors;
export type ColorShade = keyof typeof theme.colors.red;

// Spacing type utilities
export type SpacingValue = keyof typeof theme.spacing;
export type SpacingAlias = keyof typeof theme.spacingAlias;

// Typography type utilities
export type FontSize = keyof typeof theme.typography.fontSize;
export type FontWeight = keyof typeof theme.typography.fontWeight;
export type FontFamily = keyof typeof theme.typography.fontFamily;
export type TextStyle = keyof typeof theme.typography.styles;

// Border radius type utilities
export type BorderRadiusValue = keyof typeof theme.borderRadius;

// Shadow type utilities
export type ShadowValue = keyof typeof theme.shadows;

// Z-index type utilities
export type ZIndexValue = keyof typeof theme.zIndex;

// Breakpoint type utilities
export type BreakpointKey = keyof typeof theme.breakpoints;

// Duration type utilities
export type TransitionDuration = keyof typeof theme.transitions.duration;
export type TransitionTiming = keyof typeof theme.transitions.timing;
