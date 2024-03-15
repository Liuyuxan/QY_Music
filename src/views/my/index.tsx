/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-13 13:55:26
 * @Description: 我的音乐
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const My: FC<Iprops> = () => {
  return <div>我的音乐</div>
}

export default memo(My)
