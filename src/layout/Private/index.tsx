import { type FC, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Layout } from 'antd';
import { DEFAULT_PAGE, ROUTE_URL } from 'routes';

import { useGetAuthenticationActions, useGetAuthenticationToken } from 'store/authentication/selector';

import LayoutContent from './Content';
import Footer from './Footer';
import Header from './Header';

const PrivateLayout: FC = () => {
  const authenticationToken = useGetAuthenticationToken();

  const location = useLocation();
  const isHome = location.pathname === ROUTE_URL.HOME;

  const { setUser, setAuthenticationToken } = useGetAuthenticationActions();

  useEffect(() => {
    // setUser(new UserDTO(null));
    // setAuthenticationToken('');
  }, []);

  if (!authenticationToken) return <Navigate to={ROUTE_URL.LOGIN} />;

  return (
    <Layout>
      <Header />
      <LayoutContent>
        {isHome ? (
          <Navigate to={DEFAULT_PAGE} />
        ) : (
          <main className='app-container'>
            <div className='container'>
              <Outlet />
            </div>
          </main>
        )}
      </LayoutContent>
      <Footer />
    </Layout>
  );
};

export default PrivateLayout;
