/**
 * Example usage of pixel-perfect MenuItem and MenuExit components
 */

import React from 'react';
import { Box, Typography } from '@mui/material';
import { MenuItem, MenuItemIconType } from './MenuItem';
import { MenuExit } from './MenuExit';

export const MenuExample = () => {
  const handleMenuItemClick = (text: string) => {
    console.log(`Clicked on: ${text}`);
  };

  const handleExitClick = () => {
    console.log('Exit clicked');
  };

  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        MenuItem - Pixel Perfect Examples
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="subtitle1">Web Variant (360px width)</Typography>
        
        <MenuItem
          variant="web"
          iconType="Profile"
          text="Контактные данные"
          onClick={() => handleMenuItemClick('Контактные данные')}
        />
        
        <MenuItem
          variant="web"
          iconType="Notification"
          text="Уведомления"
          showNotification={true}
          notificationCount={5}
          onClick={() => handleMenuItemClick('Уведомления')}
        />
        
        <MenuItem
          variant="web"
          iconType="Wallet"
          text="Кошелёк"
          state="Hover"
          onClick={() => handleMenuItemClick('Кошелёк')}
        />
        
        <MenuItem
          variant="web"
          iconType="Setting"
          text="Настройки"
          state="Focused"
          onClick={() => handleMenuItemClick('Настройки')}
        />
      </Box>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: 2 }}>
        <Typography variant="subtitle1">Tablet Variant (60px width)</Typography>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          <MenuItem
            variant="tablet"
            iconType="Profile"
            onClick={() => handleMenuItemClick('Контактные данные (tablet)')}
          />
          
          <MenuItem
            variant="tablet"
            iconType="Notification"
            showNotification={true}
            notificationCount={3}
            onClick={() => handleMenuItemClick('Уведомления (tablet)')}
          />
          
          <MenuItem
            variant="tablet"
            iconType="Wallet"
            state="Focused"
            onClick={() => handleMenuItemClick('Кошелёк (tablet)')}
          />
        </Box>
      </Box>
      
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
          MenuExit - Complete Menu (290px width)
        </Typography>
        <MenuExit
          onExitClick={handleExitClick}
          additionalItems={[
            { 
              text: 'Дополнительный пункт 1', 
              iconType: 'Check' as MenuItemIconType 
            },
            { 
              text: 'Дополнительный пункт 2', 
              iconType: 'List' as MenuItemIconType,
              showNotification: true, 
              notificationCount: 1 
            },
          ]}
        />
      </Box>
      
      <Box sx={{ marginTop: 2, padding: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          Design Specifications:
        </Typography>
        <Typography variant="body2" component="div">
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>MenuItem Web: 360px × 60px</li>
            <li>MenuItem Tablet: 60px × 60px</li>
            <li>MenuExit: 290px × 660px</li>
            <li>Border Radius: 8px (items), 16px (container)</li>
            <li>Spacing: 8px, 12px, 14px, 16px, 18px</li>
            <li>Typography: Inter 14px Medium, 11px Medium (badge)</li>
            <li>Colors: #ffffff, #f6f7f7, #192434, #f65e70, #a3a7ae</li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};
