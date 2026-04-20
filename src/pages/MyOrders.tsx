/**
 * MyOrders Component
 * 
 * Страница заказов пользователя из Figma дизайна
 * Node ID: 32900-102222
 * 
 * Глобальные правила:
 * 1. Zero Absolute: Категорически запрещено использовать position: absolute и координаты x/y для макета
 * 2. Layout-Pattern: Реализуй двухколоночную структуру: MenuExit (слева) и ContentArea (справа)
 * 3. Mapping: Сопоставь слои Figma с моими компонентами
 * 4. Figma Props: Извлекай gap, padding и bgcolor строго из параметров Auto Layout в Figma
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Header, MenuExit } from '../components/ui';
import Order from '../components/ui/Order';

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

const OrdersHeading = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '48px 0 16px',
}));

const OrdersTitle = styled(Typography)(({ theme }) => ({
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

const OrdersSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1208px',
}));

const OrdersGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  gap: '16px',
  width: '100%',
}));

const OrdersContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '16px',
  width: '100%',
}));

const OrdersHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '16px',
}));

const OrdersListTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '22px',
  fontWeight: 600,
  lineHeight: '28px',
  letterSpacing: '-1px',
  color: '#192434',
  margin: 0,
}));

// ============================================================================
// SAMPLE DATA
// ============================================================================

const sampleOrders = [
  {
    id: '1',
    orderNumber: 'Заказ №34289-Б',
    orderInternalNumber: 'от 20.03.2025',
    cost: '2 458 ₽',
    companyName: 'ООО «Добронравов групп»',
    companyAddress: 'г. Москва, Волгоградский пр-кт, дом 82, стр. 13, корп. 4, лит. В',
    productTypes: [
      {
        id: '1',
        name: 'Удобрение 1',
        cost: '1 200 ₽',
        status: 'Новый' as const,
        date: '20.03.2025',
        showSwap: true,
      },
      {
        id: '2',
        name: 'Удобрение 2',
        cost: '1 258 ₽',
        status: 'Новый' as const,
        date: '20.03.2025',
        showSwap: true,
      },
    ],
    showProductTypes: true,
    showSwap: true,
  },
  {
    id: '2',
    orderNumber: 'Заказ №34288-А',
    orderInternalNumber: 'от 19.03.2025',
    cost: '5 780 ₽',
    companyName: 'ООО «Добронравов групп»',
    companyAddress: 'г. Москва, Волгоградский пр-кт, дом 82, стр. 13, корп. 4, лит. В',
    productTypes: [
      {
        id: '3',
        name: 'Семена',
        cost: '3 500 ₽',
        status: 'В обработке' as const,
        date: '19.03.2025',
        showSwap: false,
      },
      {
        id: '4',
        name: 'Гербициды',
        cost: '2 280 ₽',
        status: 'Подтвержден' as const,
        date: '19.03.2025',
        showSwap: false,
      },
    ],
    showProductTypes: true,
    showSwap: false,
  },
  {
    id: '3',
    orderNumber: 'Заказ №34287-В',
    orderInternalNumber: 'от 18.03.2025',
    cost: '1 250 ₽',
    companyName: 'ООО «Добронравов групп»',
    companyAddress: 'г. Москва, Волгоградский пр-кт, дом 82, стр. 13, корп. 4, лит. В',
    productTypes: [],
    showProductTypes: false,
    showSwap: false,
  },
];

// ============================================================================
// COMPONENT
// ============================================================================

const MyOrders: React.FC<PageProps> = ({ onNavigateToMain }) => {
  const navigate = useNavigate();
  const [basketCount, setBasketCount] = useState(24);
  const [likeCount, setLikeCount] = useState(3);

  // Обработчики для Header
  const handleLogoClick = () => {
    if (onNavigateToMain) {
      onNavigateToMain();
    }
  };

  const handleProfileClick = () => {
    navigate('/profile');
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
        <OrdersHeading>
          <OrdersTitle>Личный кабинет</OrdersTitle>
          <MoreVertButton>
            <MoreVert sx={{ fontSize: 24, color: '#192434' }} />
          </MoreVertButton>
        </OrdersHeading>

        {/* Информация о компании */}
        <CompanyInfoSection>
          <CompanyTextBlock>
            <CompanyTitle>ООО «Добронравов Групп»</CompanyTitle>
            <CompanyAddressText>г. Москва, Волгоградский пр-кт, дом 82, стр. 13, корп. 4, лит. В</CompanyAddressText>
          </CompanyTextBlock>
        </CompanyInfoSection>

        {/* Двухколоночная структура: Меню слева, Закази справа */}
        <ContentLayout>
          {/* Левая колонка: Меню */}
          <MenuSection>
            <MenuExit onLogout={handleLogout} />
          </MenuSection>

          {/* Правая колонка: Заказы */}
          <OrdersSection>
            {/* Контейнер с заказами */}
            <OrdersContainer>
              <OrdersHeader>
                <OrdersListTitle>Список заказов</OrdersListTitle>
              </OrdersHeader>
              
              {/* Временно без компонентов Order */}
              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                flexWrap: 'wrap'
              }}>
                <Typography>Компоненты Order будут добавлены здесь...</Typography>
              </Box>
            </OrdersContainer>
          </OrdersSection>
        </ContentLayout>
      </MainContent>
    </PageRoot>
  );
};

export default MyOrders;
