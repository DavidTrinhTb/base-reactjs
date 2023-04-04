import React from 'react';
import { Route, Switch } from 'react-router';
import loadable, { DefaultComponent } from '@loadable/component';
import { SidebarList } from 'src/components/01.layout/sidebar/constants/SidebarList';
import { LoadingPage } from './components/LoadingPage';

function loadableWFallback(loadFn: (props: {}) => Promise<DefaultComponent<{}>>) {
  return loadable(loadFn, {
    fallback: <LoadingPage />,
  });
}

const NotFound = loadableWFallback(() => import('./components/NotFound'));

const PrivateRouter: React.FC = () => {
  return (
    <Switch>
      {SidebarList.map((route: any) => {
        if (route?.children) {
          return route.children.map((r: any) => (
            <Route key={r.subLink} exact={r.exact} path={r.subLink} component={r.component} {...r} />
          ));
        }
        return (
          <Route
            key={route.subLink}
            exact={route.exact}
            path={route.subLink}
            component={route?.component ? route.component : NotFound}
            {...route}
          />
        );
      })}
    </Switch>
  );
};

export default PrivateRouter;
