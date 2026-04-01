/**
 * ProfilePage Component
 * 
 * Страница профиля пользователя из Figma дизайна
 * Пиксель-перфект реализация с точными отступами и структурой
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Header } from '../components/ui';

// Изображения из Figma
const companyIcon = "https://www.figma.com/api/mcp/asset/f219ba9b-a1d2-4329-980f-93df1d780c9a";
const notificationIcon = "https://www.figma.com/api/mcp/asset/7137912d-eecf-4652-a5f8-59035c79d418";
const settingsIcon = "https://www.figma.com/api/mcp/asset/1224585f-eec5-4eca-8527-89f411a0f9b7";
const ordersIcon = "https://www.figma.com/api/mcp/asset/6d43b6cd-5617-480a-97b8-18a10291b5e1";
const documentsIcon = "https://www.figma.com/api/mcp/asset/688ddec7-aa17-4c59-9bef-18f03e88689a";
const favoritesIcon = "https://www.figma.com/api/mcp/asset/5f79eeed-7191-42cc-b8b6-967e96c6583a";
const supportIcon = "https://www.figma.com/api/mcp/asset/cc8e2d31-41ab-4a55-a1fe-22804e29ec6c";
const logoutIcon = "https://www.figma.com/api/mcp/asset/b5732564-b2e7-4d03-816d-cfd6c1ec0666";
const chevronIcon = "https://www.figma.com/api/mcp/asset/c77cf84f-4265-4020-9717-0fc144e5b8ff";
const actionButtonIcon = "https://www.figma.com/api/mcp/asset/1540cef7-f0c7-4975-87f3-b02fb6054f76";

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
  overflowY: 'auto',
  backgroundColor: theme.palette.background.default,
  position: 'relative',
}));

const Content = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '1512px',
  height: '1138px',
  backgroundColor: theme.palette.background.default,
}));

const ContentFrame = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '152px',
  top: '0px',
  width: '1208px',
  height: '1138px',
}));

const HeadingSection = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '0px',
  top: '140px',
  width: '1208px',
  height: '108px',
}));

const CompanySection = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '0px',
  top: '248px',
  width: '1208px',
  height: '94px',
}));

const CompanyTitle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '24px',
  top: '20px',
  width: '1096px',
  height: '54px',
}));

const CompanyName = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '0px',
  top: '0px',
  width: '344px',
  height: '22px',
}));

const CompanyNameText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '22px',
  letterSpacing: '-1px',
  color: theme.palette.text.primary,
  margin: 0,
  padding: 0,
}));

const CompanyAddress = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  left: '0px',
  top: '34px',
  width: '1096px',
  height: '20px',
  fontFamily: '"Inter", sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  letterSpacing: '0px',
  color: theme.palette.text.secondary,
  margin: 0,
  padding: 0,
}));

const ActionButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '1144px',
  top: '27px',
  width: '40px',
  height: '40px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const MenuContentSection = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '0px',
  top: '342px',
  width: '1208px',
  height: '676px',
}));

const MenuSection = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '0px',
  top: '16px',
  width: '290px',
  height: '660px',
  display: 'flex',
  flexDirection: 'column',
}));

const MenuItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 24px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '16px',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  marginBottom: '8px',
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
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
  backgroundColor: theme.palette.grey[50],
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
  color: theme.palette.text.primary,
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
  position: 'absolute',
  left: '306px',
  top: '16px',
  width: '902px',
  height: '196px',
}));

const ContentHeading = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '32px',
  top: '0px',
  width: '838px',
  height: '92px',
}));

const ContentHeadingText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: '36px',
  letterSpacing: '-1px',
  color: theme.palette.text.primary,
  margin: 0,
  padding: 0,
}));

const InputsSection = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '32px',
  top: '92px',
  width: '838px',
  height: '72px',
}));

const InputRow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '0px',
  top: '0px',
  width: '838px',
  height: '72px',
  display: 'flex',
  gap: '16px',
}));

const InputContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '411px',
  height: '72px',
  '&:first-child': {
    left: '0px',
  },
  '&:last-child': {
    left: '427px',
  },
}));

const InputBody = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '0px',
  top: '8px',
  width: '411px',
  height: '56px',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '12px',
  paddingRight: '8px',
  paddingTop: '12px',
  paddingBottom: '12px',
  boxSizing: 'border-box',
}));

const InputText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  letterSpacing: '0px',
  color: theme.palette.text.primary,
  flex: 1,
}));

const InputLabel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '16px',
  top: '0px',
  backgroundColor: theme.palette.background.paper,
  padding: '0 6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '16px',
}));

const InputLabelText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '12px',
  fontWeight: 400,
  lineHeight: '16px',
  letterSpacing: '0px',
  color: theme.palette.text.secondary,
  whiteSpace: 'nowrap',
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
    <PageRoot>
      {/* Header компонент */}
      <Header 
        size="Desk" 
        state="Logged in"
        basketCount={basketCount}
        likeCount={likeCount}
        onLogoClick={handleLogoClick}
        onProfileClick={handleProfileClick}
        onBasketClick={handleBasketClick}
        onLikeClick={handleLikeClick}
        onCatalogClick={handleCatalogClick}
      />

      {/* Основной контент страницы */}
      <Content>
        <ContentFrame>
          {/* Заголовок */}
          <HeadingSection>
            <ContentHeadingText>Личный кабинет</ContentHeadingText>
          </HeadingSection>

          {/* Секция компании */}
          <CompanySection>
            <CompanyTitle>
              <CompanyName>
                <CompanyNameText>ООО «Добронравов групп»</CompanyNameText>
              </CompanyName>
              <CompanyAddress>
                г. Москва, Волгоградский пр-кт, дом 82, стр. 13, корп. 4, лит. В
              </CompanyAddress>
            </CompanyTitle>
            <ActionButton onClick={handleActionClick}>
              <img src={actionButtonIcon} alt="Action" style={{ width: '100%', height: '100%' }} />
            </ActionButton>
          </CompanySection>

          {/* Меню и контент */}
          <MenuContentSection>
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
              <ContentHeading>
                <ContentHeadingText>Личные данные</ContentHeadingText>
              </ContentHeading>
              
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
          </MenuContentSection>
        </ContentFrame>
      </Content>
    </PageRoot>
  );
};

export default ProfilePage;
