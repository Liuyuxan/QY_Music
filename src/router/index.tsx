/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-12 09:14:53
 * @Description: 请填写说明
 */
import React from "react"
import { RouteObject } from "react-router-dom"

const Discover = React.lazy(() => import('@/views/discover/discover'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Discover />
  }
]

export default routes
