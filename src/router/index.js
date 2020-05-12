import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export const RenderRoutes = (routes, authed, authPath = '/login') => (routes ? (
  <Switch>
    {routes.map((route, i) => (
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
          const { history, location, match } = props;
          if (!route.requiresAuth || authed || route.path === authPath) {
            return <route.component history={history} location={location} match={match} route={route} />;
          }
          return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />;
        }}
      />
    ))}
  </Switch>
) : null);
