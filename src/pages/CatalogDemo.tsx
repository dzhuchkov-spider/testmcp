/**
 * CatalogDemo Component
 * 
 * Демонстрация страницы каталога
 */

import React from 'react';
import CatalogPage from './CatalogPage';

const CatalogDemo: React.FC = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh' }}>
      <CatalogPage />
    </div>
  );
};

export default CatalogDemo;
