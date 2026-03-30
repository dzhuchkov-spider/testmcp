/**
 * Примеры использования дизайн-токенов
 * 
 * Документация: {@link https://figma.com/design/HVa7wLkYzGVNv3BalCaCun}
 */

// ============================================================================
// Пример 1: Использование в компоненте React (стили для кнопки)
// ============================================================================

import {
  colors,
  typography,
  spacing,
  componentSizes,
  borderRadius,
  shadows,
} from '@/shared/config/theme';

// Пример стилей для кнопки React компонента
export const buttonExampleStyles = {
  backgroundColor: colors.brand.primary,
  color: colors.neutral[0],
  padding: componentSizes.button.md.padding,
  height: componentSizes.button.md.height,
  borderRadius: borderRadius.md,
  boxShadow: shadows.md,
  ...typography.styles.labelLg,
  cursor: 'pointer',
  border: 'none',
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
};

// ============================================================================
// Пример 2: Использование с утилит-функциями
// ============================================================================

import {
  getColorByPath,
  getTransition,
  hexToRgba,
  getContrastTextColor,
} from '@/shared/config/theme/utils';

// Примеры использования утилит-функций
export const utilsExamples = {
  // Получить цвет по пути
  primaryColor: getColorByPath('primary.500'), // '#0ea5e9'
  
  // Создать переход
  transition: getTransition('fast', 'easeOut', 'background-color'),
  
  // Конвертировать hex в rgba
  hoverColor: hexToRgba(colors.brand.primary, 0.8),
  
  // Получить контрастный цвет текста
  textColor: getContrastTextColor(colors.brand.primary),
};

// Пример стилей для карточки
export const cardExampleStyles = {
  backgroundColor: colors.neutral[0],
  color: utilsExamples.textColor,
  padding: spacing[6],
  borderRadius: borderRadius.lg,
  boxShadow: shadows.lg,
};

// ============================================================================
// Пример 3: CSS переменные на основе токенов
// ============================================================================

export const cssVariablesMap = {
  // Цветовые переменные
  '--color-primary-500': colors.red[500],
  '--color-primary-600': colors.brand.primary,
  '--color-neutral-0': colors.neutral[0],
  '--color-neutral-900': colors.neutral[900],
  '--color-error-500': colors.error[500],
  
  // Отступы
  '--spacing-4': spacing[4],
  '--spacing-6': spacing[6],
  
  // Размеры
  '--border-radius-md': borderRadius.md,
};

// ============================================================================
// Пример 4: Типизированное использование (TypeScript)
// ============================================================================

import type {
  ColorKey,
  FontSize,
  SpacingValue,
  TextStyle,
} from '@/shared/config/theme/types';

// Пример типизированных параметров для компонента
export interface StyledComponentProps {
  variant?: ColorKey;
  fontSize?: FontSize;
  padding?: SpacingValue;
  textStyle?: TextStyle;
}

// Пример типизированных стилей на основе токенов
export const getTypedComponentStyles = (props: StyledComponentProps) => {
  const fontSizeObj = typography.fontSize[props.fontSize || 'base'];
  const colorVariant = colors[props.variant as ColorKey] as Record<string, string> | undefined;
  
  return {
    fontSize: fontSizeObj.size,
    padding: spacing[props.padding || 4],
    color: colorVariant?.[500] || colors.brand.primary,
    fontWeight: typography.fontWeight.normal,
  };
};

// ============================================================================
// Пример 5: Использование брейкпоинтов (Responsive)
// ============================================================================

import { breakpoints } from '@/shared/config/theme';
import { getMediaQuery } from '@/shared/config/theme/utils';

export const responsiveStylesExample = {
  // Mobile-first approach
  mobile: {
    fontSize: typography.fontSize.sm.size,
    padding: spacing[2],
  },
  // Tablet and up
  tablet: {
    [`@media ${getMediaQuery('md')}`]: {
      fontSize: typography.fontSize.base.size,
      padding: spacing[4],
    },
  },
  // Desktop and up
  desktop: {
    [`@media ${getMediaQuery('lg')}`]: {
      fontSize: typography.fontSize.lg.size,
      padding: spacing[6],
    },
  },
};

// ============================================================================
// Пример 6: Создание собственных токенов на основе дизайн-токенов
// ============================================================================

export const customTokens = {
  // Специальные цветовые комбинации для вашего приложения
  button: {
    primary: {
      bg: colors.brand.primary,
      text: colors.neutral[0],
      hover: colors.red[700],
      active: colors.red[800],
      disabled: colors.neutral[300],
    },
    secondary: {
      bg: colors.brand.secondary,
      text: colors.neutral[0],
      hover: colors.green[700],
      active: colors.green[800],
      disabled: colors.neutral[300],
    },
  },
  
  // Состояния для различных элементов UI
  states: {
    success: colors.success[500],
    warning: colors.warning[500],
    error: colors.error[500],
    info: colors.info[500],
  },
};
