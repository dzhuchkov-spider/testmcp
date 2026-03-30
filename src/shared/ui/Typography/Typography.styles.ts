/**
 * Typography Styles
 * 
 * Использует styled() из @emotion/styled через MUI
 * Все стили из theme.typography
 */

import { styled } from '@mui/material/styles';

// Headings
export const HeadingH1 = styled('h1')(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.text.primary,
  margin: 0,
  padding: 0,
}));

export const HeadingH2 = styled('h2')(({ theme }) => ({
  ...theme.typography.h2,
  color: theme.palette.text.primary,
  margin: 0,
  padding: 0,
}));

export const HeadingH3 = styled('h3')(({ theme }) => ({
  ...theme.typography.h3,
  color: theme.palette.text.primary,
  margin: 0,
  padding: 0,
}));

export const HeadingH4 = styled('h4')(({ theme }) => ({
  ...theme.typography.h4,
  color: theme.palette.text.primary,
  margin: 0,
  padding: 0,
}));

export const HeadingH5 = styled('h5')(({ theme }) => ({
  ...theme.typography.h5,
  color: theme.palette.text.primary,
  margin: 0,
  padding: 0,
}));

export const HeadingH6 = styled('h6')(({ theme }) => ({
  ...theme.typography.h6,
  color: theme.palette.text.primary,
  margin: 0,
  padding: 0,
}));

// Body text
export const BodyLarge = styled('div')(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  margin: 0,
  padding: 0,
}));

export const BodySmall = styled('div')(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  margin: 0,
  padding: 0,
}));

// Labels
export const LabelLarge = styled('div')(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: '24px',
  letterSpacing: '0.5px',
  color: theme.palette.text.primary,
  margin: 0,
  padding: 0,
}));

export const LabelSmall = styled('div')(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '20px',
  letterSpacing: '0.25px',
  color: theme.palette.text.secondary,
  margin: 0,
  padding: 0,
}));

// Caption
export const Caption = styled('span')(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.disabled,
  margin: 0,
  padding: 0,
}));
