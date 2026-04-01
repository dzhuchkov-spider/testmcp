/**
 * MenuExit Component
 * 
 * Компонент меню с кнопкой выхода из Figma Design Library
 * Содержит список пунктов меню и кнопку выхода
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { MenuItem, MenuItemProps } from '../MenuItem/MenuItem';

// ============================================================================
// DESIGN TOKENS
// ============================================================================

const COLORS = {
  white: '#ffffff',
  grayBg: '#f6f7f7',
  blackText: '#192434',
  grayText: '#a3a7ae',
} as const;

const SPACING = {
  4: '4px',
  8: '8px',
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
} as const;

const CORNERS = {
  8: '8px',
  16: '16px',
} as const;

const TYPOGRAPHY = {
  fontFamily: '"Inter", sans-serif',
  fontSize14: '14px',
  fontWeightRegular: 400,
  lineHeight20: '20px',
  letterSpacingNeg028: '-0.28px',
} as const;

// ============================================================================
// TYPES
// ============================================================================

export interface MenuExitProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Обработчик клика по кнопке выхода
   */
  onExitClick?: () => void;
  
  /**
   * Дополнительные пункты меню
   */
  additionalItems?: Omit<MenuItemProps, 'variant' | 'state'>[];
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const MenuExitContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: SPACING[16],
}));

const MenuContainer = styled(Box)(({ theme }) => ({
  backgroundColor: COLORS.white,
  borderRadius: CORNERS[16],
  padding: SPACING[8],
  display: 'flex',
  flexDirection: 'column',
  gap: SPACING[4],
  alignItems: 'flex-end',
  overflow: 'hidden',
  width: '290px',
  flexShrink: 0,
}));

const ExitButton = styled(Box)(({ theme }) => ({
  backgroundColor: COLORS.grayBg,
  borderRadius: CORNERS[16],
  padding: `${SPACING[16]} ${SPACING[8]} ${SPACING[16]} ${SPACING[14]}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: SPACING[4],
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  width: '100%',
  flexShrink: 0,
  '&:hover': {
    opacity: 0.8,
  },
}));

const ExitButtonText = styled(Typography)(({ theme }) => ({
  fontFamily: TYPOGRAPHY.fontFamily,
  fontSize: TYPOGRAPHY.fontSize14,
  fontWeight: TYPOGRAPHY.fontWeightRegular,
  lineHeight: TYPOGRAPHY.lineHeight20,
  color: COLORS.grayText,
  letterSpacing: TYPOGRAPHY.letterSpacingNeg028,
  whiteSpace: 'nowrap',
  textAlign: 'center',
}));

const ExitButtonIcon = styled(Box)(({ theme }) => ({
  width: '24px',
  height: '24px',
  position: 'relative',
  flexShrink: 0,
  '&::before': {
    content: '""',
    width: '8px',
    height: '8px',
    border: `1.5px solid ${COLORS.grayText}`,
    borderTop: 'none',
    borderLeft: 'none',
    transform: 'rotate(-45deg)',
  },
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const MenuExit = forwardRef<HTMLDivElement, MenuExitProps>(
  (
    {
      className,
      onExitClick,
      additionalItems = [],
      ...rest
    },
    ref
  ) => {
    // Стандартные пункты меню
    const defaultMenuItems = [
      { text: 'Контактные данные' },
      { text: 'Уведомления', showNotification: true, notificationCount: 3 },
      { text: 'Кошелёк' },
      { text: 'Адреса' },
      { text: 'Отзывы' },
      { text: 'Обращения' },
      { text: 'Настройки' },
    ];

    const menuItems = [...defaultMenuItems, ...additionalItems];

    return (
      <MenuExitContainer
        ref={ref}
        className={className}
        {...rest}
        data-node-id="79:7493"
      >
        <MenuContainer data-node-id="78:7072">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              variant="web"
              state="Default"
              {...item}
              sx={{ width: '100%', flexShrink: 0 }}
              data-node-id={index === 0 ? "77:36425" : `78:${6945 + index - 1}`}
            />
          ))}
        </MenuContainer>
        
        <ExitButton
          onClick={onExitClick}
          data-node-id="79:7488"
        >
          <ExitButtonText data-node-id="I79:7488;53:1791">
            Выйти из аккаунта
          </ExitButtonText>
          <ExitButtonIcon data-node-id="I79:7488;53:1792" />
        </ExitButton>
      </MenuExitContainer>
    );
  }
);

MenuExit.displayName = 'MenuExit';
