import { Layout } from 'antd';
import React, { useState } from 'react';
import Header from 'src/components/01.layout/header';
import { useSessionStorage } from 'src/hooks/useSessionStorage';
import Sidebar from './sidebar/Sidebar';
import './styles.scss';

const { Content } = Layout;

interface ILayoutProps {
  children?: React.ReactNode;
}

export enum ThemesMode {
  dark = 'dark',
  light = 'light',
}

const PrivateLayout: React.FC<ILayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [theme, setTheme] = useSessionStorage('theme', ThemesMode.dark);

  return (
    <div id='layout' className={theme}>
      <Layout className='container'>
        <Sidebar collapsed={collapsed} />
        <Layout className='site-layout'>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} theme={theme} setTheme={setTheme} />
          <Content className='site-layout-background'>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default PrivateLayout;
