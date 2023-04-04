import React from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import PublicHeader from './public-header';
import './styles.scss';

interface ILayoutProps {
  children?: React.ReactNode;
}

const PublicLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Layout className='container'>
        <Content className='site-layout-background'>
          <PublicHeader />
          {children}
        </Content>
      </Layout>
    </div>
  );
};

export default PublicLayout;
