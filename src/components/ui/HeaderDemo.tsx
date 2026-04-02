import React from 'react';
import { styled } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { Header } from './Header';

// ========================================================================
// Header Demo Component
// ========================================================================

const HeaderDemoContainer = styled(Box)({
  padding: '24px',
  backgroundColor: '#f5f5f5',
  minHeight: '100vh',
});

const DemoSection = styled(Box)({
  marginBottom: '32px',
});

const SectionTitle = styled(Typography)({
  fontFamily: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  fontSize: '20px',
  fontWeight: 600,
  color: '#1A1F2E',
  marginBottom: '16px',
});

const DemoCard = styled(Box)({
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '24px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  marginBottom: '16px',
});

export const HeaderDemo: React.FC = () => {
  return (
    <HeaderDemoContainer>
      <DemoSection>
        <SectionTitle>Header Component Demo</SectionTitle>
        
        <DemoCard>
          <SectionTitle variant="h6">Default Header</SectionTitle>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Основной хедер с логотипом, поиском и кнопками действий
            </Typography>
            <Header />
          </Box>
        </DemoCard>

        <DemoCard>
          <SectionTitle variant="h6">Features</SectionTitle>
          <Box component="ul" sx={{ pl: 2, color: '#666' }}>
            <li>Responsive дизайн</li>
            <li>Интегрированный поиск с иконкой</li>
            <li>Кнопки действий: каталог, корзина с бейджем, избранное, профиль</li>
            <li>Логотип MTGAgro с кастомной иконкой</li>
            <li>Использует Material-UI и кастомные цвета темы</li>
            <li>Hover эффекты на всех интерактивных элементах</li>
          </Box>
        </DemoCard>

        <DemoCard>
          <SectionTitle variant="h6">Техническая информация</SectionTitle>
          <Box component="ul" sx={{ pl: 2, color: '#666' }}>
            <li>Основан на Figma дизайне (Node ID: 29-16401)</li>
            <li>Использует styled components из @mui/material</li>
            <li>Следует дизайн-системе проекта</li>
            <li>Все иконки встроены как SVG компоненты</li>
            <li>Поддерживает className для кастомизации</li>
          </Box>
        </DemoCard>
      </DemoSection>
    </HeaderDemoContainer>
  );
};

export default HeaderDemo;
