import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    created_at: "2011-01-25T18:44:36Z",
  },
};

export const dateSplitDataSlice = createSlice({
  name: "dateSplitData",
  initialState,
  reducers: {
    setDateSplitData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDateSplitData } = dateSplitDataSlice.actions;

export default dateSplitDataSlice.reducer;
