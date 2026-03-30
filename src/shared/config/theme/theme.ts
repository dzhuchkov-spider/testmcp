/**
 * MUI Theme Configuration
 * Синхронизирован с Design Library (Figma)
 * 
 * Правила:
 * - Все цвета из palette
 * - Никаких hardcoded HEX значений
 * - Используй theme.palette в styled компонентах
 */

import { createTheme, type ThemeOptions } from '@mui/material/styles';

// ============================================================================
// PALETTE: Цвета из Figma Design Library
// ============================================================================

const palette = {
  // Красная палитра (основной бренд-цвет)
  red: {
    50: '#FFDDD6',
    100: '#FFCDD1',
    200: '#FFB8B0',
    300: '#F65E70',
    400: '#EC5466',
    500: '#FA4615',
    600: '#EA2C42',
    700: '#D92936',
    800: '#C41E2B',
    900: '#B01420',
  },
  // Зелёная палитра
  green: {
    50: '#E9F8DB',
    100: '#C4E8F8',
    200: '#9FD39F',
    300: '#6FB969',
    400: '#5EA957',
    500: '#4FC068',
    600: '#3BAF50',
    700: '#2E8A3F',
    800: '#226430',
    900: '#184020',
  },
  // Жёлтая палитра
  yellow: {
    50: '#FFFBEC',
    100: '#FFFBDD',
    200: '#FFF8BB',
    300: '#FFEFD9',
    400: '#FFEB90',
    500: '#FEDA57',
    600: '#FED12D',
    700: '#E8B817',
    800: '#D19E0C',
    900: '#B88500',
  },
  // Оранжевая палитра
  orange: {
    50: '#F9E6D1',
    100: '#FFF0E0',
    200: '#FFD9B8',
    300: '#F0E8D5',
    400: '#FFCF9D',
    500: '#FF7561',
    600: '#FF8657',
    700: '#FF8039',
    800: '#F06820',
    900: '#DD530A',
  },
  // Голубая палитра
  cyan: {
    50: '#F0F9F8',
    100: '#D0FDEF',
    200: '#A8FBEE',
    300: '#7FF8EA',
    400: '#5FF7E8',
    500: '#3AF5E3',
    600: '#1DD9CC',
    700: '#149D97',
    800: '#0B6B65',
    900: '#043C38',
  },
  // Голубо-синяя палитра
  blue: {
    50: '#EEF7FF',
    100: '#D0E2F2',
    200: '#A8CBEA',
    300: '#7DB4E1',
    400: '#5A9FDB',
    500: '#3D89D6',
    600: '#2B6FCC',
    700: '#1F55B8',
    800: '#153C9C',
    900: '#0D2873',
  },
  // Нейтральная палитра (серая)
  gray: {
    0: '#FFFFFF',
    50: '#FCFCFC',
    100: '#F9F9FA',
    150: '#F6F7F7',
    200: '#F2F2F3',
    300: '#EBEBE8',
    400: '#D1D3DE',
    500: '#A3A7AE',
    600: '#757C85',
    700: '#4B5563',
    800: '#2D3748',
    900: '#192434',
    950: '#050505',
  },
};

