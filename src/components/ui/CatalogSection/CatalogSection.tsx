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
import catalogImage from '@/assets/img/Catalog-Medium.png';

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
  marginBottom: '0',
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

    // Dannye dlya kategoriy s lokal'nymi izobrazheniyami
    const categories = [
      {
        text: 'Мясо и птица',
        count: 144,
        imageUrl: catalogImage
      },
      {
        text: 'Овощи и фрукты',
        count: 89,
        imageUrl: catalogImage
      },
      {
        text: 'Молочные продукты',
        count: 67,
        imageUrl: catalogImage
      },
      {
        text: 'Бакалея',
        count: 234,
        imageUrl: catalogImage
      },
      {
        text: 'Напитки',
        count: 156,
        imageUrl: catalogImage
      }
    ];

    return (
      <CatalogSectionContainer
        ref={ref}
        className={className}
        {...rest}
      >
        {/* Заголовок секции */}
        <SectionHeader>
          <Heading
            size="H1"
            title="Каталог"
            subtitle=""
          />
          <Heading
            size="H1"
            title=""
            subtitle=""
            button={true}
            buttonText="Открыть каталог"
            onButtonClick={handleOpenCatalogClick}
          />
        </SectionHeader>

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
