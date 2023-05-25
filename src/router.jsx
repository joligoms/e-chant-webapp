import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },

]);

export default router;
