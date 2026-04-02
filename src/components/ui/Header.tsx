import React, { useState } from 'react';
import { HeaderButtons } from './HeaderButtons';
import { MainButton } from './MainButton';

// ========================================================================
// Header Component - Based on Figma design
// Node ID: 49-2679
// ========================================================================

// Design tokens from Figma
const DESIGN_TOKENS = {
  colors: {
    white: '#ffffff',
    background: '#ffffff',
    primary: '#f4364c', // Основной цвет для акцентов
    primaryText: '#192434',
    secondaryText: '#a3a7ae',
    gray: '#e8e9eb',
    lightGray: '#f6f7f7',
    border: '#f2f2f3',
    link: '#f4364c',
    success: '#4fc068',
    warning: '#ff8039',
    error: '#f4364c',
    info: '#47505d',
  },
  spacing: {
    4: '4px',
    6: '6px',
    8: '8px',
    12: '12px',
    16: '16px',
    20: '20px',
    24: '24px',
    32: '32px',
    40: '40px',
    48: '48px',
  },
  corners: {
    6: '6px',
    8: '8px',
    10: '10px',
    12: '12px',
  },
  fonts: {
    inter: '"Inter", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
  },
  fontSizes: {
    9: '9px',
    10: '10px',
    11: '11px',
    12: '12px',
    13: '13px',
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    24: '24px',
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeights: {
    10: '10px',
    16: '16px',
    18: '18px',
    20: '20px',
    24: '24px',
  },
  letterSpacings: {
    negative022: '-0.22px',
    normal: '0px',
  },
  shadows: {
    small: '0px 2px 6px rgba(0, 0, 0, 0.05)',
  },
};

// SVG Icons
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="8" stroke={DESIGN_TOKENS.colors.info} strokeWidth="2" />
    <path d="M21 21L16.65 16.65" stroke={DESIGN_TOKENS.colors.info} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CatalogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7" rx="1" stroke={DESIGN_TOKENS.colors.info} strokeWidth="2" />
    <rect x="14" y="3" width="7" height="7" rx="1" stroke={DESIGN_TOKENS.colors.info} strokeWidth="2" />
    <rect x="3" y="14" width="7" height="7" rx="1" stroke={DESIGN_TOKENS.colors.info} strokeWidth="2" />
    <rect x="14" y="14" width="7" height="7" rx="1" stroke={DESIGN_TOKENS.colors.info} strokeWidth="2" />
  </svg>
);

const AutorenewIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4V1L8 5L12 9V6C15.31 6 18 8.69 18 12C18 13.01 17.61 13.91 16.95 14.61L18.36 16.02C19.33 14.95 20 13.48 20 12C20 7.58 16.42 4 12 4Z" fill={DESIGN_TOKENS.colors.info} />
    <path d="M12 18C8.69 18 6 15.31 6 12C6 10.99 6.39 10.09 7.05 9.39L5.64 7.98C4.67 9.05 4 10.52 4 12C4 16.42 7.58 20 12 20V23L16 19L12 15V18Z" fill={DESIGN_TOKENS.colors.info} />
  </svg>
);

// Search Input Component
const SearchInput: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [value, setValue] = useState('');

  const getSearchStyles = () => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor: DESIGN_TOKENS.colors.lightGray,
    borderRadius: DESIGN_TOKENS.corners[8],
    padding: `${DESIGN_TOKENS.spacing[12]} ${DESIGN_TOKENS.spacing[16]}`,
    gap: DESIGN_TOKENS.spacing[12],
    minWidth: '320px',
    flex: 1,
    transition: 'all 200ms ease-in-out',
    border: isFocused ? `2px solid ${DESIGN_TOKENS.colors.primary}` : '2px solid transparent',
    boxShadow: isFocused || isHovered ? DESIGN_TOKENS.shadows.small : 'none',
    transform: isFocused ? 'translateY(-1px)' : 'translateY(0px)',
    cursor: 'pointer',
  });

  const getInputStyles = () => ({
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: DESIGN_TOKENS.fonts.inter,
    fontSize: DESIGN_TOKENS.fontSizes[14],
    fontWeight: DESIGN_TOKENS.fontWeights.regular,
    color: DESIGN_TOKENS.colors.primaryText,
    lineHeight: DESIGN_TOKENS.lineHeights[20],
    transition: 'all 200ms ease-in-out',
  });

  const getIconStyles = () => ({
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 200ms ease-in-out',
    opacity: isFocused ? 0.8 : 1,
  });

  return (
    <div 
      style={getSearchStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={getIconStyles()}>
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Поиск товаров..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={getInputStyles()}
      />
    </div>
  );
};

