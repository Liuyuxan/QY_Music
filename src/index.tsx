import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'normalize.css'

import './assets/css/index.less'

import App from '@/App'
import store from '@/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <Suspense fallback="">
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </Provider>
)
