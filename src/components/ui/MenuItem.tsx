import React from 'react';
import { styled } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { themeColors } from '@/shared/config/theme/theme';

// ========================================================================
// MenuItem Component - Based on Figma design
// Node ID: 77-36424
// ========================================================================

interface MenuItemProps {
  text?: string;
  showNotif?: boolean;
  count?: number;
  state?: 'default' | 'hover' | 'focused';
  onClick?: () => void;
}

const MenuItemContainer = styled(Box, {
  shouldForwardProp: (prop) => !['state'].includes(prop as string),
})<{ state?: 'default' | 'hover' | 'focused' }>(({ theme, state = 'default' }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5), // 12px
  padding: `${theme.spacing(2.25)} ${theme.spacing(2)} ${theme.spacing(2.25)} ${theme.spacing(2)}`, // 18px 8px 18px 16px
  borderRadius: theme.spacing(1), // 8px
  backgroundColor: state === 'hover' || state === 'focused' ? themeColors.gray[50] : themeColors.gray[0],
  width: '360px',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    backgroundColor: themeColors.gray[50],
  },
}));

const IconContainer = styled(Box)({
  position: 'relative',
  width: '24px',
  height: '24px',
  flexShrink: 0,
});

const ProfileIcon = styled('svg')({
  width: '24px',
  height: '24px',
});

const ContentContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  flex: '1 0 0',
  minHeight: '1px',
  minWidth: '1px',
});

const TextContainer = styled(Typography)({
  fontFamily: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '24px',
  color: themeColors.gray[900],
  whiteSpace: 'nowrap',
  flexShrink: 0,
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

const ArrowIcon = styled('svg')({
  width: '24px',
  height: '24px',
  flexShrink: 0,
  transform: 'rotate(180deg)',
});

export const MenuItem: React.FC<MenuItemProps> = ({
  text = 'Контактные данные',
  showNotif = false,
  count = 3,
  state = 'default',
  onClick,
}) => {
  return (
    <MenuItemContainer state={state} onClick={onClick}>
      <ContentContainer>
        <IconContainer>
          <ProfileIcon
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Profile icon SVG - simplified version */}
            <circle cx="12" cy="8" r="3" fill={themeColors.gray[500]} />
            <path
              d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H14C15.0609 15 16.0783 15.4214 16.8284 16.1716C17.5786 16.9217 18 17.9391 18 19V21"
              stroke={themeColors.gray[500]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </ProfileIcon>
        </IconContainer>
        
        <TextContainer>{text}</TextContainer>
        
        {showNotif && (
          <CounterBadge>
            <CounterText>{count}</CounterText>
          </CounterBadge>
        )}
      </ContentContainer>
      
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
    </MenuItemContainer>
  );
};

export default MenuItem;
