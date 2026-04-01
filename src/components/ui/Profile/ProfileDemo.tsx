/**
 * Profile Demo Component
 * 
 * Демонстрация компонента Profile с навигацией между представлениями
 */

import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Profile, ProfileView } from './Profile';

export const ProfileDemo: React.FC = () => {
  const [currentView, setCurrentView] = useState<ProfileView>('contact');

  const handleViewChange = (view: ProfileView) => {
    setCurrentView(view);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f6f7f7' }}>
      <Container maxWidth={false} disableGutters>
        <Box sx={{ mb: 4, p: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Profile Component Demo
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Текущее представление: {currentView === 'contact' ? 'Контактные данные' : 'Уведомления'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Нажмите на "Профиль" в хедере для перехода к уведомлениям, или на "К контактным данным" для обратного перехода.
          </Typography>
        </Box>
        
        <Profile 
          currentView={currentView}
          onViewChange={handleViewChange}
        />
      </Container>
    </Box>
  );
};

export default ProfileDemo;
