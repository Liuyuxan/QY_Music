import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Musicia: FC<Iprops> = () => {
  return (
    <div>Musicia</div>
  )
}

export default memo(Musicia)