import { useState, useCallback } from 'react';

// ============================================================================
// TYPES
// ============================================================================

export type AuthStep = 'PHONE' | 'OTP' | 'SUCCESS' | 'ERROR';

export interface AuthFlowState {
  currentStep: AuthStep;
  phone: string;
  otpCode: string;
  isLoading: boolean;
  error: string | null;
  otpTimer: number; // секунды до повторного отправления OTP
}

export interface UseAuthFlowReturn extends AuthFlowState {
  setPhone: (phone: string) => void;
  setOtpCode: (code: string) => void;
  setError: (error: string | null) => void;
  goToOtp: (phone: string) => Promise<void>; // PHONE -> OTP
  submitOtp: (code: string) => Promise<void>; // OTP -> SUCCESS или ERROR
  resetFlow: () => void;
  goBack: () => void;
}

/**
 * Хук для управления состоянием авторизации по номеру телефона с OTP
 */
export const useAuthFlow = (): UseAuthFlowReturn => {
  const [currentStep, setCurrentStep] = useState<AuthStep>('PHONE');
  const [phone, setPhone] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [otpTimer, setOtpTimer] = useState(0);

  // Переход на экран OTP (PHONE -> OTP)
  const goToOtp = useCallback(async (phoneValue: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Валидация
      if (!phoneValue.trim()) {
        setError('Введите номер телефона');
        setIsLoading(false);
        return;
      }

      // Здесь будет реальный API вызов для отправления OTP
      // const response = await sendOtpToPhone(phoneValue);
      console.log('Sending OTP to:', phoneValue);

      // Имитация задержки
      await new Promise((resolve) => setTimeout(resolve, 500));

      setPhone(phoneValue);
      setCurrentStep('OTP');
      setOtpCode('');
      setOtpTimer(32); // Таймер на 32 секунды
    } catch (err) {
      setError('Ошибка при отправлении кода');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Отправка OTP кода (OTP -> SUCCESS или ERROR)
  const submitOtp = useCallback(async (code: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Валидация
      if (!code.trim()) {
        setError('Введите код подтверждения');
        setIsLoading(false);
        return;
      }

      if (code.length !== 4) {
        setError('Код должен состоять из 4 цифр');
        setIsLoading(false);
        return;
      }

      // Здесь будет реальный API вызов для проверки OTP
      // const response = await verifyOtp(phone, code);
      console.log('Verifying OTP:', { phone, code });

      // Имитация задержки
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Имитация успешной проверки (в реальности здесь будет логика)
      const isValid = Math.random() > 0.3; // 70% успешных попыток для тестирования

      if (isValid) {
        setCurrentStep('SUCCESS');
        setOtpCode(code);
      } else {
        setCurrentStep('ERROR');
        setError('Неверный код подтверждения. Попробуйте снова.');
      }
    } catch (err) {
      setCurrentStep('ERROR');
      setError('Ошибка при проверке кода');
    } finally {
      setIsLoading(false);
    }
  }, [phone]);

  // Сброс флоу
  const resetFlow = useCallback(() => {
    setCurrentStep('PHONE');
    setPhone('');
    setOtpCode('');
    setError(null);
    setIsLoading(false);
    setOtpTimer(0);
  }, []);

  // Возврат назад
  const goBack = useCallback(() => {
    if (currentStep === 'OTP' || currentStep === 'ERROR') {
      setCurrentStep('PHONE');
      setOtpCode('');
      setError(null);
    } else if (currentStep === 'SUCCESS') {
      resetFlow();
    }
  }, [currentStep, resetFlow]);

  return {
    currentStep,
    phone,
    otpCode,
    isLoading,
    error,
    otpTimer,
    setPhone,
    setOtpCode,
    setError,
    goToOtp,
    submitOtp,
    resetFlow,
    goBack,
  };
};
