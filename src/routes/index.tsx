import { createBrowserRouter } from 'react-router-dom';

import PrivateLayout from 'layout/Private';
import PublicLayout from 'layout/Public';
import Challenge from 'pages/challenge';
import HomePage from 'pages/home-page';
import Login from 'pages/login';
import MyRecord from 'pages/my-record';

import IconChallenge from 'resources/svg/IconChallenge';
import IconInfo from 'resources/svg/IconInfo';
import IconMemo from 'resources/svg/IconMemo';

export const ROUTE_URL = {
  HOME: '/',
  LOGIN: '/login',
  MY_RECORD: '/my-record',
  CHALLENGE: '/challenge',
  NOTICE: '/notice',
};

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
            path: ROUTE_URL.HOME,
            element: <HomePage />,
          },
        ],
      },
      {
        path: ROUTE_URL.MY_RECORD,
        element: <PrivateLayout />,
        children: [
          {
            path: ROUTE_URL.MY_RECORD,
            element: <MyRecord />,
          },
        ],
      },
      {
        path: ROUTE_URL.CHALLENGE,
        element: <PrivateLayout />,
        children: [
          {
            path: ROUTE_URL.CHALLENGE,
            element: <Challenge />,
          },
        ],
      },
    ],
  },
  // {
  //   path: '*',
  //   element: <Navigate to={ROUTE_URL.LOGIN} />,
  // },
];

export const SUBMENU_NAVIGATION = [
  {
    text: '自分の記録',
    link: ROUTE_URL.HOME,
  },
  {
    text: '体重グラフ',
    link: ROUTE_URL.HOME,
  },
  {
    text: '目標',
    link: ROUTE_URL.HOME,
  },
  {
    text: '選択中のコース',
    link: ROUTE_URL.HOME,
  },
  {
    text: 'コラム一覧',
    link: ROUTE_URL.HOME,
  },
  {
    text: '設定',
    link: ROUTE_URL.HOME,
  },
];

export const HEADER_NAVIGATION = [
  {
    text: '自分の記録',
    link: ROUTE_URL.MY_RECORD,
    icon: <IconMemo />,
  },
  {
    text: 'チャレンジ',
    link: ROUTE_URL.CHALLENGE,
    icon: <IconChallenge />,
  },
  {
    text: 'お知らせ',
    link: ROUTE_URL.NOTICE,
    icon: <IconInfo />,
  },
];

export const FOOTER_NAVIGATION = [
  {
    text: '会員登録',
    link: ROUTE_URL.HOME,
  },
  {
    text: '運営会社',
    link: ROUTE_URL.HOME,
  },
  {
    text: '利用規約',
    link: ROUTE_URL.HOME,
  },
  {
    text: '個人情報の取扱について',
    link: ROUTE_URL.HOME,
  },
  {
    text: '特定商取引法に基づく表記',
    link: ROUTE_URL.HOME,
  },
  {
    text: 'お問い合わせ',
    link: ROUTE_URL.HOME,
  },
];

export const router = createBrowserRouter(routes);
