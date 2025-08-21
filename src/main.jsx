import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

import Albums from './pages/Albums';
import Journals from './pages/Journals';
import Webrings from './pages/Webrings';
import KolmogorovsAxioms from './pages/Jounals/KolmogorovAxiom';

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
    },
    {
        path: "/Albums",
        element: <Albums />,
    },
    {
        path: "/Journals",
        element: <Journals />,
    },
    {
        path: "/Webrings",
        element: <Webrings />,
    },
    {
        path: "/Journals/KolmogorovsAxioms",
        element: <KolmogorovsAxioms />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)