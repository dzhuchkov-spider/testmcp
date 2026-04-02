import React from 'react';

// ========================================================================
// Main Button Component - Based on Figma design
// ========================================================================

// Design tokens from Figma
const DESIGN_TOKENS = {
  colors: {
    white: '#ffffff',
    primary: '#f4364c',
    primaryHover: '#e24256',
    primaryActive: '#d92c3f',
    text: '#192434',
    icon: '#47505d',
  },
  spacing: {
    8: '8px',
    12: '12px',
    16: '16px',
  },
  corners: {
    8: '8px',
  },
  fonts: {
    inter: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  },
  fontSizes: {
    14: '14px', // Button 14pt • Semibold
    16: '16px',
    13: '13px', // Buttons 13pt • Medium
  },
  fontWeights: {
    medium: '500', // Font weight/Medium
    semibold: '600', // Font weight/Semibold
  },
  lineHeights: {
    20: '20px', // Line height/20
    24: '24px',
    18: '18px', // Line height/18
  },
  letterSpacings: {
    normal: '0px', // letterSpacing: 0
    half: '0.5px',
  },
};

// SVG Icons
const CatalogIcon = ({ color = DESIGN_TOKENS.colors.icon }: { color?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1" stroke={color} strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="1" stroke={color} strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" rx="1" stroke={color} strokeWidth="2" />
    <rect x="14" y="14" width="7" height="7" rx="1" stroke={color} strokeWidth="2" />
  </svg>
);

// Main Component Props
interface MainButtonProps {
  className?: string;
  text?: string;
  icon?: 'catalog' | 'none';
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

export const MainButton: React.FC<MainButtonProps> = ({
  className,
  text = 'Каталог',
  icon = 'catalog',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onClick,
}) => {
  const getButtonStyles = () => {
    const baseStyles = {
      display: 'flex' as const,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      gap: DESIGN_TOKENS.spacing[8],
      border: 'none',
      borderRadius: DESIGN_TOKENS.corners[8],
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 200ms ease-in-out',
      fontFamily: DESIGN_TOKENS.fonts.inter,
      fontSize: DESIGN_TOKENS.fontSizes[14], // Button 14pt • Semibold
      fontWeight: DESIGN_TOKENS.fontWeights.semibold,
      lineHeight: DESIGN_TOKENS.lineHeights[20], // Line height/20
      letterSpacing: DESIGN_TOKENS.letterSpacings.normal, // letterSpacing: 0
      textDecoration: 'none',
      outline: 'none',
      whiteSpace: 'nowrap' as const,
    };

    if (variant === 'primary') {
      return {
        ...baseStyles,
        backgroundColor: disabled ? DESIGN_TOKENS.colors.primaryActive : DESIGN_TOKENS.colors.primary,
        color: DESIGN_TOKENS.colors.white,
        padding: `${DESIGN_TOKENS.spacing[8]} ${DESIGN_TOKENS.spacing[16]}`,
        '&:hover': !disabled ? {
          backgroundColor: DESIGN_TOKENS.colors.primaryHover,
          transform: 'translateY(-2px)',
        } : {},
        '&:active': !disabled ? {
          backgroundColor: DESIGN_TOKENS.colors.primaryActive,
          transform: 'translateY(0px)',
        } : {},
      };
    }

    // Secondary variant
    return {
      ...baseStyles,
      backgroundColor: 'transparent',
      color: DESIGN_TOKENS.colors.text,
      padding: `${DESIGN_TOKENS.spacing[8]} ${DESIGN_TOKENS.spacing[16]}`,
      '&:hover': !disabled ? {
        backgroundColor: DESIGN_TOKENS.colors.white,
      } : {},
      '&:active': !disabled ? {
        backgroundColor: DESIGN_TOKENS.colors.white,
      } : {},
    };
  };

  const renderIcon = () => {
    if (icon === 'none') return null;
    
    // Определяем цвет иконки в зависимости от варианта
    const iconColor = variant === 'primary' ? DESIGN_TOKENS.colors.white : DESIGN_TOKENS.colors.text;
    
    return (
      <div style={{ 
        width: '20px', 
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <CatalogIcon color={iconColor} />
      </div>
    );
  };

  return (
    <button
      className={className}
      style={getButtonStyles()}
      onClick={onClick}
      disabled={disabled}
    >
      {renderIcon()}
      <span>{text}</span>
    </button>
  );
};

export default MainButton;
