/**
 * Input Component
 * 
 * Поля ввода из Figma дизайна
 * Поддерживает состояния: Default, Focused, Valid, Error, Disable
 * Эффекты: hover
 */

import React, { forwardRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, TextField, InputAdornment, Typography, FormHelperText } from '@mui/material';

// ============================================================================
// TYPES
// ============================================================================

export type InputState = 'Default' | 'Focused' | 'Valid' | 'Error' | 'Disable';

export interface InputProps {
  /**
   * Дополнительные CSS классы
   */
  className?: string;
  
  /**
   * Эффект hover
   * @default false
   */
  hover?: boolean;
  
  /**
   * Состояние поля ввода
   * @default 'Default'
   */
  state?: InputState;
  
  /**
   * Заголовок поля
   */
  label?: string;
  
  /**
   * Подпись/подсказка под полем
   */
  caption?: string;
  
  /**
   * Текст плейсхолдера
   */
  placeholder?: string;
  
  /**
   * Значение поля
   */
  value?: string;
  
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
   * Отключено ли поле
   */
  disabled?: boolean;
  
  /**
   * Полная ширина
   */
  fullWidth?: boolean;
  
  /**
   * Тип поля ввода
   */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  
  /**
   * Максимальная длина
   */
  maxLength?: number;
  
  /**
   * Показать иконку справа
   */
  endAdornment?: React.ReactNode;
  
  /**
   * Показать иконку слева
   */
  startAdornment?: React.ReactNode;
}

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const InputContainer = styled(Box)<{
  $state: InputState;
}>(({ theme, $state }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  gap: '12px',
  padding: '8px 0px',
  width: '344px',
}));

const InputLabel = styled(Typography)<{
  $state: InputState;
  $isFloating: boolean;
}>(({ theme, $state, $isFloating }) => ({
  position: $isFloating ? 'absolute' : 'static',
  top: $isFloating ? 0 : 'auto',
  left: $isFloating ? '16px' : 'auto',
  backgroundColor: theme.palette.common.white,
  padding: $isFloating ? '0px 6px' : '0px',
  borderRadius: '10px',
  overflow: 'clip',
  fontSize: '12px',
  fontWeight: 400,
  color: $state === 'Error' 
    ? theme.palette.error.main 
    : $state === 'Focused' || $state === 'Valid'
    ? theme.palette.text.primary
    : theme.palette.text.secondary,
  lineHeight: '16px',
  whiteSpace: 'nowrap',
  zIndex: 1,
}));

const StyledTextField = styled(TextField)<{
  $state: InputState;
  $hover: boolean;
}>(({ theme, $state, $hover }) => {
  const getBorderColor = () => {
    if ($state === 'Error') return theme.palette.error.main;
    if ($state === 'Focused' || $hover) return theme.palette.grey[400];
    return theme.palette.grey[300];
  };

  const getBackgroundColor = () => {
    if ($state === 'Disable') return theme.palette.grey[50];
    return theme.palette.common.white;
  };

  return {
    '& .MuiOutlinedInput-root': {
      backgroundColor: getBackgroundColor(),
      borderRadius: '12px',
      height: '56px',
      transition: 'all 200ms ease-in-out',
      '& fieldset': {
        borderColor: getBorderColor(),
        borderWidth: '1px',
        borderStyle: 'solid',
      },
      '&:hover fieldset': {
        borderColor: $hover ? theme.palette.grey[400] : getBorderColor(),
      },
      '&.Mui-focused fieldset': {
        borderColor: $state === 'Error' ? theme.palette.error.main : theme.palette.primary.main,
        borderWidth: '2px',
      },
      '&.Mui-disabled': {
        backgroundColor: theme.palette.grey[50],
        '& fieldset': {
          borderColor: theme.palette.grey[200],
        },
      },
    },
    '& .MuiOutlinedInput-input': {
      fontSize: $state === 'Focused' || $state === 'Error' || $state === 'Valid' ? '14px' : '16px',
      fontWeight: 400,
      color: $state === 'Focused' || $state === 'Error' || $state === 'Valid' 
        ? theme.palette.text.primary 
        : theme.palette.text.secondary,
      padding: '12px 8px 12px 12px',
      caretColor: theme.palette.error.main,
      '&::placeholder': {
        color: 'transparent',
      },
    },
    '& .MuiInputLabel-outlined': {
      fontSize: '14px',
      fontWeight: 400,
      color: theme.palette.text.secondary,
      '&.Mui-focused': {
        color: $state === 'Error' ? theme.palette.error.main : theme.palette.primary.main,
      },
    },
  };
});

const CaptionText = styled(Typography)<{
  $state: InputState;
}>(({ theme, $state }) => ({
  fontSize: '12px',
  fontWeight: 400,
  color: $state === 'Error' ? theme.palette.error.main : theme.palette.text.secondary,
  lineHeight: '16px',
  padding: '0px 8px',
  paddingBottom: '8px',
  width: '100%',
}));

// ============================================================================
// COMPONENT
// ============================================================================

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      hover = false,
      state = 'Default',
      label,
      caption,
      placeholder = 'Placeholder',
      value,
      onChange,
      onFocus,
      onBlur,
      disabled = false,
      fullWidth = false,
      type = 'text',
      maxLength,
      endAdornment,
      startAdornment,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(value || '');
    const hasValue = (value !== undefined ? value : internalValue) && (value !== undefined ? value : internalValue).length > 0;
    const currentState = disabled ? 'Disable' : 
      state === 'Default' && isFocused ? 'Focused' : 
      state === 'Default' && hasValue ? 'Valid' : 
      state;

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(event);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(event.target.value);
      onChange?.(event);
    };

    const showFloatingLabel = (currentState === 'Focused' || currentState === 'Valid' || currentState === 'Disable') && label;
    const showCaption = currentState === 'Error' && caption;

    return (
      <InputContainer
        className={className}
        $state={currentState}
        sx={{ width: fullWidth ? '100%' : '344px' }}
      >
        {/* Плавающий лейбл */}
        {showFloatingLabel && (
          <InputLabel
            $state={currentState}
            $isFloating={true}
            variant="body2"
          >
            {label}
          </InputLabel>
        )}

        {/* Поле ввода */}
        <StyledTextField
          ref={ref}
          $state={currentState}
          $hover={hover}
          variant="outlined"
          placeholder={showFloatingLabel ? '' : (label || placeholder)}
          value={value !== undefined ? value : internalValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          type={type}
          inputProps={{ maxLength }}
          InputProps={{
            startAdornment: startAdornment && (
              <InputAdornment position="start">
                {startAdornment}
              </InputAdornment>
            ),
            endAdornment: endAdornment && (
              <InputAdornment position="end">
                {endAdornment}
              </InputAdornment>
            ),
          }}
          fullWidth={fullWidth}
        />

        {/* Подпись/ошибка */}
        {showCaption && (
          <CaptionText
            $state={currentState}
            variant="caption"
          >
            {caption}
          </CaptionText>
        )}
      </InputContainer>
    );
  }
);

Input.displayName = 'Input';
