/**
 * PromoSection Component
 * 
 * Секция промо-баннеров из Figma дизайна
 * Содержит заголовок и 3 промо-баннера в flex-контейнере
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Heading, PromoBanner } from '../index';

// ============================================================================
// TYPES
// ============================================================================

export interface PromoSectionProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Обработчик клика на промо-баннер
   */
  onBannerClick?: (bannerIndex: number) => void;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const PromoSectionContainer = styled(Box)(({ theme }) => ({
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

const PromoBannersContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  position: 'relative',
  width: '100%',
  gap: '16px',
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const PromoSection = forwardRef<HTMLDivElement, PromoSectionProps>(
  (
    {
      className,
      onBannerClick,
      ...rest
    },
    ref
  ) => {
    const handleBannerClick = (index: number) => {
      if (onBannerClick) {
        onBannerClick(index);
      }
    };

    return (
      <PromoSectionContainer
        ref={ref}
        className={className}
        {...rest}
      >
        {/* Заголовок секции */}
        <Heading
          size="H1"
          title="Акции"
        />

        {/* Контейнер с 3 промо-баннерами */}
        <PromoBannersContainer>
          <PromoBanner
            size="M"
            state="Default"
            onClick={() => handleBannerClick(0)}
          />
          <PromoBanner
            size="M"
            state="Default"
            onClick={() => handleBannerClick(1)}
          />
          <PromoBanner
            size="M"
            state="Default"
            onClick={() => handleBannerClick(2)}
          />
        </PromoBannersContainer>
      </PromoSectionContainer>
    );
  }
);

PromoSection.displayName = 'PromoSection';
