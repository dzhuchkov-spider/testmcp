/**
 * Catalog Component
 * 
 * Компонент каталога из Figma Design Library
 * Поддерживает размеры: M, L
 * Уровни: 1, 2, 3
 * Состояния: Default, Hover, Focused
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// Изображения из Figma
const imgShutterstock11138548612 = "https://www.figma.com/api/mcp/asset/f27f1f74-5e0a-4c6c-a355-7a733b06aedc";
const imgShutterstock11138548611 = "https://www.figma.com/api/mcp/asset/d02009ea-c164-4bb2-94e3-456c643c239a";
const imgShutterstock11138548613 = "https://www.figma.com/api/mcp/asset/168cc342-227d-4a7f-8bd6-e0caa7b435f8";
const imgShutterstock11138548614 = "https://www.figma.com/api/mcp/asset/db816bb8-62cb-4911-83c8-f2269ea0234d";
const imgUnion = "https://www.figma.com/api/mcp/asset/72671b3b-427a-4d28-8b1b-03d05bee7e7c";
const imgUnion1 = "https://www.figma.com/api/mcp/asset/40c50650-b2a5-4df3-b024-2253f7e412bd";

// Совместимость с существующим кодом
const catalogImageM = imgShutterstock11138548611;
const catalogImageS = imgShutterstock11138548613;
const arrowIcon = imgUnion;
const arrowIconGray = imgUnion1;

// ============================================================================
// TYPES
// ============================================================================

export type CatalogSize = 'M' | 'L';
export type CatalogLevel = '1' | '2' | '3';
export type CatalogState = 'Default' | 'Hover' | 'Focused';

export interface CatalogProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Уровень каталога
   * @default '1'
   */
  level?: CatalogLevel;
  
  /**
   * Размер компонента
   * @default 'L'
   */
  size?: CatalogSize;
  
  /**
   * Состояние компонента
   * @default 'Default'
   */
  state?: CatalogState;
  
  /**
   * Текст категории
   * @default 'Placeholder'
   */
  text?: string;
  
  /**
   * Количество товаров (для уровня 1)
   * @default 144
   */
  count?: number;
  
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

const CatalogContainer = styled(Box)<{
  $level: CatalogLevel;
  $size: CatalogSize;
  $state: CatalogState;
}>(({ theme, $level, $size, $state }) => {
  const isLAndDefaultAnd1 = $size === 'L' && $state === 'Default' && $level === '1';
  const isLAndHoverAnd1 = $size === 'L' && $state === 'Hover' && $level === '1';
  const isMAnd1 = $size === 'M' && $level === '1';
  const isMAndDefaultAnd1 = $size === 'M' && $state === 'Default' && $level === '1';
  const isMAndDefaultAnd2 = $size === 'M' && $state === 'Default' && $level === '2';
  const isMAndDefaultAnd3 = $size === 'M' && $state === 'Default' && $level === '3';
  const isMAndFocusedAnd1 = $size === 'M' && $state === 'Focused' && $level === '1';
  const isMAndFocusedAnd2 = $size === 'M' && $state === 'Focused' && $level === '2';
  const isMAndFocusedAnd3 = $size === 'M' && $state === 'Focused' && $level === '3';
  const isMAndHoverAnd1 = $size === 'M' && $state === 'Hover' && $level === '1';
  const isMAndHoverAnd2 = $size === 'M' && $state === 'Hover' && $level === '2';
  const isMAndHoverAnd3 = $size === 'M' && $state === 'Hover' && $level === '3';

  if ($size === 'M' && $level === '3') {
    return {
      display: 'flex',
      alignItems: 'center',
      padding: '16px 12px',
      position: 'relative',
      width: '239px',
      backgroundColor: theme.palette.common.white,
      borderBottom: '1px solid #f6f7f7',
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
    };
  }

  if ($size === 'M' && $level === '2' && ['Hover', 'Focused'].includes($state)) {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      position: 'relative',
      width: '239px',
      boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.06)',
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
    };
  }

  if (isMAndDefaultAnd2) {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      position: 'relative',
      width: '239px',
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
    };
  }

  if ($size === 'M' && $level === '1' && ['Hover', 'Focused'].includes($state)) {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      position: 'relative',
      width: '239px',
      height: '121px',
      backgroundColor: '#ffd6d6',
      border: '2px solid #ec5466',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.06)',
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
    };
  }

  if (isMAndDefaultAnd1) {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      position: 'relative',
      width: '239px',
      height: '121px',
      backgroundColor: '#ffd6d6',
      border: '2px solid white',
      borderRadius: '20px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'all 200ms ease-in-out',
    };
  }

  // Default for L size
  return {
    position: 'relative',
    width: '232px',
    height: '174px',
    cursor: 'pointer',
    transition: 'all 200ms ease-in-out',
  };
});

