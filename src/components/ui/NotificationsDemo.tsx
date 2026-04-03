/**
 * NotificationsDemo UI Component
 * 
 * Демо компонент для уведомлений в рамках UI библиотеки
 */

import React from 'react';
import { Box, Typography } from '@mui/material';
import { Notification } from './Notification';

const NotificationsDemo: React.FC = () => {
  const notifications = [
    {
      id: 1,
      title: 'Новый заказ #12345',
      date: '04.11.24 12:00',
      bodyText: 'Ваш заказ успешно оформлен и ожидает обработки. Ожидаемое время доставки: 3-5 рабочих дней.',
      counter: true,
      button: true,
    },
    {
      id: 2,
      title: 'Изменение статуса заказа',
      date: '04.11.24 10:30',
      bodyText: 'Ваш заказ #12344 передан в службу доставки. Курьер свяжется с вами в ближайшее время.',
      counter: false,
      button: true,
    },
    {
      id: 3,
      title: 'Специальное предложение',
      date: '03.11.24 18:45',
      bodyText: 'Только для вас! Скидка 15% на следующий заказ при покупке от 5000 рублей.',
      counter: true,
      button: true,
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        padding: '32px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: 600,
          color: '#192434',
          marginBottom: '16px'
        }}
      >
        Демо компонента Notification
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          backgroundColor: '#ffffff',
          padding: '32px',
          borderRadius: '16px',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)'
        }}
      >
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            title={notification.title}
            date={notification.date}
            bodyText={notification.bodyText}
            counter={notification.counter}
            button={notification.button}
          />
        ))}
      </Box>
    </Box>
  );
};

export default NotificationsDemo;
