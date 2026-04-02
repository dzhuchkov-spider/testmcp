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
  <svg width="196" height="20" viewBox="0 0 196 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M123.414 0C118.103 0 113.713 3.90929 113.713 9.99981C113.713 15.9025 117.396 19.9999 123.414 19.9999C128.728 19.9999 133.113 15.9025 133.113 9.99981C133.113 3.90929 129.431 0 123.414 0ZM123.414 18.2582C119.816 18.2582 118.14 14.5604 118.14 9.99981C118.14 5.44218 120.157 1.74115 123.414 1.74115C127.013 1.74115 128.687 5.44218 128.687 9.99981C128.687 14.5604 126.67 18.2582 123.414 18.2582Z" fill={DESIGN_TOKENS.colors.logoRed}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M185.302 0C179.99 0 175.601 3.90929 175.601 9.99981C175.601 15.9025 179.284 19.9999 185.302 19.9999C190.615 19.9999 195.001 15.9025 195.001 9.99981C195.001 3.90929 191.318 0 185.302 0ZM185.302 18.2582C181.704 18.2582 180.027 14.5604 180.027 9.99981C180.027 5.44218 182.045 1.74115 185.302 1.74115C188.9 1.74115 190.575 5.44218 190.575 9.99981C190.575 14.5604 188.558 18.2582 185.302 18.2582Z" fill={DESIGN_TOKENS.colors.logoRed}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M98 0.47998L103.749 0.483805C108.539 0.483805 111.39 2.8899 111.39 6.80142C111.39 9.03101 110.245 11.0204 108.182 12.1673L112.269 19.6799H108.25L104.933 13.142C104.581 13.1775 104.216 13.1958 103.84 13.1958C103.121 13.1958 102.529 13.1546 102.057 13.1002V19.6799H98V0.47998ZM102.057 11.4001C102.332 11.4256 102.623 11.4457 102.914 11.4457C106.083 11.4457 107.305 9.36664 107.305 6.80142C107.305 4.23943 106.083 2.23837 102.914 2.23837H102.057V11.4001Z" fill={DESIGN_TOKENS.colors.logoRed}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M149.889 0.483804L144.176 0.47998V19.6799H148.207V13.1002C148.677 13.1546 149.266 13.1958 149.98 13.1958C154.691 13.1958 157.483 10.2932 157.483 6.80142C157.483 2.8899 154.65 0.483804 149.889 0.483804ZM149.06 11.4457C148.771 11.4457 148.481 11.4257 148.207 11.4001V2.23837H149.06C152.209 2.23837 153.423 4.23943 153.423 6.80142C153.423 9.36665 152.209 11.4457 149.06 11.4457Z" fill={DESIGN_TOKENS.colors.logoRed}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M160.049 0.47998L165.797 0.483805C170.588 0.483805 173.439 2.8899 173.439 6.80142C173.439 9.03101 172.293 11.0204 170.231 12.1673L174.318 19.6799H170.298L166.982 13.142C166.63 13.1775 166.265 13.1958 165.889 13.1958C165.17 13.1958 164.578 13.1546 164.105 13.1002V19.6799H160.049V0.47998ZM164.105 11.4001C164.381 11.4256 164.672 11.4457 164.963 11.4457C168.132 11.4457 169.354 9.36664 169.354 6.80142C169.354 4.23943 168.132 2.23837 164.963 2.23837H164.105V11.4001Z" fill={DESIGN_TOKENS.colors.logoRed}/>
    <path fillRule="evenodd" clipRule="evenodd" d="M69.37 0.593262H65.6689L58.3994 19.6393H60.4191L62.4006 14.7201H70.0152L71.7073 19.6393H76.2735L69.37 0.593262ZM69.4577 13.0993H63.0535L66.4431 4.6844H66.5615L69.4577 13.0993Z" fill={DESIGN_TOKENS.colors.logoRed}/>
    <path d="M29.5207 2.5281L24.0879 2.74194V0.47998H38.9986V2.74194L33.5615 2.5281V19.6799H29.5207V2.5281Z" fill={DESIGN_TOKENS.colors.logoRed}/>
    <path d="M18.2847 0.47998L12.1433 13.2943L6.38309 0.47998H3.38061L1 19.6799H3.26701L4.80412 6.78759L10.0988 18.9637H11.7378L17.7732 6.32432L19.2119 19.6799H23.286L21.2142 0.47998H18.2847Z" fill={DESIGN_TOKENS.colors.logoRed}/>
    <path d="M136.614 17.3985C136.338 17.6906 136.2 18.049 136.2 18.4738C136.2 18.8986 136.338 19.2615 136.614 19.5624C136.889 19.8544 137.285 20.0004 137.8 20.0004C138.316 20.0004 138.711 19.8588 138.987 19.5756C139.262 19.2836 139.4 18.9207 139.4 18.4871C139.4 18.0534 139.262 17.6906 138.987 17.3985C138.711 17.1065 138.32 16.9604 137.814 16.9604C137.298 16.9604 136.898 17.1065 136.614 17.3985Z" fill={DESIGN_TOKENS.colors.logoRed}/>
    <path d="M38.9209 10.3703V9.68437C38.9209 6.5624 39.8045 4.19674 41.5716 2.58738C43.3475 0.969231 45.6069 0.160156 48.3499 0.160156C51.0489 0.160156 53.0974 0.657034 54.4952 1.65079C55.9019 2.64454 56.6624 4.01206 56.7766 5.75333L56.7898 6.2546H52.8864L52.86 5.9512C52.6402 4.63205 52.1874 3.6427 51.5017 2.98312C50.8247 2.31476 49.739 1.98057 48.2444 1.98057C46.7586 1.98057 45.541 2.57859 44.5915 3.77461C43.642 4.97063 43.1672 6.75588 43.1672 9.13033V11.0035C43.1672 13.633 43.6772 15.5062 44.697 16.6231C45.7256 17.7399 47.0312 18.2984 48.6136 18.2984C49.8269 18.2984 50.8291 18.1797 51.6204 17.9422C52.4116 17.696 52.9083 17.4805 53.1105 17.2958V12.0324H48.3631V10.4495L57.0008 10.4363V17.2563C56.3854 17.8543 55.3832 18.4611 53.9941 19.0767C52.6138 19.6923 50.7896 20.0001 48.5213 20.0001C45.6816 20.0001 43.3694 19.191 41.5848 17.5729C39.8088 15.9547 38.9209 13.5539 38.9209 10.3703Z" fill={DESIGN_TOKENS.colors.logoRed}/>
    <path d="M77.3203 9.68437V10.3703C77.3203 13.5539 78.2083 15.9547 79.9842 17.5729C81.7689 19.191 84.0811 20.0001 86.9207 20.0001C89.189 20.0001 91.0132 19.6923 92.3935 19.0767C93.7826 18.4611 94.7848 17.8543 95.4002 17.2563V10.4363L86.7625 10.4495V12.0324H91.51V17.2958C91.3078 17.4805 90.811 17.696 90.0198 17.9422C89.2285 18.1797 88.2263 18.2984 87.0131 18.2984C85.4306 18.2984 84.125 17.7399 83.0964 16.6231C82.0766 15.5062 81.5667 13.633 81.5667 11.0035V9.13033C81.5667 6.75588 82.0414 4.97063 82.9909 3.77461C83.9404 2.57859 85.158 1.98057 86.6438 1.98057C88.1384 1.98057 89.2241 2.31476 89.9011 2.98312C90.5868 3.6427 91.0396 4.63205 91.2594 5.9512L91.2858 6.2546H95.1892L95.1761 5.75333C95.0618 4.01206 94.3013 2.64454 92.8946 1.65079C91.4968 0.657034 89.4483 0.160156 86.7493 0.160156C84.0063 0.160156 81.7469 0.969231 79.971 2.58738C78.2039 4.19674 77.3203 6.5624 77.3203 9.68437Z" fill={DESIGN_TOKENS.colors.logoRed}/>
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
      width: isLogo ? '196px' : '24px', // Обновленный размер для логотипа
      height: isLogo ? '20px' : '24px',  // Обновленный размер для логотипа
      flexShrink: 0,
      transition: 'opacity 200ms ease-in-out',
      opacity: isHover ? 0.8 : 1,
    };

    const iconStyle = {
      position: 'absolute' as const,
      left: isLogo ? '0' : '50%',
      top: isLogo ? '0' : '50%',
      transform: isLogo ? 'none' : 'translate(-50%, -50%)',
      width: isLogo ? '196px' : '24px',
      height: isLogo ? '20px' : '24px',
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
