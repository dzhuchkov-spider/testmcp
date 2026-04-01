/**
 * Notification Component
 * 
 * Пиксель-перфект компонент уведомления из Figma Design Library
 * Точные размеры и позиционирование как в дизайне
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

// ============================================================================
// DESIGN TOKENS (точные значения из Figma)
// ============================================================================

const COLORS = {
  white: '#ffffff',
  grayBg: '#f6f7f7',
  blackText: '#192434',
  grayText: '#a3a7ae',
  redBadgeBg: '#f65e70',
  whiteBadgeText: '#ffffff',
  whiteBadgeBorder: '#ffffff',
  redButtonStroke: '#f4364c',
} as const;

const SPACING = {
  2: '2px',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  20: '20px',
  24: '24px',
} as const;

const CORNERS = {
  8: '8px',
  10: '10px',
  12: '12px',
  16: '16px',
  24: '24px',
} as const;

const TYPOGRAPHY = {
  fontFamily: '"Inter", sans-serif',
  fontSize14: '14px',
  fontSize16: '16px',
  fontSize18: '18px',
  fontWeightRegular: 400,
  fontWeightSemiBold: 600,
  lineHeight18: '18px',
  lineHeight20: '20px',
  lineHeight22: '22px',
  lineHeight24: '24px',
  letterSpacingNeg018: '-0.18px',
  letterSpacing0: '0',
} as const;

// ============================================================================
// TYPES
// ============================================================================

export type NotificationType = 'Default' | 'Hover';

export interface NotificationProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Тип уведомления
   * @default 'Default'
   */
  type?: NotificationType;
  
  /**
   * Заголовок уведомления
   * @default 'Заголовок уведомления'
   */
  title?: string;
  
  /**
   * Дата уведомления
   * @default '04.11.24 12:00'
   */
  date?: string;
  
  /**
   * Текст уведомления
   * @default 'Текст уведомления с ограничением на отображение в Х символов, при превышении количества символов в тексте он отображается не полностью'
   */
  bodyText?: string;
  
  /**
   * Показывать ли счетчик
   * @default true
   */
  counter?: boolean;
  
  /**
   * Показывать ли кнопку
   * @default true
   */
  button?: boolean;
  
  /**
   * Material-UI sx prop для дополнительного стилизования
   */
  sx?: object;
}

// ============================================================================
// STYLED COMPONENTS (точные размеры из Figma)
// ============================================================================

const NotificationContainer = styled(Box, {
  shouldForwardProp: (prop) => !prop.toString().startsWith('$'),
})<{
  $type: NotificationType;
}>(({ theme, $type }) => {
  const isHover = $type === 'Hover';
  
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: isHover ? COLORS.grayBg : COLORS.white,
    border: `1px solid ${COLORS.grayBg}`,
    borderRadius: CORNERS[24],
    padding: `${SPACING[20]}`,
    gap: `${SPACING[16]}`,
    width: '360px',
    overflow: 'hidden',
    position: 'relative',
    boxSizing: 'border-box',
  };
});

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: `${SPACING[8]}`,
  alignItems: 'flex-start',
  width: '100%',
  flexShrink: 0,
}));

const TitleRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: `${SPACING[8]}`,
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  flexShrink: 0,
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontFamily: TYPOGRAPHY.fontFamily,
  fontSize: TYPOGRAPHY.fontSize18,
  fontWeight: TYPOGRAPHY.fontWeightSemiBold,
  lineHeight: TYPOGRAPHY.lineHeight22,
  color: COLORS.blackText,
  letterSpacing: TYPOGRAPHY.letterSpacingNeg018,
  flex: '1 0 0',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  minHeight: '1px',
  minWidth: '1px',
}));

const DateText = styled(Typography)(({ theme }) => ({
  fontFamily: TYPOGRAPHY.fontFamily,
  fontSize: TYPOGRAPHY.fontSize14,
  fontWeight: TYPOGRAPHY.fontWeightRegular,
  lineHeight: TYPOGRAPHY.lineHeight20,
  color: COLORS.grayText,
  width: '100%',
  flexShrink: 0,
}));

const BodyText = styled(Typography)(({ theme }) => ({
  fontFamily: TYPOGRAPHY.fontFamily,
  fontSize: TYPOGRAPHY.fontSize16,
  fontWeight: TYPOGRAPHY.fontWeightRegular,
  lineHeight: TYPOGRAPHY.lineHeight24,
  color: COLORS.blackText,
  width: '100%',
  flexShrink: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  minHeight: '1px',
  minWidth: '1px',
}));

const CounterContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '16px',
  height: '16px',
  flexShrink: 0,
}));

const CounterBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: COLORS.redBadgeBg,
  border: `2px solid ${COLORS.whiteBadgeBorder}`,
  borderRadius: CORNERS[8],
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  height: '40px',
  flexShrink: 0,
}));

const MainButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: `${SPACING[8]}`,
  backgroundColor: COLORS.white,
  border: `1px solid ${COLORS.redButtonStroke}`,
  borderRadius: CORNERS[12],
  padding: `${SPACING[8]} ${SPACING[20]}`,
  height: '100%',
  width: '100%',
  position: 'relative',
  boxSizing: 'border-box',
}));

const ButtonTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2px 0',
  flexShrink: 0,
}));

const ButtonText = styled(Typography)(({ theme }) => ({
  fontFamily: TYPOGRAPHY.fontFamily,
  fontSize: TYPOGRAPHY.fontSize14,
  fontWeight: TYPOGRAPHY.fontWeightSemiBold,
  lineHeight: TYPOGRAPHY.lineHeight18,
  color: COLORS.redButtonStroke,
  textAlign: 'center',
  whiteSpace: 'nowrap',
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      className,
      type = 'Default',
      title = 'Заголовок уведомления',
      date = '04.11.24 12:00',
      bodyText = 'Текст уведомления с ограничением на отображение в Х символов, при превышении количества символов в тексте он отображается не полностью',
      counter = true,
      button = true,
      sx,
      ...rest
    },
    ref
  ) => {
    const isHover = type === 'Hover';

    return (
      <NotificationContainer
        ref={ref}
        className={className}
        $type={type}
        sx={sx}
        {...rest}
        data-node-id={isHover ? "77:36670" : "77:36662"}
      >
        <HeaderContainer 
          data-node-id={isHover ? "77:36671" : "77:36663"}
        >
          <TitleRow 
            data-node-id={isHover ? "77:36672" : "77:36664"}
          >
            <TitleText data-node-id="77:36665">
              {title}
            </TitleText>
            
            {counter && (
              <CounterContainer className="relative shrink-0 size-[16px]" data-node-id="33:16429">
                <CounterBadge data-node-id="33:16425" />
              </CounterContainer>
            )}
          </TitleRow>
          
          <DateText data-node-id="77:36667">
            {date}
          </DateText>
          
          <BodyText data-node-id="77:36668">
            {bodyText}
          </BodyText>
        </HeaderContainer>
        
        {button && (
          <ButtonContainer data-name="Main Buttons" data-node-id="81:12026">
            <MainButton data-name="Desktop / Base buttons" data-node-id="I81:12026;22:3190">
              <ButtonTextContainer data-name="Button Text" data-node-id="I81:12026;22:3190;20:1933">
                <ButtonText data-node-id="I81:12026;22:3190;20:1888">
                  Узнать подробнее
                </ButtonText>
              </ButtonTextContainer>
            </MainButton>
          </ButtonContainer>
        )}
      </NotificationContainer>
    );
  }
);

Notification.displayName = 'Notification';