const CatalogContent = styled(Box)<{
  $level: CatalogLevel;
  $size: CatalogSize;
  $state: CatalogState;
}>(({ theme, $level, $size, $state }) => {
  const isLAndDefaultAnd1 = $size === 'L' && $state === 'Default' && $level === '1';
  const isLAndHoverAnd1 = $size === 'L' && $state === 'Hover' && $level === '1';

  if ($size === 'L' && $level === '1' && ['Default', 'Hover'].includes($state)) {
    return {
      position: 'absolute',
      backgroundColor: '#ffd6d6',
      border: '3px solid rgba(255, 255, 255, 0.75)',
      borderRadius: isLAndHoverAnd1 ? '24.414px' : '24px',
      width: isLAndHoverAnd1 ? '236px' : '232px',
      height: isLAndHoverAnd1 ? '177px' : '174px',
      transform: `translate(-50%, -50%) translateY(${isLAndHoverAnd1 ? '0.5px' : '0px'})`,
      top: '50%',
      left: '50%',
      overflow: 'hidden',
    };
  }

  if ($size === 'M' && $level === '2') {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '24px 12px 20px 20px',
      position: 'relative',
      borderRadius: '16px',
      backgroundColor: theme.palette.common.white,
      width: '100%',
      flexShrink: 0,
    };
  }

  return {};
});

const CatalogHeading = styled(Box)<{
  $level: CatalogLevel;
  $size: CatalogSize;
  $state: CatalogState;
}>(({ theme, $level, $size, $state }) => {
  const isLAndDefaultAnd1 = $size === 'L' && $state === 'Default' && $level === '1';
  const isLAndHoverAnd1 = $size === 'L' && $state === 'Hover' && $level === '1';
  const isMAnd1 = $size === 'M' && $level === '1';

  if (isLAndDefaultAnd1) {
    return {
      position: 'absolute',
      top: '18px',
      left: '22px',
      right: '22px',
    };
  }

  if (isLAndHoverAnd1) {
    return {
      position: 'absolute',
      top: '18.31px',
      left: '22.38px',
      right: '22.38px',
    };
  }

  if (isMAnd1) {
    return {
      position: 'absolute',
      top: '14px',
      left: '18px',
      right: '18px',
    };
  }

  return {};
});

const CatalogCounter = styled(Box)<{
  $level: CatalogLevel;
  $size: CatalogSize;
  $state: CatalogState;
}>(({ theme, $level, $size, $state }) => {
  const isLAndDefaultAnd1 = $size === 'L' && $state === 'Default' && $level === '1';
  const isLAndHoverAnd1 = $size === 'L' && $state === 'Hover' && $level === '1';
  const isMAnd1 = $size === 'M' && $level === '1';

  if (isLAndDefaultAnd1) {
    return {
      position: 'absolute',
      bottom: '14px',
      left: '14px',
    };
  }

  if (isLAndHoverAnd1) {
    return {
      position: 'absolute',
      bottom: '13.66px',
      left: '14.24px',
    };
  }

  if (isMAnd1) {
    return {
      position: 'absolute',
      bottom: '12px',
      left: '12px',
    };
  }

  return {};
});

const CounterBadge = styled(Box)<{
  $level: CatalogLevel;
  $size: CatalogSize;
  $state: CatalogState;
}>(({ theme, $level, $size, $state }) => {
  const isLAndDefaultAnd1 = $size === 'L' && $state === 'Default' && $level === '1';
  const isLAndHoverAnd1 = $size === 'L' && $state === 'Hover' && $level === '1';

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '20px',
    padding: isLAndHoverAnd1 ? '4.069px 8.138px' : '4px 8px',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    border: '1px solid white',
    borderRadius: isLAndHoverAnd1 ? '16.276px' : '16px',
    position: 'relative',
    flexShrink: 0,
  };
});

const CatalogImage = styled(Box)<{
  $level: CatalogLevel;
  $size: CatalogSize;
  $state: CatalogState;
}>(({ theme, $level, $size, $state }) => {
  const isLAndDefaultAnd1 = $size === 'L' && $state === 'Default' && $level === '1';
  const isLAndHoverAnd1 = $size === 'L' && $state === 'Hover' && $level === '1';
  const isMAnd1 = $size === 'M' && $level === '1';

  if (isLAndDefaultAnd1) {
    return {
      position: 'absolute',
      bottom: '-4px',
      right: '-4px',
      width: '144px',
      height: '112px',
      overflow: 'hidden',
      borderRadius: '12px',
    };
  }

  if (isLAndHoverAnd1) {
    return {
      position: 'absolute',
      bottom: '-4.07px',
      right: '-4.07px',
      width: '146.483px',
      height: '113.931px',
      overflow: 'hidden',
      borderRadius: '12px',
    };
  }

  if (isMAnd1) {
    return {
      position: 'absolute',
      bottom: '-2px',
      right: '-2px',
      width: '114px',
      height: '88px',
      overflow: 'hidden',
      borderRadius: '12px',
    };
  }

  return {};
});

