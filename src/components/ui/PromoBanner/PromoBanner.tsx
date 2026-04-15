/**
 * PromoBanner Component
 * 
 * Компонент промо-баннера из Figma Design Library
 * Поддерживает размеры: S, M
 * Состояния: Default, Hover
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import promoBannerImage from '@/assets/img/Promo-Banner.png';

// Lokalnoe izobrazhenie
const bannerImageM = promoBannerImage;
const bannerImageS = promoBannerImage;

// ============================================================================
// TYPES
// ============================================================================

export type PromoBannerSize = 'S' | 'M';
export type PromoBannerState = 'Default' | 'Hover';

export interface PromoBannerProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Размер баннера
   * @default 'M'
   */
  size?: PromoBannerSize;
  
  /**
   * Состояние баннера
   * @default 'Default'
   */
  state?: PromoBannerState;
  
  /**
   * Обработчик клика
   */
  onClick?: () => void;
  
  /**
   * URL изображения для кастомизации
   */
  imageUrl?: string;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const PromoBannerContainer = styled(Box)<{
  $size: PromoBannerSize;
  $state: PromoBannerState;
}>(({ theme, $size, $state }) => {
  const isHoverAndM = $state === 'Hover' && $size === 'M';
  const isHoverAndS = $state === 'Hover' && $size === 'S';

  return {
    position: 'relative',
    borderRadius: '24px',
    width: $size === 'S' ? '343px' : '392px',
    height: $size === 'S' ? '194px' : '220px',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 200ms ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  };
});

const BannerBorder = styled(Box)<{
  $state: PromoBannerState;
}>(({ theme, $state }) => ({
  position: 'absolute',
  border: '2px solid rgba(255, 255, 255, 0.75)',
  borderRadius: $state === 'Hover' ? '24.49px' : '24px',
  inset: $state === 'Hover' ? '-2.24px -4px' : '0px',
  pointerEvents: 'none',
  transition: 'all 200ms ease-in-out',
}));

const BannerImage = styled('img')<{
  $size: PromoBannerSize;
  $state: PromoBannerState;
}>(({ theme, $size, $state }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: $state === 'Hover' ? '24.49px' : '24px',
  pointerEvents: 'none',
}));

const BannerImageM = styled(Box)<{
  $state: PromoBannerState;
}>(({ theme, $state }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  pointerEvents: 'none',
  borderRadius: $state === 'Hover' ? '24.49px' : '24px',
  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '178.38%',
    height: '100%',
    objectFit: 'cover',
    pointerEvents: 'none',
  },
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const PromoBanner = forwardRef<HTMLDivElement, PromoBannerProps>(
  (
    {
      className,
      size = 'M',
      state = 'Default',
      onClick,
      imageUrl,
      ...rest
    },
    ref
  ) => {
    const isHoverAndM = state === 'Hover' && size === 'M';
    const isHoverAndS = state === 'Hover' && size === 'S';

    return (
      <PromoBannerContainer
        ref={ref}
        className={className}
        $size={size}
        $state={state}
        onClick={onClick}
        {...rest}
      >
        <BannerBorder $state={state}>
          {size === 'M' && (
            <BannerImageM $state={state}>
              <img 
                src={imageUrl || bannerImageM} 
                alt="Promo Banner" 
              />
            </BannerImageM>
          )}
          
          {size === 'S' && (
            <BannerImage 
              $size={size}
              $state={state}
              src={imageUrl || bannerImageS} 
              alt="Promo Banner" 
            />
          )}
        </BannerBorder>
      </PromoBannerContainer>
    );
  }
);

PromoBanner.displayName = 'PromoBanner';
