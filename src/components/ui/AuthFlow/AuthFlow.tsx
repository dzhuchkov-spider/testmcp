import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { LoginModal } from '@/components/ui/LoginModal';
import { ConfirmationModal } from '@/components/ui/ConfirmationModal';

// ============================================================================
// TYPES
// ============================================================================

export interface AuthFlowProps {
  /**
   * Обработчик успешной авторизации
   */
  onSuccess?: (data: { phone: string; code?: string }) => void;
  
  /**
   * Обработчик закрытия флоу (крестик/escape)
   */
  onClose?: () => void;
  
  /**
   * Обработчик возврата на онбординг (кнопка назад)
   */
  onBackToOnboarding?: () => void;
  
  /**
   * Обработчик ошибок
   */
  onError?: (error: string) => void;
  
  /**
   * Начальный маршрут
   */
  initialRoute?: 'login' | 'confirmation';
}

// ============================================================================
// INTERNAL COMPONENT
// ============================================================================

const AuthFlowContent: React.FC<AuthFlowProps> = ({
  onSuccess,
  onClose,
  onBackToOnboarding,
  onError,
}) => {
  const navigate = useNavigate();
  const [userPhone, setUserPhone] = useState<string>('');

  const handleLogin = (phone: string, password: string) => {
    console.log('Login attempt:', { phone, password });
    
    // Сохраняем номер телефона для следующего экрана
    setUserPhone(phone);
    
    // Переходим к экрану подтверждения
    navigate('/auth/confirmation');
    
    // В реальном приложении здесь будет API вызов
    // mockLogin(phone, password)
    //   .then(() => {
    //     setUserPhone(phone);
    //     navigate('/auth/confirmation');
    //   })
    //   .catch((error) => {
    //     onError?.(error.message);
    //   });
  };

  const handleConfirmCode = (code: string) => {
    console.log('Code confirmation:', { code });
    
    // Здесь будет логика подтверждения кода
    onSuccess?.({ phone: userPhone || '+7 (987) 654-32-10', code });
    
    // В реальном приложении здесь будет API вызов
    // mockConfirmCode(userPhone, code)
    //   .then(() => {
    //     onSuccess?.({ phone: userPhone, code });
    //   })
    //   .catch((error) => {
    //     onError?.(error.message);
    //   });
  };

  const handleResendCall = () => {
    console.log('Resend call requested');
    
    // Здесь будет логика повторного звонка
    // В реальном приложении здесь будет API вызов
    // mockResendCall(userPhone)
    //   .then(() => {
    //     // Показать уведомление о повторном звонке
    //   })
    //   .catch((error) => {
    //     onError?.(error.message);
    //   });
  };

  const handleBackToLogin = () => {
    navigate('/auth/login');
  };

  const handleBackFromLogin = () => {
    // Возврат со страницы авторизации на онбординг
    onBackToOnboarding?.();
  };

  const handleClose = () => {
    // Закрытие модального окна (крестик/escape)
    onClose?.();
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Здесь будет логика восстановления пароля
  };

  const handleEmailLogin = () => {
    console.log('Email login clicked');
    // Здесь будет логика входа по email
  };

  return (
    <Routes>
      <Route 
        path="/auth/login" 
        element={
          <LoginModal
            onLogin={handleLogin}
            onForgotPassword={handleForgotPassword}
            onEmailLogin={handleEmailLogin}
            onClose={handleBackFromLogin}
          />
        } 
      />
      <Route 
        path="/auth/confirmation" 
        element={
          <ConfirmationModal
            phoneNumber={userPhone || '+7 (987) 654-32-10'}
            onConfirm={handleConfirmCode}
            onResend={handleResendCall}
            onBack={handleBackToLogin}
            onClose={handleClose}
          />
        } 
      />
      <Route 
        path="/" 
        element={<Navigate to="/auth/login" replace />} 
      />
      <Route 
        path="*" 
        element={<Navigate to="/auth/login" replace />} 
      />
    </Routes>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const AuthFlow: React.FC<AuthFlowProps> = (props) => {
  return (
    <Router>
      <AuthFlowContent {...props} />
    </Router>
  );
};

export default AuthFlow;
