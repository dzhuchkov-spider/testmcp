/**
 * Heading Component
 * 
 * Компонент заголовка из Figma Design Library
 * Поддерживает размеры: H1, H2, H3, H4
 * Опции: кнопка "назад", кнопка действия, меню
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

// Иконки из Figma
const backIcon = "https://www.figma.com/api/mcp/asset/52c53c98-ce6e-4595-81b6-755e93ac2479";
const menuIcon = "https://www.figma.com/api/mcp/asset/432a1696-83fb-4762-944e-b04286e82cb1";

// ============================================================================
// TYPES
// ============================================================================

export type HeadingSize = 'H1' | 'H2' | 'H3' | 'H4';

export interface HeadingProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Показать кнопку "назад"
   * @default false
   */
  back?: boolean;
  
  /**
   * Показать кнопку действия
   * @default false
   */
  button?: boolean;
  
  /**
   * Показать кнопку меню
   * @default false
   */
  menu?: boolean;
  
  /**
   * Размер заголовка
   * @default 'H1'
   */
  size?: HeadingSize;
  
  /**
   * Текст заголовка
   * @default 'Heading'
   */
  title?: string;
  
  /**
   * Текст подзаголовка
   * @default 'Heading'
   */
  subtitle?: string;
  
  /**
   * Текст кнопки
   * @default 'Button'
   */
  buttonText?: string;
  
  /**
   * Обработчик клика на кнопку "назад"
   */
  onBackClick?: () => void;
  
  /**
   * Обработчик клика на кнопку действия
   */
  onButtonClick?: () => void;
  
  /**
   * Обработчик клика на меню
   */
  onMenuClick?: () => void;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const HeadingContainer = styled(Box)<{
  $size: HeadingSize;
}>(({ theme, $size }) => ({
  display: 'flex',
  gap: '20px',
  position: 'relative',
  width: '411px',
  alignItems: $size === 'H4' ? 'center' : 'flex-start',
}));

const BackButton = styled(Button)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
  position: 'relative',
  width: '40px',
  height: '40px',
  borderRadius: '12px',
  flexShrink: 0,
  backgroundColor: theme.palette.common.white,
  border: '1px solid #f2f2f3',
  boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.12)',
  padding: 0,
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: theme.palette.grey[50],
    transform: 'translateY(-1px)',
  },
}));

const BackIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '24px',
  height: '24px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const ContentContainer = styled(Box)<{
  $size: HeadingSize;
}>(({ theme, $size }) => ({
  display: 'flex',
  flex: '1 0 0',
  minHeight: '1px',
  minWidth: '1px',
  position: 'relative',
  gap: $size === 'H4' ? '8px' : $size === 'H3' ? '2px' : '4px',
  alignItems: $size === 'H4' ? 'center' : 'flex-start',
  flexDirection: $size === 'H4' ? 'row' : 'column',
  leading: 0,
  paddingTop: '2px',
  paddingBottom: '6px',
}));

const Title = styled(Typography)<{
  $size: HeadingSize;
}>(({ theme, $size }) => ({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 600,
  justifyContent: 'flex-end',
  position: 'relative',
  flexShrink: 0,
  color: theme.palette.text.primary,
  width: '100%',
  ...($size === 'H1' && {
    fontSize: '28px',
    letterSpacing: '-0.28px',
    lineHeight: '36px',
  }),
  ...($size === 'H2' && {
    fontSize: '22px',
    letterSpacing: '-0.22px',
    lineHeight: '28px',
  }),
  ...($size === 'H3' && {
    fontSize: '18px',
    letterSpacing: '-0.18px',
    lineHeight: '22px',
  }),
  ...($size === 'H4' && {
    fontSize: '16px',
    lineHeight: '24px',
    whiteSpace: 'nowrap',
  }),
}));

