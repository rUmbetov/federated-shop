import { lazy } from "react";
import { Navigate } from "react-router-dom";

const CatalogPage = lazy(() => import("catalog/CatalogPage"));
const ProductPage = lazy(() => import("product/ProductPage"));


export const ROUTES = [
    {
        path: '/',
        element: <Navigate to="/catalog"  replace/>,
    },
    {
        path: '/catalog',
        element: <CatalogPage />,
    },
    {
        path: '/products/:id',
        element: <ProductPage />,
    }
]
