/**
 * MenuItem Component
 * 
 * Пиксель-перфект компонент элемента меню из Figma Design Library
 * Точные размеры и позиционирование как в дизайне
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import ProfileIcon from '@/assets/icons/SideMenu/Profile.svg?url';
import NotificationIcon from '@/assets/icons/SideMenu/Notification.svg?url';
import WalletIcon from '@/assets/icons/SideMenu/Wallet.svg?url';
import AddressIcon from '@/assets/icons/SideMenu/Address.svg?url';
import SettingIcon from '@/assets/icons/SideMenu/Setting.svg?url';
import CheckIcon from '@/assets/icons/SideMenu/Check.svg?url';
import ReviewIcon from '@/assets/icons/SideMenu/Review.svg?url';
import RequestsIcon from '@/assets/icons/SideMenu/Requests.svg?url';
import ListIcon from '@/assets/icons/SideMenu/List.svg?url';
import ArrowLeftIcon from '@/assets/icons/SideMenu/Arrow-Left.svg?url';

// ============================================================================
// DESIGN TOKENS (точные значения из Figma)
// ============================================================================

const COLORS = {
  white: '#ffffff',
  grayBg: '#f6f7f7',
  blackText: '#192434',
  redBadgeBg: '#f65e70',
  whiteBadgeText: '#ffffff',
  whiteBadgeBorder: '#ffffff',
  grayText: '#a3a7ae',
} as const;

const SPACING = {
  2: '2px',
  4: '4px',
  8: '8px',
  12: '12px',
  14: '14px',
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
  lineHeight20: '20px',
  letterSpacingNeg022: '-0.22px',
  letterSpacingNeg028: '-0.28px',
} as const;

// ============================================================================
// TYPES
// ============================================================================

export type MenuItemState = 'Default' | 'Hover' | 'Focused';
export type MenuItemVariant = 'web' | 'tablet';
export type MenuItemIconType = 'Profile' | 'Notification' | 'Wallet' | 'Address' | 'Setting' | 'Check' | 'Review' | 'Requests' | 'List';

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
   * Тип иконки
   * @default 'Profile'
   */
  iconType?: MenuItemIconType;
  
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
  sx?: object;
}

// ============================================================================
// ICON COMPONENTS
// ============================================================================

const MenuIcon = ({ type, className }: { type: MenuItemIconType; className?: string }) => {
  const iconStyle = {
    width: '24px',
    height: '24px',
  };

  switch (type) {
    case 'Profile':
      return <img src={ProfileIcon} alt="Profile" style={iconStyle} className={className} />;
    case 'Notification':
      return <img src={NotificationIcon} alt="Notification" style={iconStyle} className={className} />;
    case 'Wallet':
      return <img src={WalletIcon} alt="Wallet" style={iconStyle} className={className} />;
    case 'Address':
      return <img src={AddressIcon} alt="Address" style={iconStyle} className={className} />;
    case 'Setting':
      return <img src={SettingIcon} alt="Setting" style={iconStyle} className={className} />;
    case 'Check':
      return <img src={CheckIcon} alt="Check" style={iconStyle} className={className} />;
    case 'Review':
      return <img src={ReviewIcon} alt="Review" style={iconStyle} className={className} />;
    case 'Requests':
      return <img src={RequestsIcon} alt="Requests" style={iconStyle} className={className} />;
    case 'List':
      return <img src={ListIcon} alt="List" style={iconStyle} className={className} />;
    default:
      return <img src={ProfileIcon} alt="Profile" style={iconStyle} className={className} />;
  }
};

// ============================================================================
// STYLED COMPONENTS (точные размеры из Figma)
// ============================================================================

const MenuItemContainer = styled(Box, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<{
  $state: MenuItemState;
  $variant: MenuItemVariant;
}>(({ theme, $state, $variant }) => {
  const isHoverOrFocused = $state === 'Hover' || $state === 'Focused';
  const isTablet = $variant === 'tablet';
  
  return {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: isHoverOrFocused && !isTablet ? COLORS.grayBg : COLORS.white,
    borderRadius: CORNERS[8],
    padding: isTablet ? `${SPACING[18]}` : `${SPACING[18]} ${SPACING[8]} ${SPACING[18]} ${SPACING[16]}`,
    gap: isTablet ? '0px' : SPACING[12],
    width: isTablet ? '60px' : '360px',
    height: '60px',
    justifyContent: isTablet ? 'center' : 'flex-start',
    cursor: 'pointer',
    transition: 'all 200ms ease-in-out',
    boxSizing: 'border-box',
    '&:hover': {
      backgroundColor: COLORS.grayBg,
    },
  };
});

const IconTitleContainer = styled(Box, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<{
  $variant: MenuItemVariant;
}>(({ theme, $variant }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: SPACING[12],
  flex: $variant === 'web' ? '1 0 0' : 'none',
  minWidth: $variant === 'web' ? '0' : 'auto',
  minHeight: $variant === 'web' ? '1px' : 'auto',
  maxWidth: $variant === 'web' ? 'none' : '24px',
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: '24px',
  height: '24px',
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

const ArrowIconContainer = styled(Box)(({ theme }) => ({
  width: '24px',
  height: '24px',
  position: 'absolute',
  right: '0px',
  top: '50%',
  transform: 'translateY(-50%)',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
      iconType = 'Profile',
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
        data-node-id={
          variant === 'tablet' && state === 'Default' ? "79:9128" :
          variant === 'tablet' && state === 'Focused' ? "79:9135" :
          variant === 'web' && state === 'Hover' ? "77:36432" :
          variant === 'web' && state === 'Focused' ? "77:36439" :
          "77:36425"
        }
      >
        <IconTitleContainer 
          $variant={variant} 
          data-node-id={
            variant === 'tablet' && state === 'Default' ? "79:9129" :
            variant === 'tablet' && state === 'Focused' ? "79:9136" :
            variant === 'web' && state === 'Hover' ? "77:36433" :
            variant === 'web' && state === 'Focused' ? "77:36440" :
            "77:36426"
          }
        >
          <MenuIcon 
            type={iconType} 
            data-node-id="78:3391"
          />
          
          {isWeb && (
            <>
              <MenuText data-node-id="77:36428">
                {text}
              </MenuText>
              <ArrowIconContainer 
                data-node-id={
                  state === 'Hover' ? "78:3470" :
                  state === 'Focused' ? "78:3473" :
                  "78:3467"
                }
              >
                <img 
                  src={ArrowLeftIcon} 
                  alt="Arrow" 
                  style={{ 
                    width: '5.165px', 
                    height: '9.054px',
                    color: COLORS.blackText,
                  }} 
                />
              </ArrowIconContainer>
            </>
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
          <ArrowIconContainer 
            data-node-id={
              state === 'Hover' ? "78:3470" :
              state === 'Focused' ? "78:3473" :
              "78:3467"
            }
          >
                      </ArrowIconContainer>
        )}
      </MenuItemContainer>
    );
  }
);

MenuItem.displayName = 'MenuItem';
