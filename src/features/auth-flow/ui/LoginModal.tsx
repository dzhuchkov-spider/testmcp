import React, { useEffect, useRef } from 'react';
import { colors, spacing, borderRadius, typography, shadows, componentSizes } from '@/shared/config/theme';
import { PhoneInput } from '@/shared/ui/inputs/PhoneInput';
import { PasswordInput } from '@/shared/ui/inputs/PasswordInput';
import { useAuthFlow } from '../model/useAuthFlow';

export interface LoginModalProps {
  onClose?: () => void;
  onLoginSuccess?: () => void;
  onSwitchToEmail?: () => void;
}

/**
 * Модальное окно авторизации по номеру телефона
 * Использует дизайн-токены из project design system
 */
export const LoginModal: React.FC<LoginModalProps> = ({
  onClose,
  onLoginSuccess,
  onSwitchToEmail,
}) => {
  const { phone, password, isLoading, error, setPhone, setPassword, handleLogin, handleForgotPassword } =
    useAuthFlow();

  const phoneInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    phoneInputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleLogin(phone, password);
    // TODO: Проверить успешного входа и вызвать onLoginSuccess
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[6],
        width: '100%',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing[2],
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        {/* Back button + Title */}
        <div
          style={{
            display: 'flex',
            gap: spacing[5],
            alignItems: 'flex-start',
            width: '100%',
          }}
        >
          <button
            onClick={onClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: componentSizes.button.sm.height,
              height: componentSizes.button.sm.height,
              padding: 0,
              backgroundColor: colors.neutral[100],
              border: `1px solid ${colors.neutral[200]}`,
              borderRadius: borderRadius.md,
              cursor: 'pointer',
              color: colors.neutral[600],
              fontSize: '20px',
              transition: `all 200ms ease-in-out`,
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.neutral[200];
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.neutral[100];
            }}
            title="Вернуться назад"
          >
            ← 
          </button>

          <div style={{ flex: 1 }}>
            <h2
              style={{
                ...typography.styles.h3,
                color: colors.neutral[900],
                margin: 0,
                padding: 0,
              }}
            >
              С возвращением в Mtgagro.pro
            </h2>
          </div>
        </div>

        {/* Subtitle */}
        <p
          style={{
            ...typography.styles.bodySm,
            color: colors.neutral[500],
            margin: 0,
            padding: 0,
            width: '100%',
          }}
        >
          Заполните поля, чтобы выполнить вход в аккаунт
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: spacing[6], width: '100%' }}>
        {/* Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[4], width: '100%' }}>
          <PhoneInput
            ref={phoneInputRef}
            value={phone}
            onChange={setPhone}
            placeholder="Телефон"
            disabled={isLoading}
            error={!!error && error.includes('телефон')}
          />

          <PasswordInput
            ref={passwordInputRef}
            value={password}
            onChange={setPassword}
            placeholder="Пароль"
            disabled={isLoading}
            error={!!error && error.includes('пароль')}
          />
        </div>

        {/* Forgot Password Link */}
        <button
          type="button"
          onClick={handleForgotPassword}
          style={{
            alignSelf: 'flex-start',
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            ...typography.styles.labelBase,
            color: colors.brand.primary,
            transition: `color 200ms ease-in-out`,
          }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = colors.red[700];
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLButtonElement).style.color = colors.brand.primary;
          }}
        >
          Забыли пароль?
        </button>

        {/* Error Message */}
        {error && (
          <div
            style={{
              padding: spacing[3],
              backgroundColor: colors.error[50],
              border: `1px solid ${colors.error[200]}`,
              borderRadius: borderRadius.md,
              ...typography.styles.bodySm,
              color: colors.error[900],
            }}
          >
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: '100%',
            height: componentSizes.button.md.height,
            padding: spacing[4],
            backgroundColor: isLoading || (phone && password) ? colors.brand.primary : colors.neutral[300],
            color: colors.neutral[0],
            border: 'none',
            borderRadius: borderRadius.md,
            ...typography.styles.labelLg,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            transition: `all 200ms ease-in-out`,
            opacity: isLoading ? 0.7 : 1,
          }}
          onMouseOver={(e) => {
            if (!isLoading) {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.red[700];
            }
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.brand.primary;
          }}
        >
          {isLoading ? 'Вход в систему...' : 'Далее'}
        </button>

        {/* Switch to Email */}
        {onSwitchToEmail && (
          <button
            type="button"
            onClick={onSwitchToEmail}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              ...typography.styles.labelBase,
              color: colors.brand.primary,
              transition: `color 200ms ease-in-out`,
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = colors.red[700];
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = colors.brand.primary;
            }}
          >
            Войти по email
          </button>
        )}
      </form>
    </div>
  );
};
