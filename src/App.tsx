/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-11 15:12:28
 * @Description: 启动页
 */
import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/index'

function App() {
  return <div className="App">{useRoutes(routes)}</div>
}

export default App
