/**
 * ActionButtons Component
 * 
 * Кнопки действий из Figma дизайна
 * Поддерживает размеры: 56, 48, 40, 32, 24px
 * Типы: Favourit, Arrow Right, Arrow Left, Plus, Minus, Trash, Basket, Sent, Swap, Menu, Close, Refresh, В график, В остаток, Выйти, Сменить пароль, Add to basket
 * Состояния: Default, Hover, Active, Disable
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button as MuiButton, IconButton } from '@mui/material';

// ============================================================================
// TYPES
// ============================================================================

export type ActionButtonSize = '56' | '48' | '40' | '32' | '24';
export type ActionButtonType = 
  | 'Favourit' 
  | 'Arrow Right' 
  | 'Arrow Left' 
  | 'Plus' 
  | 'Minus' 
  | 'Trash' 
  | 'Basket' 
  | 'Sent' 
  | 'Swap' 
  | 'Menu' 
  | 'Close' 
  | 'Refresh' 
  | 'В график' 
  | 'В остаток' 
  | 'Выйти' 
  | 'Сменить пароль' 
  | 'Add to basket';
export type ActionButtonState = 'Default' | 'Hover' | 'Active' | 'Disable';

export interface ActionButtonsProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Показать счетчик
   * @default false
   */
  showCounter?: boolean;
  
  /**
   * Размер кнопки
   * @default '48'
   */
  size?: ActionButtonSize;
  
  /**
   * Состояние кнопки
   * @default 'Default'
   */
  state?: ActionButtonState;
  
  /**
   * Тип кнопки
   * @default 'Favourit'
   */
  type?: ActionButtonType;
  
  /**
   * Обработчик клика
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /**
   * Отключена ли кнопка
   */
  disabled?: boolean;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const ActionButtonContainer = styled(Box)<{
  $size: ActionButtonSize;
}>(({ theme, $size }) => {
  const sizeStyles = {
    '56': { width: '56px', height: '56px' },
    '48': { width: '48px', height: '48px' },
    '40': { width: '40px', height: '40px' },
    '32': { width: '32px', height: '32px' },
    '24': { width: '24px', height: '24px' },
  };

  return {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
    position: 'relative',
    borderRadius: '12px',
    ...sizeStyles[$size],
  };
});

