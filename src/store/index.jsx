import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./features/jopSlice";
import articlesSlice from "./features/articalsSlice";
import coursesSlice from "./features/courseSlice";
import examsSlice from "./features/examsSlice";
import userSlice from "./features/userSlice";
export const store = configureStore({
  reducer: {
    jobs: jobsSlice,
    articles: articlesSlice,
    courses: coursesSlice,
    exams: examsSlice,
    user: userSlice,
    // exams: examsSlice,
  },
});
