import React from 'react';
import accounts from 'src/assets/icons/sidebar/accounts.svg';
import { PATHS } from 'src/constants/paths';

const DashboardComponent = React.lazy(() => import('src/pages/dashboard'));
const UsersComponent = React.lazy(() => import('src/pages/users'));
const DepositsComponent = React.lazy(() => import('src/pages/deposits'));
const WithdrawalsComponent = React.lazy(() => import('src/pages/withdrawals'));
const LoginComponent = React.lazy(() => import('src/pages/login'));
const NotFoundComponent = React.lazy(() => import('src/routes/components/NotFound'));

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
    label: 'Login',
    subLink: PATHS.LOGIN,
    component: LoginComponent,
    exact: true,
    inMenu: false,
    icon: accounts,
  },
  {
    subLink: '*',
    component: NotFoundComponent,
    exact: true,
  },
];

export const PublicRouter = [
  {
    label: 'Login',
    subLink: PATHS.LOGIN,
    component: LoginComponent,
    exact: true,
  },
  {
    subLink: '*',
    component: NotFoundComponent,
    exact: true,
  },
];
