/**
 * ReviewsPage Component
 * 
 * Страница отзывов пользователя
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { Header, MenuExit, Input } from '../components/ui';

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

const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '16px 152px 16px',
}));

const ProfileHeading = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '48px 0 16px',
}));

const ProfileTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: '36px',
  letterSpacing: '-1px',
  color: '#192434',
  margin: 0,
}));

const MoreVertButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    backgroundColor: '#f6f7f7',
    transform: 'translateY(-1px)',
  },
}));

const CompanyInfoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '32px',
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  marginBottom: '16px',
}));

const CompanyTextBlock = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

const CompanyTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '22px',
  letterSpacing: '-1px',
  color: '#192434',
  margin: 0,
}));

const CompanyAddressText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  color: '#192434',
  margin: 0,
}));

const CompanyActionButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  backgroundColor: '#f6f7f7',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    backgroundColor: '#e8e9eb',
    transform: 'translateY(-1px)',
  },
}));

const ContentLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '16px',
  width: '100%',
}));

const MenuSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '290px',
  flexShrink: 0,
}));

const InputsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1208px',
}));

const FormSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '16px',
  width: '100%',
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '22px',
  fontWeight: 600,
  lineHeight: '28px',
  letterSpacing: '-1px',
  color: '#192434',
  margin: 0,
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const ReviewsPage: React.FC<PageProps> = ({ onNavigateToMain }) => {
  const [basketCount, setBasketCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  // Обработчики для Header
  const handleLogoClick = () => {
    if (onNavigateToMain) {
      onNavigateToMain();
    }
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
  };

  const handleBasketClick = () => {
    console.log('Basket clicked');
  };

  const handleLikeClick = () => {
    console.log('Like clicked');
  };

  const handleCatalogClick = () => {
    console.log('Catalog clicked');
  };

  // Обработчик для выхода
  const handleLogout = () => {
    console.log('Logout clicked');
    if (onNavigateToMain) {
      onNavigateToMain();
    }
  };

  return (
    <PageRoot>
      {/* Header компонент */}
      <Header
        size="Desk"
        state="Logged in"
        onLogoClick={handleLogoClick}
        onProfileClick={handleProfileClick}
        onBasketClick={handleBasketClick}
        onLikeClick={handleLikeClick}
        onCatalogClick={handleCatalogClick}
        basketCount={basketCount}
        likeCount={likeCount}
      />

      {/* Основной контент */}
      <MainContent>
        {/* Заголовок страницы */}
        <ProfileHeading>
          <ProfileTitle>Личный кабинет</ProfileTitle>
          <MoreVertButton>
            <MoreVert sx={{ fontSize: 24, color: '#192434' }} />
          </MoreVertButton>
        </ProfileHeading>

        {/* Информация о компании */}
        <CompanyInfoSection>
          <CompanyTextBlock>
            <CompanyTitle>ООО «Добронравов Групп»</CompanyTitle>
            <CompanyAddressText>г. Москва, ул. Примерная, д. 123</CompanyAddressText>
          </CompanyTextBlock>
          
          <CompanyActionButton>
            <MoreVert sx={{ fontSize: 20, color: '#192434' }} />
          </CompanyActionButton>
        </CompanyInfoSection>

        {/* Двухколоночная структура: Меню слева, Инпуты справа */}
        <ContentLayout>
          {/* Левая колонка: Меню */}
          <MenuSection>
            <MenuExit onLogout={handleLogout} />
          </MenuSection>

          {/* Правая колонка: Инпуты */}
          <InputsSection>
            {/* Форма с отзывами */}
            <FormSection>
              <FormTitle>Мои отзывы</FormTitle>
              
              <Typography variant="body1" sx={{ color: '#666' }}>
                Здесь будут отзывы пользователя
              </Typography>
            </FormSection>
          </InputsSection>
        </ContentLayout>
      </MainContent>
    </PageRoot>
  );
};

export default ReviewsPage;
