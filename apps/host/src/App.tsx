import React, { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routing";

const CatalogPage = lazy(() => import("catalog/CatalogPage"));

export function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 24 }}>
        <header
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <h1>Federated Shop</h1>
          <nav>
            <Link to="/catalog">Catalog</Link>
          </nav>
        </header>

      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {ROUTES.map((route)=>(
            <Route
            key={route.path}
            path={route.path}
            element={route.element}
            />
        ))}
      </Routes>
      </Suspense>
      </div>
    </BrowserRouter>
  );
}
