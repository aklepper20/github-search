import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
};

export const monthsDataSlice = createSlice({
  name: "monthsData",
  initialState,
  reducers: {
    months: (state) => {
      state.value = state;
    },
  },
});

export const { months } = monthsDataSlice.actions;

export default monthsDataSlice.reducer;
