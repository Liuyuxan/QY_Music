import { createSlice } from "@reduxjs/toolkit";

const discoverSlice = createSlice({
  name: 'discover',
  initialState: {
    num: 123,
    message :'333'
  },
  reducers: {}
})

export default discoverSlice.reducer