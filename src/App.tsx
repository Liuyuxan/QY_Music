import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/index'
import { Link } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from './store'

function App() {
  const { num, message } = useAppSelector(
    (state) => ({
      num: state.discover.num,
      message: state.discover.message
    }),
    shallowEqual
  )
  console.log(num, message)

  return (
    <div>
      <div>
        <Link to="/discover">发现音乐</Link>
        <Link to="/my">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/store">商城</Link>
        <Link to="/musicia">音乐人</Link>
        <Link to="/download">下载客户端</Link>
      </div>

      <Suspense fallback="">
        <div className="App">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
