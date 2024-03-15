/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-12 09:14:53
 * @Description: 请填写说明
 */
import React from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

const Discover = React.lazy(() => import('@/views/discover'))
const Recommend = React.lazy(() => import('@/views/discover/c-views/recommend'))
const Ranking = React.lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = React.lazy(() => import('@/views/discover/c-views/songs'))
const Djradio = React.lazy(() => import('@/views/discover/c-views/djradio'))
const Artist = React.lazy(() => import('@/views/discover/c-views/artist'))
const Album = React.lazy(() => import('@/views/discover/c-views/album'))

const Focus = React.lazy(() => import('@/views/focus'))
const My = React.lazy(() => import('@/views/my'))
const Store = React.lazy(() => import('@/views/store'))
const Musicia = React.lazy(() => import('@/views/musicia'))
const Download = React.lazy(() => import('@/views/download'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/my',
    element: <My />
  },
  {
    path: '/store',
    element: <Store />
  },
  {
    path: '/musicia',
    element: <Musicia />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
