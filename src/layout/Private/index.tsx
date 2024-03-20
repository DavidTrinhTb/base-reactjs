import { type FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';

import LayoutContent from './Content';

const PrivateLayout: FC = () => {
  useEffect(() => {}, []);

  // if (!authenticationToken) return <Navigate to={ROUTE_URL.LOGIN} />;

  return (
    <Layout>
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </Layout>
  );
};

export default PrivateLayout;
