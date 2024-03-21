/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-13 14:31:48
 * @Description: 请填写说明
 */
/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-13 13:58:51
 * @Description: 发现音乐-推荐
 */
import http from '@/service'
import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

interface BannerType {
  imageUrl: string
  targetId: number
  adid: any
  targetType: number
  titleColor: string
  typeTitle: string
  url: any
  exclusive: boolean
  monitorImpress: any
  monitorClick: any
  monitorType: any
  monitorImpressList: any
  monitorClickList: any
  monitorBlackList: any
  extMonitor: any
  extMonitorInfo: any
  adSource: any
  adLocation: any
  adDispatchJson: any
  encodeId: string
  program: any
  event: any
  video: any
  song: any
  scm: string
  bannerBizType: string
}

const Recommend: FC<IProps> = () => {
  const [banner, setBanner] = useState<BannerType[]>([])

  useEffect(() => {
    http
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanner(res.banners)
      })
  }, [])

  return (
    <div>
      {banner.map((item, index) => {
        return <div key={index}>{item.imageUrl}</div>
      })}
    </div>
  )
}

export default memo(Recommend)
