import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import './styles.scss';
import { storage } from 'src/utils/storage';
import { STORAGE_KEY } from 'src/constants/storage';
import { useHistory } from 'react-router';
import { PATHS } from 'src/constants/paths';

interface ILayoutProps {
  children?: React.ReactNode;
}

const PublicLayout: React.FC<ILayoutProps> = ({ children }) => {
  const history = useHistory();
  const token = storage.get(STORAGE_KEY.ACCESS_TOKEN) || '';

  useEffect(() => {
    if (!token) {
      history.push(PATHS.LOGIN);
    }
  }, [token, history]);

  return (
    <div>
      <Layout>
        <Content className='site-layout-background'>{children}</Content>
      </Layout>
    </div>
  );
};

export default PublicLayout;
