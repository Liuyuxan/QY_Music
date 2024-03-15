/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-13 13:58:51
 * @Description: 发现音乐-推荐
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return <div>推荐</div>
}

export default memo(Recommend)
