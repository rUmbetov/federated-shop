import React, { lazy, Suspense } from 'react';

const CatalogPage = lazy(() => import('catalog/CatalogPage'));

export function App() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Federated Shop Host</h1>

      <section style={{ marginTop: 24 }}>
        <Suspense fallback={<div>Loading catalog remote...</div>}>
          <CatalogPage />
        </Suspense>
      </section>
    </main>
  );
}
