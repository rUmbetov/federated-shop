import React from 'react';
import { createRoot } from 'react-dom/client';
import ProductPage from './pages/ProductPage';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <ProductPage />
  </React.StrictMode>
);
