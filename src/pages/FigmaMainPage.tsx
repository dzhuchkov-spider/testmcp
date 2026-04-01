/**
 * FigmaMainPage Component
 * 
 * Точное соответствие Figma дизайну Desktop / Main page
 * Использует только существующие UI компоненты
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Header, ProductCard, ActionButtons } from '../components/ui';

// Изображения из Figma
const imgShutterstock11138548612 = "https://www.figma.com/api/mcp/asset/5cff9c03-3398-4047-be27-016f9ab0e750";
const imgDumplingsClassic = "https://www.figma.com/api/mcp/asset/158f24db-2bbe-4277-8296-4d27330963d7";
const imgDumplingsBlackAngus = "https://www.figma.com/api/mcp/asset/ca9fa55e-d9e8-4616-8d5e-788859a286c8";
const imgSteakStriplineBlack = "https://www.figma.com/api/mcp/asset/8f639740-0fea-4d54-8d7c-24d28064aad1";
const imgDumplingsSpecialtyBeef = "https://www.figma.com/api/mcp/asset/62fe7370-c6cd-48ab-b749-2251339a8e40";
const imgSteakFiletMignon = "https://www.figma.com/api/mcp/asset/29d797bd-a175-48b8-a7ad-2abf8233fb94";
const imgSmokedPorkKnuckle = "https://www.figma.com/api/mcp/asset/bee95efe-1e1d-41c3-8c2b-4d0a58ef5b94";

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const PageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '1512px',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  flex: 1,
}));

const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '560px',
  backgroundColor: '#f6f7f7',
  backgroundImage: `url(${imgShutterstock11138548612})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

const HeroOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const HeroContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  padding: '0 24px',
}));

const HeroTitle = styled(Box)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 600,
  lineHeight: '56px',
  color: theme.palette.common.white,
  fontFamily: '"Inter", sans-serif',
  letterSpacing: '-1.44px',
  textShadow: '0px 8px 16px rgba(0,0,0,0.12)',
  maxWidth: '800px',
}));

const HeroSubtitle = styled(Box)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '26px',
  color: theme.palette.common.white,
  fontFamily: '"Inter", sans-serif',
  letterSpacing: '-0.54px',
  maxWidth: '600px',
}));

const ContentSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  padding: '80px 0',
  backgroundColor: theme.palette.common.white,
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  position: 'relative',
  width: '1208px',
}));

const ProductsGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  width: '100%',
  justifyContent: 'space-between',
}));

const ProductGridItem = styled(Box)(({ theme }) => ({
  flex: '0 0 calc(16.666% - 20px)',
  maxWidth: 'calc(16.666% - 20px)',
}));

const FloatingButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '131px',
  right: '164px',
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  backgroundColor: theme.palette.common.white,
  border: '1px solid #f2f2f3',
  boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.12)',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
  },
}));

// ============================================================================
// COMPONENT
// ============================================================================

const FigmaMainPage: React.FC = () => {
  const [basketCount, setBasketCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  // Данные товаров из Figma
  const products = [
    {
      id: 'ID: 1234567890',
      name: 'Пельмени класс. мини 10 шт',
      price: 640,
      unit: '1 шт',
      packagePrice: '1 кор / 6 400.00',
      image: imgDumplingsClassic,
      available: true,
      isFavorite: false,
      inBasket: false,
    },
    {
      id: 'ID: 1234567891',
      name: 'Пельмени Black Angus 8 шт',
      price: 890,
      unit: '1 шт',
      packagePrice: '1 кор / 7 120.00',
      image: imgDumplingsBlackAngus,
      isNew: true,
      isFavorite: false,
      inBasket: false,
    },
    {
      id: 'ID: 1234567892',
      name: 'Стейк стриплайн Black Angus',
      price: 1250,
      unit: '100 г',
      packagePrice: '1 кг / 12 500.00',
      image: imgSteakStriplineBlack,
      available: true,
      isFavorite: false,
      inBasket: false,
    },
    {
      id: 'ID: 1234567893',
      name: 'Пельменты спец. говядина 6 шт',
      price: 780,
      unit: '1 шт',
      packagePrice: '1 кор / 4 680.00',
      image: imgDumplingsSpecialtyBeef,
      isFavorite: false,
      inBasket: false,
    },
    {
      id: 'ID: 1234567894',
      name: 'Стейк филе миньон',
      price: 1580,
      unit: '100 г',
      packagePrice: '1 кг / 15 800.00',
      image: imgSteakFiletMignon,
      available: true,
      isFavorite: false,
      inBasket: false,
    },
    {
      id: 'ID: 1234567895',
      name: 'Рулетка копченая',
      price: 450,
      unit: '100 г',
      packagePrice: '1 кг / 4 500.00',
      image: imgSmokedPorkKnuckle,
      isNew: true,
      isFavorite: false,
      inBasket: false,
    },
  ];

  const handleProductFavoriteClick = (productId: string) => {
    console.log('Favorite clicked:', productId);
    setLikeCount(prev => prev + 1);
  };

  const handleProductBasketClick = (productId: string) => {
    console.log('Basket clicked:', productId);
    setBasketCount(prev => prev + 1);
  };

  return (
    <PageContainer>
      {/* Хидер */}
      <Header 
        size="Desk" 
        state="Logged in"
        basketCount={basketCount}
        likeCount={likeCount}
        onLogoClick={() => console.log('Logo clicked')}
        onProfileClick={() => console.log('Profile clicked')}
        onBasketClick={() => console.log('Basket clicked')}
        onLikeClick={() => console.log('Like clicked')}
        onCatalogClick={() => console.log('Catalog clicked')}
      />

      <MainContent>
        {/* Hero секция с фоном из Figma */}
        <HeroSection>
          <HeroOverlay>
            <HeroContent>
              <HeroTitle>
                Свежие продукты от лучших производителей
              </HeroTitle>
              <HeroSubtitle>
                Более 10 000 наименований товаров для вашего бизнеса
              </HeroSubtitle>
            </HeroContent>
          </HeroOverlay>
        </HeroSection>

        {/* Основной контент */}
        <ContentSection>
          <ContentContainer>
            {/* Сетка товаров */}
            <ProductsGrid>
              {products.map((product) => (
                <ProductGridItem key={product.id}>
                  <ProductCard
                    name={product.name}
                    id={product.id}
                    price={product.price}
                    unit={product.unit}
                    packagePrice={product.packagePrice}
                    available={product.available}
                    bages={product.isNew}
                    hover="On"
                    isFavorite={product.isFavorite}
                    inBasket={product.inBasket}
                    onFavoriteClick={() => handleProductFavoriteClick(product.id)}
                    onBasketClick={() => handleProductBasketClick(product.id)}
                    onClick={() => console.log('Product clicked:', product.id)}
                  />
                </ProductGridItem>
              ))}
            </ProductsGrid>

            {/* Плавающая кнопка как в Figma */}
            <FloatingButton onClick={() => console.log('Floating button clicked')}>
              <ActionButtons 
                type="Arrow Right" 
                size="48"
                onClick={() => console.log('Arrow clicked')}
              />
            </FloatingButton>
          </ContentContainer>
        </ContentSection>
      </MainContent>
    </PageContainer>
  );
};

export default FigmaMainPage;
