/**
 * Design Tokens
 * 
 * Переменные дизайна, извлеченные из Figma Design Library
 * Основаны на компонентах MenuItem и MenuExit
 */

// ============================================================================
// COLORS
// ============================================================================

export const COLORS = {
  // Основные цвета
  white: '#ffffff',
  black: '#000000',
  
  // Текстовые цвета
  blackText: '#192434',
  grayText: '#a3a7ae',
  
  // Фоновые цвета
  grayBg: '#f6f7f7',
  
  // Цвета для иконок
  iconGray1: '#47505d',
  iconGray5: '#e8e9eb',
  
  // Цвета для бейджей
  redBadgeBg: '#f65e70',
  whiteBadgeText: '#ffffff',
  whiteBadgeBorder: '#ffffff',
  
  // Цвета для кнопок
  redButtonStroke: '#f4364c',
  redLink: '#f4364c',
} as const;

// ============================================================================
// SPACING
// ============================================================================

export const SPACING = {
  2: '2px',
  4: '4px',
  8: '8px',
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  24: '24px',
} as const;

// ============================================================================
// CORNERS (Border Radius)
// ============================================================================

export const CORNERS = {
  8: '8px',
  10: '10px',
  12: '12px',
  16: '16px',
  24: '24px',
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const TYPOGRAPHY = {
  fontFamily: '"Inter", sans-serif',
  
  // Font sizes
  fontSize11: '11px',
  fontSize14: '14px',
  fontSize16: '16px',
  fontSize18: '18px',
  
  // Font weights
  fontWeightRegular: 400,
  fontWeightSemiBold: 600,
  
  // Line heights
  lineHeight16: '16px',
  lineHeight18: '18px',
  lineHeight20: '20px',
  lineHeight22: '22px',
  lineHeight24: '24px',
  
  // Letter spacing
  letterSpacingNeg024: '-0.24px',
  letterSpacingNeg022: '-0.22px',
  letterSpacingNeg018: '-0.18px',
  letterSpacingNeg028: '-0.28px',
  letterSpacing0: '0',
} as const;

// ============================================================================
// COMPONENT DIMENSIONS
// ============================================================================

export const DIMENSIONS = {
  // MenuItem
  menuItemWidth: {
    web: '360px',
    tablet: 'auto',
  },
  
  // MenuExit
  menuExitWidth: '290px',
  
  // Notification
  notificationWidth: '360px',
  notificationButtonHeight: '40px',
  counterSize: '16px',
  
  // Company
  companyWidth: '456px',
  actionButtonSize: '40px',
  lockIconSize: '24px',
  
  // Badge
  badgeMinWidth: '20px',
} as const;

// ============================================================================
// TRANSITIONS
// ============================================================================

export const TRANSITIONS = {
  default: 'all 200ms ease-in-out',
} as const;
