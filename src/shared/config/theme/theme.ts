/**
 * MUI Theme Configuration
 * Синхронизирован с Design Library (Figma)
 * 
 * Правила:
 * - Все цвета из палитры Figma Design Library
 * - Никаких hardcoded HEX значений
 * - Используй theme.palette в styled компонентах
 * - Используй defaultProps для стандартных вариантов компонентов
 */

import { createTheme, type ThemeOptions } from '@mui/material/styles';

// ============================================================================
// PALETTE: Цвета из Figma Design Library
// Синхронизирован с Design Library 
// https://www.figma.com/design/HVa7wLkYzGVNv3BalCaCun/
// ============================================================================

const palette = {
  // Красная палитра (основной бренд-цвет MTGAGRO)
  red: {
    50: '#FFF5F7',
    100: '#FFC9D1',
    200: '#FF9DB8',
    300: '#EC5466',
    400: '#E65470',
    500: '#EA2C42',
    600: '#F4364C',
    700: '#E24256',
    800: '#D92C3F',
    900: '#C82639',
  },
  // Зелёная палитра (Агротехнология)
  green: {
    50: '#C9F7DB',
    100: '#95D39F',
    200: '#6FB969',
    300: '#6FB969',
    400: '#6FB969',
    500: '#7EC068',
    600: '#4FC068',
    700: '#4FC068',
    800: '#3E9850',
    900: '#2D6F38',
  },
  // Жёлтая палитра
  yellow: {
    50: '#FFF9E6',
    100: '#FFDA57',
    200: '#FFD505',
    300: '#FED12D',
    400: '#FFD505',
    500: '#FED12D',
    600: '#FED12D',
    700: '#E6B800',
    800: '#CC9900',
    900: '#997700',
  },
  // Оранжевая палитра
  orange: {
    50: '#FFE8D6',
    100: '#FFB666',
    200: '#FF8633',
    300: '#FDBF5F',
    400: '#FF8039',
    500: '#FF7039',
    600: '#FF8039',
    700: '#FF6B26',
    800: '#E54611',
    900: '#C63A0D',
  },
  // Голубая палитра (Cyan)
  cyan: {
    50: '#D1F3F3',
    100: '#6EE2F7',
    200: '#40C3D8',
    300: '#26B5CC',
    400: '#1B9DB4',
    500: '#108594',
    600: '#0D6F7E',
    700: '#0A5968',
    800: '#074452',
    900: '#042E3C',
  },
  // Голубо-синяя палитра (Blue)
  blue: {
    50: '#D9EBFF',
    100: '#B3D6FF',
    200: '#6EB3F5',
    300: '#5AA8F1',
    400: '#4295E1',
    500: '#3884D1',
    600: '#2E72B8',
    700: '#236099',
    800: '#1A4D7A',
    900: '#113A5C',
  },
  // Нейтральная палитра (серая)
  gray: {
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
};

// ============================================================================
// THEME CONFIGURATION
// ============================================================================

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      light: palette.red[300],
      main: palette.red[600], // #F4364C
      dark: palette.red[800],
      contrastText: palette.gray[0],
    },
    secondary: {
      light: palette.green[300],
      main: palette.green[600], // #4FC068
      dark: palette.green[800],
      contrastText: palette.gray[0],
    },
    error: {
      light: palette.red[300],
      main: palette.red[600],
      dark: palette.red[800],
      contrastText: palette.gray[0],
    },
    warning: {
      light: palette.yellow[300],
      main: palette.yellow[600], // #FED12D
      dark: palette.yellow[800],
      contrastText: palette.gray[900],
    },
    success: {
      light: palette.green[300],
      main: palette.green[600],
      dark: palette.green[800],
      contrastText: palette.gray[0],
    },
    info: {
      light: palette.blue[300],
      main: palette.blue[600],
      dark: palette.blue[800],
      contrastText: palette.gray[0],
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
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '36px',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: '32px',
      letterSpacing: '0px',
    },
    h4: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    h5: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '28px',
      letterSpacing: '0px',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      letterSpacing: '0.5px',
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
    // ========================================================================
    // MuiButton - Кнопка
    // ========================================================================
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: 'contained',
        size: 'medium',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
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
          height: '40px',
        },
        sizeSmall: {
          padding: '8px 16px',
          fontSize: '14px',
          height: '32px',
        },
        sizeLarge: {
          padding: '14px 32px',
          fontSize: '18px',
          height: '48px',
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

    // ========================================================================
    // MuiTextField - Текстовое поле ввода
    // ========================================================================
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

    // ========================================================================
    // MuiOutlinedInput - Outlined input
    // ========================================================================
    MuiOutlinedInput: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
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
          '&.Mui-focused fieldset': {
            borderColor: palette.red[600],
            borderWidth: '2px',
          },
          '&.Mui-disabled': {
            backgroundColor: palette.gray[100],
            '& fieldset': {
              borderColor: palette.gray[200],
            },
          },
        },
      },
    },

    // ========================================================================
    // MuiLink - Ссылка
    // ========================================================================
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

    // ========================================================================
    // MuiTypography - Типография
    // ========================================================================
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

    // ========================================================================
    // MuiModal - Модальное окно
    // ========================================================================
    MuiModal: {
      defaultProps: {
        disableEscapeKeyDown: false,
      },
      styleOverrides: {
        backdrop: {
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(2px)',
        },
      },
    },

    // ========================================================================
    // MuiPaper - Бумага/Контейнер
    // ========================================================================
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: palette.gray[0],
          borderRadius: 6,
        },
        elevation1: {
          boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`,
        },
      },
    },

    // ========================================================================
    // MuiDialog - Диалоговое окно
    // ========================================================================
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: palette.gray[0],
          borderRadius: 12,
          boxShadow: `0 10px 40px rgba(0, 0, 0, 0.1)`,
        },
      },
    },

    // ========================================================================
    // MuiInputBase - Базовый компонент ввода
    // ========================================================================
    MuiInputBase: {
      defaultProps: {
        size: 'small',
      },
    },

    // ========================================================================
    // MuiFormLabel - Метка для формы 
    // ========================================================================
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: palette.gray[600],
          fontSize: '14px',
          fontWeight: 500,
          '&.Mui-focused': {
            color: palette.red[600],
          },
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
