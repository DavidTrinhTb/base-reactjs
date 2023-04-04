import { Layout } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';
import { ThemesMode } from '../PrivateLayout';
import './styles.scss';

const { Header } = Layout;

interface Props {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
  theme: ThemesMode;
  setTheme: Dispatch<SetStateAction<ThemesMode>>;
}

const AppHeader: React.FC<Props> = ({ collapsed, setCollapsed, theme, setTheme }) => {
  return <Header className='site-layout-header'>Header</Header>;
};

export default React.memo(AppHeader);
