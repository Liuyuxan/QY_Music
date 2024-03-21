import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/index'
import AppHeader from './components/app-header'
import APPFooter from './components/app-footer'

function App() {
  return (
    <div>
      <AppHeader />
      <Suspense fallback="">
        <div className="App">{useRoutes(routes)}</div>
      </Suspense>
      <APPFooter />
    </div>
  )
}

export default App
