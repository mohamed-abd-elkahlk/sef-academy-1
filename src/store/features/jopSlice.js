import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const fetchJobs = createAsyncThunk("jobs/fetchJops", async () => {
  const resposne = await Api.get("/jobs");
  return resposne.data;
});

const initialState = {
  jobs: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action);
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const {get} = jobsSlice.actions;
export default jobsSlice.reducer;
