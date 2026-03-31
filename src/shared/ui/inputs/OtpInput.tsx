import React, { useRef, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { colors, spacing, borderRadius, typography } from '@/shared/config/theme';

// ============================================================================
// STYLES
// ============================================================================

interface OtpInputContainerProps {
  error?: boolean;
}

const OtpInputContainer = styled('div')<OtpInputContainerProps>(
  ({ theme, error }) => ({
    display: 'flex',
    gap: spacing[3],
    justifyContent: 'space-between',
    width: '100%',
  })
);

interface OtpDigitFieldProps {
  filled?: boolean;
  error?: boolean;
}

const OtpDigitField = styled('input')<OtpDigitFieldProps>(
  ({ theme, filled, error }) => ({
    width: '56px',
    height: '56px',
    borderRadius: borderRadius.md,
    border: `1px solid ${error ? colors.red[600] : colors.neutral[300]}`,
    backgroundColor: colors.neutral[0],
    fontSize: typography.fontSize.lg.size,
    fontWeight: 600,
    textAlign: 'center',
    fontFamily: 'monospace',
    color: colors.neutral[900],
    outline: 'none',
    transition: 'all 0.2s ease-in-out',
    
    '&:focus': {
      borderColor: error ? colors.red[600] : colors.red[600],
      boxShadow: error 
        ? `0 0 0 3px ${colors.red[100]}`
        : `0 0 0 3px ${colors.red[100]}`,
    },

    '&:hover': {
      borderColor: error ? colors.red[600] : colors.neutral[400],
    },

    '&::placeholder': {
      color: colors.neutral[500],
    },

    '&:-webkit-autofill': {
      WebkitBoxShadow: `0 0 0 1000px ${colors.neutral[0]} inset`,
      WebkitTextFillColor: colors.neutral[900],
    },
  })
);

const ErrorText = styled('p')({
  color: colors.red[600],
  fontSize: typography.fontSize.sm.size,
  marginTop: spacing[2],
  textAlign: 'center',
  width: '100%',
});

const HelpText = styled('p')({
  color: colors.neutral[500],
  fontSize: typography.fontSize.sm.size,
  marginTop: spacing[2],
  textAlign: 'center',
  width: '100%',
});

// ============================================================================
// TYPES
// ============================================================================

export interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  helpText?: string;
  autoFocus?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const OtpInput: React.FC<OtpInputProps> = ({
  value,
  onChange,
  onComplete,
  disabled = false,
  error = false,
  errorMessage,
  helpText,
  autoFocus = true,
}) => {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Инициализация массива ref для каждого поля
  const setInputRef = (index: number) => (el: HTMLInputElement | null) => {
    inputRefs.current[index] = el;
  };

  // Обработка ввода в поле
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let val = e.target.value;

    // Принимаем только цифры
    val = val.replace(/[^0-9]/g, '');

    // Берём только первую цифру
    if (val.length > 1) {
      val = val[0];
    }

    // Обновляем значение
    const newValue = value.split('');
    newValue[index] = val;
    const result = newValue.join('');

    onChange(result);

    // Переход на следующее поле
    if (val && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Если заполнено 4 цифры, вызываем callback
    if (result.length === 4 && onComplete) {
      onComplete(result);
    }
  };

  // Обработка удаления (backspace)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (value[index]) {
        // Если есть значение, удаляем его
        const newValue = value.split('');
        newValue[index] = '';
        onChange(newValue.join(''));
      } else if (index > 0) {
        // Если поле пустое, переходим на предыдущее поле
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Вставка целого значения через paste
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    const digits = pastedData.replace(/[^0-9]/g, '').slice(0, 4);

    onChange(digits);

    if (digits.length === 4 && onComplete) {
      onComplete(digits);
    }

    // Фокусируемся на поле после вставки
    if (digits.length > 0) {
      const nextIndex = Math.min(digits.length, 3);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  // Auto-focus на первое поле
  useEffect(() => {
    if (autoFocus && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div style={{ width: '100%' }}>
      <OtpInputContainer error={error}>
        {[0, 1, 2, 3].map((index) => (
          <OtpDigitField
            key={index}
            ref={index === 0 ? firstInputRef : setInputRef(index)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            disabled={disabled}
            error={error as any}
            filled={!!value[index] as any}
          />
        ))}
      </OtpInputContainer>

      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      {helpText && !errorMessage && <HelpText>{helpText}</HelpText>}
    </div>
  );
};

export default OtpInput;