// Company Info Component
const CompanyInfo: React.FC<{ isBlocked?: boolean; isPartBlocked?: boolean }> = ({
  isBlocked = false,
  isPartBlocked = false,
}) => (
  <div
    className="flex flex-col"
    style={{ gap: DESIGN_TOKENS.spacing[12] }}
  >
    <div className="flex flex-col">
      <span
        style={{
          fontFamily: DESIGN_TOKENS.fonts.inter,
          fontSize: DESIGN_TOKENS.fontSizes[16], // Text 16pt SemiBold
          fontWeight: DESIGN_TOKENS.fontWeights.semibold,
          color: DESIGN_TOKENS.colors.primaryText,
          lineHeight: DESIGN_TOKENS.lineHeights[24],
        }}
      >
        ООО «Добронравов групп»
      </span>
      {(isBlocked || isPartBlocked) && (
        <div
          className="inline-flex items-center px-2 py-0.5 rounded"
          style={{
            backgroundColor: DESIGN_TOKENS.colors.gray,
            border: `1px solid ${DESIGN_TOKENS.colors.white}`,
            borderRadius: DESIGN_TOKENS.corners[8],
            marginTop: DESIGN_TOKENS.spacing[4],
          }}
        >
          <span
            style={{
              fontFamily: DESIGN_TOKENS.fonts.inter,
              fontSize: DESIGN_TOKENS.fontSizes[11],
              fontWeight: DESIGN_TOKENS.fontWeights.semibold,
              color: DESIGN_TOKENS.colors.info,
              lineHeight: DESIGN_TOKENS.lineHeights[18],
              letterSpacing: DESIGN_TOKENS.letterSpacings.negative022,
            }}
          >
            {isBlocked ? 'Заблокирован' : 'Частично заблокирован'}
          </span>
        </div>
      )}
    </div>
    <div
      className="flex items-center"
      style={{ gap: DESIGN_TOKENS.spacing[12] }}
    >
      <span
        style={{
          fontFamily: DESIGN_TOKENS.fonts.inter,
          fontSize: DESIGN_TOKENS.fontSizes[14], // Text 14pt regular
          fontWeight: DESIGN_TOKENS.fontWeights.regular,
          color: isBlocked || isPartBlocked ? DESIGN_TOKENS.colors.secondaryText : DESIGN_TOKENS.colors.primaryText,
          lineHeight: DESIGN_TOKENS.lineHeights[20],
        }}
      >
        г. Москва, Волгоградский пр-кт, дом 82, стр. 13, корп. 4, лит. В
      </span>
      {!isBlocked && !isPartBlocked && (
        <div
          className="flex items-center justify-center"
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: DESIGN_TOKENS.colors.lightGray,
            borderRadius: DESIGN_TOKENS.corners[8],
            cursor: 'pointer',
            transition: 'all 200ms ease-in-out',
          }}
        >
          <AutorenewIcon />
        </div>
      )}
    </div>
  </div>
);

// Unlogged User Component
const UnloggedUser: React.FC = () => (
  <div
    className="flex flex-col gap-1.5"
    style={{ gap: DESIGN_TOKENS.spacing[6] }}
  >
    <div
      className="flex items-center gap-3"
      style={{ gap: DESIGN_TOKENS.spacing[12] }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: '32px',
          height: '32px',
          backgroundColor: DESIGN_TOKENS.colors.lightGray,
          borderRadius: DESIGN_TOKENS.corners[8],
        }}
      >
        <div
          style={{
            width: '16px',
            height: '16px',
            backgroundColor: DESIGN_TOKENS.colors.info,
            borderRadius: '50%',
          }}
        />
      </div>
      <span
        className="flex-1"
        style={{
          fontFamily: DESIGN_TOKENS.fonts.inter,
          fontSize: DESIGN_TOKENS.fontSizes[14],
          fontWeight: DESIGN_TOKENS.fontWeights.regular,
          color: DESIGN_TOKENS.colors.primaryText,
          lineHeight: DESIGN_TOKENS.lineHeights[20],
        }}
      >
        Зарегистрируйтесь как юридическое лицо, чтобы разблокировать все функции приложения
      </span>
    </div>
    <div
      className="flex flex-col items-start"
      style={{
        padding: `0 ${DESIGN_TOKENS.spacing[12]}`,
        width: '221px',
      }}
    >
      <button
        className="flex items-center justify-center py-1"
        style={{
          fontFamily: DESIGN_TOKENS.fonts.inter,
          fontSize: DESIGN_TOKENS.fontSizes[14],
          fontWeight: DESIGN_TOKENS.fontWeights.semibold,
          color: DESIGN_TOKENS.colors.link,
          lineHeight: DESIGN_TOKENS.lineHeights[18],
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: `${DESIGN_TOKENS.spacing[4]} 0`,
        }}
      >
        Зарегистрировать юр. лицо
      </button>
    </div>
  </div>
);

