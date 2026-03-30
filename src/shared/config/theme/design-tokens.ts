/**
 * Design Tokens для MTGAGRO.PRO
 * Основной источник дизайн-системы для всего проекта
 */

// ============================================================================
// ЦВЕТА (Colors)
// ============================================================================

export const colors = {
  // Красные цвета (Red palette) - основной бренд-цвет для MTGAGRO
  red: {
    50: '#FFF5F7', // Main6
    100: '#FFC9D1',
    200: '#FF9DB8',
    300: '#EC5466', // Main3
    400: '#E65470', // Main4
    500: '#EA2C42', // Main2
    600: '#F4364C',
    700: '#E24256', // Main1
    800: '#D92C3F',
    900: '#C82639',
  },

  // Зеленые цвета (Green palette)
  green: {
    50: '#C9F7DB',
    100: '#95D39F',
    200: '#6FB969',
    300: '#6FB969', // Green4
    400: '#6FB969', // Green5
    500: '#7EC068', // Green2
    600: '#4FC068', // Green1
    700: '#4FC068',
    800: '#3E9850',
    900: '#2D6F38',
  },

  // Желтые цвета (Yellow palette)
  yellow: {
    50: '#FFF9E6',
    100: '#FFDA57', // Yellow2
    200: '#FFD505', // Yellow3
    300: '#FED12D',
    400: '#FFD505',
    500: '#FED12D',
    600: '#FED12D', // Yellow1
    700: '#E6B800',
    800: '#CC9900',
    900: '#997700',
  },

  // Оранжевые цвета (Orange palette)
  orange: {
    50: '#FFE8D6',
    100: '#FFB666',
    200: '#FF8633',
    300: '#FDBF5F', // Orange4
    400: '#FF8039', // Orange2
    500: '#FF7039',
    600: '#FF8039',
    700: '#FF6B26', // Orange1
    800: '#E54611',
    900: '#C63A0D',
  },

  // Голубые цвета (Cyan/Blue palette)
  cyan: {
    50: '#D1F3F3',
    100: '#6EE2F7', // Cyan
    200: '#40C3D8',
    300: '#26B5CC',
    400: '#1B9DB4',
    500: '#108594',
    600: '#0D6F7E',
    700: '#0A5968',
    800: '#074452',
    900: '#042E3C',
  },

  blue: {
    50: '#D9EBFF',
    100: '#B3D6FF',
    200: '#6EB3F5', // Blue
    300: '#5AA8F1',
    400: '#4295E1',
    500: '#3884D1',
    600: '#2E72B8',
    700: '#236099',
    800: '#1A4D7A',
    900: '#113A5C',
  },

  // Нейтральные цвета (Gray/Neutral) - из библиотеки
  neutral: {
    0: '#FFFFFF',
    50: '#FAFBFC',
    100: '#F6F8FA',
    150: '#F0F3F7',
    200: '#E8ECEF',
    300: '#D9DFE5',
    400: '#C8D0D9',
    500: '#A3A7AE',
    600: '#6B7280',
    700: '#4B5563',
    800: '#2D3748',
    900: '#1A1F2E',
  },

  // Специальные семантические цвета
  success: {
    50: '#C9F7DB', // Green Light
    100: '#95D39F',
    200: '#6FB969',
    300: '#6FB969', // Green4
    400: '#6FB969', // Green5
    500: '#4FC068',
    600: '#4FC068',
    700: '#3E9850',
  },

  warning: {
    50: '#FFF9E6',
    100: '#FFDA57', // Yellow2
    200: '#FFD505', // Yellow3
    300: '#FED12D',
    400: '#FED12D',
    500: '#FED12D',
    600: '#FED12D',
    700: '#E6B800',
  },

  error: {
    50: '#FFF5F7',
    100: '#FFC9D1',
    200: '#FFC9D1',
    300: '#EC5466',
    400: '#E65470',
    500: '#F4364C',
    600: '#E24256',
    700: '#D92C3F',
    800: '#C82639',
    900: '#960020',
  },

  info: {
    50: '#D9EBFF',
    100: '#B3D6FF',
    200: '#6EB3F5',
    300: '#5AA8F1',
    400: '#4295E1',
    500: '#3884D1',
    600: '#2E72B8',
    700: '#236099',
  },

  // Специальные цвета (Brand colors)
  brand: {
    primary: '#F4364C', // Красный - основной бренд цвет
    secondary: '#4FC068', // Зеленый для агротехнологии
    accent: '#FF8039', // Оранжевый для выделения
    warning: '#FED12D', // Желтый
    success: '#4FC068', // Зеленый
  },
} as const;

// ============================================================================
// ТИПОГРАФИЯ (Typography)
// ============================================================================

