/**
 * Input Styles
 * 
 * Использует styled() из @emotion/styled через MUI
 * Все цвета из theme.palette
 */

import { styled } from '@mui/material/styles';

export const InputWrapper = styled('div')<{ fullWidth?: boolean }>(
  ({ theme, fullWidth }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: fullWidth ? '100%' : 'auto',
  })
);

export const InputLabel = styled('label')<{ required?: boolean }>(
  ({ theme, required }) => ({
    fontSize: '14px',
    fontWeight: 500,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,

    '&::after': {
      content: required ? '"*"' : '""',
      marginLeft: '4px',
      color: theme.palette.error.main,
    },
  })
);

export const StyledInput = styled('input')<{ 'data-invalid'?: string }>(
  ({ theme, 'data-invalid': dataInvalid }) => ({
    fontFamily: theme.typography.fontFamily,
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0.5px',
    padding: '12px 16px',
    minHeight: '44px',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    outline: 'none',
    transition: 'all 200ms ease-in-out',

    '&::placeholder': {
      color: theme.palette.text.disabled,
    },

    '&:hover': {
      borderColor: theme.palette.text.secondary,
    },

    '&:focus': {
      borderColor: theme.palette.primary.main,
      borderWidth: '2px',
      padding: '11px 15px', // Компенсируем толщину границы
      backgroundColor: theme.palette.background.paper,
      boxShadow: `0 0 0 3px ${theme.palette.primary.main}33`,
    },

    '&:disabled': {
      backgroundColor: theme.palette.action.disabledBackground,
      color: theme.palette.text.disabled,
      cursor: 'not-allowed',
      opacity: 0.6,
    },

    // Состояние ошибки
    ...(dataInvalid === 'true' && {
      borderColor: theme.palette.error.main,
      backgroundColor: `${theme.palette.error.light}0f`,

      '&:focus': {
        borderColor: theme.palette.error.main,
        boxShadow: `0 0 0 3px ${theme.palette.error.main}33`,
      },
    }),
  })
);

export const ErrorMessage = styled('div')(({ theme }) => ({
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  color: theme.palette.error.main,
  fontFamily: theme.typography.fontFamily,
}));
