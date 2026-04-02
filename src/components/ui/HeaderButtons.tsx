import React, { useState } from 'react';

// ========================================================================
// Header Buttons Component - Based on Figma design
// Node ID: 29-16373
// ========================================================================

// Design tokens from Figma
const DESIGN_TOKENS = {
  colors: {
    white: '#ffffff',
    grayHover: '#f6f7f7',
    headerText: '#192434',
    badgeBg: '#f65e70',
    badgeText: '#ffffff',
    badgeBorder: '#ffffff',
    iconGray: '#47505d',
    logoRed: '#f4364c', // Цвет логотипа MTGAgro
  },
  spacing: {
    8: '8px',
    12: '12px',
    4: '4px',
    2: '2px',
  },
  corners: {
    8: '8px',
    12: '12px',
    10: '10px',
  },
  fonts: {
    inter: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  },
  fontSizes: {
    11: '11px',
    13: '13px', // Buttons 13pt • Medium
  },
  fontWeights: {
    medium: '500', // Font weight/Medium
    semibold: '600',
  },
  lineHeights: {
    16: '16px',
    18: '18px', // Line height/18
  },
  letterSpacings: {
    negative022: '-0.22px',
    normal: '0px', // letterSpacing: 0
  },
  strokes: {
    1_5: '1.5px',
  },
  shadows: {
    small: '0px 2px 6px rgba(0, 0, 0, 0.05)',
  },
};

// SVG Icons as React components
const ProfileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM5 7C5 3.13401 8.13401 0 12 0C15.866 0 19 3.13401 19 7C19 9.16429 17.9399 11.0749 16.274 12.2474C18.4765 13.3128 20 15.6066 20 18.2426C20 18.7949 19.5523 19.2426 19 19.2426C18.4477 19.2426 18 18.7949 18 18.2426C18 15.4812 15.7614 13.2426 13 13.2426H11C8.23858 13.2426 6 15.4812 6 18.2426C6 18.7949 5.55228 19.2426 5 19.2426C4.44772 19.2426 4 18.7949 4 18.2426C4 15.6066 5.5235 13.3128 7.72604 12.2474C6.06014 11.0749 5 9.16429 5 7Z" fill={DESIGN_TOKENS.colors.iconGray} />
  </svg>
);

const LikeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69365 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69365 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.12831 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95904 2.12831 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22249 22.4518 8.5C22.4518 7.77752 22.3095 7.06212 22.0329 6.39464C21.7564 5.72716 21.351 5.12075 20.84 4.61Z" stroke={DESIGN_TOKENS.colors.iconGray} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BasketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2C8.44772 2 8 2.44772 8 3C8 3.55228 8.44772 4 9 4H9.53674L10.2926 7.34549C10.3368 7.53745 10.426 7.71421 10.5529 7.86071L14.5529 12.3607C14.8423 12.6917 15.2758 12.8607 15.7186 12.8182L19.7186 12.4363C20.4476 12.3633 21 11.7313 21 11V8C21 7.44772 20.5523 7 20 7H12.4142L11.6584 3.65451C11.5259 3.09522 11.0254 2.70446 10.4472 2.70446H9Z" fill={DESIGN_TOKENS.colors.iconGray} />
    <circle cx="8" cy="20" r="2" stroke={DESIGN_TOKENS.colors.iconGray} strokeWidth="2" />
    <circle cx="18" cy="20" r="2" stroke={DESIGN_TOKENS.colors.iconGray} strokeWidth="2" />
    <path d="M8 11H21" stroke={DESIGN_TOKENS.colors.iconGray} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const LogoIcon = () => (
  <svg viewBox="0 0 196 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill={DESIGN_TOKENS.colors.logoRed} transform="scale(0.625)" />
    <path d="M8 12C8 10.8954 8.89543 10 10 10H22C23.1046 10 24 10.8954 24 12V20C24 21.1046 23.1046 22 22 22H10C8.89543 22 8 21.1046 8 20V12Z" fill="white" transform="scale(0.625)" />
    <path d="M12 16C12 15.4477 12.4477 15 13 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H13C12.4477 17 12 16.5523 12 16Z" fill={DESIGN_TOKENS.colors.logoRed} transform="scale(0.625)" />
    <text x="40" y="14" fontFamily={DESIGN_TOKENS.fonts.inter} fontSize="16" fontWeight={DESIGN_TOKENS.fontWeights.semibold} fill={DESIGN_TOKENS.colors.headerText}>MTGAgro</text>
  </svg>
);

