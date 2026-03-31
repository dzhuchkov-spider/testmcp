/**
 * Header Component
 * 
 * Компонент хедера из Figma Design Library
 * Поддерживает размеры: Desk, Tablet
 * Состояния: Logged in, Unlogged, Blocked, Part Blocked
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

// Иконки из Figma
const logoIcon = "https://www.figma.com/api/mcp/asset/97f85191-edd7-4213-b276-03126f04566f";
const basketIcon = "https://www.figma.com/api/mcp/asset/5490b14a-ac72-4b2e-9520-73cd47be7046";
const likeIcon = "https://www.figma.com/api/mcp/asset/7bc314c9-a667-411d-8102-1bd44d71ea07";
const profileIcon = "https://www.figma.com/api/mcp/asset/52f947d5-1e40-46bb-b44d-3e3d282e85d6";
const searchIcon = "https://www.figma.com/api/mcp/asset/88da8487-81bf-464c-92d8-b28fd9d515c4";
const catalogIcon = "https://www.figma.com/api/mcp/asset/eaf61dc0-4d06-47d1-8f25-be3415f2721a";
const companyIcon = "https://www.figma.com/api/mcp/asset/f02568cc-7a0a-4535-ab6d-0f43ce7950a2";
const arrowIcon = "https://www.figma.com/api/mcp/asset/ea94a8b5-31f0-40d9-ab50-2c834ed4e2dd";

// ============================================================================
// TYPES
// ============================================================================

export type HeaderSize = 'Desk' | 'Tablet';
export type HeaderState = 'Logged in' | 'Unlogged' | 'Blocked' | 'Part Blocked';

export interface HeaderProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Размер хедера
   * @default 'Desk'
   */
  size?: HeaderSize;
  
  /**
   * Состояние хедера
   * @default 'Logged in'
   */
  state?: HeaderState;
  
  /**
   * Обработчик клика на логотип
   */
  onLogoClick?: () => void;
  
  /**
   * Обработчик клика на профиль
   */
  onProfileClick?: () => void;
  
  /**
   * Обработчик клика на корзину
   */
  onBasketClick?: () => void;
  
  /**
   * Обработчик клика на избранное
   */
  onLikeClick?: () => void;
  
  /**
   * Обработчик клика на каталог
   */
  onCatalogClick?: () => void;
  
  /**
   * Счетчик для корзины
   * @default 0
   */
  basketCount?: number;
  
  /**
   * Счетчик для избранного
   * @default 0
   */
  likeCount?: number;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const HeaderContainer = styled(Box)<{
  $size: HeaderSize;
  $state: HeaderState;
}>(({ theme, $size, $state }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: $size === 'Tablet' ? '744px' : '1512px',
  backgroundColor: theme.palette.background.paper,
}));

const PrimarySection = styled(Box)<{
  $size: HeaderSize;
}>(({ theme, $size }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  paddingBottom: $size === 'Desk' ? '16px' : '12px',
  paddingTop: '16px',
  gap: $size === 'Desk' ? '16px' : '12px',
}));

const ContentWrapper = styled(Box)<{
  $size: HeaderSize;
}>(({ theme, $size }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: $size === 'Tablet' ? '704px' : '1208px',
  height: $size === 'Tablet' ? '40px' : '48px',
  gap: $size === 'Tablet' ? '12px' : '24px',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  overflow: 'hidden',
  padding: '12px',
  position: 'relative',
  width: '196px',
  height: '44px',
  gap: '0px',
  borderRadius: '8px',
  cursor: 'pointer',
  '& img': {
    width: '194px',
    height: '20px',
    objectFit: 'contain',
  },
}));

const SearchSection = styled(Box)<{
  $size: HeaderSize;
}>(({ theme, $size }) => ({
  display: 'flex',
  flex: '1 0 0',
  alignItems: 'center',
  gap: '12px',
  position: 'relative',
  height: '40px',
}));

const CatalogButton = styled(Button)<{
  $size: HeaderSize;
}>(({ theme, $size }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '10px 16px',
  height: '40px',
  minWidth: 'auto',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: '12px',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '18px',
  textTransform: 'none',
  fontFamily: '"Inter", sans-serif',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'translateY(-1px)',
  },
  '&:active': {
    transform: 'translateY(0px)',
  },
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '1 0 0',
  alignItems: 'center',
  gap: '6px',
  paddingLeft: '10px',
  position: 'relative',
  height: '40px',
  backgroundColor: theme.palette.grey[50],
  border: '1px solid #e8e9eb',
  borderRadius: '12px',
  alignSelf: 'stretch',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    borderColor: '#d1d3d6',
  },
}));

const HeaderButton = styled(Box)<{
  $showCounter?: boolean;
}>(({ theme, $showCounter }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  padding: '8px',
  position: 'relative',
  borderRadius: '12px',
  backgroundColor: theme.palette.common.white,
  cursor: 'pointer',
  transition: 'all 200ms ease-in-out',
  '&:hover': {
    transform: 'translateY(-1px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '24px',
  height: '24px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const CounterBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '12px',
  top: '-4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '20px',
  padding: '2px 4px',
  backgroundColor: '#f65e70',
  border: '1.5px solid white',
  borderRadius: '10px',
  '& span': {
    color: 'white',
    fontSize: '11px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '-0.22px',
    fontFamily: '"Inter", sans-serif',
  },
}));

