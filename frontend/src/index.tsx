import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

import './index.css';
import App from './App';
import Home from './Home';
import LocalLogin from './LocalStorage/Login';
import LocalDashboard from './LocalStorage/Dashboard';
import SessionLogin from './SessionStorage/Login';
import SessionDashboard from './SessionStorage/Dashboard';
import CookieLogin from './Cookie/Login';
import CookieDashboard from './Cookie/Dashboard';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            index: true,
            path: '/',
            element: <Home />,
         },
         { index: true, path: '/local/login', element: <LocalLogin /> },
         {
            path: '/local/dashboard',
            element: <LocalDashboard />,
         },
         {
            path: '/session/login',
            element: <SessionLogin />,
         },
         {
            path: '/session/dashboard',
            element: <SessionDashboard />,
         },
         {
            path: '/cookie/login',
            element: <CookieLogin />,
         },
         {
            path: '/cookie/dashboard',
            element: <CookieDashboard />,
         },
      ],
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
   <React.StrictMode>
      <CookiesProvider>
         <RouterProvider router={router} />
      </CookiesProvider>
   </React.StrictMode>,
);
