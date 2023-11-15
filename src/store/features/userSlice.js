import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const fetchJobs = createAsyncThunk("jobs/fetchJops", async () => {
  try {
    const resposne = await Api.get("/jobs");
    return resposne.data;
  } catch (error) {
    const errorMassege = error.response.data.message;
    return errorMassege;
  }
});

const initialState = {
  jobs: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const jobsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default jobsSlice.reducer;