const SecondarySection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  height: '48px',
  padding: '8px',
  backgroundColor: theme.palette.background.paper,
  borderBottom: '1px solid #f6f7f7',
  borderTop: '1px solid #f6f7f7',
  boxShadow: '0px 2px 6px 0px rgba(0,0,0,0.02)',
}));

const CompanySection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  position: 'relative',
  width: '1208px',
  height: '32px',
}));

const CompanyIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '24px',
  height: '24px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const CompanyText = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 400,
  lineHeight: '20px',
  color: theme.palette.text.primary,
  fontFamily: '"Inter", sans-serif',
}));

const RegisterLink = styled(Button)(({ theme }) => ({
  padding: '4px',
  height: '28px',
  minWidth: 'auto',
  backgroundColor: 'transparent',
  color: theme.palette.primary.main,
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '18px',
  textTransform: 'none',
  fontFamily: '"Inter", sans-serif',
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.dark,
  },
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  (
    {
      className,
      size = 'Desk',
      state = 'Logged in',
      onLogoClick,
      onProfileClick,
      onBasketClick,
      onLikeClick,
      onCatalogClick,
      basketCount = 0,
      likeCount = 0,
      ...rest
    },
    ref
  ) => {
    const isLoggedIn = state === 'Logged in';
    const isUnlogged = state === 'Unlogged';
    const isBlocked = state === 'Blocked';
    const isPartBlocked = state === 'Part Blocked';

    return (
      <HeaderContainer
        ref={ref}
        className={className}
        $size={size}
        $state={state}
        {...rest}
      >
        <PrimarySection $size={size}>
          <ContentWrapper $size={size}>
            <LogoContainer onClick={onLogoClick}>
              <img src={logoIcon} alt="MTG Agro" />
            </LogoContainer>
            
            <SearchSection $size={size}>
              {size === 'Desk' && (
                <>
                  <CatalogButton $size={size} onClick={onCatalogClick}>
                    <IconWrapper>
                      <img src={catalogIcon} alt="Catalog" />
                    </IconWrapper>
                    <Typography sx={{ fontSize: '14px', fontWeight: 600, lineHeight: '18px' }}>
                      Каталог
                    </Typography>
                  </CatalogButton>
                  
                  <SearchContainer>
                    <IconWrapper>
                      <img src={searchIcon} alt="Search" />
                    </IconWrapper>
                    <Typography sx={{ 
                      flex: 1, 
                      fontSize: '13px', 
                      fontWeight: 400, 
                      lineHeight: '16px',
                      color: '#a3a7ae',
                      fontFamily: '"Inter", sans-serif',
                    }}>
                      Что искать?
                    </Typography>
                  </SearchContainer>
                </>
              )}
            </SearchSection>
            
            {(isLoggedIn || isBlocked || isPartBlocked) && (
              <Box sx={{ display: 'flex', gap: '8px' }}>
                <HeaderButton onClick={onLikeClick} $showCounter={likeCount > 0}>
                  <IconWrapper>
                    <img src={likeIcon} alt="Like" />
                  </IconWrapper>
                  {likeCount > 0 && (
                    <CounterBadge>
                      <span>{likeCount}</span>
                    </CounterBadge>
                  )}
                  <Typography sx={{ fontSize: '13px', fontWeight: 500, lineHeight: '18px', color: '#192434' }}>
                    Избранное
                  </Typography>
                </HeaderButton>
                
                <HeaderButton onClick={onBasketClick} $showCounter={basketCount > 0}>
                  <IconWrapper>
                    <img src={basketIcon} alt="Basket" />
                  </IconWrapper>
                  {basketCount > 0 && (
                    <CounterBadge>
                      <span>{basketCount}</span>
                    </CounterBadge>
                  )}
                  <Typography sx={{ fontSize: '13px', fontWeight: 500, lineHeight: '18px', color: '#192434' }}>
                    Корзина
                  </Typography>
                </HeaderButton>
                
                <HeaderButton onClick={onProfileClick}>
                  <IconWrapper>
                    <img src={profileIcon} alt="Profile" />
                  </IconWrapper>
                  <Typography sx={{ fontSize: '13px', fontWeight: 500, lineHeight: '18px', color: '#192434' }}>
                    Профиль
                  </Typography>
                </HeaderButton>
              </Box>
            )}
          </ContentWrapper>
        </PrimarySection>
        
        {isUnlogged && size === 'Desk' && (
          <SecondarySection>
            <CompanySection>
              <CompanyIcon>
                <img src={companyIcon} alt="Company" />
              </CompanyIcon>
              <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <CompanyText>
                  Зарегистрируйтесь как юридическое лицо, чтобы разблокировать все функции приложения
                </CompanyText>
                <RegisterLink>
                  Зарегистрировать юр. лицо
                </RegisterLink>
              </Box>
            </CompanySection>
          </SecondarySection>
        )}
      </HeaderContainer>
    );
  }
);

Header.displayName = 'Header';
