import React from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import MyLayout from '@/components/layout'
import Login from '@/views/login'
import store from '@/store'

let state = store.getState()
let authed = state.login.isLogin // 如果登陆之后可以利用redux修改该值
let authPath = '/login' // 默认未登录的时候返回的页面，可以自行设置

const RouteWithSubRoutes = (routes, authed, authPath = '/login', extraProps = {}, switchProps = {}) => routes ? (
  <Switch {...switchProps}>
    {routes.map((route, i) => (
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
          console.log(state)
          if (!route.requiresAuth || authed || route.path === authPath) {
            return <route.component {...props} {...extraProps} route={route} />
          }
          return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
        }}
      />
    ))}
  </Switch>
) : null

export const RenderRoutes = ({ routes }) => {
  return (
    <Switch>
      <Route exact path="/login" component={withRouter(Login)} />
      <MyLayout>
        {RouteWithSubRoutes(routes, authed, authPath)}
      </MyLayout>
    </Switch>
  )
}