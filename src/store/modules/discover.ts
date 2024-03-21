/*
 * @Author: 秋意微醺时
 * @Date: 2024-03-18 14:01:47
 * @Description: 请填写说明
 */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  num: number;
  message: string;
  direction: "left" | "right" | "up" | "down"
  names: string[]
}

const initialState: IState = {
  num: 123,
  message: "333",
  direction: 'left',
  names: ['yx', 'xiaoming']
};

const discoverSlice = createSlice({
  name: "discover",
  initialState,
  reducers: {
    // payloadAction<T>可以为payload指定类型，这是@reduxjs/toolkit这个工具提供的
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload;
    },
  },
});

export const { changeMessageAction } = discoverSlice.actions;

export default discoverSlice.reducer;
