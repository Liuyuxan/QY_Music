/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-13 13:58:51
 * @Description: 发现音乐-排行榜
 */
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  return <div>排行榜</div>
}

export default memo(Ranking)
