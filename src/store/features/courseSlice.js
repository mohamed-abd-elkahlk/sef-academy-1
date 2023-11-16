import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const resposne = await Api.get("/courses");
    return resposne.data;
  }
);

const initialState = {
  courses: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const {get} = jobsSlice.actions;
export default coursesSlice.reducer;
