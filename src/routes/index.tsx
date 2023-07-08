import { createBrowserRouter, Navigate } from 'react-router-dom';

import PrivateLayout from 'layout/Private';
import PublicLayout from 'layout/Public';
import HomePage from 'pages/home-page';
import Login from 'pages/login';

export const ROUTE_URL = {
  HOME: '/',
  LOGIN: '/login',
  LINKED_ACCOUNT: '/linked-account',
  BOT_MANAGEMENT: '/bots',
  CREATE_BOT: '/bots/create',
  EDIT_BOT: '/bots/:id/edit',
  BOT_DETAIL: '/bots/:id',
  ORDER_HISTORY: '/order-history',
  SETTINGS: '/settings',
};

export const DEFAULT_PAGE = ROUTE_URL.BOT_MANAGEMENT;

const routes = [
  {
    path: ROUTE_URL.HOME,
    element: <PublicLayout />,
    children: [
      { path: ROUTE_URL.LOGIN, element: <Login /> },
      {
        path: ROUTE_URL.HOME,
        element: <PrivateLayout />,
        children: [
          {
            path: ROUTE_URL.ORDER_HISTORY,
            element: <HomePage />,
          },
        ],
      },

      // {
      //   path: '',
      //   element: <PrivateLayout />,
      //   children: [
      //     {
      //       path: ROUTE_URL.BOT_MANAGEMENT,
      //       element: <BotManagement />,
      //       loader: BotManagementLoader,
      //       children: [],
      //     },
      //   ],
      // },
    ],
  },
  {
    path: '*',
    element: <Navigate to={ROUTE_URL.LOGIN} />,
  },
];

export const NAVIGATION = [
  {
    text: 'header.bots',
    link: ROUTE_URL.BOT_MANAGEMENT,
  },
  {
    text: 'header.order_history',
    link: ROUTE_URL.ORDER_HISTORY,
  },
  {
    text: 'header.settings',
    link: ROUTE_URL.SETTINGS,
  },
];

export const router = createBrowserRouter(routes);
