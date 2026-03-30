import React, { useState } from 'react';
import { colors, spacing, borderRadius, typography } from '@/shared/config/theme';

export interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
}

/**
 * Инпут для ввода пароля с возможностью показа/скрытия пароля
 * Использует токены из design-tokens
 */
export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Пароль',
      disabled = false,
      error = false,
      errorMessage,
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div style={{ width: '100%' }}>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: colors.neutral[0],
            border: `1px solid ${error ? colors.error[500] : colors.neutral[300]}`,
            borderRadius: borderRadius.md,
            height: spacing[9],
            paddingLeft: spacing[3],
            paddingRight: spacing[3],
            transition: `border-color 200ms ease-in-out, box-shadow 200ms ease-in-out`,
            boxSizing: 'border-box',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = colors.brand.primary;
            e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.red[50]}`;
          }}
          onBlur={(e) => {
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = error ? colors.error[500] : colors.neutral[300];
          }}
        >
          <input
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            style={{
              flex: 1,
              fontSize: typography.fontSize.base.size,
              fontFamily: typography.fontFamily.base.stack,
              lineHeight: typography.fontSize.base.lineHeight,
              letterSpacing: typography.fontSize.base.letterSpacing,
              color: colors.neutral[900],
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              padding: 0,
              margin: 0,
            }}
          />

          <button
            type="button"
            onClick={togglePasswordVisibility}
            disabled={disabled}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
              padding: 0,
              marginLeft: spacing[2],
              backgroundColor: 'transparent',
              border: 'none',
              cursor: disabled ? 'not-allowed' : 'pointer',
              color: colors.neutral[500],
              fontSize: '18px',
            }}
            title={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        </div>

        {error && errorMessage && (
          <p
            style={{
              marginTop: spacing[2],
              fontSize: typography.fontSize.sm.size,
              color: colors.error[500],
              fontFamily: typography.fontFamily.base.stack,
              lineHeight: typography.fontSize.sm.lineHeight,
              margin: 0,
              padding: 0,
            }}
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
