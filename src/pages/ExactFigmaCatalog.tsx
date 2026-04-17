/**
 * ExactFigmaCatalog Component
 * 
 * Страница каталога в точности как на Figma макете
 * Использует только существующие компоненты: Header, PromoBanner, Catalog, ProductCard, Heading
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Header, PromoBanner, Catalog, ProductCard, Heading } from '../components/ui';

// Изображения из Figma
const imgShutterstock11138548612 = "https://www.figma.com/api/mcp/asset/68b497de-8aaf-4d21-9c6f-0c45bb75b63d";
const imgDumplingsClassic = "https://www.figma.com/api/mcp/asset/436066b6-772f-471e-b1b7-4da5f1bbade7";
const imgShutterstock11138548611 = "https://www.figma.com/api/mcp/asset/f95598ba-6f29-4f16-acc2-120b520e5537";
const img3Illustrations = "https://www.figma.com/api/mcp/asset/1ec8841f-0e09-44a5-84e0-a3adb40e695b";
const img3Illustrations1 = "https://www.figma.com/api/mcp/asset/eadd25c3-7552-4433-b9c0-123f0ff7d1d6";
const imgSausagesAndDeliMeats = "https://www.figma.com/api/mcp/asset/51d8e74d-8ad3-40eb-a582-35c61bf77630";
const imgLeaf = "https://www.figma.com/api/mcp/asset/c0b750b9-4619-4862-831b-fd942f5bdace";
const imgJuice = "https://www.figma.com/api/mcp/asset/6c858724-b619-4d32-a239-63b5b17738ff";
const imgLunchbox = "https://www.figma.com/api/mcp/asset/f03f08cf-e269-4076-96c3-5513de46c96e";
const imgSteakFiletMignon = "https://www.figma.com/api/mcp/asset/91377dea-3233-41a4-a2f2-3e56dcc7734c";
const imgDumplingsBlackAngus = "https://www.figma.com/api/mcp/asset/05040976-94d1-4d91-b6a0-d6d3e48e7d1a";
const imgSteakStriplineBlack = "https://www.figma.com/api/mcp/asset/15e450cb-e9dc-40cb-a1f5-b7e5b9e8b674";
const imgDumplingsSpecialtyBeef = "https://www.figma.com/api/mcp/asset/0a19f3b9-5adf-4256-801a-b587d2fa1610";
const imgSmokedPorkKnuckle = "https://www.figma.com/api/mcp/asset/771786f9-4f03-45e3-a7fd-8c374352d743";

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const PageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
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

const CategoriesSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  padding: '80px 0',
  backgroundColor: theme.palette.common.white,
}));

const CategoriesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  position: 'relative',
  width: '1208px',
}));

const CategoriesGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  width: '100%',
  justifyContent: 'space-between',
  '& > *': {
    flex: '0 0 calc(16.666% - 20px)',
    maxWidth: 'calc(16.666% - 20px)',
  },
}));

const ProductsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  padding: '80px 0',
  backgroundColor: '#f6f7f7',
}));

const ProductsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  position: 'relative',
  width: '1208px',
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

const PromoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  padding: '80px 0',
  backgroundColor: theme.palette.common.white,
}));

const PromoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  position: 'relative',
  width: '1208px',
}));

// ============================================================================
// COMPONENT
// ============================================================================

const ExactFigmaCatalog: React.FC = () => {
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

  const categories = [
    { name: 'Все товары', icon: img3Illustrations, id: 'all' },
    { name: 'Мясо', icon: imgSausagesAndDeliMeats, id: 'meat' },
    { name: 'Овощи', icon: imgLeaf, id: 'vegetables' },
    { name: 'Напитки', icon: imgJuice, id: 'drinks' },
    { name: 'Готовые блюда', icon: imgLunchbox, id: 'ready' },
    { name: 'Полуфабрикаты', icon: img3Illustrations1, id: 'semi' },
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

      {/* Hero секция */}
      <HeroSection>
        <HeroOverlay>
          <HeroContent>
            <Heading 
              size="H1" 
              title="Свежие продукты от лучших производителей" 
              subtitle="Более 10 000 наименований товаров для вашего бизнеса"
            />
          </HeroContent>
        </HeroOverlay>
      </HeroSection>

      {/* Категории */}
      <CategoriesSection>
        <CategoriesContainer>
          <Heading 
            size="H2" 
            title="Категории товаров" 
            subtitle="Выберите интересующую категорию"
          />
          <CategoriesGrid>
            {categories.map((category) => (
              <Catalog
                key={category.id}
                size="L"
                level="1"
                state="Default"
                text={category.name}
                count={144}
                imageUrl={category.icon}
                onClick={() => console.log('Category clicked:', category.id)}
              />
            ))}
          </CategoriesGrid>
        </CategoriesContainer>
      </CategoriesSection>

      {/* Товары */}
      <ProductsSection>
        <ProductsContainer>
          <Heading 
            size="H2" 
            title="Популярные товары" 
            subtitle="Лучшие предложения для вашего бизнеса"
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
        </ProductsContainer>
      </ProductsSection>

      {/* Промо баннеры */}
      <PromoSection>
        <PromoContainer>
          <Heading 
            size="H2" 
            title="Акции и предложения" 
            subtitle="Специальные условия для наших клиентов"
          />
          <CategoriesGrid>
            <PromoBanner 
              size="M" 
              state="Default"
              onClick={() => console.log('Promo clicked')}
              imageUrl={imgShutterstock11138548611}
            />
            <PromoBanner 
              size="M" 
              state="Default"
              onClick={() => console.log('Promo clicked')}
              imageUrl={imgShutterstock11138548612}
            />
            <PromoBanner 
              size="M" 
              state="Default"
              onClick={() => console.log('Promo clicked')}
              imageUrl={imgShutterstock11138548611}
            />
          </CategoriesGrid>
        </PromoContainer>
      </PromoSection>
    </PageContainer>
  );
};

export default ExactFigmaCatalog;