export const typography = {
  // Font families
  fontFamily: {
    base: {
      name: 'Inter, system-ui, -apple-system, sans-serif',
      stack: "'Inter', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
    },
    serif: {
      name: 'Georgia, serif',
      stack: "'Georgia', 'Garamond', serif",
    },
    mono: {
      name: 'Fira Code, monospace',
      stack: "'Fira Code', 'Monaco', 'Courier New', monospace",
    },
  },

  // Font sizes
  fontSize: {
    xs: {
      size: '12px',
      lineHeight: '16px',
      letterSpacing: '0.4px',
    },
    sm: {
      size: '14px',
      lineHeight: '20px',
      letterSpacing: '0.25px',
    },
    base: {
      size: '16px',
      lineHeight: '24px',
      letterSpacing: '0.5px',
    },
    lg: {
      size: '18px',
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    xl: {
      size: '20px',
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    '2xl': {
      size: '24px',
      lineHeight: '32px',
      letterSpacing: '0px',
    },
    '3xl': {
      size: '30px',
      lineHeight: '36px',
      letterSpacing: '-0.5px',
    },
    '4xl': {
      size: '36px',
      lineHeight: '44px',
      letterSpacing: '-1px',
    },
  },

  // Font weights
  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // Text styles / Preset combinations
  styles: {
    // Headings
    h1: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: '44px',
      letterSpacing: '-1px',
    },
    h2: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '36px',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '32px',
      letterSpacing: '0px',
    },
    h4: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    h5: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    h6: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: '0.5px',
    },

    // Body text
    bodyLg: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    bodyBase: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.5px',
    },
    bodySm: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.25px',
    },
    bodyXs: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.4px',
    },

    // Labels
    labelLg: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      letterSpacing: '0.25px',
    },
    labelBase: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      letterSpacing: '0.4px',
    },
    labelSm: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '11px',
      fontWeight: 600,
      lineHeight: '16px',
      letterSpacing: '0.5px',
    },

    // Caption
    captionMd: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: '20px',
      letterSpacing: '0px',
    },
    captionSm: {
      fontFamily: "'Inter', system-ui, sans-serif",
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.4px',
    },
  },
} as const;

// ============================================================================
// ОТСТУПЫ И РАЗМЕРЫ (Spacing & Sizing)
// ============================================================================

export const spacing = {
  // Base spacing scale
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
} as const;

// Semantic spacing
export const spacingAlias = {
  // Padding/Margin patterns
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',

  // Component-specific
  component: {
    buttonPaddingXs: '8px 12px',
    buttonPaddingSm: '10px 16px',
    buttonPaddingMd: '12px 20px',
    buttonPaddingLg: '14px 24px',

    inputPadding: '10px 12px',
    inputPaddingLg: '12px 16px',

    cardPadding: '16px',
    cardPaddingLg: '24px',

    sectionPadding: '32px',
    sectionPaddingLg: '48px',
  },
} as const;

// ============================================================================
// РАЗМЕРЫ КОМПОНЕНТОВ (Component Sizes)
// ============================================================================

export const componentSizes = {
  // Button sizes
  button: {
    xs: { height: '28px', padding: '4px 12px' },
    sm: { height: '32px', padding: '8px 16px' },
    md: { height: '40px', padding: '10px 20px' },
    lg: { height: '48px', padding: '12px 24px' },
    xl: { height: '56px', padding: '14px 32px' },
  },

  // Input sizes
  input: {
    sm: { height: '32px', padding: '8px 12px' },
    md: { height: '40px', padding: '10px 12px' },
    lg: { height: '48px', padding: '12px 16px' },
  },

  // Icon sizes
  icon: {
    xs: '16px',
    sm: '20px',
    md: '24px',
    lg: '32px',
    xl: '40px',
    '2xl': '48px',
  },

  // Avatar sizes
  avatar: {
    xs: '24px',
    sm: '32px',
    md: '40px',
    lg: '48px',
    xl: '56px',
    '2xl': '64px',
  },
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px',
} as const;

// ============================================================================
// SHADOWS
// ============================================================================

export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
} as const;

// ============================================================================
// Z-INDEX
// ============================================================================

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// ============================================================================
// BREAKPOINTS (Responsive)
// ============================================================================

export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// ============================================================================
// TRANSITIONS
// ============================================================================

export const transitions = {
  duration: {
    instant: '0ms',
    fastest: '50ms',
    faster: '100ms',
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
    slowest: '1000ms',
  },
  timing: {
    linear: 'linear',
    ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// ============================================================================
// EXPORT DEFAULT THEME
// ============================================================================

export const theme = {
  colors,
  typography,
  spacing,
  spacingAlias,
  componentSizes,
  borderRadius,
  shadows,
  zIndex,
  breakpoints,
  transitions,
} as const;

export default theme;
