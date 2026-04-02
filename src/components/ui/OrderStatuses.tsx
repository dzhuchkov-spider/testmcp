import React from 'react';

// ========================================================================
// Order Statuses Component - Based on Figma design
// Node ID: 63-7342
// ========================================================================

// Design tokens from Figma
const DESIGN_TOKENS = {
  colors: {
    white: '#ffffff',
    green: '#4fc068',
    orange: '#ff8039',
    red: '#f4364c',
    lightRed: '#ffd6d6',
    gray: '#e8e9eb',
    textGray: '#47505d',
    border: '#f2f2f3',
    blue: '#108594',
    lightBlue: '#d1f3f3',
    yellow: '#fed12d',
    lightYellow: '#fff9e6',
  },
  spacing: {
    2: '2px',
    4: '4px',
    5: '5px',
    6: '6px',
    8: '8px',
    12: '12px',
  },
  corners: {
    6: '6px',
    8: '8px',
    10: '10px',
  },
  fonts: {
    inter: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  },
  fontSizes: {
    9: '9px',
    10: '10px',
    11: '11px',
    12: '12px',
  },
  fontWeights: {
    semibold: '600',
    bold: '700',
  },
  lineHeights: {
    10: '10px',
    16: '16px',
    18: '18px',
  },
  letterSpacings: {
    negative022: '-0.22px',
  },
  strokes: {
    1: '1px',
    1_5: '1.5px',
  },
};

// Status color mapping
const STATUS_COLORS = {
  'Новый': {
    bg: DESIGN_TOKENS.colors.white,
    text: DESIGN_TOKENS.colors.green,
    border: DESIGN_TOKENS.colors.border,
  },
  'Принят': {
    bg: DESIGN_TOKENS.colors.white,
    text: DESIGN_TOKENS.colors.orange,
    border: DESIGN_TOKENS.colors.border,
  },
  'Отклонен КК': {
    bg: DESIGN_TOKENS.colors.lightRed,
    text: DESIGN_TOKENS.colors.red,
    border: DESIGN_TOKENS.colors.white,
  },
  'Подтвержден': {
    bg: DESIGN_TOKENS.colors.white,
    text: DESIGN_TOKENS.colors.blue,
    border: DESIGN_TOKENS.colors.border,
  },
  'На сборке': {
    bg: DESIGN_TOKENS.colors.lightBlue,
    text: DESIGN_TOKENS.colors.blue,
    border: DESIGN_TOKENS.colors.white,
  },
  'Отправлен': {
    bg: DESIGN_TOKENS.colors.lightYellow,
    text: DESIGN_TOKENS.colors.yellow,
    border: DESIGN_TOKENS.colors.white,
  },
  'Принято клиентом': {
    bg: DESIGN_TOKENS.colors.white,
    text: DESIGN_TOKENS.colors.green,
    border: DESIGN_TOKENS.colors.border,
  },
  'Отклонено': {
    bg: DESIGN_TOKENS.colors.lightRed,
    text: DESIGN_TOKENS.colors.red,
    border: DESIGN_TOKENS.colors.white,
  },
  'Отменен': {
    bg: DESIGN_TOKENS.colors.lightRed,
    text: DESIGN_TOKENS.colors.red,
    border: DESIGN_TOKENS.colors.white,
  },
  'Запрос на отмену': {
    bg: DESIGN_TOKENS.colors.gray,
    text: DESIGN_TOKENS.colors.textGray,
    border: DESIGN_TOKENS.colors.white,
  },
  'В обработке': {
    bg: DESIGN_TOKENS.colors.white,
    text: DESIGN_TOKENS.colors.blue,
    border: DESIGN_TOKENS.colors.border,
  },
};

