import React from 'react';
import { LoginModal } from '../components/ui/LoginModal';

/**
 * Демо-страница компонента логина
 */
const LoginDemo: React.FC = () => {
  const handleLogin = (phone: string, password: string) => {
    console.log('Login attempt:', { phone, password });
    alert(`Вход с данными: ${phone}, ${password}`);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    alert('Восстановление пароля');
  };

  const handleEmailLogin = () => {
    console.log('Email login clicked');
    alert('Вход по email');
  };

  const handleClose = () => {
    console.log('Modal closed');
    alert('Закрытие модального окна');
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', margin: 0, padding: 0 }}>
      <LoginModal
        onLogin={handleLogin}
        onForgotPassword={handleForgotPassword}
        onEmailLogin={handleEmailLogin}
        onClose={handleClose}
      />
    </div>
  );
};

export default LoginDemo;
