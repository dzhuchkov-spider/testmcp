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
import { Header, Heading, MenuExit } from '../components/ui';

// Изображения из Figma
const userAvatar = "https://www.figma.com/api/mcp/asset/fb83d7bb-41c3-4125-bd31-72243b8e7d72";
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

const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '0 152px',
}));

const CompanyInfoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  padding: '32px',
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  marginBottom: '92px',
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

const AvatarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  overflow: 'hidden',
  flexShrink: 0,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const UserInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flex: 1,
}));

const UserName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: '36px',
  letterSpacing: '-1px',
  color: '#192434',
  margin: 0,
}));

const UserRole = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  color: '#a3a7ae',
  margin: 0,
}));

const CompanyInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
}));

const CompanyName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '24px',
  color: '#192434',
  margin: 0,
}));

const CompanyAddress = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  color: '#a3a7ae',
  margin: 0,
}));

const ActionButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '16px 24px',
  backgroundColor: '#ffffff',
  border: '1px solid #e8e9eb',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  marginBottom: '72px',
  '&:hover': {
    backgroundColor: '#f6f7f7',
    transform: 'translateY(-1px)',
  },
}));

const ActionButtonText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  letterSpacing: '-0.28px',
  color: '#a3a7ae',
  margin: 0,
}));

const ActionIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const FormSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '72px',
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '16px',
}));

const FormRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '16px',
}));

const InputContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flex: 1,
  position: 'relative',
}));

const InputLabel = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  padding: '0 6px',
  height: '16px',
  alignSelf: 'flex-start',
  marginLeft: '16px',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 1,
}));

const InputLabelText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  letterSpacing: '0px',
  color: '#a3a7ae',
  whiteSpace: 'nowrap',
  margin: 0,
}));

const InputBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '56px',
  padding: '12px',
  backgroundColor: '#ffffff',
  border: '1px solid #e8e9eb',
  borderRadius: '12px',
  boxSizing: 'border-box',
}));

const InputText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  letterSpacing: '0px',
  color: '#192434',
  flex: 1,
  margin: 0,
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
        <Heading
          size="H1"
          title="Личный кабинет"
          back={false}
          button={false}
          menu={false}
        />

        {/* Информация о компании */}
        <CompanyInfoSection>
          <AvatarContainer>
            <img src={userAvatar} alt="User Avatar" />
          </AvatarContainer>
          
          <UserInfo>
            <UserName>Добронравов Групп</UserName>
            <UserRole>Администратор</UserRole>
            
            <CompanyInfo>
              <CompanyName>ООО «Добронравов Групп»</CompanyName>
              <CompanyAddress>г. Москва, ул. Примерная, д. 123</CompanyAddress>
            </CompanyInfo>
          </UserInfo>
        </CompanyInfoSection>

        {/* Двухколоночная структура: Меню слева, Инпуты справа */}
        <ContentLayout>
          {/* Левая колонка: Меню */}
          <MenuSection>
            <MenuExit onLogout={handleLogout} />
          </MenuSection>

          {/* Правая колонка: Инпуты */}
          <InputsSection>
            {/* Кнопка смены пароля */}
            <ActionButton onClick={handleChangePassword}>
              <ActionButtonText>Сменить пароль</ActionButtonText>
              <ActionIcon>
                <img src={changePasswordIcon} alt="Change Password" />
              </ActionIcon>
            </ActionButton>

            {/* Форма с данными */}
            <FormSection>
              <FormRow>
                <InputContainer>
                  <InputLabel>
                    <InputLabelText>Юридическое лицо</InputLabelText>
                  </InputLabel>
                  <InputBody>
                    <InputText>ООО «Добронравов Групп»</InputText>
                  </InputBody>
                </InputContainer>
                
                <InputContainer>
                  <InputLabel>
                    <InputLabelText>Телефон</InputLabelText>
                  </InputLabel>
                  <InputBody>
                    <InputText>+7 (987) 654-32-10</InputText>
                  </InputBody>
                </InputContainer>
              </FormRow>
            </FormSection>
          </InputsSection>
        </ContentLayout>
      </MainContent>
    </PageRoot>
  );
};

export default ProfilePage;
