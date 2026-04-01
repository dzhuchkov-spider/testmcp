/**
 * PopularSection Component
 * 
 * Секция популярных товаров из Figma дизайна
 * Содержит заголовок и сетку 4xN компонентов ProductCard
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Heading, ProductCard } from '../index';

// ============================================================================
// TYPES
// ============================================================================

export interface PopularSectionProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Обработчик клика на товар
   */
  onProductClick?: (productIndex: number) => void;
  
  /**
   * Обработчик клика на избранное
   */
  onFavoriteClick?: (productIndex: number) => void;
  
  /**
   * Обработчик клика на корзину
   */
  onBasketClick?: (productIndex: number) => void;
  
  /**
   * Обработчик клика на кнопку "Смотреть все"
   */
  onSeeAllClick?: () => void;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const PopularSectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  width: '100%',
  gap: '0px',
  marginBottom: '108px',
  paddingTop: '48px',
  paddingBottom: '16px',
}));

const ProductsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '10px',
  position: 'relative',
  width: '100%',
  justifyContent: 'space-between',
}));

const SectionHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '24px',
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const PopularSection = forwardRef<HTMLDivElement, PopularSectionProps>(
  (
    {
      className,
      onProductClick,
      onFavoriteClick,
      onBasketClick,
      onSeeAllClick,
      ...rest
    },
    ref
  ) => {
    const handleProductClick = (index: number) => {
      if (onProductClick) {
        onProductClick(index);
      }
    };

    const handleFavoriteClick = (index: number) => {
      if (onFavoriteClick) {
        onFavoriteClick(index);
      }
    };

    const handleBasketClick = (index: number) => {
      if (onBasketClick) {
        onBasketClick(index);
      }
    };

    const handleSeeAllClick = () => {
      if (onSeeAllClick) {
        onSeeAllClick();
      }
    };

    // Данные для товаров из Figma
    const products = [
      {
        id: 'ID: 1234567890',
        name: 'Пельмени класс. мини 10 шт',
        price: 640,
        unit: '1 шт',
        packagePrice: '1 кор / 6 400.00',
        imageUrl: "https://www.figma.com/api/mcp/asset/c745dd0d-44d4-4383-a287-8f3c3ddbf437",
        available: true,
        isNew: false,
        isFavorite: false,
        inBasket: false,
      },
      {
        id: 'ID: 1234567891',
        name: 'Пельмени Black Angus 8 шт',
        price: 890,
        unit: '1 шт',
        packagePrice: '1 кор / 7 120.00',
        imageUrl: "https://www.figma.com/api/mcp/asset/d4055624-5199-481a-8cf1-0cc8e007b72d",
        available: true,
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
        imageUrl: "https://www.figma.com/api/mcp/asset/c739d7b0-345c-4fb2-9429-b2ce786a2886",
        available: true,
        isNew: false,
        isFavorite: false,
        inBasket: false,
      },
      {
        id: 'ID: 1234567893',
        name: 'Пельменты спец. говядина 6 шт',
        price: 780,
        unit: '1 шт',
        packagePrice: '1 кор / 4 680.00',
        imageUrl: "https://www.figma.com/api/mcp/asset/3e90a965-0bc0-49d4-99a3-0799e652ebd5",
        available: false,
        isNew: false,
        isFavorite: false,
        inBasket: false,
      },
      {
        id: 'ID: 1234567894',
        name: 'Стейк филе миньон',
        price: 1580,
        unit: '100 г',
        packagePrice: '1 кг / 15 800.00',
        imageUrl: "https://www.figma.com/api/mcp/asset/a04bd5c4-f84c-45b4-8cf4-014367c6f6f8",
        available: true,
        isNew: true,
        isFavorite: false,
        inBasket: false,
      },
      {
        id: 'ID: 1234567895',
        name: 'Рулетка копченая',
        price: 450,
        unit: '100 г',
        packagePrice: '1 кг / 4 500.00',
        imageUrl: "https://www.figma.com/api/mcp/asset/bf249d78-5dc2-4d7b-9db8-855c78f79902",
        available: true,
        isNew: false,
        isFavorite: false,
        inBasket: false,
      },
      {
        id: 'ID: 1234567896',
        name: 'Сосиски молочные',
        price: 320,
        unit: '1 шт',
        packagePrice: '1 кг / 3 200.00',
        imageUrl: "https://www.figma.com/api/mcp/asset/e28e520a-14d7-4c63-be5c-bd985fdfc320",
        available: true,
        isNew: false,
        isFavorite: false,
        inBasket: false,
      }
    ];

    return (
      <PopularSectionContainer
        ref={ref}
        className={className}
        {...rest}
      >
        {/* Заголовок секции */}
        <SectionHeader>
          <Heading
            size="H1"
            title="Популярные товары"
            subtitle=""
          />
          <Heading
            size="H1"
            title=""
            subtitle=""
            button={true}
            buttonText="Смотреть все"
            onButtonClick={handleSeeAllClick}
          />
        </SectionHeader>

        {/* Сетка товаров 4 колонки */}
        <ProductsGrid>
          {products.map((product, index) => (
            <ProductCard
              key={index}
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
              onClick={() => handleProductClick(index)}
              onFavoriteClick={() => handleFavoriteClick(index)}
              onBasketClick={() => handleBasketClick(index)}
            />
          ))}
        </ProductsGrid>
      </PopularSectionContainer>
    );
  }
);

PopularSection.displayName = 'PopularSection';
