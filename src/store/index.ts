/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-14 09:07:57
 * @Description: 状态管理
 */
import { configureStore } from '@reduxjs/toolkit'
import discoverReducer from './modules/discover'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
const store = configureStore({
  reducer: {
    discover: discoverReducer
  }
})

type GetStateFnType = typeof store.getState
type IrootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// useAppSelector的hook，用这个来获取store存储的数据
export const useAppSelector: TypedUseSelectorHook<IrootState> = useSelector
// useAppDispatch的hook,用这个来派发action
export const useAppDispatch: () => DispatchType = useDispatch

// 导出状态管理库
export default store
