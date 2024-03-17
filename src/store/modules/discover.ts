import { createSlice } from "@reduxjs/toolkit";

const discoverSlice = createSlice({
  name: 'discover',
  initialState: {
    num: 123,
    message :'333'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})

export const { 
  changeMessageAction
} = discoverSlice.actions

export default discoverSlice.reducer