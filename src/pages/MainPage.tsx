/**
 * MainPage Component
 * 
 * Точное соответствие Figma дизайну Desktop / Main page
 * Использует только существующие UI компоненты
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Header, ProductCard, PromoBanner, Catalog, Heading } from '../components/ui';

// Изображения из Figma
const imgShutterstock11138548612 = "https://www.figma.com/api/mcp/asset/7fd4a45c-32eb-4bf7-b5ae-12f28fc58a2f";
const imgDumplingsClassic = "https://www.figma.com/api/mcp/asset/686828d2-9758-45ee-a32b-4da70f852232";
const imgDumplingsBlackAngus = "https://www.figma.com/api/mcp/asset/9c65a60d-ed02-41e7-b904-cba3648cce8f";
const imgSteakStriplineBlack = "https://www.figma.com/api/mcp/asset/e727f4e1-0b7c-4c5f-85e2-09812a879887";
const imgDumplingsSpecialtyBeef = "https://www.figma.com/api/mcp/asset/c27459cf-c70a-4634-b636-ff052e430def";
const imgSteakFiletMignon = "https://www.figma.com/api/mcp/asset/f5d16f46-7f5a-478d-a2e2-4ca025cd29cf";
const imgSmokedPorkKnuckle = "https://www.figma.com/api/mcp/asset/159a3c80-85ff-4910-b891-a6275fde9229";

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

const ContentRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  position: 'relative',
  width: '1208px',
  gap: '24px',
}));

const LeftColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '164px',
  flexShrink: 0,
}));

const CenterColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  flex: 1,
  gap: '24px',
}));

const RightColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '164px',
  flexShrink: 0,
}));

const ProductsGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  width: '100%',
  overflowX: 'auto',
  '&::-webkit-scrollbar': {
    height: '6px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '3px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#c1c1c1',
    borderRadius: '3px',
  },
  '& > *': {
    flexShrink: 0,
  },
}));


// ============================================================================
// COMPONENT
// ============================================================================

const MainPage: React.FC = () => {
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
        {/* Промо баннер */}
        <PromoBanner 
          size="M"
          imageUrl={imgShutterstock11138548612}
        />

        {/* Основной контент с трехколоночной структурой */}
        <ContentRow>
          {/* Левая колонка - каталог/фильтры */}
          <LeftColumn>
            <Catalog 
              size="L"
              level="1"
              state="Default"
            />
          </LeftColumn>

          {/* Центральная колонка - товары */}
          <CenterColumn>
            {/* Заголовок страницы */}
            <Heading 
              size="H1"
              title="Каталог товаров"
              subtitle="Найдите лучшие продукты для вашего бизнеса"
              button={true}
              buttonText="Все товары"
              onButtonClick={() => console.log('All products clicked')}
            />
            
            <ProductsGrid>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
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
              ))}
            </ProductsGrid>
          </CenterColumn>

          {/* Правая колонка - пустая или для доп. элементов */}
          <RightColumn>
            {/* Здесь могут быть дополнительные элементы если они есть в Figma */}
          </RightColumn>
        </ContentRow>
      </MainContent>
    </PageContainer>
  );
};

export default MainPage;
