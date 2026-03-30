/**
 * Text Input Component
 * 
 * Базовый инпут с поддержкой различных типов
 * Включает placeholder, label, error state
 */

import { forwardRef, type InputHTMLAttributes } from 'react';
import { InputWrapper, StyledInput, InputLabel, ErrorMessage } from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Метка поля
   */
  label?: string;

  /**
   * Сообщение об ошибке
   */
  error?: string;

  /**
   * Есть ошибка
   * @default false
   */
  hasError?: boolean;

  /**
   * Требуемое поле
   * @default false
   */
  required?: boolean;

  /**
   * Справочная информация
   */
  helperText?: string;

  /**
   * Полная ширина
   * @default true
   */
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hasError = false,
      required = false,
      helperText,
      fullWidth = true,
      placeholder,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    const showError = hasError || !!error;

    return (
      <InputWrapper fullWidth={fullWidth}>
        {label && (
          <InputLabel htmlFor={rest.id} required={required}>
            {label}
          </InputLabel>
        )}
        <StyledInput
          ref={ref}
          type={type}
          placeholder={placeholder}
          data-invalid={showError ? 'true' : 'false'}
          aria-describedby={error ? `${rest.id}-error` : undefined}
          {...rest}
        />
        {error && (
          <ErrorMessage id={`${rest.id}-error`}>
            {error}
          </ErrorMessage>
        )}
        {helperText && !showError && (
          <div style={{ fontSize: '12px', color: '#757C85', marginTop: '4px' }}>
            {helperText}
          </div>
        )}
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';
