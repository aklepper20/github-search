import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./userDataSlice";
import monthsDataReducer from "./monthsDataSlice";
import dateSplitDataReducer from "./dateSplitDataSlice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    monthsData: monthsDataReducer,
    dateSplitData: dateSplitDataReducer,
  },
});
