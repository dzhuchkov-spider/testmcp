/**
 * FigmaCatalogPage Component
 * 
 * Страница каталога на основе Figma дизайна
 * Использует существующие UI компоненты и стилистику проекта
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Header, ProductCard, ActionButtons, Heading } from '../components/ui';

// Изображения из Figma
const imgShutterstock11138548612 = "https://www.figma.com/api/mcp/asset/caf7f1f0-670d-4659-a7fe-1388f1a11c74";
const imgDumplingsClassic = "https://www.figma.com/api/mcp/asset/db91ae53-f834-4944-9eb0-2ec619ade2cd";
const imgShutterstock11138548611 = "https://www.figma.com/api/mcp/asset/826d63ec-e5ac-4d7b-99d5-739164e14e7e";
const img3Illustrations = "https://www.figma.com/api/mcp/asset/d30dab9f-1a76-411d-8623-158865c22a68";
const img3Illustrations1 = "https://www.figma.com/api/mcp/asset/1d36f3c4-9cb7-479c-9d98-6d3378802824";
const img3Illustrations2 = "https://www.figma.com/api/mcp/asset/b31865f4-336f-4a2c-9e87-4af64d6d1bff";
const imgSausagesAndDeliMeats = "https://www.figma.com/api/mcp/asset/541e6520-1801-4897-838d-3ff7e5d29370";
const imgLeaf = "https://www.figma.com/api/mcp/asset/a35cf9b3-c18c-40be-a6c5-d0002e232297";
const imgJuice = "https://www.figma.com/api/mcp/asset/661ab48e-eacb-4fbe-a809-a9e409d35d14";
const imgLunchbox = "https://www.figma.com/api/mcp/asset/2578ed69-a2cf-4ad7-91af-feace95bc3e2";
const imgShutterstock20206890684 = "https://www.figma.com/api/mcp/asset/94ef83c6-5955-4e39-b2b5-5546b4e7db11";
const imgShutterstock7068745903 = "https://www.figma.com/api/mcp/asset/3c630df6-464d-47c1-b178-856a51efc6e4";
const imgSteakFiletMignon = "https://www.figma.com/api/mcp/asset/a3725301-c7d7-428a-8d1b-b3206b1b4880";
const imgDumplingsBlackAngus = "https://www.figma.com/api/mcp/asset/7eaa0b94-dbe5-473d-b5c3-260e9c3303c0";
const imgSteakStriplineBlack = "https://www.figma.com/api/mcp/asset/557617fc-133c-4539-9ac6-9b1748e7705c";
const imgDumplingsSpecialtyBeef = "https://www.figma.com/api/mcp/asset/600fd5bb-b9a5-4ac3-80d7-26883b78bbe0";
const imgSmokedPorkKnuckle = "https://www.figma.com/api/mcp/asset/a885a90e-64c6-4cdd-8da4-b4372812d6aa";

// ============================================================================
// TYPES
// ============================================================================

interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  packagePrice: string;
  image: string;
  available?: boolean;
  isNew?: boolean;
  isFavorite?: boolean;
  inBasket?: boolean;
}

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

const CategoryCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  padding: '24px',
  position: 'relative',
  backgroundColor: theme.palette.common.white,
  borderRadius: '16px',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  border: '1px solid #f2f2f3',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0px 8px 24px rgba(0,0,0,0.08)',
  },
}));

const CategoryIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80px',
  height: '80px',
  borderRadius: '16px',
  backgroundColor: '#f8f9fa',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const CategoryName = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '20px',
  color: theme.palette.text.primary,
  fontFamily: '"Inter", sans-serif',
  letterSpacing: '-0.24px',
  textAlign: 'center',
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
  flexWrap: 'wrap',
  gap: '24px',
  width: '100%',
  justifyContent: 'space-between',
  '& > *': {
    flex: '0 0 calc(16.666% - 20px)',
    maxWidth: 'calc(16.666% - 20px)',
  },
}));

// ============================================================================
// COMPONENT
// ============================================================================

const FigmaCatalogPage: React.FC = () => {
  const [basketCount, setBasketCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  // Данные товаров из Figma
  const products: Product[] = [
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
              <CategoryCard key={category.id}>
                <CategoryIcon>
                  <img src={category.icon} alt={category.name} />
                </CategoryIcon>
                <CategoryName>{category.name}</CategoryName>
              </CategoryCard>
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

          {/* Сетка товаров */}
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
    </PageContainer>
  );
};

export default FigmaCatalogPage;
