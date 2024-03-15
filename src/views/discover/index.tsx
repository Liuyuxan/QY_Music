/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-13 13:58:01
 * @Description: 发现音乐
 */
import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/djradio">主播电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>

      {/* 占位符，用Suspense做包加载时的临时组件，避免二级路由重新渲染 */}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
