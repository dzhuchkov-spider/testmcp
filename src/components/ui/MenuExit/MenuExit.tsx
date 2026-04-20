/**
 * MenuExit Component
 * 
 * Пиксель-перфект компонент меню с кнопкой выхода из Figma Design Library
 * Точные размеры и позиционирование как в дизайне
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { MenuItem, MenuItemProps, MenuItemIconType } from '../MenuItem/MenuItem';
import { Logout as LogoutIcon } from '@mui/icons-material';

// ============================================================================
// DESIGN TOKENS (точные значения из Figma)
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
   * Обработчик клика по кнопке выхода (для обратной совместимости)
   */
  onLogout?: () => void;
  
  /**
   * Дополнительные пункты меню
   */
  additionalItems?: Array<{
    text: string;
    iconType: MenuItemIconType;
    href: string;
    showNotification?: boolean;
    notificationCount?: number;
  }>;
  
  /**
   * Material-UI sx prop для дополнительного стилизования
   */
  sx?: object;
}

// ============================================================================
// STYLED COMPONENTS (точные размеры из Figma)
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

const ExitButton = styled('button')(({ theme }) => ({
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
  border: 'none',
  outline: 'none',
  background: 'transparent',
  fontFamily: 'inherit',
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
  margin: 0,
}));

const ExitButtonIconContainer = styled(Box)(({ theme }) => ({
  width: '24px',
  height: '24px',
  position: 'relative',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const MenuExit = forwardRef<HTMLDivElement, MenuExitProps>(
  (
    {
      className,
      onExitClick,
      onLogout,
      additionalItems = [],
      sx,
      ...rest
    },
    ref
  ) => {
    const handleExitClick = () => {
      if (onExitClick) onExitClick();
      if (onLogout) onLogout();
    };
    // Стандартные пункты меню с точными иконками из Figma и путями навигации
    const defaultMenuItems: Array<{
      text: string;
      iconType: MenuItemIconType;
      href: string;
      showNotification?: boolean;
      notificationCount?: number;
    }> = [
      { text: 'Контактные данные', iconType: 'Profile', href: '/profile' },
      { text: 'Уведомления', iconType: 'Notification', href: '/notifications', showNotification: true, notificationCount: 3 },
      { text: 'Кошелёк', iconType: 'Wallet', href: '/mybalance' },
      { text: 'Адреса', iconType: 'Address', href: '/addresses' },
      { text: 'Отзывы', iconType: 'Review', href: '/reviews' },
      { text: 'Обращения', iconType: 'Requests', href: '/requests' },
      { text: 'Настройки', iconType: 'Setting', href: '/settings' },
    ];

    const menuItems = [...defaultMenuItems, ...additionalItems];

    return (
      <MenuExitContainer
        ref={ref}
        className={className}
        sx={sx}
        {...rest}
        data-node-id="79:7493"
      >
        <MenuContainer data-node-id="78:7072">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              style={{ textDecoration: 'none', width: '100%', flexShrink: 0 }}
            >
              <MenuItem
                variant="web"
                state="Default"
                iconType={item.iconType}
                text={item.text}
                showNotification={item.showNotification}
                notificationCount={item.notificationCount}
                sx={{ width: '100%', flexShrink: 0 }}
                data-node-id={
                  index === 0 ? "77:36425" :
                  `78:${6945 + index - 1}`
                }
              />
            </Link>
          ))}
        </MenuContainer>
        
        <ExitButton
          onClick={handleExitClick}
          data-node-id="79:7488"
        >
          <ExitButtonText data-node-id="I79:7488;53:1791">
            Выйти из аккаунта
          </ExitButtonText>
          <ExitButtonIconContainer data-node-id="I79:7488;53:1792">
            <LogoutIcon 
              sx={{ 
                width: '24px', 
                height: '24px',
                color: COLORS.grayText,
              }} 
            />
          </ExitButtonIconContainer>
        </ExitButton>
      </MenuExitContainer>
    );
  }
);

MenuExit.displayName = 'MenuExit';
