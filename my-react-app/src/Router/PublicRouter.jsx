import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";

// Lazy loading des composants
const Layout = lazy(() => import('../Layout/Layout'));
const NotFound = lazy(() => import('../Pages/Public/NotFound'));
const Home = lazy(() => import('../Pages/Public/Home'));
const About = lazy(() => import('../Pages/Public/About'));
const Logement = lazy(() => import('../Pages/Public/Logement'));

const publicRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "logement/:id",
                element: <Logement />,
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

export default publicRouter;