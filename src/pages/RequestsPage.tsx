/**
 * RequestsPage Component
 * 
 * Страница обращений пользователя
 */

import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Header } from '../components/ui';
import { MenuExit } from '../components/ui/MenuExit/MenuExit';

// ============================================================================
// TYPES
// ============================================================================

interface PageProps {
  onNavigateToMain?: () => void;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const PageRoot = styled(Box)(({ theme }) => ({
  display: 'block !important',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#F8F9F9',
  overflowY: 'visible',
}));

const ContentArea = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '24px',
  marginLeft: '322px', // Учитываем ширину MenuExit
}));

const PageHeading = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '48px 0 16px',
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '32px',
  fontWeight: 600,
  lineHeight: '40px',
  color: '#192434',
  margin: 0,
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const RequestsPage: React.FC<PageProps> = ({ onNavigateToMain }) => {
  return (
    <PageRoot>
      <Header />
      
      <Box sx={{ display: 'flex', height: 'calc(100vh - 80px)' }}>
        <MenuExit
          onExitClick={() => console.log('Exit clicked')}
        />
        
        <ContentArea>
          <PageHeading>
            <PageTitle>Обращения</PageTitle>
          </PageHeading>
          
          <Typography variant="body1" sx={{ color: '#666' }}>
            Здесь будут обращения в поддержку
          </Typography>
        </ContentArea>
      </Box>
    </PageRoot>
  );
};

export default RequestsPage;
