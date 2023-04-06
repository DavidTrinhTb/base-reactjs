import _isEmpty from 'lodash/isEmpty';
import { Suspense } from 'react';
import ReactLoading from 'react-loading';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useAuth } from 'src/contexts/auth';
import PrivateRouter from 'src/routes/Routes';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';
import { PublicRouter } from './sidebar/constants/SidebarList';

const LayoutComponent = () => {
  const { token } = useAuth();
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className='page-loading'>
            <ReactLoading type='spinningBubbles' color='#878787' height={64} width={64} />
          </div>
        }
      >
        {_isEmpty(token) ? (
          <PublicLayout>
            <Switch>
              {PublicRouter.map((route: any, index: number) => (
                <Route key={index} path={route.subLink} component={route.component} />
              ))}
            </Switch>
          </PublicLayout>
        ) : (
          <PrivateLayout>
            <PrivateRouter />
          </PrivateLayout>
        )}
      </Suspense>
    </BrowserRouter>
  );
};

export default LayoutComponent;
