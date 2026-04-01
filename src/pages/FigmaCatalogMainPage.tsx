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
 * Категорически запрещено использовать position: absolute для позиционирования
 */

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Header } from '../components/ui';
import { MainContainer } from '../components/ui/MainContainer';
import { PromoSection } from '../components/ui/PromoSection';
import { CatalogSection } from '../components/ui/CatalogSection';
import { PopularSection } from '../components/ui/PopularSection';

// ============================================================================
// TYPES
// ============================================================================

interface PageProps {
  // Можно добавить пропсы для динамических данных
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const PageWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  overflowY: 'auto',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  flex: 1,
  paddingBottom: '80px',
}));

// ============================================================================
// COMPONENT
// ============================================================================

const FigmaCatalogMainPage: React.FC<PageProps> = () => {
  const [basketCount, setBasketCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);

  // Обработчики для Header
  const handleLogoClick = () => {
    console.log('Logo clicked');
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
    <PageWrapper>
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
      <ContentContainer>
        <MainContainer maxWidth="lg">
          {/* Секция акций - 3 PromoBanner в flex-контейнере */}
          <PromoSection onBannerClick={handleBannerClick} />

          {/* Секция каталога - сетка 5x1 Catalog */}
          <CatalogSection 
            onCategoryClick={handleCategoryClick}
            onOpenCatalogClick={handleOpenCatalogClick}
          />

          {/* Секция популярных товаров - сетка 4xN ProductCard */}
          <PopularSection 
            onProductClick={handleProductClick}
            onFavoriteClick={handleFavoriteClick}
            onBasketClick={handleBasketAddClick}
            onSeeAllClick={handleSeeAllClick}
          />
        </MainContainer>
      </ContentContainer>
    </PageWrapper>
  );
};

export default FigmaCatalogMainPage;
