/**
 * ProfilePage Component
 * 
 * Страница профиля пользователя из Figma дизайна
 * Реализация на Flexbox/Grid без absolute позиционирования
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Header, Profile } from '../components/ui';
import { ProfileView } from '../components/ui/Profile';

// Изображения из Figma
const notificationIcon = "https://www.figma.com/api/mcp/asset/dc884448-c6f0-4b03-9edd-7162c7fcdccf";
const settingsIcon = "https://www.figma.com/api/mcp/asset/1a92bf11-fbfd-41ae-b3ec-6627e7d1c502";
const ordersIcon = "https://www.figma.com/api/mcp/asset/0479fb69-9c8e-451f-8411-297ec99462d3";
const documentsIcon = "https://www.figma.com/api/mcp/asset/51b8de2a-1c6e-41c0-b6b0-b9bc8fba1b43";
const favoritesIcon = "https://www.figma.com/api/mcp/asset/214ed986-04da-4656-8e7e-bce4e7cc6c3d";
const supportIcon = "https://www.figma.com/api/mcp/asset/f33da1cb-5e26-429f-a520-23da703e16dd";
const logoutIcon = "https://www.figma.com/api/mcp/asset/4ee6926b-3915-4e1d-ae5f-18f8d9dbe8c9";
const chevronIcon = "https://www.figma.com/api/mcp/asset/2210a560-39fa-4769-9445-40620c61516c";
const actionButtonIcon = "https://www.figma.com/api/mcp/asset/cb0bd9b3-2a87-4438-8d2e-a14dd82c421f";

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
  backgroundColor: '#ffffff',
}));

const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '140px 152px 0',
}));

const PageHeader = styled(Box)(({ theme }) => ({
  marginBottom: '108px',
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: '36px',
  letterSpacing: '-1px',
  color: '#192434',
  margin: 0,
  padding: 0,
}));

const CompanySection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '94px',
  padding: '20px 24px',
}));

const CompanyInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flex: 1,
}));

const CompanyName = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '22px',
  letterSpacing: '-1px',
  color: '#192434',
  margin: 0,
  padding: 0,
}));

const CompanyAddress = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  letterSpacing: '0px',
  color: '#a3a7ae',
  margin: 0,
  padding: 0,
}));

const ActionButton = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: '#f6f7f7',
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
  gap: '8px',
}));

const MenuItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 24px',
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  border: '1px solid transparent',
  '&:hover': {
    backgroundColor: '#f6f7f7',
    transform: 'translateY(-1px)',
  },
}));

const MenuItemLeft = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  backgroundColor: '#f6f7f7',
  '& img': {
    width: '24px',
    height: '24px',
    objectFit: 'contain',
  },
}));

const MenuItemText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '22px',
  letterSpacing: '-1px',
  color: '#192434',
  fontFamily: '"Inter", sans-serif',
}));

const ChevronIcon = styled(Box)(({ theme }) => ({
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

const ContentSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '92px',
}));

const ContentHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const ContentTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: '36px',
  letterSpacing: '-1px',
  color: '#192434',
  margin: 0,
  padding: 0,
}));

const InputsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '72px',
}));

const InputRow = styled(Box)(({ theme }) => ({
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
}));

const InputLabelText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  letterSpacing: '0px',
  color: '#a3a7ae',
  whiteSpace: 'nowrap',
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
}));

// ============================================================================
// COMPONENT
// ============================================================================

const ProfilePage: React.FC<PageProps> = ({ onNavigateToMain }) => {
  const [basketCount, setBasketCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [currentProfileView, setCurrentProfileView] = useState<ProfileView>('contact');

  // Обработчики для Header
  const handleLogoClick = () => {
    if (onNavigateToMain) {
      onNavigateToMain();
    }
  };

  const handleProfileClick = () => {
    console.log('Profile clicked - already on profile page');
  };

  const handleProfileViewChange = (view: ProfileView) => {
    setCurrentProfileView(view);
    if (view === 'contact') {
      console.log('Switched to contact view');
    } else {
      console.log('Switched to notifications view');
    }
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

  // Обработчики для меню
  const handleNotificationsClick = () => {
    console.log('Notifications clicked');
  };

  const handleSettingsClick = () => {
    console.log('Settings clicked');
  };

  const handleOrdersClick = () => {
    console.log('Orders clicked');
  };

  const handleDocumentsClick = () => {
    console.log('Documents clicked');
  };

  const handleFavoritesClick = () => {
    console.log('Favorites clicked');
  };

  const handleSupportClick = () => {
    console.log('Support clicked');
  };

  const handleLogoutClick = () => {
    console.log('Logout clicked');
    if (onNavigateToMain) {
      onNavigateToMain();
    }
  };

  const handleActionClick = () => {
    console.log('Action button clicked');
  };

  return (
    <Box>
      <Profile 
        currentView={currentProfileView}
        onViewChange={handleProfileViewChange}
      />
      
      {currentProfileView === 'contact' && (
        <MainContent>
          {/* Заголовок страницы */}
          <PageHeader>
            <PageTitle>Личный кабинет</PageTitle>
          </PageHeader>

          {/* Основной контент: меню и форма */}
          <ContentLayout>
            {/* Меню слева */}
            <MenuSection>
              <MenuItem onClick={handleNotificationsClick}>
                <MenuItemLeft>
                  <IconContainer>
                    <img src={notificationIcon} alt="Notifications" />
                  </IconContainer>
                  <MenuItemText>Уведомления</MenuItemText>
                </MenuItemLeft>
                <ChevronIcon>
                  <img src={chevronIcon} alt="Chevron" />
                </ChevronIcon>
              </MenuItem>

              <MenuItem onClick={handleSettingsClick}>
                <MenuItemLeft>
                  <IconContainer>
                    <img src={settingsIcon} alt="Settings" />
                  </IconContainer>
                  <MenuItemText>Настройки</MenuItemText>
                </MenuItemLeft>
                <ChevronIcon>
                  <img src={chevronIcon} alt="Chevron" />
                </ChevronIcon>
              </MenuItem>

              <MenuItem onClick={handleOrdersClick}>
                <MenuItemLeft>
                  <IconContainer>
                    <img src={ordersIcon} alt="Orders" />
                  </IconContainer>
                  <MenuItemText>Мои заказы</MenuItemText>
                </MenuItemLeft>
                <ChevronIcon>
                  <img src={chevronIcon} alt="Chevron" />
                </ChevronIcon>
              </MenuItem>

              <MenuItem onClick={handleDocumentsClick}>
                <MenuItemLeft>
                  <IconContainer>
                    <img src={documentsIcon} alt="Documents" />
                  </IconContainer>
                  <MenuItemText>Документы</MenuItemText>
                </MenuItemLeft>
                <ChevronIcon>
                  <img src={chevronIcon} alt="Chevron" />
                </ChevronIcon>
              </MenuItem>

              <MenuItem onClick={handleFavoritesClick}>
                <MenuItemLeft>
                  <IconContainer>
                    <img src={favoritesIcon} alt="Favorites" />
                  </IconContainer>
                  <MenuItemText>Избранное</MenuItemText>
                </MenuItemLeft>
                <ChevronIcon>
                  <img src={chevronIcon} alt="Chevron" />
                </ChevronIcon>
              </MenuItem>

              <MenuItem onClick={handleSupportClick}>
                <MenuItemLeft>
                  <IconContainer>
                    <img src={supportIcon} alt="Support" />
                  </IconContainer>
                  <MenuItemText>Поддержка</MenuItemText>
                </MenuItemLeft>
                <ChevronIcon>
                  <img src={chevronIcon} alt="Chevron" />
                </ChevronIcon>
              </MenuItem>

              <MenuItem onClick={handleLogoutClick}>
                <MenuItemLeft>
                  <IconContainer>
                    <img src={logoutIcon} alt="Logout" />
                  </IconContainer>
                  <MenuItemText>Выйти</MenuItemText>
                </MenuItemLeft>
                <ChevronIcon>
                  <img src={chevronIcon} alt="Chevron" />
                </ChevronIcon>
              </MenuItem>
            </MenuSection>

            {/* Контент справа */}
            <ContentSection>
              <ContentHeader>
                <ContentTitle>Личные данные</ContentTitle>
              </ContentHeader>
              
              <InputsSection>
                <InputRow>
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
                </InputRow>
              </InputsSection>
            </ContentSection>
          </ContentLayout>
        </MainContent>
      )}
      
      {currentProfileView === 'notifications' && (
        <MainContent>
          <PageHeader>
            <PageTitle>Уведомления</PageTitle>
          </PageHeader>
          
          <Typography variant="body1" sx={{ p: 2 }}>
            Здесь будет список уведомлений...
          </Typography>
        </MainContent>
      )}
    </Box>
  );
};

export default ProfilePage;
