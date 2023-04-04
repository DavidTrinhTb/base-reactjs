import _ from 'lodash';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { PATHS } from 'src/constants/paths';
import { useAuth } from 'src/hooks/useAuth';
// import { useGetMeQuery } from 'src/services/queries/useGetmeQuery';
import { LoadingPage } from './LoadingPage';

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  // const { isAuthChecking, isAuth } = useAuth();
  // const { user, isGetUser } = useGetMeQuery(isAuth);

  // if (isAuthChecking) {
  //   return <LoadingPage />;
  // }

  // if (!isAuth) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: PATHS.connectWallet(),
  //         state: { returnUrl: location.pathname },
  //       }}
  //     />
  //   );
  // }

  // if (isGetUser) {
  //   return <LoadingPage />;
  // }

  // if (user) {
  //   if (_.isEmpty(user?.email)) {
  //     return (
  //       <Redirect
  //         to={{
  //           pathname: PATHS.enterEmail(),
  //           state: { returnUrl: location.pathname, isHaveEmail: false },
  //         }}
  //       />
  //     );
  //   }
  // }

  return <Route {...props} />;
};
