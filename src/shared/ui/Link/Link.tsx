/**
 * Link Component
 * 
 * Компонент для ссылок и текстовых кнопок
 * Поддерживает различные размеры и цвета
 */

import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { StyledLink } from './Link.styles';

export type LinkVariant = 'primary' | 'secondary' | 'error';
export type LinkSize = 'small' | 'medium' | 'large';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * Цветовая схема
   * @default 'primary'
   */
  variant?: LinkVariant;

  /**
   * Размер
   * @default 'medium'
   */
  size?: LinkSize;

  /**
   * Подчеркивание по умолчанию
   * @default 'hover'
   */
  underline?: 'none' | 'hover' | 'always';

  /**
   * Отключено
   * @default false
   */
  disabled?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      underline = 'hover',
      disabled = false,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledLink
        ref={ref}
        variant={variant}
        size={size}
        underline={underline}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </StyledLink>
    );
  }
);

Link.displayName = 'Link';
