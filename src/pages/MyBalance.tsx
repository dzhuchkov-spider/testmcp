/**
 * MyBalancePage Component
 * 
 * Страница баланса пользователя из Figma дизайна
 * Node ID: 32893-101380
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
import { MoreVert, AccountBalanceWallet, TrendingUp, ArrowDownward, ArrowUpward, Cached } from '@mui/icons-material';
import { Header, MenuExit } from '../components/ui';

// Изображения из Figma
const imgUnion = "https://www.figma.com/api/mcp/asset/3f5255f1-2b0d-4065-a186-3d406d252a04";
const imgUnion1 = "https://www.figma.com/api/mcp/asset/10cd5f63-06e9-4d57-86b2-81dbc04d2545";
const imgUnion2 = "https://www.figma.com/api/mcp/asset/f0e88d28-6110-424d-b2e2-49cb44e3a1ac";
const imgUnion3 = "https://www.figma.com/api/mcp/asset/b6fa9b96-602f-46c6-a0bb-27e48638019d";
const imgUnion4 = "https://www.figma.com/api/mcp/asset/770769e8-fd7b-4dbb-9977-2152dfd50d4f";
const imgUnion5 = "https://www.figma.com/api/mcp/asset/3002f351-4771-4063-bc0d-5f268a64835c";
const imgUnion6 = "https://www.figma.com/api/mcp/asset/93a78243-e957-4314-b837-78d32c2f2c52";
const imgGray2 = "https://www.figma.com/api/mcp/asset/9288c722-8686-48e1-9887-88bb8b624c54";
const imgGray7 = "https://www.figma.com/api/mcp/asset/416e5add-c21b-4dbc-ae38-1ac02471f587";
const imgUnion7 = "https://www.figma.com/api/mcp/asset/8d93c45d-c933-4734-bea7-e854337b8154";
const imgUnion8 = "https://www.figma.com/api/mcp/asset/814a9d10-0edd-486c-a91a-9d1e1f824b9a";
const imgFrame5643 = "https://www.figma.com/api/mcp/asset/4d953b5d-f564-47e6-8d52-b2d57c57c9ee";
const imgEllipse45 = "https://www.figma.com/api/mcp/asset/8924fae0-651b-49c1-aea5-3bef03bbe4a5";
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/a2d07dca-f3d6-468c-9a54-cb05e02bf56c";
const imgGray3 = "https://www.figma.com/api/mcp/asset/eaac73f0-3f4b-4854-a239-e6579dd526c7";
const imgGray8 = "https://www.figma.com/api/mcp/asset/119527f7-2adf-4fd5-a180-06e6bd7cfe27";
const imgGray4 = "https://www.figma.com/api/mcp/asset/f6495315-65d8-4f96-9b54-1ec305dd772b";
const imgGray9 = "https://www.figma.com/api/mcp/asset/264238f9-a4cb-4c5d-a248-843b2e87a0db";
const imgGray10 = "https://www.figma.com/api/mcp/asset/a3338f4d-6df9-4521-8ca6-ae7beea0cbf8";
const imgGray5 = "https://www.figma.com/api/mcp/asset/3503fc67-05ef-497e-bef2-afeffab36458";
const imgGray11 = "https://www.figma.com/api/mcp/asset/09e03e0c-b7d1-4675-a3fb-0cfcdbc7bb62";
const imgUnion9 = "https://www.figma.com/api/mcp/asset/4f6aaced-c2a9-4bf2-9869-c72f6dff5869";
const imgVector7 = "https://www.figma.com/api/mcp/asset/8b6746a7-a753-47a3-91b5-6dfacc5fb22f";
const imgVector8 = "https://www.figma.com/api/mcp/asset/3c895db5-db98-47dc-b396-9b7a36a869bd";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/0710c269-23ad-40c6-bc1d-df7bb22681e9";
const imgVector4 = "https://www.figma.com/api/mcp/asset/b3906bce-0a02-4ba5-85f8-f0ae48f4725b";
const imgGray6 = "https://www.figma.com/api/mcp/asset/aa482aa2-0a50-4dc2-bf51-505174ae421f";
const imgGray12 = "https://www.figma.com/api/mcp/asset/058d4dac-dff9-4f27-9832-9a2d5b0db23c";
const imgUnion10 = "https://www.figma.com/api/mcp/asset/b5a49795-61c3-4a7b-81e5-68dfe8879743";
const imgTypeBoundary = "https://www.figma.com/api/mcp/asset/81e29cd5-be10-4f68-9053-cfb092fd72bf";
const imgTypeBoundary1 = "https://www.figma.com/api/mcp/asset/e98888c3-24ac-4cca-86f3-d452477a9ebe";
const imgTypeBoundary2 = "https://www.figma.com/api/mcp/asset/5ccf1a16-6cd3-4f27-9ba7-26888b4a8ece";
const imgTypeBoundary3 = "https://www.figma.com/api/mcp/asset/e7feae59-3383-4901-9281-70dd1dca803e";
const imgUnion11 = "https://www.figma.com/api/mcp/asset/d8422465-9dcd-43c7-8adf-bef0361157e2";
const imgUnion12 = "https://www.figma.com/api/mcp/asset/db883fe9-091d-4b23-96f6-1150e92739fc";

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

const BalanceHeading = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '48px 0 16px',
}));

const BalanceTitle = styled(Typography)(({ theme }) => ({
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

const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '16px 152px 16px',
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

const BalanceSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1208px',
}));

const BalanceCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '16px',
  width: '100%',
  marginBottom: '16px',
}));

const BalanceHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '16px',
}));

const BalanceCardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '22px',
  fontWeight: 600,
  lineHeight: '28px',
  letterSpacing: '-1px',
  color: '#192434',
  margin: 0,
}));

const CurrentBalanceSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 0',
  backgroundColor: '#F8F9F9',
  borderRadius: '12px',
  marginBottom: '24px',
}));

const BalanceAmount = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '48px',
  fontWeight: 600,
  lineHeight: '56px',
  letterSpacing: '-2px',
  color: '#192434',
  margin: '0 0 8px 0',
  textAlign: 'center',
}));

const BalanceLabel = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  color: '#6B7280',
  margin: 0,
  textAlign: 'center',
}));

const TransactionHistory = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}));

const TransactionItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px',
  backgroundColor: '#F8F9F9',
  borderRadius: '12px',
}));

const TransactionLeft = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
}));

const TransactionIcon = styled(Box)<{ type: 'income' | 'expense' }>(({ theme, type }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '12px',
  backgroundColor: type === 'income' ? '#D1FAE5' : '#FEE2E2',
}));

const TransactionText = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
}));

const TransactionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '24px',
  color: '#192434',
  margin: 0,
}));

const TransactionDate = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  color: '#6B7280',
  margin: 0,
}));

const TransactionAmount = styled(Typography)<{ type: 'income' | 'expense' }>(({ theme, type }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '22px',
  color: type === 'income' ? '#059669' : '#DC2626',
  margin: 0,
}));

const ActionButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '12px 24px',
  backgroundColor: '#192434',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '#374151',
    transform: 'translateY(-1px)',
  },
}));

const ActionButtonText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '20px',
  color: '#ffffff',
  margin: 0,
}));

// ============================================================================
// COMPONENT
// ============================================================================

const MyBalancePage: React.FC<PageProps> = ({ onNavigateToMain }) => {
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

  // Обработчик для пополнения баланса
  const handleTopUp = () => {
    console.log('Top up balance clicked');
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
        <BalanceHeading>
          <BalanceTitle>Личный кабинет</BalanceTitle>
          <MoreVertButton>
            <MoreVert sx={{ fontSize: 24, color: '#192434' }} />
          </MoreVertButton>
        </BalanceHeading>

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

        {/* Двухколоночная структура: Меню слева, Баланс справа */}
        <ContentLayout>
          {/* Левая колонка: Меню */}
          <MenuSection>
            <MenuExit onLogout={handleLogout} />
          </MenuSection>

          {/* Правая колонка: Баланс */}
          <BalanceSection>
            {/* Карта баланса */}
            <BalanceCard>
              <BalanceHeader>
                <BalanceCardTitle>Баланс счета</BalanceCardTitle>
              </BalanceHeader>
              
              {/* Текущий баланс */}
              <CurrentBalanceSection>
                <BalanceAmount>₽ 125,430.50</BalanceAmount>
                <BalanceLabel>Текущий баланс</BalanceLabel>
              </CurrentBalanceSection>

              {/* Кнопка пополнения */}
              <ActionButton onClick={handleTopUp}>
                <AccountBalanceWallet sx={{ fontSize: 20, color: '#ffffff' }} />
                <ActionButtonText>Пополнить баланс</ActionButtonText>
              </ActionButton>
            </BalanceCard>

            {/* История транзакций */}
            <BalanceCard>
              <BalanceHeader>
                <BalanceCardTitle>История операций</BalanceCardTitle>
              </BalanceHeader>
              
              <TransactionHistory>
                <TransactionItem>
                  <TransactionLeft>
                    <TransactionIcon type="income">
                      <ArrowDownward sx={{ fontSize: 20, color: '#059669' }} />
                    </TransactionIcon>
                    <TransactionText>
                      <TransactionTitle>Пополнение счета</TransactionTitle>
                      <TransactionDate>15 марта 2024</TransactionDate>
                    </TransactionText>
                  </TransactionLeft>
                  <TransactionAmount type="income">+₽ 50,000</TransactionAmount>
                </TransactionItem>

                <TransactionItem>
                  <TransactionLeft>
                    <TransactionIcon type="expense">
                      <ArrowUpward sx={{ fontSize: 20, color: '#DC2626' }} />
                    </TransactionIcon>
                    <TransactionText>
                      <TransactionTitle>Оплата заказа #1234</TransactionTitle>
                      <TransactionDate>14 марта 2024</TransactionDate>
                    </TransactionText>
                  </TransactionLeft>
                  <TransactionAmount type="expense">-₽ 12,500</TransactionAmount>
                </TransactionItem>

                <TransactionItem>
                  <TransactionLeft>
                    <TransactionIcon type="income">
                      <ArrowDownward sx={{ fontSize: 20, color: '#059669' }} />
                    </TransactionIcon>
                    <TransactionText>
                      <TransactionTitle>Возврат средств</TransactionTitle>
                      <TransactionDate>12 марта 2024</TransactionDate>
                    </TransactionText>
                  </TransactionLeft>
                  <TransactionAmount type="income">+₽ 3,200</TransactionAmount>
                </TransactionItem>

                <TransactionItem>
                  <TransactionLeft>
                    <TransactionIcon type="expense">
                      <ArrowUpward sx={{ fontSize: 20, color: '#DC2626' }} />
                    </TransactionIcon>
                    <TransactionText>
                      <TransactionTitle>Оплата заказа #1233</TransactionTitle>
                      <TransactionDate>10 марта 2024</TransactionDate>
                    </TransactionText>
                  </TransactionLeft>
                  <TransactionAmount type="expense">-₽ 8,750</TransactionAmount>
                </TransactionItem>
              </TransactionHistory>
            </BalanceCard>
          </BalanceSection>
        </ContentLayout>
      </MainContent>
    </PageRoot>
  );
};

export default MyBalancePage;
