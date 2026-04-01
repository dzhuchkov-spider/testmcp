/**
 * ProductCard Component
 * 
 * Компонент карточки товара из Figma Design Library
 * Поддерживает состояния: Default, Hover
 * Опции: счетчики, бейджи, различные размеры
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

// Изображения из Figma
const imgIcon = "https://www.figma.com/api/mcp/asset/219582fb-9ab6-437b-8bba-cf195accb8be";
const imgUnion = "https://www.figma.com/api/mcp/asset/32f4daae-1115-4430-aa95-b88387bb6bec";
const imgDumplingsClassic = "https://www.figma.com/api/mcp/asset/d4b4c8ae-db74-460f-b417-748ed8d016a2";

// Совместимость с существующим кодом
const favoriteIcon = imgIcon;
const basketIcon = imgUnion;
const productImage = imgDumplingsClassic;

// ============================================================================
// TYPES
// ============================================================================

export interface ProductCardProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Доступность товара
   * @default false
   */
  available?: boolean;
  
  /**
   * Показать бейдж
   * @default false
   */
  bages?: boolean;
  
  /**
   * Состояние hover эффекта
   * @default 'Off'
   */
  hover?: 'Off' | 'On';
  
  /**
   * ID товара
   * @default 'ID: 1234567890'
   */
  id?: string;
  
  /**
   * Название товара
   * @default 'Пельмени класс. мини 10 шт'
   */
  name?: string;
  
  /**
   * Тип компонента
   * @default 'Default'
   */
  type?: 'Default';
  
  /**
   * Ориентация
   * @default 'On'
   */
  vertHorizont?: 'On' | 'Off';
  
  /**
   * Цена товара
   * @default 640
   */
  price?: number;
  
  /**
   * Единица измерения
   * @default '1 шт'
   */
  unit?: string;
  
  /**
   * Цена за упаковку
   * @default '1 кор / 6 400.00'
   */
  packagePrice?: string;
  
  /**
   * Обработчик клика на карточку
   */
  onClick?: () => void;
  
  /**
   * Обработчик клика на избранное
   */
  onFavoriteClick?: (event: React.MouseEvent) => void;
  
  /**
   * Обработчик клика на корзину
   */
  onBasketClick?: (event: React.MouseEvent) => void;
  
  /**
   * В избранном ли товар
   * @default false
   */
  isFavorite?: boolean;
  
  /**
   * В корзине ли товар
   * @default false
   */
  inBasket?: boolean;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const ProductCardContainer = styled(Box)<{
  $hover: 'Off' | 'On';
}>(({ theme, $hover }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  padding: '10px',
  position: 'relative',
  width: '164px',
  backgroundColor: theme.palette.common.white,
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    transform: $hover === 'On' ? 'translateY(-2px)' : 'none',
    boxShadow: $hover === 'On' ? '0px 4px 12px rgba(0,0,0,0.1)' : 'none',
  },
}));

const ProductImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  height: '140px',
  backgroundColor: theme.palette.common.white,
  borderRadius: '12px',
  overflow: 'hidden',
  flexShrink: 0,
  '& img': {
    position: 'absolute',
    top: '0.23%',
    bottom: '1.72%',
    left: '1.72%',
    right: '0.23%',
    width: 'calc(100% - 3.9%)',
    height: 'calc(100% - 1.95%)',
    objectFit: 'contain',
  },
}));

const ProductInfoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  alignItems: 'flex-start',
  position: 'relative',
  width: '100%',
  flexShrink: 0,
}));

const ProductInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  alignItems: 'flex-start',
  position: 'relative',
  width: '100%',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '20px',
  color: theme.palette.text.primary,
  fontStyle: 'normal',
}));

const ProductName = styled(Typography)(({ theme }) => ({
  height: '40px',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '20px',
  color: theme.palette.text.primary,
  fontFamily: '"Inter", sans-serif',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  letterSpacing: '-0.24px',
  flexShrink: 0,
  width: '100%',
}));

const ProductId = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '12px',
  justifyContent: 'center',
  lineHeight: 0,
  overflow: 'hidden',
  fontSize: '13px',
  fontWeight: 400,
  color: theme.palette.grey[500],
  letterSpacing: '-0.195px',
  width: '100%',
  whiteSpace: 'nowrap',
  '& span': {
    lineHeight: '16px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const ProductPriceContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '74px',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  position: 'relative',
  width: '144px',
  flexShrink: 0,
}));

const BoxAndPrice = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '1 0 0',
  alignItems: 'center',
  minHeight: '1px',
  minWidth: '1px',
  padding: '4px 0px',
  position: 'relative',
  width: '100%',
}));

const PackagePrice = styled(Typography)(({ theme }) => ({
  flex: '1 0 0',
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  height: '20px',
  minHeight: '1px',
  minWidth: '1px',
  overflow: 'hidden',
  color: theme.palette.grey[500],
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontFamily: '"Inter", sans-serif',
}));

const PriceAndBasketContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: '100%',
  flexShrink: 0,
}));

const CostContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1px',
  alignItems: 'flex-start',
  position: 'relative',
  flexShrink: 0,
}));

const Cost = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  lineHeight: 0,
  position: 'relative',
  color: theme.palette.text.primary,
  whiteSpace: 'nowrap',
}));

