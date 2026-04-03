/**
 * NotificationsPage Component
 * 
 * Страница уведомлений пользователя из Figma дизайна
 * Node ID: 32859-90282
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
import { MoreVert, DoneAll } from '@mui/icons-material';
import { Header, MenuExit, Notification } from '../components/ui';

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

const NotificationsHeading = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '48px 0 16px',
}));

const NotificationsTitle = styled(Typography)(({ theme }) => ({
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
  width: '100%',
  padding: '16px 152px 16px',
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

const NotificationsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1208px',
}));

const NotificationsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '16px',
  width: '100%',
}));

const NotificationsHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '24px',
}));

const ReadAllButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '8px 16px',
  backgroundColor: '#F2F2F3',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '#e8e9eb',
    transform: 'translateY(-1px)',
  },
}));

const ReadAllText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: '18px',
  color: '#a3a7ae',
  margin: 0,
  whiteSpace: 'nowrap',
}));

const NotificationsList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
}));

// ============================================================================
// COMPONENT
// ============================================================================

const NotificationsPage: React.FC<PageProps> = ({ onNavigateToMain }) => {
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

  // Обработчик для "Прочитать все"
  const handleReadAll = () => {
    console.log('Read all notifications clicked');
    // Здесь можно добавить логику для отметки всех уведомлений как прочитанных
  };

  // Демо данные для уведомлений
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
      bodyText: 'Только для вас! Скидка 15% на следующий заказ при покупке от 5000 рублей. Предложение действует до конца недели.',
      counter: true,
      button: true,
    },
    {
      id: 4,
      title: 'Доставка завершена',
      date: '03.11.24 14:20',
      bodyText: 'Ваш заказ #12343 успешно доставлен. Спасибо за покупку! Оставьте отзыв о нашем сервисе.',
      counter: false,
      button: false,
    },
  ];

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
        <NotificationsHeading>
          <NotificationsTitle>Уведомления</NotificationsTitle>
          <MoreVertButton>
            <MoreVert sx={{ fontSize: 24, color: '#192434' }} />
          </MoreVertButton>
        </NotificationsHeading>

        {/* Информация о компании */}
        <CompanyInfoSection>
          <CompanyTextBlock>
            <CompanyTitle>ООО «Добронравов Групп»</CompanyTitle>
            <CompanyAddressText>г. Москва, ул. Примерная, д. 123</CompanyAddressText>
          </CompanyTextBlock>
        </CompanyInfoSection>

        {/* Двухколоночная структура: Меню слева, Уведомления справа */}
        <ContentLayout>
          {/* Левая колонка: Меню */}
          <MenuSection>
            <MenuExit onLogout={handleLogout} />
          </MenuSection>

          {/* Правая колонка: Уведомления */}
          <NotificationsSection>
            {/* Контейнер с уведомлениями */}
            <NotificationsContainer>
              <NotificationsHeader>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    lineHeight: '28px',
                    letterSpacing: '-1px',
                    color: '#192434',
                    margin: 0,
                  }}
                >
                  Уведомления
                </Typography>
                
                <ReadAllButton onClick={handleReadAll}>
                  <ReadAllText>Прочитать все</ReadAllText>
                  <DoneAll sx={{ fontSize: 20, color: '#a3a7ae' }} />
                </ReadAllButton>
              </NotificationsHeader>
              
              {/* Список уведомлений */}
              <NotificationsList>
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
              </NotificationsList>
            </NotificationsContainer>
          </NotificationsSection>
        </ContentLayout>
      </MainContent>
    </PageRoot>
  );
};

export default NotificationsPage;
