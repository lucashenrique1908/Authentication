import { createBrowserRouter, Navigate } from 'react-router-dom';

import AuthLayouts from '../layouts/AuthLayouts.jsx';

import LoginPage from '../../features/auth/pages/LoginPage.jsx';
import RegisterPage from '../../features/auth/pages/RegisterPage.jsx';
import ForgotPasswordPage from '../../features/auth/pages/ForgotPasswordPage.jsx';
import ErrorPage from '../../features/auth/pages/ErrorPage.jsx';
import AppLayout from '../layouts/appLayout.jsx';
import NewUser from '../../features/auth/pages/newUsers.jsx'
import OverviewGraphicPage from '../../features/auth/pages/OverviewGraphicPage.jsx'
import SalesPage from '../../features/auth/pages/salesPage.jsx'
import SocialTraffic from '../../features/auth/pages/socialTraffic.jsx'
import TrafficPage from '../../features/auth/pages/trafficPage.jsx'


import DashboardPage from '../../features/dashboard/dashboardPage.jsx';

import PublicRoute from './PublicRoutes.jsx';
import PrivateRoute from './PrivateRoutes.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayouts />,

    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },

      {
        element: <PublicRoute />,
        children: [
          {
            path: 'applayouts',
            element: <AppLayout />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'register',
            element: <RegisterPage />,
          },
          {
            path: 'forgotPassword',
            element: <ForgotPasswordPage />,
          },
        ],
      },

      {
        element: <PrivateRoute />,
        children: [
          {
            element: <AppLayout />,
            children: [{ path: 'dashboard', element: <DashboardPage /> },
              {
                path: 'newuser',
                element: <NewUser />,  

              },
              {
                path: 'overviewGraphicPage',
                element: <OverviewGraphicPage />,  

              },
              {
                path: 'performance',
                element: <Performance />,  

              },
              {
                path: 'salespage',
                element: <SalesPage />,  

              },
              {
                path: 'socialtraffic',
                element: <SocialTraffic />,  

              },
              {
                path: 'trafficpage',
                element: <TrafficPage />,  

              },
            ],
          },
        ],
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
