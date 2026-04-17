/**
 * FigmaLayoutDemo Component
 * 
 * Демо страница, полностью соответствующая Figma дизайну
 * Использует точные изображения и компоненты из Figma
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { Header, ProductCard, ActionButtons } from '../components/ui';

// Изображения из Figma - точные URL из дизайна
const imgUnion = "https://www.figma.com/api/mcp/asset/63de5dbf-a5e3-4105-87d0-ecf5106f015a";
const imgUnion1 = "https://www.figma.com/api/mcp/asset/301193e8-3a04-4c5a-ac2f-b28ceaf11e6a";
const imgUnion2 = "https://www.figma.com/api/mcp/asset/3d7ca628-3f0e-4afd-be74-9b353b91dec2";
const imgUnion3 = "https://www.figma.com/api/mcp/asset/c6c39b15-8fd2-4ace-afa0-b2af713dc36c";
const imgUnion4 = "https://www.figma.com/api/mcp/asset/df4ae0bc-71d3-4e02-9c2c-9da88aa872ef";
const imgUnion5 = "https://www.figma.com/api/mcp/asset/7a69e1a7-ffe2-471e-bb43-4e878c052113";
const imgUnion6 = "https://www.figma.com/api/mcp/asset/0a5c7113-da08-4949-b62d-5fc21bf4b163";
const imgIcon = "https://www.figma.com/api/mcp/asset/ea0cdbcf-24b2-4c0a-a5e1-8a6d1574bb75";
const imgUnion7 = "https://www.figma.com/api/mcp/asset/6181a93d-5ec6-41b5-8d1c-efa3a803d406";
const imgShutterstock11138548612 = "https://www.figma.com/api/mcp/asset/7fd4a45c-32eb-4bf7-b5ae-12f28fc58a2f";
const imgDumplingsClassic = "https://www.figma.com/api/mcp/asset/686828d2-9758-45ee-a32b-4da70f852232";
const imgShutterstock11138548611 = "https://www.figma.com/api/mcp/asset/6baa82ac-d006-4117-a760-32ca13eedeac";
const img3Illustrations = "https://www.figma.com/api/mcp/asset/776c5aa2-0e8c-4e8b-8cf7-e4e938e65c4e";
const img3Illustrations1 = "https://www.figma.com/api/mcp/asset/8873adfb-30a7-4a72-a278-2a2169067264";
const img3Illustrations2 = "https://www.figma.com/api/mcp/asset/5b73d3b5-ab89-4b32-a3bb-01ec8eb97497";
const imgSausagesAndDeliMeats = "https://www.figma.com/api/mcp/asset/b2a74f71-be50-4be0-b137-d67f8f80d41b";
const imgLeaf = "https://www.figma.com/api/mcp/asset/d79e5fba-e499-480b-8a71-91d4c9297863";
const imgJuice = "https://www.figma.com/api/mcp/asset/5439bd0b-6fc9-4d77-b951-46ccf0450edd";
const imgLunchbox = "https://www.figma.com/api/mcp/asset/32dbfdc0-dede-4b7e-9e66-474c1b0b996f";
const imgShutterstock20206890684 = "https://www.figma.com/api/mcp/asset/4b9c16e7-9313-44c4-9170-a5ca5eb20410";
const imgShutterstock7068745903 = "https://www.figma.com/api/mcp/asset/e14a9702-f7eb-428b-ba9e-585aabe1d160";
const imgSteakFiletMignon = "https://www.figma.com/api/mcp/asset/f5d16f46-7f5a-478d-a2e2-4ca025cd29cf";
const imgDumplingsBlackAngus = "https://www.figma.com/api/mcp/asset/9c65a60d-ed02-41e7-b904-cba3648cce8f";
const imgSteakStriplineBlack = "https://www.figma.com/api/mcp/asset/e727f4e1-0b7c-4c5f-85e2-09812a879887";
const imgDumplingsSpecialtyBeef = "https://www.figma.com/api/mcp/asset/c27459cf-c70a-4634-b636-ff052e430def";
const imgSmokedPorkKnuckle = "https://www.figma.com/api/mcp/asset/159a3c80-85ff-4910-b891-a6275fde9229";
const imgUnion8 = "https://www.figma.com/api/mcp/asset/107b451f-5763-48e6-b33a-d9d7b9a92ed4";
const imgShutterstock20206890683 = "https://www.figma.com/api/mcp/asset/75584a60-5841-4a1d-9d5a-5e88b06aa248";
const imgShutterstock20206890682 = "https://www.figma.com/api/mcp/asset/54442dad-26a9-4bed-be78-98b4696b94c8";
const imgShutterstock20206890685 = "https://www.figma.com/api/mcp/asset/3746b66a-4fb9-4a37-b303-71cf7f3b2aff";
const imgShutterstock20206890681 = "https://www.figma.com/api/mcp/asset/8b17db0c-8462-4fef-ab1f-a9c752fcecfa";
const imgShutterstock7068745902 = "https://www.figma.com/api/mcp/asset/9aa48578-4e8d-4be7-b38d-74fc81d785e4";
const imgEllipse141 = "https://www.figma.com/api/mcp/asset/215a33da-aac7-4618-a1ec-74d29a0618fe";
const imgEllipse142 = "https://www.figma.com/api/mcp/asset/9fa0e481-5f8b-4fa7-91ba-1f3bd2282426";

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

const MainContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '1512px',
  flex: '1',
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

const FigmaLayoutDemo: React.FC = () => {
  const [basketCount, setBasketCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      </MainContent>
    </PageContainer>
  );
};

export default FigmaLayoutDemo;
