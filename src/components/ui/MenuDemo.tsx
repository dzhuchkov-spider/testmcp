import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { MenuItem, Menu, MenuExit } from './index';

export const MenuDemo: React.FC = () => {
  const handleMenuItemClick = (item: string) => {
    console.log(`Clicked: ${item}`);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Menu Components Demo
        </Typography>
        
        <Typography variant="body1" sx={{ mb: 3 }}>
          Компоненты меню, созданные на основе Figma дизайна
        </Typography>

        {/* Single MenuItem Demo */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            MenuItem Component
          </Typography>
          <MenuItem 
            text="Контактные данные" 
            onClick={() => handleMenuItemClick('Контактные данные')}
          />
          <Box sx={{ mt: 2 }}>
            <MenuItem 
              text="Платежи" 
              showNotif 
              count={5}
              onClick={() => handleMenuItemClick('Платежи')}
            />
          </Box>
        </Box>

        {/* Full Menu Demo */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Menu Component
          </Typography>
          <Menu />
        </Box>

        {/* Menu with Exit Button Demo */}
        <Box>
          <Typography variant="h6" gutterBottom>
            MenuExit Component
          </Typography>
          <MenuExit onLogout={handleLogout} />
        </Box>
      </Box>
    </Container>
  );
};

export default MenuDemo;
