/**
 * ProfilePage Component
 * 
 * Страница профиля пользователя из Figma дизайна
 * Node ID: 32847-85507
 * 
 * Глобальные правила:
 * 1. Zero Absolute: Категорически запрещено использовать position: absolute и координаты x/y для макета
 * 2. Layout-Pattern: Реализуй двухколоночную структуру: MenuExit (слева) и ContentArea (справа)
 * 3. Mapping: Сопоставь слои Figma с моими компонентами
 * 4. Figma Props: Извлекай gap, padding и bgcolor строго из параметров Auto Layout в Figma
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Cached, MoreVert, VpnKey } from '@mui/icons-material';
import { Header, MenuExit, Input } from '../components/ui';

// Изображения из Figma
const changePasswordIcon = "https://www.figma.com/api/mcp/asset/59dbe6e6-0555-42cd-802d-ab029ccc1c93";

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
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#F8F9F9',
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

const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '0 152px',
}));

const CompanyInfoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '32px',
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  marginBottom: '92px',
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
  flex: 1,
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
  flex: 1,
  maxWidth: '1208px',
}));

const FormSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '16px',
}));

const FormHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '16px',
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

const ChangePasswordButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '8px 12px',
  backgroundColor: 'transparent',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '#f6f7f7',
    transform: 'translateY(-1px)',
  },
}));

const ChangePasswordText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '18px',
  color: '#f4364c',
  margin: 0,
}));

const FormRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}));

// ============================================================================
// COMPONENT
// ============================================================================

const ProfilePage: React.FC<PageProps> = ({ onNavigateToMain }) => {
  const [basketCount, setBasketCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  // Обработчики для Header
  const handleLogoClick = () => {
    if (onNavigateToMain) {
      onNavigateToMain();
    }
  };

  const handleProfileClick = () => {
    console.log('Profile clicked - already on profile page');
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

  // Обработчик для смены пароля
  const handleChangePassword = () => {
    console.log('Change password clicked');
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
          
          <CompanyActionButton onClick={handleChangePassword}>
            <Cached sx={{ fontSize: 20, color: '#192434' }} />
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
            {/* Форма с данными */}
            <FormSection>
              <FormHeader>
                <FormTitle>Контактные данные</FormTitle>
                <ChangePasswordButton onClick={handleChangePassword}>
                  <ChangePasswordText>Сменить пароль</ChangePasswordText>
                  <VpnKey sx={{ fontSize: 16, color: '#f4364c' }} />
                </ChangePasswordButton>
              </FormHeader>
              
              <FormRow>
                <Input
                  label="Юридическое лицо"
                  value="ООО «Добронравов Групп»"
                  state="Valid"
                />
                
                <Input
                  label="Телефон"
                  value="+7 (987) 654-32-10"
                  state="Valid"
                />
              </FormRow>
            </FormSection>
          </InputsSection>
        </ContentLayout>
      </MainContent>
    </PageRoot>
  );
};

export default ProfilePage;