// Size configurations
const SIZE_CONFIGS = {
  '28': {
    padding: `${DESIGN_TOKENS.spacing[6]} ${DESIGN_TOKENS.spacing[8]}`,
    borderRadius: DESIGN_TOKENS.corners[10],
    fontSize: DESIGN_TOKENS.fontSizes[12],
    fontWeight: DESIGN_TOKENS.fontWeights.semibold,
    lineHeight: DESIGN_TOKENS.lineHeights[16],
    letterSpacing: 'normal',
    border: DESIGN_TOKENS.strokes[1],
  },
  '24': {
    padding: `${DESIGN_TOKENS.spacing[2]} ${DESIGN_TOKENS.spacing[8]}`,
    borderRadius: DESIGN_TOKENS.corners[8],
    fontSize: DESIGN_TOKENS.fontSizes[11],
    fontWeight: DESIGN_TOKENS.fontWeights.semibold,
    lineHeight: DESIGN_TOKENS.lineHeights[18],
    letterSpacing: DESIGN_TOKENS.letterSpacings.negative022,
    border: '1px',
  },
  '20': {
    padding: `${DESIGN_TOKENS.spacing[4]} ${DESIGN_TOKENS.spacing[6]}`,
    borderRadius: DESIGN_TOKENS.corners[6],
    fontSize: DESIGN_TOKENS.fontSizes[10],
    fontWeight: DESIGN_TOKENS.fontWeights.bold,
    lineHeight: DESIGN_TOKENS.lineHeights[10],
    letterSpacing: 'normal',
    border: DESIGN_TOKENS.strokes[1],
    paddingBottom: DESIGN_TOKENS.spacing[2],
  },
  '20 - 9': {
    padding: `${DESIGN_TOKENS.spacing[5]} ${DESIGN_TOKENS.spacing[6]}`,
    borderRadius: DESIGN_TOKENS.corners[6],
    fontSize: DESIGN_TOKENS.fontSizes[9],
    fontWeight: DESIGN_TOKENS.fontWeights.bold,
    lineHeight: DESIGN_TOKENS.lineHeights[10],
    letterSpacing: 'normal',
    border: DESIGN_TOKENS.strokes[1],
  },
};

// Status text mapping
const STATUS_TEXT = {
  'Новый': 'Новый',
  'Принят': 'Принят',
  'Отклонен КК': 'Отклонен по Кред.Контр.',
  'Подтвержден': 'Подтвержден',
  'На сборке': 'На сборке',
  'Отправлен': 'Отправлен',
  'Принято клиентом': 'Принято клиентом',
  'Отклонено': 'Отклонено',
  'Отменен': 'Отменен',
  'Запрос на отмену': 'Запрос',
  'В обработке': 'В обработке',
};

// Main Component Props
interface OrderStatusesProps {
  className?: string;
  size?: '20' | '28' | '24' | '20 - 9';
  type?: 'В обработке' | 'Запрос на отмену' | 'На сборке' | 'Новый' | 'Отклонен КК' | 'Отклонено' | 'Отменен' | 'Отправлен' | 'Подтвержден' | 'Принят' | 'Принято клиентом';
}

export const OrderStatuses: React.FC<OrderStatusesProps> = ({
  className,
  size = '28',
  type = 'Новый',
}) => {
  const statusColors = STATUS_COLORS[type as keyof typeof STATUS_COLORS] || STATUS_COLORS['Новый'];
  const sizeConfig = SIZE_CONFIGS[size as keyof typeof SIZE_CONFIGS] || SIZE_CONFIGS['28'];
  const statusText = STATUS_TEXT[type as keyof typeof STATUS_TEXT] || 'Новый';

  const getStatusStyles = () => ({
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    backgroundColor: statusColors.bg,
    border: `${sizeConfig.border} solid ${statusColors.border}`,
    borderRadius: sizeConfig.borderRadius,
    padding: sizeConfig.padding,
    fontFamily: DESIGN_TOKENS.fonts.inter,
    fontSize: sizeConfig.fontSize,
    fontWeight: sizeConfig.fontWeight,
    color: statusColors.text,
    lineHeight: sizeConfig.lineHeight,
    letterSpacing: sizeConfig.letterSpacing,
    whiteSpace: 'nowrap' as const,
    transition: 'all 200ms ease-in-out',
  });

  const getTextStyles = () => {
    const baseStyles = {
      fontFamily: DESIGN_TOKENS.fonts.inter,
      fontSize: sizeConfig.fontSize,
      fontWeight: sizeConfig.fontWeight,
      color: statusColors.text,
      lineHeight: sizeConfig.lineHeight,
      letterSpacing: sizeConfig.letterSpacing,
      whiteSpace: 'nowrap' as const,
    };

    // Special handling for size 20 with paddingBottom
    if (size === '20') {
      return {
        ...baseStyles,
        paddingBottom: DESIGN_TOKENS.spacing[2],
      };
    }

    return baseStyles;
  };

  return (
    <div className={className} style={getStatusStyles()}>
      <span style={getTextStyles()}>
        {statusText}
      </span>
    </div>
  );
};

export default OrderStatuses;
