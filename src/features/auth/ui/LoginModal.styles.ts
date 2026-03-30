/**
 * LoginModal Styles
 * 
 * Использует styled() из @emotion/styled через MUI
 * Все цвета и размеры из theme
 */

import { styled } from '@mui/material/styles';

export const ModalContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
  maxWidth: '424px',
  padding: '32px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
}));

export const ModalHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'flex-start',
  width: '100%',
}));

export const BackButton = styled('button')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  minWidth: '40px',
  minHeight: '40px',
  padding: 0,
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  cursor: 'pointer',
  color: theme.palette.text.secondary,
  fontSize: '20px',
  transition: 'all 200ms ease-in-out',
  fontFamily: theme.typography.fontFamily,

  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.text.secondary,
  },

  '&:active': {
    backgroundColor: theme.palette.action.selected,
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },
}));

export const ModalContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  width: '100%',
}));

export const ModalInputs = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '16px',
  width: '100%',
}));

export const ModalActions = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  width: '100%',
}));

export const FormWrapper = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
  width: '100%',
}));
