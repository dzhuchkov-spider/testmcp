/**
 * MainButtons Component
 * 
 * Основные кнопки дизайна из Figma
 * Поддерживает размеры: 56, 52, 48, 40px
 * Типы: Primary, Secondary
 * Состояния: Default, Hover, Disable
 * Опции: иконки, текст, положение иконок
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button as MuiButton } from '@mui/material';

// Иконки из Figma
const arrowIcon = "https://www.figma.com/api/mcp/asset/74e5b06b-f941-4c8a-b5e2-c92abf1225f2";

// ============================================================================
// TYPES
// ============================================================================

export type MainButtonSize = '56' | '52' | '48' | '40';
export type MainButtonType = 'Primary' | 'Secondary';
export type MainButtonState = 'Default' | 'Hover' | 'Disable';

export interface MainButtonsProps {
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
   * @default false
   */
  leftRight?: boolean;
  
  /**
   * Размер кнопки
   * @default '56'
   */
  size?: MainButtonSize;
  
  /**
   * Состояние кнопки
   * @default 'Default'
   */
  state?: MainButtonState;
  
  /**
   * Показать текст
   * @default true
   */
  text?: boolean;
  
  /**
   * Тип кнопки
   * @default 'Primary'
   */
  type?: MainButtonType;
  
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
  
  /**
   * Полная ширина
   */
  fullWidth?: boolean;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const ButtonContainer = styled(Box)<{
  $size: MainButtonSize;
  $fullWidth?: boolean;
}>(({ theme, $size, $fullWidth }) => {
  const sizeStyles = {
    '56': { height: '56px', minWidth: '92px' },
    '52': { height: '52px', minWidth: '92px' },
    '48': { height: '48px', minWidth: '86px' },
    '40': { height: '40px', minWidth: 'auto' },
  };

  return {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    width: $fullWidth ? '100%' : 'auto',
    ...sizeStyles[$size],
  };
});

const StyledButton = styled(MuiButton)<{
  $type: MainButtonType;
  $size: MainButtonSize;
  $state: MainButtonState;
  $hasIcon: boolean;
  $leftRight: boolean;
  $hasText: boolean;
}>(({ theme, $type, $size, $state, $hasIcon, $leftRight, $hasText }) => {
  // Размеры и отступы
  const sizeStyles = {
    '56': {
      padding: $leftRight && $hasIcon ? '14px 20px 14px 24px' : '16px 20px',
      fontSize: '16px',
      lineHeight: '20px',
    },
    '52': {
      padding: $leftRight && $hasIcon ? '14px 20px 14px 24px' : '14px 20px',
      fontSize: '16px',
      lineHeight: '20px',
    },
    '48': {
      padding: $leftRight && $hasIcon ? '12px 20px 12px 24px' : '12px 20px',
      fontSize: '14px',
      lineHeight: '18px',
    },
    '40': {
      padding: $leftRight && $hasIcon ? '8px 20px 8px 24px' : '8px 20px',
      fontSize: '14px',
      lineHeight: '18px',
    },
  };

  // Стили для Primary типа
  const primaryStyles = {
    backgroundColor: $state === 'Disable' 
      ? theme.palette.grey[300] 
      : theme.palette.primary.main,
    color: theme.palette.common.white,
    border: 'none',
    fontWeight: 600,
    textTransform: 'none',
    borderRadius: '12px',
    transition: 'all 200ms ease-in-out',
    '&:hover': {
      backgroundColor: $state === 'Disable' 
        ? theme.palette.grey[300] 
        : theme.palette.primary.dark,
      transform: $state === 'Disable' ? 'none' : 'translateY(-1px)',
    },
    '&:active': {
      backgroundColor: $state === 'Disable' 
        ? theme.palette.grey[300] 
        : theme.palette.primary.dark,
      transform: 'translateY(0px)',
    },
    '&:disabled': {
      backgroundColor: theme.palette.grey[300],
      color: theme.palette.grey[500],
    },
  };

  // Стили для Secondary типа
  const secondaryStyles = {
    backgroundColor: theme.palette.common.white,
    color: $state === 'Disable' 
      ? theme.palette.grey[400] 
      : theme.palette.primary.main,
    border: `1px solid ${$state === 'Disable' ? theme.palette.grey[300] : theme.palette.primary.main}`,
    fontWeight: 600,
    textTransform: 'none',
    borderRadius: '12px',
    transition: 'all 200ms ease-in-out',
    '&:hover': {
      backgroundColor: $state === 'Disable' 
        ? 'transparent' 
        : theme.palette.primary.light,
      borderColor: $state === 'Disable' 
        ? theme.palette.grey[300] 
        : theme.palette.primary.dark,
      transform: $state === 'Disable' ? 'none' : 'translateY(-1px)',
    },
    '&:active': {
      backgroundColor: $state === 'Disable' 
        ? 'transparent' 
        : theme.palette.primary.light,
      borderColor: $state === 'Disable' 
        ? theme.palette.grey[300] 
        : theme.palette.primary.dark,
      transform: 'translateY(0px)',
    },
    '&:disabled': {
      borderColor: theme.palette.grey[300],
      color: theme.palette.grey[400],
    },
  };

  return {
    ...sizeStyles[$size],
    ...($type === 'Primary' ? primaryStyles : secondaryStyles),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: theme.typography.fontFamily,
  };
});

const IconWrapper = styled(Box)<{ $position: 'left' | 'right' }>(
  ({ theme, $position }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    flexShrink: 0,
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
  })
);

// ============================================================================
// COMPONENT
// ============================================================================

export const MainButtons = forwardRef<HTMLButtonElement, MainButtonsProps>(
  (
    {
      className,
      icon = false,
      leftRight = false,
      size = '56',
      state = 'Default',
      text = true,
      type = 'Primary',
      children = 'Button',
      onClick,
      disabled = false,
      fullWidth = false,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || state === 'Disable';

    return (
      <ButtonContainer
        className={className}
        $size={size}
        $fullWidth={fullWidth}
      >
        <StyledButton
          ref={ref}
          $type={type}
          $size={size}
          $state={state}
          $hasIcon={icon}
          $leftRight={leftRight}
          $hasText={text}
          onClick={onClick}
          disabled={isDisabled}
          {...rest}
        >
          {/* Левая иконка */}
          {icon && leftRight && (
            <IconWrapper $position="left">
              <img src={arrowIcon} alt="arrow left" />
            </IconWrapper>
          )}
          
          {/* Только левая иконка */}
          {icon && !leftRight && (
            <IconWrapper $position="left">
              <img src={arrowIcon} alt="arrow" />
            </IconWrapper>
          )}
          
          {/* Текст */}
          {text && (
            <Box component="span" sx={{ py: '2px' }}>
              {children}
            </Box>
          )}
          
          {/* Правая иконка */}
          {icon && leftRight && (
            <IconWrapper $position="right">
              <img src={arrowIcon} alt="arrow right" />
            </IconWrapper>
          )}
        </StyledButton>
      </ButtonContainer>
    );
  }
);

MainButtons.displayName = 'MainButtons';
