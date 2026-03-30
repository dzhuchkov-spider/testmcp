/**
 * Button Component
 * 
 * Поддерживает варианты: contained, outlined, text
 * Размеры: small, medium, large
 * Состояния: normal, hover, active, disabled
 */

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { StyledButton } from './Button.styles';

export type ButtonVariant = 'contained' | 'outlined' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'error';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Вариант кнопки (стиль)
   * @default 'contained'
   */
  variant?: ButtonVariant;

  /**
   * Размер кнопки
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Цветовая схема
   * @default 'primary'
   */
  color?: ButtonColor;

  /**
   * Полная ширина
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Отключено
   * @default false
   */
  disabled?: boolean;

  /**
   * Загружается
   * @default false
   */
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'contained',
      size = 'medium',
      color = 'primary',
      fullWidth = false,
      disabled = false,
      isLoading = false,
      type = 'button',
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        type={type}
        variant={variant}
        size={size}
        color={color}
        fullWidth={fullWidth}
        disabled={disabled || isLoading}
        {...rest}
      >
        {isLoading ? '...' : children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