// Main Component Props
interface HeaderProps {
  className?: string;
  size?: 'Desk' | 'Tablet';
  state?: 'Logged in' | 'Unlogged' | 'Blocked' | 'Part Blocked';
}

export const Header: React.FC<HeaderProps> = ({
  className,
  size = 'Desk',
  state = 'Logged in',
}) => {
  const isDesk = size === 'Desk';
  const isTablet = size === 'Tablet';
  const isLoggedIn = state === 'Logged in';
  const isUnlogged = state === 'Unlogged';
  const isBlocked = state === 'Blocked';
  const isPartBlocked = state === 'Part Blocked';

  const getHeaderStyles = () => ({
    display: 'flex' as const,
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    backgroundColor: DESIGN_TOKENS.colors.background,
    width: isTablet ? '744px' : '1512px',
    boxShadow: DESIGN_TOKENS.shadows.small,
  });

  const getMainContentStyles = () => ({
    display: 'flex',
    alignItems: 'center',
    padding: `${DESIGN_TOKENS.spacing[16]} 140px`,
    gap: DESIGN_TOKENS.spacing[16],
    width: '100%',
  });

  const getBottomSectionStyles = () => ({
    display: 'flex',
    alignItems: 'center',
    padding: `${DESIGN_TOKENS.spacing[12]} 140px`,
    gap: DESIGN_TOKENS.spacing[32],
    width: '100%',
    borderTop: `1px solid ${DESIGN_TOKENS.colors.border}`,
  });

  return (
    <div className={className} style={getHeaderStyles()}>
      {/* Main Header Section */}
      <div style={getMainContentStyles()}>
        {/* Logo */}
        <HeaderButtons type="Logo" />

        {/* Main Button - Catalog */}
        <MainButton text="Каталог" icon="catalog" variant="primary" size="medium" />

        {/* Search */}
        <SearchInput />

        {/* Action Buttons */}
        <HeaderButtons type="Like" />
        <HeaderButtons type="Backet" />
        <HeaderButtons type="Profile" />
      </div>

      {/* Bottom Section */}
      {isDesk && (
        <div style={getBottomSectionStyles()}>
          {isLoggedIn && <CompanyInfo />}
          {isUnlogged && <UnloggedUser />}
          {isBlocked && <CompanyInfo isBlocked />}
          {isPartBlocked && <CompanyInfo isPartBlocked />}
        </div>
      )}

      {/* Tablet Version */}
      {isTablet && (
        <div
          className="flex flex-col w-full"
          style={{ padding: `0 140px` }}
        >
          <div
            className="flex items-center justify-between py-3"
            style={{ padding: `${DESIGN_TOKENS.spacing[12]} 0` }}
          >
            <div
              className="flex items-center"
              style={{ gap: DESIGN_TOKENS.spacing[16] }}
            >
              <HeaderButtons type="Logo" />
              <MainButton text="Каталог" icon="catalog" variant="primary" size="medium" />
            </div>
            <SearchInput />
            <div
              className="flex items-center"
              style={{ gap: DESIGN_TOKENS.spacing[16] }}
            >
              <HeaderButtons type="Like" />
              <HeaderButtons type="Backet" />
              <HeaderButtons type="Profile" />
            </div>
          </div>

          <div
            className="flex items-center justify-between py-3 border-t"
            style={{
              padding: `${DESIGN_TOKENS.spacing[12]} 0`,
              borderTop: `1px solid ${DESIGN_TOKENS.colors.border}`,
            }}
          >
            {isLoggedIn && <CompanyInfo />}
            {isUnlogged && <UnloggedUser />}
            {isBlocked && <CompanyInfo isBlocked />}
            {isPartBlocked && <CompanyInfo isPartBlocked />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
