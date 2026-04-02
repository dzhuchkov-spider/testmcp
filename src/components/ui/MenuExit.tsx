import React from 'react';
import { styled } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { themeColors } from '@/shared/config/theme/theme';
import { Menu } from './Menu';

// ========================================================================
// MenuExit Component - Based on Figma design
// Node ID: 79-7493
// ========================================================================

interface MenuExitProps {
  className?: string;
  onLogout?: () => void;
}

const MenuExitContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  alignItems: 'flex-start',
});

const ExitButton = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  padding: '16px 8px 16px 14px',
  borderRadius: '16px',
  backgroundColor: themeColors.gray[50], // Elements/buttons/action/bg-gray-default
  width: '100%',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    backgroundColor: themeColors.gray[100],
  },
  '&:active': {
    backgroundColor: themeColors.gray[200],
  },
});

const ExitText = styled(Typography)({
  fontFamily: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  color: themeColors.gray[500], // Elements/buttons/action/text-&-icon-gray
  textAlign: 'center',
  letterSpacing: '-0.28px',
  whiteSpace: 'nowrap',
});

const ExitIcon = styled('svg')({
  width: '24px',
  height: '24px',
  flexShrink: 0,
});

export const MenuExit: React.FC<MenuExitProps> = ({ className, onLogout }) => {
  return (
    <MenuExitContainer className={className}>
      <Menu />
      
      <ExitButton onClick={onLogout}>
        <ExitText>Выйти из аккаунта</ExitText>
        <ExitIcon
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
            stroke={themeColors.gray[500]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 17L21 12L16 7"
            stroke={themeColors.gray[500]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 12H9"
            stroke={themeColors.gray[500]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </ExitIcon>
      </ExitButton>
    </MenuExitContainer>
  );
};

export default MenuExit;
