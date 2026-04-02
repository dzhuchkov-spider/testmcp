import React from 'react';
import { styled } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { themeColors } from '@/shared/config/theme/theme';
import { MenuItem } from './MenuItem';

// ========================================================================
// Menu Component - Based on Figma design
// Node ID: 78-7072
// ========================================================================

interface MenuProps {
  className?: string;
}

const MenuContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  alignItems: 'flex-end',
  overflow: 'hidden',
  padding: '8px',
  borderRadius: '16px',
  width: '290px',
  backgroundColor: themeColors.gray[0],
});

// Icon components for different menu items
const NotificationIcon = styled('svg')({
  width: '24px',
  height: '24px',
});

const WalletIcon = styled('svg')({
  width: '24px',
  height: '24px',
});

const AddressIcon = styled('svg')({
  width: '24px',
  height: '24px',
});

const ReviewIcon = styled('svg')({
  width: '24px',
  height: '24px',
});

const RequestsIcon = styled('svg')({
  width: '24px',
  height: '24px',
});

const SettingsIcon = styled('svg')({
  width: '24px',
  height: '24px',
});

const ArrowIcon = styled('svg')({
  width: '24px',
  height: '24px',
  flexShrink: 0,
  transform: 'rotate(180deg)',
});

// Custom menu item with different icons
const CustomMenuItem = styled(Box, {
  shouldForwardProp: (prop) => !['showNotif'].includes(prop as string),
})<{ showNotif?: boolean }>(({ theme, showNotif }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5), // 12px
  padding: `${theme.spacing(2.25)} ${theme.spacing(1)} ${theme.spacing(2.25)} ${theme.spacing(2)}`, // 18px 8px 18px 16px
  borderRadius: theme.spacing(1), // 8px
  backgroundColor: themeColors.gray[0],
  width: '100%',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    backgroundColor: themeColors.gray[50],
  },
}));

const IconWrapper = styled(Box)({
  width: '24px',
  height: '24px',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const MenuText = styled(Typography)({
  fontFamily: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '24px',
  color: themeColors.gray[900],
  whiteSpace: 'nowrap',
  flex: '1 0 0',
});

const CounterBadge = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '20px',
  padding: '2px 4px',
  backgroundColor: '#f65e70', // Elements/bages/bg/red
  border: '1.5px solid #ffffff',
  borderRadius: '10px',
  flexShrink: 0,
});

const CounterText = styled(Typography)({
  fontFamily: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  fontSize: '11px',
  fontWeight: 500,
  lineHeight: '16px',
  color: '#ffffff',
  textAlign: 'center',
  letterSpacing: '-0.22px',
  whiteSpace: 'nowrap',
});

export const Menu: React.FC<MenuProps> = ({ className }) => {
  return (
    <MenuContainer className={className}>
      <MenuItem text="Контактные данные" />
      
      <CustomMenuItem>
        <IconWrapper>
          <NotificationIcon
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 5.35064 13.9398 5.68722 13.8293 6"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 11.0902 5.22047 13.206 4.34966 14.6054C3.61513 15.7859 3.24786 16.3761 3.26132 16.5408C3.27624 16.7231 3.31486 16.7926 3.46178 16.9016C3.58844 16.9966 4.19243 17 5.40039 17H18.5996C19.8076 17 20.4116 16.9966 20.5382 16.9016C20.6851 16.7926 20.7238 16.7231 20.7387 16.5408C20.7521 16.3761 20.3849 15.7859 19.6503 14.6054C18.7795 13.206 18 11.0902 18 8Z"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.10222 20.7368C9.37812 21.3061 9.78402 21.7951 10.2868 22.1721C10.7896 22.5491 11.3745 22.8032 11.9943 22.9138C12.6142 23.0244 13.2501 22.9884 13.8533 22.8086C14.4565 22.6288 15.0092 22.3099 15.4686 21.8789"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </NotificationIcon>
        </IconWrapper>
        <MenuText>Уведомления</MenuText>
        <ArrowIcon
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke={themeColors.gray[500]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </ArrowIcon>
      </CustomMenuItem>
      
      <CustomMenuItem showNotif>
        <IconWrapper>
          <WalletIcon
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="6"
              width="18"
              height="14"
              rx="2"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
            />
            <path
              d="M3 10H21"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M7 15H9"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </WalletIcon>
        </IconWrapper>
        <MenuText>Платежи</MenuText>
        <CounterBadge>
          <CounterText>3</CounterText>
        </CounterBadge>
        <ArrowIcon
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke={themeColors.gray[500]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </ArrowIcon>
      </CustomMenuItem>
      
      <CustomMenuItem>
        <IconWrapper>
          <AddressIcon
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.3639 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="10" r="3" stroke={themeColors.gray[500]} strokeWidth="2" />
          </AddressIcon>
        </IconWrapper>
        <MenuText>Адреса поставок</MenuText>
        <ArrowIcon
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke={themeColors.gray[500]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </ArrowIcon>
      </CustomMenuItem>
      
      <CustomMenuItem>
        <IconWrapper>
          <ReviewIcon
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </ReviewIcon>
        </IconWrapper>
        <MenuText>Отзывы</MenuText>
        <ArrowIcon
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke={themeColors.gray[500]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </ArrowIcon>
      </CustomMenuItem>
      
      <CustomMenuItem>
        <IconWrapper>
          <RequestsIcon
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 2V8H20"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 13H8"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16 17H8"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M10 9H9H8"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </RequestsIcon>
        </IconWrapper>
        <MenuText>Обращения</MenuText>
        <ArrowIcon
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke={themeColors.gray[500]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </ArrowIcon>
      </CustomMenuItem>
      
      <CustomMenuItem>
        <IconWrapper>
          <SettingsIcon
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="3" stroke={themeColors.gray[500]} strokeWidth="2" />
            <path
              d="M12 1V6M12 18V23M4.22 4.22L7.76 7.76M16.24 16.24L19.78 19.78M1 12H6M18 12H23M4.22 19.78L7.76 16.24M16.24 7.76L19.78 4.22"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </SettingsIcon>
        </IconWrapper>
        <MenuText>Настройки</MenuText>
        <ArrowIcon
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke={themeColors.gray[500]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </ArrowIcon>
      </CustomMenuItem>
    </MenuContainer>
  );
};

export default Menu;
