/**
 * Example usage of MenuItem and MenuExit components
 */

import React from 'react';
import { Box } from '@mui/material';
import { MenuItem } from './MenuItem';
import { MenuExit } from './MenuExit';

export const MenuExample = () => {
  const handleMenuItemClick = (text: string) => {
    console.log(`Clicked on: ${text}`);
  };

  const handleExitClick = () => {
    console.log('Exit clicked');
  };

  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <h2>MenuItem Examples</h2>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <h3>Web Variant</h3>
        <MenuItem
          variant="web"
          text="Контактные данные"
          onClick={() => handleMenuItemClick('Контактные данные')}
        />
        
        <MenuItem
          variant="web"
          text="Уведомления"
          showNotification={true}
          notificationCount={5}
          onClick={() => handleMenuItemClick('Уведомления')}
        />
        
        <MenuItem
          variant="web"
          text="Кошелёк"
          state="Hover"
          onClick={() => handleMenuItemClick('Кошелёк')}
        />
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <h3>Tablet Variant</h3>
        <MenuItem
          variant="tablet"
          text="Контактные данные"
          onClick={() => handleMenuItemClick('Контактные данные (tablet)')}
        />
        
        <MenuItem
          variant="tablet"
          text="Уведомления"
          showNotification={true}
          notificationCount={3}
          onClick={() => handleMenuItemClick('Уведомления (tablet)')}
        />
      </Box>
      
      <h2>MenuExit Example</h2>
      <MenuExit
        onExitClick={handleExitClick}
        additionalItems={[
          { text: 'Дополнительный пункт 1' },
          { text: 'Дополнительный пункт 2', showNotification: true, notificationCount: 1 },
        ]}
      />
    </Box>
  );
};
