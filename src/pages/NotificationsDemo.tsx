/**
 * NotificationsDemo Component
 * 
 * Демо компонент для тестирования страницы уведомлений
 */

import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import NotificationsPage from './NotificationsPage';

const NotificationsDemo: React.FC = () => {
  const [showPage, setShowPage] = useState(false);

  const handleNavigateToMain = () => {
    setShowPage(false);
  };

  if (showPage) {
    return <NotificationsPage onNavigateToMain={handleNavigateToMain} />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '32px',
        gap: '24px'
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: 600,
          color: '#192434',
          textAlign: 'center'
        }}
      >
        Демо страницы уведомлений
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          fontFamily: '"Inter", sans-serif',
          color: '#666',
          textAlign: 'center',
          maxWidth: '600px'
        }}
      >
        Это демонстрация страницы уведомлений, созданной по аналогии со страницей профиля.
        Нажмите кнопку ниже, чтобы открыть страницу уведомлений.
      </Typography>

      <Button
        variant="contained"
        onClick={() => setShowPage(true)}
        sx={{
          backgroundColor: '#192434',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '12px',
          fontFamily: '"Inter", sans-serif',
          fontWeight: 500,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#2a3442'
          }
        }}
      >
        Открыть страницу уведомлений
      </Button>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          marginTop: '32px',
          padding: '24px',
          backgroundColor: '#f8f9f9',
          borderRadius: '16px',
          maxWidth: '600px'
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#192434' }}>
          Особенности реализации:
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          • Полностью скопирована структура из ProfilePage.tsx
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          • Сохранилась двухколоночная сетка (MenuExit + ContentArea)
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          • Вместо карточки личных данных используется компонент Notification
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          • Все отступы и стили контейнеров сохранены
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          • Добавлены демо данные для уведомлений
        </Typography>
      </Box>
    </Box>
  );
};

export default NotificationsDemo;
