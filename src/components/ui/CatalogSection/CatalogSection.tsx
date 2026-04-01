/**
 * CatalogSection Component
 * 
 * Секция каталога из Figma дизайна
 * Содержит заголовок и сетку 5x1 компонентов Catalog
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Heading, Catalog } from '../index';

// ============================================================================
// TYPES
// ============================================================================

export interface CatalogSectionProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Обработчик клика на категорию
   */
  onCategoryClick?: (categoryIndex: number) => void;
  
  /**
   * Обработчик клика на кнопку "Открыть каталог"
   */
  onOpenCatalogClick?: () => void;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const CatalogSectionContainer = styled(Box)(({ theme }) => ({
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

const CatalogGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '12px',
  position: 'relative',
  width: '100%',
  justifyContent: 'space-between',
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const CatalogSection = forwardRef<HTMLDivElement, CatalogSectionProps>(
  (
    {
      className,
      onCategoryClick,
      onOpenCatalogClick,
      ...rest
    },
    ref
  ) => {
    const handleCategoryClick = (index: number) => {
      if (onCategoryClick) {
        onCategoryClick(index);
      }
    };

    const handleOpenCatalogClick = () => {
      if (onOpenCatalogClick) {
        onOpenCatalogClick();
      }
    };

    // Данные для категорий из Figma
    const categories = [
      {
        text: 'Мясо и птица',
        count: 144,
        imageUrl: "https://www.figma.com/api/mcp/asset/f27f1f74-5e0a-4c6c-a355-7a733b06aedc"
      },
      {
        text: 'Овощи и фрукты',
        count: 89,
        imageUrl: "https://www.figma.com/api/mcp/asset/d02009ea-c164-4bb2-94e3-456c643c239a"
      },
      {
        text: 'Молочные продукты',
        count: 67,
        imageUrl: "https://www.figma.com/api/mcp/asset/168cc342-227d-4a7f-8bd6-e0caa7b435f8"
      },
      {
        text: 'Бакалея',
        count: 234,
        imageUrl: "https://www.figma.com/api/mcp/asset/db816bb8-62cb-4911-83c8-f2269ea0234d"
      },
      {
        text: 'Напитки',
        count: 156,
        imageUrl: "https://www.figma.com/api/mcp/asset/72671b3b-427a-4d28-8b1b-03d05bee7e7c"
      }
    ];

    return (
      <CatalogSectionContainer
        ref={ref}
        className={className}
        {...rest}
      >
        {/* Заголовок секции */}
        <Heading
          size="H1"
          title="Каталог"
          button={true}
          buttonText="Открыть каталог"
          onButtonClick={handleOpenCatalogClick}
        />

        {/* Сетка каталога 5 колонок */}
        <CatalogGrid>
          {categories.map((category, index) => (
            <Catalog
              key={index}
              level="1"
              size="L"
              state="Default"
              text={category.text}
              count={category.count}
              imageUrl={category.imageUrl}
              onClick={() => handleCategoryClick(index)}
            />
          ))}
        </CatalogGrid>
      </CatalogSectionContainer>
    );
  }
);

CatalogSection.displayName = 'CatalogSection';
