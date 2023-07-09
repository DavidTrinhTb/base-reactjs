import { type FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';

import LayoutContent from './Content';
import Footer from './Footer';
import Header from './Header';

const PrivateLayout: FC = () => {
  useEffect(() => {}, []);

  // if (!authenticationToken) return <Navigate to={ROUTE_URL.LOGIN} />;

  return (
    <Layout>
      <Header />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
      <Footer />
    </Layout>
  );
};

export default PrivateLayout;
