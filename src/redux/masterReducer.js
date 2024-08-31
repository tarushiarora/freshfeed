import { createSlice } from "@reduxjs/toolkit";

export const masterSlice = createSlice({
  name: "master",
  initialState: {
    newsData: [],
  },
  reducers: {
    setNewsData: (state, action) => {
      state.newsData = action.payload;
    },
  },
});
// The setNewsData action can be dispatched with new news data (e.g., fetched from an API), and the 
//corresponding reducer will update the newsData state.
export const { setNewsData } = masterSlice.actions;

export default masterSlice.reducer;