const ActionButton = styled(MuiButton)<{
  $size: ActionButtonSize;
  $state: ActionButtonState;
  $type: ActionButtonType;
}>(({ theme, $size, $state, $type }) => {
  const sizeStyles = {
    '56': { 
      padding: '14px',
      '&:hover': { width: '60px', height: '60px' }
    },
    '48': { 
      padding: '10px',
      '&:hover': { width: '52px', height: '52px' }
    },
    '40': { padding: '8px' },
    '32': { padding: '6px' },
    '24': { padding: '4px' },
  };

  // Базовые стили для иконных кнопок
  const baseIconStyles = {
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[200]}`,
    color: theme.palette.grey[600],
    boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.12)',
    borderRadius: '12px',
    transition: 'all 200ms ease-in-out',
    minWidth: 'unset',
    width: '100%',
    height: '100%',
    '&:hover': {
      backgroundColor: $state === 'Disable' ? theme.palette.common.white : theme.palette.grey[50],
      borderColor: $state === 'Disable' ? theme.palette.grey[200] : theme.palette.grey[300],
      transform: $state === 'Disable' ? 'none' : 'scale(1.08)',
    },
    '&:active': {
      backgroundColor: theme.palette.grey[100],
      transform: 'scale(1)',
    },
    '&:disabled': {
      backgroundColor: theme.palette.common.white,
      borderColor: theme.palette.grey[200],
      color: theme.palette.grey[300],
    },
  };

  // Стили для кнопок с текстом
  const textButtonStyles = {
    backgroundColor: theme.palette.common.white,
    border: 'none',
    color: theme.palette.grey[600],
    borderRadius: '12px',
    transition: 'all 200ms ease-in-out',
    textTransform: 'none',
    fontWeight: 400,
    fontSize: '14px',
    padding: '8px 14px 8px 8px',
    gap: '4px',
    '&:hover': {
      backgroundColor: $state === 'Disable' ? theme.palette.common.white : theme.palette.grey[50],
      color: $state === 'Disable' ? theme.palette.grey[400] : theme.palette.grey[700],
    },
    '&:disabled': {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.grey[300],
    },
  };

  // Зеленые кнопки (Add to basket)
  const greenButtonStyles = {
    backgroundColor: $state === 'Disable' 
      ? theme.palette.success.light 
      : theme.palette.success.main,
    color: theme.palette.common.white,
    border: 'none',
    borderRadius: '12px',
    transition: 'all 200ms ease-in-out',
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '14px',
    padding: '12px 24px 12px 20px',
    gap: '8px',
    height: '48px',
    '&:hover': {
      backgroundColor: $state === 'Disable' 
        ? theme.palette.success.light 
        : theme.palette.success.dark,
    },
    '&:disabled': {
      backgroundColor: theme.palette.success.light,
      color: theme.palette.common.white,
    },
  };

  // Определяем стиль в зависимости от типа
  if ($type === 'Add to basket') {
    return greenButtonStyles;
  }
  
  if (['Сменить пароль'].includes($type)) {
    return textButtonStyles;
  }

  return {
    ...baseIconStyles,
    ...sizeStyles[$size],
  };
});

const IconWrapper = styled(Box)<{ $size: ActionButtonSize }>(
  ({ theme, $size }) => {
    const iconSizes = {
      '56': { width: '32px', height: '32px' },
      '48': { width: '28px', height: '28px' },
      '40': { width: '24px', height: '24px' },
      '32': { width: '20px', height: '20px' },
      '24': { width: '16px', height: '16px' },
    };

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...iconSizes[$size],
    };
  }
);

// ============================================================================
// COMPONENT
// ============================================================================

export const ActionButtons = forwardRef<HTMLButtonElement, ActionButtonsProps>(
  (
    {
      className,
      showCounter = false,
      size = '48',
      state = 'Default',
      type = 'Favourit',
      onClick,
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || state === 'Disable';

    // Иконки для разных типов (заглушки, можно заменить на реальные SVG)
    const getIconContent = () => {
      switch (type) {
        case 'Favourit':
          return '❤️';
        case 'Arrow Right':
          return '→';
        case 'Arrow Left':
          return '←';
        case 'Plus':
          return '+';
        case 'Minus':
          return '-';
        case 'Trash':
          return '🗑️';
        case 'Basket':
          return '🛒';
        case 'Sent':
          return '📤';
        case 'Swap':
          return '⇄';
        case 'Menu':
          return '☰';
        case 'Close':
          return '✕';
        case 'Refresh':
          return '↻';
        case 'В график':
          return '📊';
        case 'В остаток':
          return '📦';
        case 'Выйти':
          return '🚪';
        case 'Сменить пароль':
          return '🔑';
        case 'Add to basket':
          return '🛒';
        default:
          return '';
      }
    };

    const getButtonText = () => {
      switch (type) {
        case 'Сменить пароль':
          return 'Сменить пароль';
        case 'Add to basket':
          return 'Добавить в корзину';
        default:
          return '';
      }
    };

    return (
      <ActionButtonContainer
        className={className}
        $size={size}
      >
        <ActionButton
          ref={ref}
          $size={size}
          $state={state}
          $type={type}
          onClick={onClick}
          disabled={isDisabled}
          {...rest}
        >
          {['Сменить пароль', 'Add to basket'].includes(type) ? (
            <>
              <IconWrapper $size={size}>
                {getIconContent()}
              </IconWrapper>
              {getButtonText()}
            </>
          ) : (
            <IconWrapper $size={size}>
              {getIconContent()}
            </IconWrapper>
          )}
        </ActionButton>
      </ActionButtonContainer>
    );
  }
);

ActionButtons.displayName = 'ActionButtons';
