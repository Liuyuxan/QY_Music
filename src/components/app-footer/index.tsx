import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface Iprops {
  children?: ReactNode;
}

const AppFooter: FC<Iprops> = () => {
  return <h2>页脚搭建中</h2>;
};

export default memo(AppFooter);
