/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-12 09:35:22
 * @Description: 关注
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Discover: FC<Iprops> = () => {
  return <div>关注</div>
}

export default memo(Discover)
