import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Djredio: FC<Iprops> = () => {
  return (
    <div>Djredio</div>
  )
}

export default memo(Djredio)