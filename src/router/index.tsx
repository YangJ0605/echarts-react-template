import { lazy } from 'react'

import { RouteConfig } from 'react-router-config'
import { Redirect } from 'react-router-dom'

const Home = lazy(() => import('@/pages/home'))

const routes: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/home' />
  },
  {
    path: '/home',
    component: Home
  }
]

export default routes
