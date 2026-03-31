import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
   * Обработчик закрытия флоу
   */
  onClose?: () => void;
  
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
// COMPONENT
// ============================================================================

export const AuthFlow: React.FC<AuthFlowProps> = ({
  onSuccess,
  onClose,
  onError,
  initialRoute = 'login',
}) => {
  const handleLogin = (phone: string, password: string) => {
    console.log('Login attempt:', { phone, password });
    
    // Здесь будет логика отправки данных на сервер
    // Для демо просто переходим к подтверждению
    window.history.pushState({}, '', '/auth/confirmation');
    
    // В реальном приложении здесь будет API вызов
    // mockLogin(phone, password)
    //   .then(() => {
    //     window.history.pushState({}, '', '/auth/confirmation');
    //   })
    //   .catch((error) => {
    //     onError?.(error.message);
    //   });
  };

  const handleConfirmCode = (code: string) => {
    console.log('Code confirmation:', { code });
    
    // Здесь будет логика подтверждения кода
    onSuccess?.({ phone: '+7 (987) 654-32-10', code });
    
    // В реальном приложении здесь будет API вызов
    // mockConfirmCode(phone, code)
    //   .then(() => {
    //     onSuccess?.({ phone, code });
    //   })
    //   .catch((error) => {
    //     onError?.(error.message);
    //   });
  };

  const handleResendCall = () => {
    console.log('Resend call requested');
    
    // Здесь будет логика повторного звонка
    // В реальном приложении здесь будет API вызов
    // mockResendCall(phone)
    //   .then(() => {
    //     // Показать уведомление о повторном звонке
    //   })
    //   .catch((error) => {
    //     onError?.(error.message);
    //   });
  };

  const handleBackToLogin = () => {
    window.history.pushState({}, '', '/auth/login');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Здесь будет логика восстановления пароля
  };

  const handleEmailLogin = () => {
    console.log('Email login clicked');
    // Здесь будет логика входа по email
  };

  const handleClose = () => {
    onClose?.();
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/auth/login" 
          element={
            <LoginModal
              onLogin={handleLogin}
              onForgotPassword={handleForgotPassword}
              onEmailLogin={handleEmailLogin}
              onClose={handleClose}
            />
          } 
        />
        <Route 
          path="/auth/confirmation" 
          element={
            <ConfirmationModal
              phoneNumber="+7 (987) 654-32-10"
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
    </Router>
  );
};

export default AuthFlow;
