import { Suspense } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import { Spin } from 'antd'

function App() {
  return (
    <Router>
      <Suspense fallback={<Spin size='large' tip='loading' />}>{renderRoutes(routes)}</Suspense>
    </Router>
  )
}

export default App
