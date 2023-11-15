import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./features/jopSlice";
export const store = configureStore({
  reducer: {
    jobs: jobsSlice,
  },
});
