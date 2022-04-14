import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userDataSlice";
import monthsDataReducer from "./monthsDataSlice";
import dateSplitDataReducer from "./dateSplitDataSlice";
import themeDataReducer from "./changeThemeDataSlice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    monthsData: monthsDataReducer,
    dateSplitData: dateSplitDataReducer,
    themeData: themeDataReducer,
  },
});
