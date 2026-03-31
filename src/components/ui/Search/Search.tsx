/**
 * Search Component
 * 
 * Компонент поиска из Figma Design Library
 * Поддерживает состояния: Default, Focused, Valid
 * Эффекты: hover состояния
 */

import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, InputBase } from '@mui/material';

// Иконки из Figma
const searchIcon = "https://www.figma.com/api/mcp/asset/067cb956-8ece-465f-a382-3f0087c7172f";
const clearIcon = "https://www.figma.com/api/mcp/asset/7a9befe5-dd4e-4c50-a1f1-c5480525de6e";

// ============================================================================
// TYPES
// ============================================================================

export type SearchState = 'Default' | 'Focused' | 'Valid';

export interface SearchProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Состояние hover эффекта
   * @default false
   */
  hover?: boolean;
  
  /**
   * Состояние компонента
   * @default 'Default'
   */
  state?: SearchState;
  
  /**
   * Значение поля ввода
   */
  value?: string;
  
  /**
   * Placeholder текст
   * @default 'Что искать?'
   */
  placeholder?: string;
  
  /**
   * Обработчик изменения значения
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Обработчик фокуса
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Обработчик потери фокуса
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  /**
   * Ширина компонента
   * @default '360px'
   */
  width?: string;
  
  /**
   * Отключен ли компонент
   */
  disabled?: boolean;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const SearchContainer = styled(Box)<{
  $state: SearchState;
  $hover: boolean;
  $width: string;
}>(({ theme, $state, $hover, $width }) => {
  const isDefaultAndHover = $state === 'Default' && $hover;
  const isFocusedAndHover = $state === 'Focused' && $hover;
  const isFocusedAndNotHover = $state === 'Focused' && !$hover;
  const isValidAndHover = $state === 'Valid' && $hover;
  const isValidAndNotHover = $state === 'Valid' && !$hover;

  return {
    display: 'flex',
    alignItems: 'flex-start',
    position: 'relative',
    width: $width,
    height: isValidAndHover ? 'auto' : '40px',
  };
});

const SearchInputWrapper = styled(Box)<{
  $state: SearchState;
  $hover: boolean;
}>(({ theme, $state, $hover }) => {
  const isDefaultAndHover = $state === 'Default' && $hover;
  const isFocusedAndHover = $state === 'Focused' && $hover;
  const isFocusedAndNotHover = $state === 'Focused' && !$hover;
  const isValidAndHover = $state === 'Valid' && $hover;
  const isValidAndNotHover = $state === 'Valid' && !$hover;

  return {
    display: 'flex',
    flex: '1 0 0',
    alignItems: 'center',
    gap: '6px',
    minHeight: '1px',
    minWidth: '1px',
    paddingLeft: '10px',
    position: 'relative',
    borderRadius: '12px',
    backgroundColor: theme.palette.grey[50],
    border: '1px solid',
    borderColor: isValidAndHover 
      ? '#d1d3d6'
      : isFocusedAndHover 
        ? '#a3a7ae'
        : isDefaultAndHover || isFocusedAndNotHover
          ? '#d1d3d6'
          : '#e8e9eb',
    alignSelf: 'stretch',
    transition: 'all 200ms ease-in-out',
    '&:hover': {
      borderColor: $state === 'Default' ? '#d1d3d6' : undefined,
    },
  };
});

const SearchIconWrapper = styled(Box)<{
  $state: SearchState;
  $hover: boolean;
}>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  flexShrink: 0,
  width: '18px',
  height: '18px',
}));

const SearchIconContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
}));

const SearchInput = styled(InputBase)<{
  $state: SearchState;
}>(({ theme, $state }) => {
  const isFocusedOrValid = ['Focused', 'Valid'].includes($state);

  return {
    flex: '1 0 0',
    minHeight: '1px',
    minWidth: '1px',
    fontSize: '13px',
    fontWeight: 400,
    lineHeight: '16px',
    color: isFocusedOrValid ? '#192434' : '#a3a7ae',
    fontFamily: '"Inter", sans-serif',
    '& .MuiInputBase-input': {
      padding: 0,
      '&::placeholder': {
        color: '#a3a7ae',
        opacity: 1,
      },
    },
  };
});

const ClearButtonWrapper = styled(Box)<{
  $state: SearchState;
}>(({ theme, $state }) => {
  const isFocusedOrValid = ['Focused', 'Valid'].includes($state);

  return {
    flexShrink: 0,
    width: '40px',
    height: '40px',
    position: 'relative',
    display: isFocusedOrValid ? 'block' : 'none',
  };
});

const ClearButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  right: '8px',
  transform: 'translateY(-50%)',
  width: '24px',
  height: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '& img': {
    width: '12px',
    height: '12px',
    objectFit: 'contain',
  },
}));

const Cursor = styled(Box)<{
  $state: SearchState;
}>(({ theme, $state }) => ({
  display: $state === 'Focused' ? 'block' : 'none',
  backgroundColor: '#f4364c',
  height: '20px',
  width: '1px',
  flexShrink: 0,
  animation: 'blink 1s infinite',
  '@keyframes blink': {
    '0%, 50%': { opacity: 1 },
    '51%, 100%': { opacity: 0 },
  },
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      className,
      hover = false,
      state = 'Default',
      value,
      placeholder = 'Что искать?',
      onChange,
      onFocus,
      onBlur,
      width = '360px',
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const isFocusedOrValid = ['Focused', 'Valid'].includes(state);
    const displayValue = state === 'Focused' && value ? value : (state === 'Focused' ? 'Мясо' : '');

    const handleClear = () => {
      if (onChange) {
        const syntheticEvent = {
          target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    };

    return (
      <SearchContainer
        className={className}
        $state={state}
        $hover={hover}
        $width={width}
      >
        <SearchInputWrapper
          $state={state}
          $hover={hover}
        >
          <SearchIconWrapper $state={state} $hover={hover}>
            <SearchIconContainer>
              <img src={searchIcon} alt="Search" />
            </SearchIconContainer>
          </SearchIconWrapper>
          
          <Box sx={{ display: 'flex', flex: '1 0 0', alignItems: 'center', minHeight: '1px', minWidth: '1px', position: 'relative' }}>
            <SearchInput
              ref={ref}
              $state={state}
              value={displayValue}
              placeholder={state === 'Focused' ? '' : placeholder}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              disabled={disabled}
              fullWidth
              {...rest}
            />
            {state === 'Focused' && <Cursor $state={state} />}
          </Box>
          
          <ClearButtonWrapper $state={state}>
            <ClearButton onClick={handleClear}>
              <img src={clearIcon} alt="Clear" />
            </ClearButton>
          </ClearButtonWrapper>
        </SearchInputWrapper>
      </SearchContainer>
    );
  }
);

Search.displayName = 'Search';
