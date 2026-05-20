import React from 'react';
import { createRoot } from 'react-dom/client';
import CatalogPage from './pages/CatalogPage';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <CatalogPage />
  </React.StrictMode>
);
