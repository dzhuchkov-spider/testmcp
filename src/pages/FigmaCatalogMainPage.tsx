/**
 * FigmaCatalogMainPage Component
 * 
 * Главная страница каталога, собранная по Figma дизайну
 * Использует существующие компоненты и следует семантическому маппингу:
 * - Header (шапка)
 * - PromoSection (секция акций - 3 PromoBanner в flex-контейнере)
 * - CatalogSection (секция каталога - сетка 5x1 Catalog)
 * - PopularSection (секция товаров - сетка 4xN ProductCard)
 * 
 * Вся страница обернута в MainContainer для контроля ширины контента
 * Используется только static/relative positioning из Figma
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { 
  Header, 
  PromoSection, 
  CatalogSection, 
  PopularSection 
} from '../components/ui';

// ============================================================================
// TYPES
// ============================================================================

interface PageProps {
  onNavigateToProfile?: () => void;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

// Главный контейнер страницы - корневой элемент
const PageRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100vh',
  overflowY: 'auto',
  backgroundColor: theme.palette.background.default,
}));

// Контейнер для основного контента
const PageContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  flex: 1,
}));

// Обертка для секций с контролем ширины
const SectionWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1208px',
  margin: '0 auto',
  padding: '0 24px',
  boxSizing: 'border-box',
}));

// ============================================================================
// COMPONENT
// ============================================================================

const FigmaCatalogMainPage: React.FC<PageProps> = ({ onNavigateToProfile }) => {
  const [basketCount, setBasketCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  // Обработчики для Header
  const handleLogoClick = () => {
    console.log('Logo clicked');
  };

  const handleProfileClick = () => {
    if (onNavigateToProfile) {
      onNavigateToProfile();
    }
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

  // Обработчики для PromoSection
  const handleBannerClick = (bannerIndex: number) => {
    console.log('Banner clicked:', bannerIndex);
  };

  // Обработчики для CatalogSection
  const handleCategoryClick = (categoryIndex: number) => {
    console.log('Category clicked:', categoryIndex);
  };

  // Обработчики для PopularSection
  const handleProductClick = (productIndex: number) => {
    console.log('Product clicked:', productIndex);
  };

  const handleFavoriteClick = (productIndex: number) => {
    console.log('Product favorited:', productIndex);
    setLikeCount(prev => prev + 1);
  };

  const handleBasketAddClick = (productIndex: number) => {
    console.log('Product added to basket:', productIndex);
    setBasketCount(prev => prev + 1);
  };

  const handleOpenCatalogClick = () => {
    console.log('Open catalog clicked');
    // Здесь можно добавить навигацию на полную страницу каталога
  };

  const handleSeeAllClick = () => {
    console.log('See all clicked');
    // Здесь можно добавить навигацию на страницу всех товаров
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
      <PageContent>
        {/* Секция акций - 3 PromoBanner в flex-контейнере */}
        <SectionWrapper>
          <PromoSection onBannerClick={handleBannerClick} />
        </SectionWrapper>

        {/* Секция каталога - сетка 5x1 Catalog */}
        <SectionWrapper>
          <CatalogSection 
            onCategoryClick={handleCategoryClick}
            onOpenCatalogClick={handleOpenCatalogClick}
          />
        </SectionWrapper>

        {/* Секция популярных товаров - сетка 4xN ProductCard */}
        <SectionWrapper>
          <PopularSection 
            onProductClick={handleProductClick}
            onFavoriteClick={handleFavoriteClick}
            onBasketClick={handleBasketAddClick}
            onSeeAllClick={handleSeeAllClick}
          />
        </SectionWrapper>
      </PageContent>
    </PageRoot>
  );
};

export default FigmaCatalogMainPage;
