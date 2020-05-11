import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export const RenderRoutes = (routes, authed, authPath = '/login', extraProps = {}, switchProps = {}) => (routes ? (
  <Switch {...switchProps}>
    {routes.map((route, i) => (
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
          if (!route.requiresAuth || authed || route.path === authPath) {
            return <route.component {...props} {...extraProps} route={route} />;
          }
          return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />;
        }}
      />
    ))}
  </Switch>
) : null);