// Counter Badge Component
const CounterBadge: React.FC<{ count?: number }> = ({ count = 0 }) => (
  <div
    className="absolute flex items-center justify-center min-w-[20px] px-[4px] py-[2px] rounded-[10px] border-[1.5px] border-white"
    style={{
      backgroundColor: DESIGN_TOKENS.colors.badgeBg,
      borderColor: DESIGN_TOKENS.colors.badgeBorder,
      top: '-4px',
      left: '12px',
    }}
  >
    <span
      className="font-medium text-center whitespace-nowrap"
      style={{
        fontFamily: DESIGN_TOKENS.fonts.inter,
        fontSize: DESIGN_TOKENS.fontSizes[11],
        fontWeight: DESIGN_TOKENS.fontWeights.medium,
        color: DESIGN_TOKENS.colors.badgeText,
        lineHeight: DESIGN_TOKENS.lineHeights[16],
        letterSpacing: DESIGN_TOKENS.letterSpacings.negative022,
      }}
    >
      {count}
    </span>
  </div>
);

// Main Component Props
interface HeaderButtonsProps {
  className?: string;
  counter?: boolean;
  state?: 'Default' | 'Hover';
  type?: 'Profile' | 'Like' | 'Backet' | 'Logo';
  count?: number;
}

export const HeaderButtons: React.FC<HeaderButtonsProps> = ({
  className,
  counter = false,
  state = 'Default',
  type = 'Profile',
  count = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLogo = type === 'Logo';
  const isBasket = type === 'Backet';
  const isLike = type === 'Like';
  const isProfile = type === 'Profile';

  const getButtonStyles = () => {
    const isHover = isHovered || state === 'Hover';
    
    if (isLogo) {
      return {
        display: 'flex' as const,
        flexDirection: 'column' as const,
        alignItems: 'flex-start' as const,
        overflow: 'hidden' as const,
        padding: DESIGN_TOKENS.spacing[12],
        borderRadius: DESIGN_TOKENS.corners[8],
        gap: DESIGN_TOKENS.spacing[8],
        backgroundColor: isHover ? DESIGN_TOKENS.colors.grayHover : 'transparent',
        transition: 'all 200ms ease-in-out',
        cursor: 'pointer',
      };
    }

    return {
      display: 'flex' as const,
      flexDirection: 'column' as const,
      alignItems: 'center' as const,
      padding: DESIGN_TOKENS.spacing[8],
      borderRadius: DESIGN_TOKENS.corners[12],
      backgroundColor: isHover ? DESIGN_TOKENS.colors.grayHover : DESIGN_TOKENS.colors.white,
      gap: '4px',
      transition: 'all 200ms ease-in-out',
      cursor: 'pointer',
      transform: isHover ? 'translateY(-2px)' : 'translateY(0px)',
      boxShadow: isHover ? DESIGN_TOKENS.shadows.small : 'none',
    };
  };

  const renderIcon = () => {
    const isHover = isHovered || state === 'Hover';
    const iconContainerStyle = {
      position: 'relative' as const,
      width: '24px',
      height: '24px',
      flexShrink: 0,
      transition: 'opacity 200ms ease-in-out',
      opacity: isHover ? 0.8 : 1,
    };

    const iconStyle = {
      position: 'absolute' as const,
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '24px',
      height: '24px',
    };

    return (
      <div style={iconContainerStyle}>
        <div style={iconStyle}>
          {isLogo && <LogoIcon />}
          {isProfile && <ProfileIcon />}
          {isLike && <LikeIcon />}
          {isBasket && <BasketIcon />}
        </div>
        {counter && (isProfile || isBasket) && <CounterBadge count={count} />}
        {counter && isLike && <CounterBadge count={count} />}
      </div>
    );
  };

  const renderText = () => {
    if (isLogo) return null;
    const isHover = isHovered || state === 'Hover';
    
    const textMap = {
      Profile: 'Профиль',
      Like: 'Избранное',
      Backet: 'Корзина',
      Logo: '',
    };

    return (
      <span
        className="font-medium whitespace-nowrap"
        style={{
          fontFamily: DESIGN_TOKENS.fonts.inter,
          fontSize: DESIGN_TOKENS.fontSizes[13],
          fontWeight: DESIGN_TOKENS.fontWeights.medium,
          color: DESIGN_TOKENS.colors.headerText,
          lineHeight: DESIGN_TOKENS.lineHeights[18],
          letterSpacing: DESIGN_TOKENS.letterSpacings.normal,
          transition: 'color 200ms ease-in-out',
          opacity: isHover ? 0.9 : 1,
        }}
      >
        {textMap[type]}
      </span>
    );
  };

  return (
    <div 
      className={className} 
      style={getButtonStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderIcon()}
      {renderText()}
    </div>
  );
};

export default HeaderButtons;