// ============================================================================
// THEME CONFIGURATION
// ============================================================================

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      light: palette.red[300],
      main: palette.red[600], // #EA2C42
      dark: palette.red[700],
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: palette.green[300],
      main: palette.green[600], // #3BAF50
      dark: palette.green[700],
      contrastText: '#FFFFFF',
    },
    error: {
      light: palette.red[300],
      main: palette.red[600],
      dark: palette.red[700],
      contrastText: '#FFFFFF',
    },
    warning: {
      light: palette.yellow[300],
      main: palette.yellow[600], // #FED12D
      dark: palette.yellow[700],
      contrastText: '#FFFFFF',
    },
    success: {
      light: palette.green[300],
      main: palette.green[600],
      dark: palette.green[700],
      contrastText: '#FFFFFF',
    },
    info: {
      light: palette.blue[300],
      main: palette.blue[600],
      dark: palette.blue[700],
      contrastText: '#FFFFFF',
    },
    background: {
      default: palette.gray[0],
      paper: palette.gray[0],
    },
    text: {
      primary: palette.gray[900],
      secondary: palette.gray[600],
      disabled: palette.gray[400],
    },
    divider: palette.gray[200],
  },

  typography: {
    fontFamily: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
    
    h1: {
      fontSize: '36px',
      fontWeight: 700,
      lineHeight: '44px',
      letterSpacing: '-1px',
    },
    h2: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: '40px',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontSize: '28px',
      fontWeight: 700,
      lineHeight: '36px',
      letterSpacing: '-0.28px',
    },
    h4: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '32px',
      letterSpacing: '0px',
    },
    h5: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    h6: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      letterSpacing: '0.5px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      letterSpacing: '0.25px',
    },
    
    button: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
      letterSpacing: '0.5px',
      textTransform: 'none',
    },
    
    caption: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.4px',
    },
    
    overline: {
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '16px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
  },

  shape: {
    borderRadius: 6, // md
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 16px',
          borderRadius: 6,
          transition: 'all 200ms ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0px)',
          },
        },
        sizeMedium: {
          padding: '12px 24px',
          fontSize: '16px',
        },
        sizeSmall: {
          padding: '6px 12px',
          fontSize: '14px',
        },
        containedPrimary: {
          backgroundColor: palette.red[600],
          color: palette.gray[0],
          '&:hover': {
            backgroundColor: palette.red[700],
          },
          '&:active': {
            backgroundColor: palette.red[800],
          },
          '&:disabled': {
            backgroundColor: palette.gray[300],
            color: palette.gray[500],
          },
        },
        outlinedPrimary: {
          borderColor: palette.red[600],
          color: palette.red[600],
          '&:hover': {
            backgroundColor: palette.red[50],
            borderColor: palette.red[700],
          },
          '&:active': {
            backgroundColor: palette.red[100],
            borderColor: palette.red[800],
          },
          '&:disabled': {
            borderColor: palette.gray[300],
            color: palette.gray[400],
          },
        },
        textPrimary: {
          color: palette.red[600],
          '&:hover': {
            backgroundColor: palette.red[50],
          },
          '&:active': {
            backgroundColor: palette.red[100],
          },
          '&:disabled': {
            color: palette.gray[400],
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: palette.gray[50],
            borderRadius: 6,
            transition: 'all 200ms ease-in-out',
            '& fieldset': {
              borderColor: palette.gray[300],
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: palette.gray[400],
            },
            '&.Mui-focused': {
              backgroundColor: palette.gray[0],
              '& fieldset': {
                borderColor: palette.red[600],
                borderWidth: '2px',
              },
            },
            '&.Mui-disabled': {
              backgroundColor: palette.gray[100],
              '& fieldset': {
                borderColor: palette.gray[200],
              },
            },
          },
          '& .MuiOutlinedInput-input': {
            fontSize: '16px',
            fontWeight: 400,
            color: palette.gray[900],
            '&::placeholder': {
              color: palette.gray[400],
              opacity: 1,
            },
          },
          '& .MuiInputLabel-outlined': {
            fontSize: '14px',
            fontWeight: 500,
            color: palette.gray[600],
            '&.Mui-focused': {
              color: palette.red[600],
            },
          },
        },
      },
    },

    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          color: palette.red[600],
          cursor: 'pointer',
          transition: 'all 200ms ease-in-out',
          '&:hover': {
            color: palette.red[700],
          },
          '&:active': {
            color: palette.red[800],
          },
        },
      },
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          body1: 'p',
          body2: 'p',
        },
      },
    },
  },
};

// ============================================================================
// CREATE THEME
// ============================================================================

export const theme = createTheme(themeOptions);

// Export palette for direct access in styled components
export const themeColors = palette;
