/**
 * Auth Page Styles
 */

import { styled } from '@mui/material/styles';

export const PageWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  position: 'relative',
  overflow: 'hidden',
}));

export const LogoContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '60px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
}));

export const ModalWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  width: '100%',
  maxWidth: '100vw',
  padding: '24px',
  zIndex: 20,
}));
