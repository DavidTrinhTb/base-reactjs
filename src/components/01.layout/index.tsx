import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRouter from 'src/routes/Routes';
import PrivateLayout from './PrivateLayout';
import PublicLayout from './PublicLayout';
import { PublicRouter } from './sidebar/constants/SidebarList';
import ReactLoading from 'react-loading';

const LayoutComponent = () => {
  const token = 'token';

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className='page-loading'>
            <ReactLoading type='spinningBubbles' color='#878787' height={64} width={64} />
          </div>
        }
      >
        {token ? (
          <PrivateLayout>
            <PrivateRouter />
          </PrivateLayout>
        ) : (
          <PublicLayout>
            <Switch>
              {PublicRouter.map((route: any, index: number) => (
                <Route key={index} path={route.subLink} component={route.component} />
              ))}
            </Switch>
          </PublicLayout>
        )}
      </Suspense>
    </BrowserRouter>
  );
};

export default LayoutComponent;