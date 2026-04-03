import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

// ========================================================================
// Order Component - Based on Figma design
// Node ID: 77-36527
// ========================================================================

// Design tokens extracted from Figma
const DESIGN_TOKENS = {
  colors: {
    // Cards
    cardsBgWhite: '#ffffff',
    cardsBgGray: '#f6f7f7',
    cardsStrokeGray: '#f6f7f7',
    cardsTextBlack: '#192434',
    cardsTextLightGray: '#a3a7ae',
    cardsDisable: '#d1d3d6',
    
    // Badges
    badgesBgWhite: '#ffffff',
    badgesBgLightRed: '#ffd6d6',
    badgesTextGreen: '#4fc068',
    badgesTextRed: '#f4364c',
    badgesStrokeGray: '#f2f2f3',
    badgesStrokeWhite: '#ffffff',
    
    // Icons
    iconGray: '#e8e9eb',
  },
  spacing: {
    4: '4px',
    6: '6px',
    8: '8px',
    12: '12px',
    16: '16px',
    20: '20px',
  },
  corners: {
    10: '10px',
    24: '24px',
  },
  fonts: {
    inter: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  },
  fontSizes: {
    12: '12px',
    13: '13px',
    14: '14px',
    16: '16px',
    18: '18px',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
  },
  lineHeights: {
    16: '16px',
    18: '18px',
    20: '20px',
    22: '22px',
    24: '24px',
  },
  letterSpacings: {
    neg018: '-0.18px',
  },
  strokes: {
    1: '1px',
  },
};

// Status badge configurations
const STATUS_CONFIGS = {
  'Новый': {
    bg: DESIGN_TOKENS.colors.badgesBgWhite,
    text: DESIGN_TOKENS.colors.badgesTextGreen,
    border: DESIGN_TOKENS.colors.badgesStrokeGray,
  },
  'Отменен': {
    bg: DESIGN_TOKENS.colors.badgesBgLightRed,
    text: DESIGN_TOKENS.colors.badgesTextRed,
    border: DESIGN_TOKENS.colors.badgesStrokeWhite,
  },
};

// Product type interface
interface ProductType {
  id: string;
  name: string;
  cost: string;
  status: 'Новый' | 'Отменен';
  date: string;
  showSwap?: boolean;
}

// Main Component Props
export interface OrderProps {
  className?: string;
  type?: 'Default' | 'Hover' | 'Disabled';
  orderNumber: string;
  orderInternalNumber: string;
  cost: string;
  companyName: string;
  companyAddress: string;
  productTypes?: ProductType[];
  showProductTypes?: boolean;
  showSwap?: boolean;
}

