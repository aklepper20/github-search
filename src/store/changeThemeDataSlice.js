import { createSlice } from "@reduxjs/toolkit";

let theme = "";
const initialState = {
  value: {
    changeTheme: () => {
      if (theme === "") {
        setTheme("dark");
      } else {
        setTheme("");
      }
    },
  },
};

export const themeDataSlice = createSlice({
  name: "themeData",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTheme } = themeDataSlice.actions;

export default themeDataSlice.reducer;
