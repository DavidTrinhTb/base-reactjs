import React from 'react';
import accounts from 'src/assets/icons/sidebar/accounts.svg';
import { PATHS } from 'src/constants/paths';
import Login from 'src/pages/login';
import NotFound from 'src/routes/components/NotFound';

const DashboardComponent = React.lazy(() => import('src/pages/dashboard'));
const UsersComponent = React.lazy(() => import('src/pages/users'));
const DepositsComponent = React.lazy(() => import('src/pages/deposits'));
const WithdrawalsComponent = React.lazy(() => import('src/pages/withdrawals'));

export const SidebarList = [
  {
    label: 'Dashboard',
    subLink: PATHS.DASHBOARD,
    component: DashboardComponent,
    exact: true,
    inMenu: true,
    icon: accounts,
  },
  {
    label: 'Users',
    subLink: PATHS.USERS,
    component: UsersComponent,
    exact: true,
    inMenu: true,
    icon: accounts,
  },
  {
    label: 'Deposits',
    subLink: PATHS.DEPOSITS,
    component: DepositsComponent,
    exact: true,
    inMenu: true,
    icon: accounts,
  },
  {
    label: 'Withdrawals',
    subLink: PATHS.WITHDRAWALS,
    component: WithdrawalsComponent,
    exact: true,
    inMenu: true,
    icon: accounts,
  },
  {
    subLink: '*',
    component: NotFound,
    exact: true,
  },
];

export const PublicRouter = [
  {
    label: 'Connect Wallet',
    subLink: PATHS.LOGIN,
    component: Login,
    exact: true,
  },
  {
    subLink: '*',
    component: NotFound,
    exact: true,
  },
];
