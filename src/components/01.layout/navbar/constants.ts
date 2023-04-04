export interface INavBar {
  key: string;
  label: string;
  to: string | null;
  icon: any;
  subNaves: any;
}

export enum NavKey {
  exchange = 'exchange',
  menu = 'menu',
  yieldFraming = 'yield-farming',
  pool = 'pool',
}

export const NAVBAR_CONFIG: INavBar[] = [
  {
    label: 'Exchange',
    key: NavKey.exchange,
    icon: '',
    to: null,

    subNaves: [
      {
        label: 'Classic mode',
        key: 1,
        icon: null,
        to: '/',
      },
      {
        label: 'Classic mode',
        key: 2,
        icon: null,
        to: '/',
      },
      {
        label: 'Wallet analytics',
        key: 2,
        icon: null,
        to: '/',
      },
    ],
  },
  {
    label: 'Pool',
    key: NavKey.pool,
    icon: '',
    to: '/',
    subNaves: null,
  },
  {
    label: 'Yield Farming',
    key: NavKey.yieldFraming,
    icon: '',
    to: '/',
    subNaves: null,
  },
  {
    label: 'Menu',
    key: NavKey.menu,
    icon: '',
    to: '/',
    subNaves: null,
  },
];

export const MENU_CONFIG: INavBar[] = [
  {
    label: 'Exchange',
    key: NavKey.exchange,
    icon: '',
    to: null,

    subNaves: [
      {
        label: 'Classic mode',
        key: 1,
        icon: null,
        to: '/',
      },
      {
        label: 'Classic mode',
        key: 2,
        icon: null,
        to: '/',
      },
      {
        label: 'Wallet analytics',
        key: 2,
        icon: null,
        to: '/',
      },
    ],
  },
  {
    label: 'Pool',
    key: NavKey.pool,
    icon: '',
    to: '/',
    subNaves: [
      {
        label: 'BTC/USDT',
        key: 1,
        icon: null,
        to: '/',
      },
      {
        label: 'ETH/USDT',
        key: 2,
        icon: null,
        to: '/',
      },
    ],
  },
  {
    label: 'Yield Farming',
    key: NavKey.yieldFraming,
    icon: '',
    to: '/',
    subNaves: null,
  },
];