const ArrowIcon = styled(Box)<{
  $state: CatalogState;
}>(({ theme, $state }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '24px',
  height: '24px',
  flexShrink: 0,
  '& img': {
    width: '9.054px',
    height: '5.165px',
    objectFit: 'contain',
    transform: 'rotate(180deg)',
  },
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const Catalog = forwardRef<HTMLDivElement, CatalogProps>(
  (
    {
      className,
      level = '1',
      size = 'L',
      state = 'Default',
      text = 'Placeholder',
      count = 144,
      onClick,
      imageUrl,
      ...rest
    },
    ref
  ) => {
    const isMAnd1 = size === 'M' && level === '1';
    const isMAnd2 = size === 'M' && level === '2';
    const isMAnd3 = size === 'M' && level === '3';
    const isLAnd1 = size === 'L' && level === '1';

    const isHoverOrFocused = ['Hover', 'Focused'].includes(state);
    const textColor = isMAnd2 || isMAnd3 
      ? (isHoverOrFocused ? '#f4364c' : (isMAnd3 ? '#47505d' : '#192434'))
      : '#192434';

    return (
      <CatalogContainer
        ref={ref}
        className={className}
        $level={level}
        $size={size}
        $state={state}
        onClick={onClick}
        {...rest}
      >
        {isMAnd1 && (
          <>
            <CatalogImage $level={level} $size={size} $state={state}>
              <img 
                src={imageUrl || catalogImageS} 
                alt="Catalog" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </CatalogImage>
            
            <CatalogCounter $level={level} $size={size} $state={state}>
              <CounterBadge $level={level} $size={size} $state={state}>
                <Typography sx={{ 
                  fontSize: '12px', 
                  fontWeight: 500, 
                  lineHeight: '16px',
                  color: '#192434',
                  letterSpacing: '-0.24px',
                  fontFamily: '"Inter", sans-serif',
                }}>
                  362
                </Typography>
              </CounterBadge>
            </CatalogCounter>
            
            <CatalogHeading $level={level} $size={size} $state={state}>
              <Typography sx={{
                fontSize: '15px',
                fontWeight: 600,
                lineHeight: '20px',
                color: '#192434',
                fontFamily: '"Inter", sans-serif',
                height: '40px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                {text}
              </Typography>
            </CatalogHeading>
          </>
        )}

        {isMAnd2 && (
          <CatalogContent $level={level} $size={size} $state={state}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <Box sx={{ flex: 1, minWidth: '1px' }}>
                <Typography sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  color: textColor,
                  fontFamily: '"Inter", sans-serif',
                }}>
                  {text}
                </Typography>
              </Box>
              <ArrowIcon $state={state}>
                <img src={arrowIcon} alt="Arrow" />
              </ArrowIcon>
            </Box>
          </CatalogContent>
        )}

        {isMAnd3 && (
          <>
            <Typography sx={{
              flex: 1,
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '24px',
              color: textColor,
              fontFamily: '"Inter", sans-serif',
              minWidth: '1px',
            }}>
              {text}
            </Typography>
            <ArrowIcon $state={state}>
              <img src={isHoverOrFocused ? arrowIcon : arrowIconGray} alt="Arrow" />
            </ArrowIcon>
          </>
        )}

        {isLAnd1 && (
          <CatalogContent $level={level} $size={size} $state={state}>
            <CatalogHeading $level={level} $size={size} $state={state}>
              <Typography sx={{
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: '26px',
                color: '#192434',
                fontFamily: '"Inter", sans-serif',
                letterSpacing: '-0.18px',
                height: '52px',
              }}>
                {text}
              </Typography>
            </CatalogHeading>
            
            <CatalogCounter $level={level} $size={size} $state={state}>
              <CounterBadge $level={level} $size={size} $state={state}>
                <Typography sx={{ 
                  fontSize: '16px', 
                  fontWeight: 500, 
                  lineHeight: '24px',
                  color: '#192434',
                  fontFamily: '"Inter", sans-serif',
                }}>
                  {count}
                </Typography>
              </CounterBadge>
            </CatalogCounter>
            
            {state === 'Default' && (
              <CatalogImage $level={level} $size={size} $state={state}>
                <img 
                  src={imageUrl || catalogImageM} 
                  alt="Catalog" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </CatalogImage>
            )}
          </CatalogContent>
        )}
      </CatalogContainer>
    );
  }
);

Catalog.displayName = 'Catalog';