const PriceInteger = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  flexShrink: 0,
  fontSize: '20px',
  fontWeight: 700,
  fontFamily: '"Inter", sans-serif',
  letterSpacing: '-0.3px',
}));

const PriceDecimal = styled(Typography)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  flexShrink: 0,
  fontSize: '12px',
  fontWeight: 800,
  fontFamily: '"Inter", sans-serif',
}));

const Unit = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '12px',
  padding: '0px 2px',
  position: 'relative',
  flexShrink: 0,
}));

const UnitText = styled(Typography)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: 400,
  lineHeight: '16px',
  color: theme.palette.grey[500],
  fontFamily: '"Inter", sans-serif',
  whiteSpace: 'nowrap',
}));

const BasketButton = styled(Button)<{
  $inBasket?: boolean;
}>(({ theme, $inBasket }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
  padding: '8px',
  position: 'relative',
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  backgroundColor: $inBasket ? theme.palette.success.main : '#93da49',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    backgroundColor: $inBasket ? theme.palette.success.dark : '#7fb855',
    transform: 'translateY(-1px)',
  },
  '&:active': {
    transform: 'translateY(0px)',
  },
}));

const ActionButtonsContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '0px',
  left: '116px',
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
  padding: '10px',
  width: '48px',
  height: '48px',
}));

const FavoriteButton = styled(Box)<{
  $isFavorite?: boolean;
}>(({ theme, $isFavorite }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '28px',
  height: '28px',
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const StatusBadge = styled(Box)<{
  $type: 'available' | 'new';
}>(({ theme, $type }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  padding: $type === 'available' ? '2px 8px' : '6px 10px',
  borderRadius: $type === 'available' ? '20px' : '8px',
  backgroundColor: $type === 'available' ? '#93da49' : '#d6e2f2',
  border: $type === 'new' ? '1px solid white' : 'none',
  left: '10px',
  top: $type === 'available' ? '130px' : '10px',
}));

const StatusText = styled(Typography)<{
  $type: 'available' | 'new';
}>(({ theme, $type }) => ({
  fontSize: '12px',
  fontWeight: 600,
  lineHeight: '16px',
  color: $type === 'available' ? 'white' : '#147bdb',
  fontFamily: '"Inter", sans-serif',
  whiteSpace: 'nowrap',
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      className,
      available = false,
      bages = false,
      hover = 'Off',
      id = 'ID: 1234567890',
      name = 'Пельмени класс. мини 10 шт',
      type = 'Default',
      vertHorizont = 'On',
      price = 640,
      unit = '1 шт',
      packagePrice = '1 кор / 6 400.00',
      onClick,
      onFavoriteClick,
      onBasketClick,
      isFavorite = false,
      inBasket = false,
      ...rest
    },
    ref
  ) => {
    const handleCardClick = (event: React.MouseEvent) => {
      if (onClick) {
        onClick();
      }
    };

    const handleFavoriteClick = (event: React.MouseEvent) => {
      event.stopPropagation();
      if (onFavoriteClick) {
        onFavoriteClick(event);
      }
    };

    const handleBasketClick = (event: React.MouseEvent) => {
      event.stopPropagation();
      if (onBasketClick) {
        onBasketClick(event);
      }
    };

    const priceInteger = Math.floor(price);
    const priceDecimal = ((price % 1) * 100).toFixed(0).padStart(2, '0');

    return (
      <ProductCardContainer
        ref={ref}
        className={className}
        $hover={hover}
        onClick={handleCardClick}
        {...rest}
      >
        <ProductImageContainer>
          <img src={productImage} alt={name} />
        </ProductImageContainer>

        <ProductInfoContainer>
          <ProductInfo>
            <ProductName>
              {name}
            </ProductName>
            <ProductId>
              <span>{id}</span>
            </ProductId>
          </ProductInfo>

          <ProductPriceContainer>
            <BoxAndPrice>
              <PackagePrice>
                {packagePrice}
              </PackagePrice>
            </BoxAndPrice>

            <PriceAndBasketContainer>
              <CostContainer>
                <Cost>
                  <PriceInteger>
                    {priceInteger}
                  </PriceInteger>
                  <PriceDecimal>
                    {priceDecimal}
                  </PriceDecimal>
                </Cost>
                <Unit>
                  <UnitText>
                    {unit}
                  </UnitText>
                </Unit>
              </CostContainer>

              <BasketButton $inBasket={inBasket} onClick={handleBasketClick}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: '30px',
                  height: '30px',
                  position: 'absolute',
                  top: '5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}>
                  <img 
                    src={basketIcon} 
                    alt="Basket" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'contain' 
                    }} 
                  />
                </Box>
              </BasketButton>
            </PriceAndBasketContainer>
          </ProductPriceContainer>
        </ProductInfoContainer>

        <ActionButtonsContainer>
          <FavoriteButton $isFavorite={isFavorite} onClick={handleFavoriteClick}>
            <img src={favoriteIcon} alt="Favorite" />
          </FavoriteButton>
        </ActionButtonsContainer>

        {available && (
          <StatusBadge $type="available">
            <StatusText $type="available">В наличии</StatusText>
          </StatusBadge>
        )}

        {bages && (
          <StatusBadge $type="new">
            <StatusText $type="new">Новинка</StatusText>
          </StatusBadge>
        )}
      </ProductCardContainer>
    );
  }
);

ProductCard.displayName = 'ProductCard';
