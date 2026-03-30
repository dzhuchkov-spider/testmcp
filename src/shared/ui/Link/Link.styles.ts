/**
 * Link Styles
 * 
 * Использует styled() из @emotion/styled через MUI
 * Все цвета из theme.palette
 */

import { styled } from '@mui/material/styles';
import type { LinkProps as LinkPropsExtended } from './Link';

interface StyledLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkPropsExtended['variant'];
  size?: LinkPropsExtended['size'];
  underline?: LinkPropsExtended['underline'];
}

export const StyledLink = styled('a')<StyledLinkProps>(
  ({ theme, variant = 'primary', size = 'medium', underline = 'hover' }) => {
    // Размеры
    const sizeStyles = {
      small: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 400,
      },
      medium: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 500,
      },
      large: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 500,
      },
    };

    // Цветовые схемы
    const colorMap = {
      primary: {
        color: theme.palette.primary.main,
        '&:hover': {
          color: theme.palette.primary.dark,
        },
        '&:active': {
          color: theme.palette.primary.dark,
        },
      },
      secondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          color: theme.palette.secondary.dark,
        },
        '&:active': {
          color: theme.palette.secondary.dark,
        },
      },
      error: {
        color: theme.palette.error.main,
        '&:hover': {
          color: theme.palette.error.dark,
        },
        '&:active': {
          color: theme.palette.error.dark,
        },
      },
    };

    // Подчеркивание
    const underlineStyles = {
      none: {
        textDecoration: 'none',
      },
      hover: {
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
      always: {
        textDecoration: 'underline',
      },
    };

    return {
      ...sizeStyles[size as keyof typeof sizeStyles],
      ...colorMap[variant as keyof typeof colorMap],
      ...underlineStyles[underline as keyof typeof underlineStyles],

      fontFamily: theme.typography.fontFamily,
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
      outline: 'none',
      border: 'none',
      background: 'transparent',
      padding: 0,
      margin: 0,

      '&[aria-disabled="true"]': {
        color: theme.palette.text.disabled,
        cursor: 'not-allowed',
        opacity: 0.6,
        pointerEvents: 'none',
      },

      '&:focus': {
        outline: `2px solid ${theme.palette.primary.main}`,
        outlineOffset: '2px',
      },
    };
  }
);
