import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import MyLayout from '@/components/layout'
import Login from '@/views/login'

const RouteWithSubRoutes = (routes, authed, authPath = '/login', extraProps = {}, switchProps = {}) => routes ? (
  <Switch {...switchProps}>
    {routes.map((route, i) => (
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
          if (!route.requiresAuth || authed || route.path === authPath) {
            return <route.component {...props} {...extraProps} route={route} />
          }
          return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
        }}
      />
    ))}
  </Switch>
) : null

export const RenderRoutes = ({ routes, authed, authPath }) => {
  return (
    <Switch>
      <Route exact path="/login" component={withRouter(Login)} />
      <MyLayout>
        {RouteWithSubRoutes(routes, authed, authPath)}
      </MyLayout>
    </Switch>
  )
}