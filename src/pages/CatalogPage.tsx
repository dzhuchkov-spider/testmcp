/**
 * CatalogPage Component
 * 
 * Страница каталога на основе Figma дизайна
 * Использует существующие UI компоненты
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Header, ProductCard, ActionButtons } from '../components/ui';

// Изображения из Figma
const imgShutterstock11138548612 = "https://www.figma.com/api/mcp/asset/24397981-866e-49c3-ac00-b21b6efaab68";
const imgDumplingsClassic = "https://www.figma.com/api/mcp/asset/a7563ddd-f7ba-4a8d-add9-d11cbe434407";
const imgShutterstock11138548611 = "https://www.figma.com/api/mcp/asset/d956ecb2-1c04-4021-9ce1-ed1a378cd8e4";
const img3Illustrations = "https://www.figma.com/api/mcp/asset/2e36c734-7bab-4edd-b2d8-55d6a5f30873";
const img3Illustrations1 = "https://www.figma.com/api/mcp/asset/8a73ac2f-811a-474d-85bd-555f5a6fa06a";
const img3Illustrations2 = "https://www.figma.com/api/mcp/asset/6ba4d5ce-2f67-4e0b-99c3-2e55596f7114";
const imgSausagesAndDeliMeats = "https://www.figma.com/api/mcp/asset/98e76c4c-2b79-4fea-9662-b17040ee77d0";
const imgLeaf = "https://www.figma.com/api/mcp/asset/6e0747c4-a332-42ce-a926-c5517e4b92b9";
const imgJuice = "https://www.figma.com/api/mcp/asset/82b35662-6a60-489f-bc75-44f1680a5756";
const imgLunchbox = "https://www.figma.com/api/mcp/asset/3fe23290-3a98-4323-be5b-2fc4e1ad061d";
const imgShutterstock20206890684 = "https://www.figma.com/api/mcp/asset/9783da1a-7e86-4b4c-aa46-bfba609e46b7";
const imgShutterstock7068745903 = "https://www.figma.com/api/mcp/asset/a400a42a-fc37-44f9-b233-8f029f03ceec";
const imgSteakFiletMignon = "https://www.figma.com/api/mcp/asset/f71a183f-1670-4aaf-8e0d-a55985da8ab7";
const imgDumplingsBlackAngus = "https://www.figma.com/api/mcp/asset/2919cc4a-e619-4652-95e7-5dccf872cd9c";
const imgSteakStriplineBlack = "https://www.figma.com/api/mcp/asset/f8755fd6-3703-4088-8134-cb73d0806713";
const imgDumplingsSpecialtyBeef = "https://www.figma.com/api/mcp/asset/ffec80c2-153e-4ad6-818c-274f610e2874";
const imgSmokedPorkKnuckle = "https://www.figma.com/api/mcp/asset/ae25c505-9c28-41b7-8c5e-5b7164c79909";

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

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 600,
  lineHeight: '56px',
  color: theme.palette.common.white,
  fontFamily: '"Inter", sans-serif',
  letterSpacing: '-1.44px',
  textShadow: '0px 8px 16px rgba(0,0,0,0.12)',
  maxWidth: '800px',
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: '26px',
  color: theme.palette.common.white,
  fontFamily: '"Inter", sans-serif',
  letterSpacing: '-0.54px',
  maxWidth: '600px',
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

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: 600,
  lineHeight: '36px',
  color: theme.palette.text.primary,
  fontFamily: '"Inter", sans-serif',
  letterSpacing: '-1px',
  textAlign: 'center',
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

const FilterSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  position: 'relative',
  width: '100%',
  padding: '24px',
  backgroundColor: theme.palette.common.white,
  borderRadius: '16px',
  border: '1px solid #f2f2f3',
}));

const FilterButton = styled(Box)<{ $active?: boolean }>(({ theme, $active }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '12px 20px',
  borderRadius: '12px',
  backgroundColor: $active ? theme.palette.primary.main : 'transparent',
  color: $active ? theme.palette.common.white : theme.palette.text.primary,
  border: $active ? 'none' : '1px solid #e8e9eb',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '18px',
  fontFamily: '"Inter", sans-serif',
  '&:hover': {
    backgroundColor: $active ? theme.palette.primary.dark : '#f8f9fa',
    transform: 'translateY(-1px)',
  },
}));

// ============================================================================
// COMPONENT
// ============================================================================

const CatalogPage: React.FC = () => {
  const [basketCount, setBasketCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
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
            <HeroTitle>
              Свежие продукты от лучших производителей
            </HeroTitle>
            <HeroSubtitle>
              Более 10 000 наименований товаров для вашего бизнеса
            </HeroSubtitle>
          </HeroContent>
        </HeroOverlay>
      </HeroSection>

      {/* Категории */}
      <CategoriesSection>
        <CategoriesContainer>
          <SectionTitle>Категории товаров</SectionTitle>
          <CategoriesGrid>
            {categories.map((category) => (
              <CategoryCard key={category.id} onClick={() => handleCategoryClick(category.id)}>
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
          <SectionTitle>Популярные товары</SectionTitle>
          
          {/* Фильтры */}
          <FilterSection>
            <FilterButton 
              $active={selectedCategory === 'all'}
              onClick={() => handleCategoryClick('all')}
            >
              Все товары
            </FilterButton>
            <FilterButton 
              $active={selectedCategory === 'available'}
              onClick={() => handleCategoryClick('available')}
            >
              В наличии
            </FilterButton>
            <FilterButton 
              $active={selectedCategory === 'new'}
              onClick={() => handleCategoryClick('new')}
            >
              Новинки
            </FilterButton>
            <FilterButton 
              $active={selectedCategory === 'sale'}
              onClick={() => handleCategoryClick('sale')}
            >
              Акции
            </FilterButton>
          </FilterSection>

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

export default CatalogPage;
