/**
 * MenuItem Component
 * 
 * Компонент элемента меню из Figma Design Library
 * Поддерживает состояния: Default, Hover, Focused
 * Адаптивность для Web и Tablet
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, SxProps } from '@mui/material';

// ============================================================================
// DESIGN TOKENS
// ============================================================================

const COLORS = {
  white: '#ffffff',
  grayBg: '#f6f7f7',
  blackText: '#192434',
  redBadgeBg: '#f65e70',
  whiteBadgeText: '#ffffff',
  whiteBadgeBorder: '#ffffff',
} as const;

const SPACING = {
  2: '2px',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  18: '18px',
} as const;

const CORNERS = {
  8: '8px',
  10: '10px',
  16: '16px',
} as const;

const TYPOGRAPHY = {
  fontFamily: '"Inter", sans-serif',
  fontSize14: '14px',
  fontSize11: '11px',
  fontWeightMedium: 500,
  fontWeightRegular: 400,
  lineHeight24: '24px',
  lineHeight16: '16px',
  letterSpacingNeg022: '-0.22px',
  letterSpacingNeg028: '-0.28px',
} as const;

// ============================================================================
// TYPES
// ============================================================================

export type MenuItemState = 'Default' | 'Hover' | 'Focused';
export type MenuItemVariant = 'web' | 'tablet';

export interface MenuItemProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Состояние элемента меню
   * @default 'Default'
   */
  state?: MenuItemState;
  
  /**
   * Вариант отображения
   * @default 'web'
   */
  variant?: MenuItemVariant;
  
  /**
   * Текст элемента меню
   * @default 'Контактные данные'
   */
  text?: string;
  
  /**
   * Показывать ли бейдж с уведомлением
   * @default false
   */
  showNotification?: boolean;
  
  /**
   * Количество уведомлений в бейдже
   * @default 3
   */
  notificationCount?: number;
  
  /**
   * Обработчик клика
   */
  onClick?: () => void;
  
  /**
   * Material-UI sx prop для дополнительного стилизования
   */
  sx?: SxProps;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const MenuItemContainer = styled(Box)<{
  $state: MenuItemState;
  $variant: MenuItemVariant;
}>(({ theme, $state, $variant }) => {
  const isHoverOrFocused = $state === 'Hover' || $state === 'Focused';
  const isTablet = $variant === 'tablet';
  const isFocused = $state === 'Focused';
  
  return {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: isHoverOrFocused && !isTablet ? COLORS.grayBg : COLORS.white,
    borderRadius: CORNERS[8],
    padding: isTablet && isFocused ? `${SPACING[18]}` : `${SPACING[18]} ${SPACING[8]} ${SPACING[18]} ${SPACING[16]}`,
    gap: SPACING[12],
    width: isTablet ? 'auto' : '360px',
    justifyContent: isTablet ? 'center' : 'flex-start',
    cursor: 'pointer',
    transition: 'all 200ms ease-in-out',
    '&:hover': {
      backgroundColor: COLORS.grayBg,
    },
  };
});

const IconTitleContainer = styled(Box)<{
  $variant: MenuItemVariant;
}>(({ theme, $variant }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: SPACING[12],
  flex: $variant === 'web' ? 1 : 'none',
  minWidth: $variant === 'web' ? '0' : 'auto',
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: '24px',
  height: '24px',
  position: 'relative',
  flexShrink: 0,
}));

const MenuText = styled(Typography)(({ theme }) => ({
  fontFamily: TYPOGRAPHY.fontFamily,
  fontSize: TYPOGRAPHY.fontSize14,
  fontWeight: TYPOGRAPHY.fontWeightMedium,
  lineHeight: TYPOGRAPHY.lineHeight24,
  color: COLORS.blackText,
  whiteSpace: 'nowrap',
  flexShrink: 0,
}));

const NotificationBadge = styled(Box)(({ theme }) => ({
  backgroundColor: COLORS.redBadgeBg,
  border: `1.5px solid ${COLORS.whiteBadgeBorder}`,
  borderRadius: CORNERS[10],
  minWidth: '20px',
  padding: `${SPACING[2]} ${SPACING[4]}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
}));

const NotificationText = styled(Typography)(({ theme }) => ({
  fontFamily: TYPOGRAPHY.fontFamily,
  fontSize: TYPOGRAPHY.fontSize11,
  fontWeight: TYPOGRAPHY.fontWeightMedium,
  lineHeight: TYPOGRAPHY.lineHeight16,
  color: COLORS.whiteBadgeText,
  letterSpacing: TYPOGRAPHY.letterSpacingNeg022,
  whiteSpace: 'nowrap',
  textAlign: 'center',
}));

const ArrowIcon = styled(Box)(({ theme }) => ({
  width: '24px',
  height: '24px',
  position: 'relative',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    width: '5.165px',
    height: '9.054px',
    backgroundColor: COLORS.blackText,
    clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
    transform: 'rotate(-90deg)',
  },
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  (
    {
      className,
      state = 'Default',
      variant = 'web',
      text = 'Контактные данные',
      showNotification = false,
      notificationCount = 3,
      onClick,
      sx,
      ...rest
    },
    ref
  ) => {
    const isWeb = variant === 'web';

    return (
      <MenuItemContainer
        ref={ref}
        className={className}
        $state={state}
        $variant={variant}
        onClick={onClick}
        sx={sx}
        {...rest}
        data-node-id="77:36425"
      >
        <IconTitleContainer $variant={variant} data-node-id="77:36426">
          <IconContainer data-node-id="78:3391">
            {/* Profile Icon Placeholder */}
            <Box
              sx={{
                position: 'absolute',
                top: '8.33%',
                left: '8.33%',
                right: '8.33%',
                bottom: '8.76%',
                backgroundColor: '#e8e9eb',
                borderRadius: '50%',
              }}
              data-node-id="78:3389"
            />
            <Box
              sx={{
                position: 'absolute',
                top: '8.33%',
                left: '8.33%',
                right: '8.33%',
                bottom: '8.33%',
                backgroundColor: '#47505d',
                borderRadius: '50%',
              }}
              data-node-id="78:3390"
            />
          </IconContainer>
          
          {isWeb && (
            <MenuText data-node-id="77:36428">
              {text}
            </MenuText>
          )}
          
          {showNotification && (
            <NotificationBadge data-node-id="78:3550">
              <NotificationText data-node-id="I78:3550;33:16424;62:35">
                {notificationCount}
              </NotificationText>
            </NotificationBadge>
          )}
        </IconTitleContainer>
        
        {isWeb && (
          <ArrowIcon data-node-id="78:3467" />
        )}
      </MenuItemContainer>
    );
  }
);

MenuItem.displayName = 'MenuItem';
