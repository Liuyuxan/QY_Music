/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-13 14:03:52
 * @Description: 商城
 */

import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Store: FC<IProps> = () => {
  return <div>商城</div>
}

export default memo(Store)
