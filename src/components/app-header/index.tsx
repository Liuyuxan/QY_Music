/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-21 21:26:41
 * @Description: 顶部导航栏组件
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { HeaderWrapper } from "./style";

interface Iprops {
  children?: ReactNode;
}

const APPHeader: FC<Iprops> = () => {
  return (
    <HeaderWrapper>
      <Link to="/discover">发现音乐</Link>
      <Link to="/my">我的音乐</Link>
      <Link to="/focus">关注</Link>
      <Link to="/store">商城</Link>
      <Link to="/musicia">音乐人</Link>
      <Link to="/download">下载客户端</Link>
    </HeaderWrapper>
  );
};

export default memo(APPHeader);
