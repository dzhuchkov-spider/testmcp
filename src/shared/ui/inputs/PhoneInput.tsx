import React from 'react';
import { colors, spacing, borderRadius, typography, shadows } from '@/shared/config/theme';

export interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
}

/**
 * Инпут для ввода номера телефона
 * Использует tokены из design-tokens
 */
export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      value,
      onChange,
      placeholder = 'Телефон',
      disabled = false,
      error = false,
      errorMessage,
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      // Только цифры и спец символы для телефона
      const formattedValue = inputValue.replace(/[^\d+\-().\s]/g, '');
      onChange(formattedValue);
    };

    return (
      <div style={{ width: '100%' }}>
        <input
          ref={ref}
          type="tel"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          style={{
            width: '100%',
            height: spacing[9], // 36px / компонентSizes.input.md
            padding: `${spacing[3]} ${spacing[3]}`,
            fontSize: typography.fontSize.base.size,
            fontFamily: typography.fontFamily.base.stack,
            lineHeight: typography.fontSize.base.lineHeight,
            letterSpacing: typography.fontSize.base.letterSpacing,
            border: `1px solid ${error ? colors.error[500] : colors.neutral[300]}`,
            borderRadius: borderRadius.md,
            backgroundColor: colors.neutral[0],
            color: colors.neutral[900],
            transition: `border-color 200ms ease-in-out, box-shadow 200ms ease-in-out`,
            outline: 'none',
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
        />
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

PhoneInput.displayName = 'PhoneInput';
