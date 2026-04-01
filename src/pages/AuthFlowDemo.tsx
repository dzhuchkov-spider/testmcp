import React from 'react';
import { AuthFlow } from '../components/ui/AuthFlow';

/**
 * Демо-страница флоу авторизации
 */
const AuthFlowDemo: React.FC = () => {
  const handleSuccess = (data: { phone: string; code?: string }) => {
    console.log('Auth success:', data);
    alert(`Успешная авторизация: ${data.phone}${data.code ? `, код: ${data.code}` : ''}`);
  };

  const handleClose = () => {
    console.log('Auth flow closed');
    alert('Флоу авторизации закрыт');
  };

  const handleError = (error: string) => {
    console.log('Auth error:', error);
    alert(`Ошибка: ${error}`);
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', margin: 0, padding: 0 }}>
      <AuthFlow
        onSuccess={handleSuccess}
        onClose={handleClose}
        onError={handleError}
      />
    </div>
  );
};

export default AuthFlowDemo;