const Subtitle = styled(Typography)<{
  $size: HeadingSize;
}>(({ theme, $size }) => ({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 500,
  height: '28px',
  justifyContent: 'center',
  position: 'relative',
  flexShrink: 0,
  color: theme.palette.text.secondary,
  width: '100%',
  ...($size === 'H1' && {
    fontSize: '16px',
    lineHeight: '24px',
  }),
  ...($size === 'H2' && {
    fontSize: '16px',
    lineHeight: '24px',
  }),
  ...($size === 'H3' && {
    fontSize: '14px',
    lineHeight: '24px',
  }),
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  paddingBottom: '4px',
  paddingTop: '8px',
  position: 'relative',
  flexShrink: 0,
}));

const LinkButton = styled(Button)<{
  $size?: HeadingSize;
}>(({ theme, $size }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  position: 'relative',
  padding: 0,
  backgroundColor: 'transparent',
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiButton-startIcon': {
    margin: 0,
  },
}));

const ButtonText = styled(Typography)<{
  $size?: HeadingSize;
}>(({ theme, $size }) => ({
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 600,
  justifyContent: 'center',
  leading: 0,
  position: 'relative',
  flexShrink: 0,
  color: '#f4364c',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  ...($size === 'H4' ? {
    fontSize: '14px',
    lineHeight: '18px',
  } : {
    fontSize: '16px',
    lineHeight: '20px',
  }),
}));

const MenuButton = styled(Button)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
  padding: '8px',
  position: 'relative',
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  flexShrink: 0,
  backgroundColor: '#f6f7f7',
  minWidth: 'auto',
  '&:hover': {
    backgroundColor: theme.palette.grey[200],
    transform: 'translateY(-1px)',
  },
}));

const MenuIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '30px',
  height: '30px',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const Heading = forwardRef<HTMLDivElement, HeadingProps>(
  (
    {
      className,
      back = false,
      button = false,
      menu = false,
      size = 'H1',
      title = 'Heading',
      subtitle = 'Heading',
      buttonText = 'Button',
      onBackClick,
      onButtonClick,
      onMenuClick,
      ...rest
    },
    ref
  ) => {
    const isH4 = size === 'H4';
    const isH3 = size === 'H3';
    const isH2 = size === 'H2';
    const isH1OrH2OrH3 = ['H1', 'H2', 'H3'].includes(size);

    return (
      <HeadingContainer
        ref={ref}
        className={className}
        $size={size}
        {...rest}
      >
        {/* Кнопка "назад" */}
        {isH1OrH2OrH3 && back && (
          <BackButton onClick={onBackClick}>
            <BackIcon>
              <img src={backIcon} alt="Back" />
            </BackIcon>
          </BackButton>
        )}

        {/* Контент заголовка */}
        <ContentContainer $size={size}>
          <Title $size={size}>
            {title}
          </Title>
          
          {/* Подзаголовок для H1, H2, H3 */}
          {isH1OrH2OrH3 && (
            <Subtitle $size={size}>
              {subtitle}
            </Subtitle>
          )}
        </ContentContainer>

        {/* Кнопка действия */}
        {isH1OrH2OrH3 && button && (
          <ButtonContainer>
            <LinkButton $size={size} onClick={onButtonClick}>
              <ButtonText $size={size}>
                {buttonText}
              </ButtonText>
            </LinkButton>
          </ButtonContainer>
        )}

        {/* Кнопка меню */}
        {isH1OrH2OrH3 && menu && (
          <MenuButton onClick={onMenuClick}>
            <MenuIcon>
              <img src={menuIcon} alt="Menu" />
            </MenuIcon>
          </MenuButton>
        )}

        {/* Кнопка действия для H4 */}
        {isH4 && button && (
          <ButtonContainer>
            <LinkButton $size={size} onClick={onButtonClick}>
              <ButtonText $size={size}>
                {buttonText}
              </ButtonText>
            </LinkButton>
          </ButtonContainer>
        )}
      </HeadingContainer>
    );
  }
);

Heading.displayName = 'Heading';
