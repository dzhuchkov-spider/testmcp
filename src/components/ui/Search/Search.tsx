/**
 * Search Component from Figma Design
 * 
 * Компонент поиска созданный на основе Figma дизайна
 * Поддерживает состояния: Default, Focused, Valid
 * Эффекты: hover состояния
 */

import React, { forwardRef, useState } from 'react';

// Иконки из Figma
const searchIcon = "https://www.figma.com/api/mcp/asset/5d2e9d9f-f422-4722-93b0-4c277a2e30df";
const clearIcon = "https://www.figma.com/api/mcp/asset/43f4965a-eaaa-4471-93c8-46d379b8155d";

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
    const [internalHover, setInternalHover] = useState(false);
    
    const isDefaultAndHover = state === 'Default' && (hover || internalHover);
    const isFocusedAndHover = state === 'Focused' && (hover || internalHover);
    const isFocusedAndNotHover = state === 'Focused' && !(hover || internalHover);
    const isFocusedOrValid = ['Focused', 'Valid'].includes(state);
    const isValidAndHover = state === 'Valid' && (hover || internalHover);
    const isValidAndNotHover = state === 'Valid' && !(hover || internalHover);

    const getBorderColor = () => {
      if (isValidAndHover) return 'border-[#d1d3d6]';
      if (isFocusedAndHover) return 'border-[#a3a7ae]';
      if (isDefaultAndHover || isFocusedAndNotHover) return 'border-[#d1d3d6]';
      return 'border-[#e8e9eb]';
    };

    const getTextColor = () => {
      return isFocusedOrValid ? 'text-[#192434]' : 'text-[#a3a7ae]';
    };

    const getDisplayValue = () => {
      if (state === 'Focused' && value) return value;
      if (state === 'Focused') return 'Мясо';
      return '';
    };

    const handleClear = () => {
      if (onChange) {
        const syntheticEvent = {
          target: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>;
        onChange(syntheticEvent);
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onBlur) onBlur(e);
    };

    return (
      <div 
        className={`content-stretch flex items-start relative ${isValidAndHover ? '' : 'h-[40px]'}`}
        style={{ width }}
        onMouseEnter={() => setInternalHover(true)}
        onMouseLeave={() => setInternalHover(false)}
      >
        <div className={`
          bg-[#f6f7f7] 
          border border-solid 
          content-stretch flex flex-[1_0_0] gap-[6px] 
          items-center min-h-px min-w-px pl-[10px] relative rounded-[12px]
          ${getBorderColor()}
          ${isFocusedAndHover ? 'self-stretch' : 'self-stretch'}
          transition-all duration-200
        `}>
          {/* Иконка поиска */}
          <div className="relative shrink-0 size-[18px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2">
              <div className="absolute inset-[22.5%]">
                <img 
                  alt="" 
                  className="absolute block max-w-none size-full" 
                  src={searchIcon} 
                />
              </div>
            </div>
          </div>

          {/* Поле ввода */}
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
            <input
              ref={ref}
              type="text"
              className={`
                font-['Inter',sans-serif] 
                font-normal 
                leading-[16px] 
                not-italic 
                relative shrink-0 text-[13px] 
                whitespace-nowrap 
                bg-transparent 
                border-none 
                outline-none 
                w-full
                ${getTextColor()}
                placeholder:text-[#a3a7ae]
              `}
              value={getDisplayValue()}
              placeholder={state === 'Focused' ? '' : placeholder}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={disabled}
              {...rest}
            />
            
            {/* Курсор для состояния Focused */}
            {state === 'Focused' && (
              <div 
                className="bg-[#f4364c] h-[20px] shrink-0 w-px animate-pulse"
                style={{ animation: 'blink 1s infinite' }}
              />
            )}
          </div>

          {/* Кнопка очистки */}
          <div className={`shrink-0 size-[40px] ${isFocusedOrValid ? 'relative' : 'hidden'}`}>
            {isFocusedOrValid && (
              <div 
                className="-translate-y-1/2 absolute right-[8px] size-[24px] top-1/2 cursor-pointer"
                onClick={handleClear}
              >
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2">
                  <img 
                    alt="" 
                    className="absolute block max-w-none size-full" 
                    src={clearIcon} 
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Search.displayName = 'Search';
