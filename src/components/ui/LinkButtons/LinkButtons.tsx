/**
 * LinkButtons Component
 * 
 * Кнопки-ссылки из Figma дизайна
 * Поддерживает размеры: 16, 14px
 * Типы: Primary, Secondary
 * Состояния: Default, Hover, Disable
 * Опции: иконки, текст, положение иконок
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button as MuiButton } from '@mui/material';

// ============================================================================
// TYPES
// ============================================================================

export type LinkButtonSize = '16' | '14';
export type LinkButtonType = 'Primary' | 'Secondary';
export type LinkButtonState = 'Default' | 'Hover' | 'Disable';

export interface LinkButtonsProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Показать иконку
   * @default false
   */
  icon?: boolean;
  
  /**
   * Иконки слева и справа
   * @default true
   */
  leftRight?: boolean;
  
  /**
   * Размер кнопки
   * @default '16'
   */
  size?: LinkButtonSize;
  
  /**
   * Состояние кнопки
   * @default 'Default'
   */
  state?: LinkButtonState;
  
  /**
   * Тип кнопки
   * @default 'Primary'
   */
  type?: LinkButtonType;
  
  /**
   * Текст кнопки
   * @default 'Button'
   */
  children?: React.ReactNode;
  
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

const LinkButtonContainer = styled(Box)<{
  $size: LinkButtonSize;
  $hasIcon: boolean;
  $leftRight: boolean;
}>(({ theme, $size, $hasIcon, $leftRight }) => {
  const sizeStyles = {
    '16': {
      minHeight: '24px',
    },
    '14': {
      minHeight: $hasIcon && $leftRight ? '28px' : '24px',
    },
  };

  return {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    ...sizeStyles[$size],
  };
});

const StyledLinkButton = styled(MuiButton)<{
  $type: LinkButtonType;
  $size: LinkButtonSize;
  $state: LinkButtonState;
  $hasIcon: boolean;
  $leftRight: boolean;
}>(({ theme, $type, $size, $state, $hasIcon, $leftRight }) => {
  // Размеры и отступы
  const sizeStyles = {
    '16': {
      padding: '4px',
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: 600,
      gap: '4px',
    },
    '14': {
      padding: '4px',
      fontSize: '14px',
      lineHeight: $hasIcon && $leftRight ? '18px' : '20px',
      fontWeight: 600,
      gap: '4px',
    },
  };

  // Стили для Primary типа
  const primaryStyles = {
    backgroundColor: 'transparent',
    color: $state === 'Disable' 
      ? theme.palette.grey[400] 
      : $state === 'Hover'
      ? theme.palette.primary.dark
      : theme.palette.primary.main,
    border: 'none',
    textTransform: 'none',
    borderRadius: '4px',
    transition: 'all 200ms ease-in-out',
    textDecoration: 'none',
    minWidth: 'unset',
    padding: '4px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: $state === 'Disable' 
        ? theme.palette.grey[400] 
        : theme.palette.primary.dark,
      textDecoration: 'underline',
    },
    '&:active': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.dark,
    },
    '&:disabled': {
      color: theme.palette.grey[400],
      backgroundColor: 'transparent',
    },
  };

  // Стили для Secondary типа
  const secondaryStyles = {
    backgroundColor: 'transparent',
    color: $state === 'Disable' 
      ? theme.palette.grey[400] 
      : $state === 'Hover'
      ? theme.palette.grey[900]
      : theme.palette.grey[600],
    border: 'none',
    textTransform: 'none',
    borderRadius: '4px',
    transition: 'all 200ms ease-in-out',
    textDecoration: 'none',
    minWidth: 'unset',
    padding: '4px',
    '&:hover': {
      backgroundColor: 'transparent',
      color: $state === 'Disable' 
        ? theme.palette.grey[400] 
        : theme.palette.grey[900],
      textDecoration: 'underline',
    },
    '&:active': {
      backgroundColor: 'transparent',
      color: theme.palette.grey[900],
    },
    '&:disabled': {
      color: theme.palette.grey[400],
      backgroundColor: 'transparent',
    },
  };

  return {
    ...sizeStyles[$size],
    ...($type === 'Primary' ? primaryStyles : secondaryStyles),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 600,
    letterSpacing: '0px',
  };
});

const IconWrapper = styled(Box)<{ $size: LinkButtonSize; $position: 'left' | 'right' }>(
  ({ theme, $size, $position }) => {
    const iconSizes = {
      '16': { width: '24px', height: '24px' },
      '14': { width: '20px', height: '20px' },
    };

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...iconSizes[$size],
      flexShrink: 0,
    };
  }
);

// ============================================================================
// COMPONENT
// ============================================================================

export const LinkButtons = forwardRef<HTMLButtonElement, LinkButtonsProps>(
  (
    {
      className,
      icon = false,
      leftRight = true,
      size = '16',
      state = 'Default',
      type = 'Primary',
      children = 'Button',
      onClick,
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || state === 'Disable';

    // Иконка стрелки (заглушка)
    const ArrowIcon = () => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          '&::before': {
            content: '"→"',
            fontSize: size === '16' ? '14px' : '12px',
          },
        }}
      />
    );

    return (
      <LinkButtonContainer
        className={className}
        $size={size}
        $hasIcon={icon}
        $leftRight={leftRight}
      >
        <StyledLinkButton
          ref={ref}
          $type={type}
          $size={size}
          $state={state}
          $hasIcon={icon}
          $leftRight={leftRight}
          onClick={onClick}
          disabled={isDisabled}
          {...rest}
        >
          {/* Левая иконка */}
          {icon && leftRight && (
            <IconWrapper $size={size} $position="left">
              <ArrowIcon />
            </IconWrapper>
          )}
          
          {/* Только левая иконка */}
          {icon && !leftRight && (
            <IconWrapper $size={size} $position="left">
              <ArrowIcon />
            </IconWrapper>
          )}
          
          {/* Текст */}
          <Box component="span" sx={{ py: icon && leftRight && size === '14' ? '2px' : '0px' }}>
            {children}
          </Box>
          
          {/* Правая иконка */}
          {icon && leftRight && (
            <IconWrapper $size={size} $position="right">
              <ArrowIcon />
            </IconWrapper>
          )}
        </StyledLinkButton>
      </LinkButtonContainer>
    );
  }
);

LinkButtons.displayName = 'LinkButtons';
