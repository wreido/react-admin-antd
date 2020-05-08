import React from 'react'
import { Route } from 'react-router-dom'
import MyLayout from '@/components/layout/'

// 渲染当前组件
export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => {
      return (
        <route.component {...props} routes={route.routes} />
      )
    }}
  />
)

export const RenderRoutes = ({ routes }) => {
  return (
    <MyLayout>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </MyLayout>
  )
}