export const Order: React.FC<OrderProps> = ({
  className,
  type = 'Default',
  orderNumber,
  orderInternalNumber,
  cost,
  companyName,
  companyAddress,
  productTypes = [],
  showProductTypes = false,
  showSwap = false,
}) => {
  const theme = useTheme();

  // Determine card styles based on type
  const getCardStyles = () => {
    const isDisabled = type === 'Disabled';
    const isHover = type === 'Hover';
    
    return {
      backgroundColor: isDisabled 
        ? DESIGN_TOKENS.colors.cardsBgWhite 
        : isHover 
          ? DESIGN_TOKENS.colors.cardsBgGray 
          : DESIGN_TOKENS.colors.cardsBgWhite,
      border: `${DESIGN_TOKENS.strokes[1]} solid ${DESIGN_TOKENS.colors.cardsStrokeGray}`,
      borderRadius: DESIGN_TOKENS.corners[24],
      padding: `${DESIGN_TOKENS.spacing[16]} ${DESIGN_TOKENS.spacing[20]}`,
      display: 'flex',
      flexDirection: 'column' as const,
      gap: DESIGN_TOKENS.spacing[16],
      width: '360px',
      alignItems: isDisabled ? 'center' : 'flex-start',
      opacity: isDisabled ? 0.6 : 1,
    };
  };

  // Get text color based on type
  const getTextColor = () => {
    return type === 'Disabled' 
      ? DESIGN_TOKENS.colors.cardsDisable 
      : DESIGN_TOKENS.colors.cardsTextBlack;
  };

  // Get secondary text color
  const getSecondaryTextColor = () => {
    return type === 'Disabled' 
      ? DESIGN_TOKENS.colors.cardsDisable 
      : DESIGN_TOKENS.colors.cardsTextLightGray;
  };

  // Status badge component
  const StatusBadge: React.FC<{ status: 'Новый' | 'Отменен' }> = ({ status }) => {
    const config = STATUS_CONFIGS[status];
    
    return (
      <Box
        sx={{
          backgroundColor: config.bg,
          border: `${DESIGN_TOKENS.strokes[1]} solid ${config.border}`,
          borderRadius: DESIGN_TOKENS.corners[10],
          padding: `${DESIGN_TOKENS.spacing[6]} ${DESIGN_TOKENS.spacing[8]}`,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: DESIGN_TOKENS.fonts.inter,
            fontSize: DESIGN_TOKENS.fontSizes[12],
            fontWeight: DESIGN_TOKENS.fontWeights.semibold,
            lineHeight: DESIGN_TOKENS.lineHeights[16],
            color: config.text,
            whiteSpace: 'nowrap',
          }}
        >
          {status}
        </Typography>
      </Box>
    );
  };

  // Product type component
  const ProductTypeItem: React.FC<{ product: ProductType }> = ({ product }) => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: DESIGN_TOKENS.spacing[8],
        flex: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', gap: DESIGN_TOKENS.spacing[4], alignItems: 'center' }}>
          <Typography
            sx={{
              fontFamily: DESIGN_TOKENS.fonts.inter,
              fontSize: DESIGN_TOKENS.fontSizes[14],
              fontWeight: DESIGN_TOKENS.fontWeights.semibold,
              lineHeight: DESIGN_TOKENS.lineHeights[20],
              color: getTextColor(),
            }}
          >
            {product.name}
          </Typography>
          {showSwap && (
            <Box sx={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Swap icon placeholder */}
              <Box sx={{ width: 24, height: 24, transform: 'rotate(-90deg)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 10L12 5L17 10" stroke={DESIGN_TOKENS.colors.iconGray} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5V15" stroke={DESIGN_TOKENS.colors.iconGray} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 14L12 19L7 14" stroke={DESIGN_TOKENS.colors.iconGray} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Box>
            </Box>
          )}
        </Box>
        <Typography
          sx={{
            fontFamily: DESIGN_TOKENS.fonts.inter,
            fontSize: DESIGN_TOKENS.fontSizes[13],
            fontWeight: DESIGN_TOKENS.fontWeights.semibold,
            lineHeight: DESIGN_TOKENS.lineHeights[18],
            color: getTextColor(),
            textTransform: 'uppercase',
          }}
        >
          {product.cost}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: DESIGN_TOKENS.spacing[8], alignItems: 'center' }}>
        <StatusBadge status={product.status} />
        <Typography
          sx={{
            fontFamily: DESIGN_TOKENS.fonts.inter,
            fontSize: DESIGN_TOKENS.fontSizes[13],
            fontWeight: DESIGN_TOKENS.fontWeights.regular,
            lineHeight: DESIGN_TOKENS.lineHeights[18],
            color: getTextColor(),
            whiteSpace: 'nowrap',
          }}
        >
          {product.date}
        </Typography>
        <Box sx={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* More icon placeholder */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="5" r="1" fill={DESIGN_TOKENS.colors.iconGray}/>
            <circle cx="12" cy="12" r="1" fill={DESIGN_TOKENS.colors.iconGray}/>
            <circle cx="12" cy="19" r="1" fill={DESIGN_TOKENS.colors.iconGray}/>
          </svg>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box className={className} sx={getCardStyles()}>
      {/* Header with order number and cost */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: DESIGN_TOKENS.spacing[4], paddingBottom: '6px', paddingTop: '4px' }}>
          <Typography
            sx={{
              fontFamily: DESIGN_TOKENS.fonts.inter,
              fontSize: DESIGN_TOKENS.fontSizes[18],
              fontWeight: DESIGN_TOKENS.fontWeights.semibold,
              lineHeight: DESIGN_TOKENS.lineHeights[22],
              letterSpacing: DESIGN_TOKENS.letterSpacings.neg018,
              color: getTextColor(),
              whiteSpace: 'nowrap',
            }}
          >
            {orderNumber}
          </Typography>
          <Typography
            sx={{
              fontFamily: DESIGN_TOKENS.fonts.inter,
              fontSize: DESIGN_TOKENS.fontSizes[13],
              fontWeight: DESIGN_TOKENS.fontWeights.regular,
              lineHeight: DESIGN_TOKENS.lineHeights[18],
              color: getSecondaryTextColor(),
              whiteSpace: 'nowrap',
            }}
          >
            {orderInternalNumber}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '4px 0' }}>
          <Typography
            sx={{
              fontFamily: DESIGN_TOKENS.fonts.inter,
              fontSize: DESIGN_TOKENS.fontSizes[16],
              fontWeight: DESIGN_TOKENS.fontWeights.semibold,
              lineHeight: DESIGN_TOKENS.lineHeights[24],
              color: getTextColor(),
              whiteSpace: 'nowrap',
            }}
          >
            {cost}
          </Typography>
        </Box>
      </Box>

      {/* Company information */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: DESIGN_TOKENS.spacing[4], width: '100%' }}>
        <Typography
          sx={{
            fontFamily: DESIGN_TOKENS.fonts.inter,
            fontSize: DESIGN_TOKENS.fontSizes[13],
            fontWeight: DESIGN_TOKENS.fontWeights.medium,
            lineHeight: DESIGN_TOKENS.lineHeights[18],
            color: getTextColor(),
          }}
        >
          {companyName}
        </Typography>
        <Typography
          sx={{
            fontFamily: DESIGN_TOKENS.fonts.inter,
            fontSize: DESIGN_TOKENS.fontSizes[13],
            fontWeight: DESIGN_TOKENS.fontWeights.regular,
            lineHeight: DESIGN_TOKENS.lineHeights[18],
            color: getTextColor(),
          }}
        >
          {companyAddress}
        </Typography>
      </Box>

      {/* Product types section */}
      {showProductTypes && productTypes.length > 0 && (
        <Box sx={{ display: 'flex', gap: DESIGN_TOKENS.spacing[12], alignItems: 'flex-end', justifyContent: 'center', width: '100%' }}>
          {productTypes.map((product) => (
            <ProductTypeItem key={product.id} product={product} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Order;
