/**
 * Button Styles
 * 
 * Использует styled() из @emotion/styled через MUI
 * Все цвета из theme.palette
 */

import { styled } from '@mui/material/styles';
import type { ButtonProps as StyledButtonProps } from './Button';

interface StyledButtonPropsExtended extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: StyledButtonProps['variant'];
  size?: StyledButtonProps['size'];
  color?: StyledButtonProps['color'];
  fullWidth?: StyledButtonProps['fullWidth'];
}

export const StyledButton = styled('button')<StyledButtonPropsExtended>(
  ({ theme, variant = 'contained', size = 'medium', color = 'primary', fullWidth }) => {
    // Базовые стили
    const baseStyles = {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 500,
      borderRadius: theme.shape.borderRadius,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
      outline: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap' as const,
      width: fullWidth ? '100%' : 'auto',

      '&:hover': {
        transform: 'translateY(-2px)',
      },

      '&:active': {
        transform: 'translateY(0px)',
      },

      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    };

    // Размеры
    const sizeStyles = {
      small: {
        padding: '6px 12px',
        fontSize: '14px',
        lineHeight: '20px',
        minHeight: '32px',
      },
      medium: {
        padding: '12px 24px',
        fontSize: '16px',
        lineHeight: '24px',
        minHeight: '44px',
      },
      large: {
        padding: '16px 32px',
        fontSize: '18px',
        lineHeight: '28px',
        minHeight: '56px',
      },
    };

    // Цветовые палитры для каждого варианта и цвета
    const colorMap = {
      primary: {
        contained: {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.common.white,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          },
          '&:active': {
            backgroundColor: theme.palette.primary.dark,
          },
          '&:disabled': {
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.grey[500],
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          border: `2px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            borderColor: theme.palette.primary.dark,
          },
          '&:active': {
            backgroundColor: theme.palette.primary.light,
            borderColor: theme.palette.primary.dark,
          },
          '&:disabled': {
            borderColor: theme.palette.grey[300],
            color: theme.palette.grey[400],
          },
        },
        text: {
          backgroundColor: 'transparent',
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          '&:active': {
            backgroundColor: theme.palette.action.selected,
          },
          '&:disabled': {
            color: theme.palette.grey[400],
          },
        },
      },
      secondary: {
        contained: {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.common.white,
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
          },
          '&:active': {
            backgroundColor: theme.palette.secondary.dark,
          },
          '&:disabled': {
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.grey[500],
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          border: `2px solid ${theme.palette.secondary.main}`,
          color: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            borderColor: theme.palette.secondary.dark,
          },
          '&:active': {
            backgroundColor: theme.palette.secondary.light,
            borderColor: theme.palette.secondary.dark,
          },
          '&:disabled': {
            borderColor: theme.palette.grey[300],
            color: theme.palette.grey[400],
          },
        },
        text: {
          backgroundColor: 'transparent',
          color: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          '&:active': {
            backgroundColor: theme.palette.action.selected,
          },
          '&:disabled': {
            color: theme.palette.grey[400],
          },
        },
      },
      error: {
        contained: {
          backgroundColor: theme.palette.error.main,
          color: theme.palette.common.white,
          '&:hover': {
            backgroundColor: theme.palette.error.dark,
          },
          '&:active': {
            backgroundColor: theme.palette.error.dark,
          },
          '&:disabled': {
            backgroundColor: theme.palette.grey[300],
            color: theme.palette.grey[500],
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          border: `2px solid ${theme.palette.error.main}`,
          color: theme.palette.error.main,
          '&:hover': {
            backgroundColor: theme.palette.error.light,
            borderColor: theme.palette.error.dark,
          },
          '&:active': {
            backgroundColor: theme.palette.error.light,
            borderColor: theme.palette.error.dark,
          },
          '&:disabled': {
            borderColor: theme.palette.grey[300],
            color: theme.palette.grey[400],
          },
        },
        text: {
          backgroundColor: 'transparent',
          color: theme.palette.error.main,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
          '&:active': {
            backgroundColor: theme.palette.action.selected,
          },
          '&:disabled': {
            color: theme.palette.grey[400],
          },
        },
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size as keyof typeof sizeStyles],
      ...colorMap[color as keyof typeof colorMap][variant as keyof typeof colorMap.primary],
    };
  }
);
