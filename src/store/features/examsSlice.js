import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const fetchExams = createAsyncThunk("Exams/fetchExams", async () => {
  const resposne = await Api.get("/exams");
  return resposne.data;
});

const initialState = {
  exams: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const examsSlice = createSlice({
  name: "courses",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchExams.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchExams.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.Exams = action.payload;
      })
      .addCase(fetchExams.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const {get} = jobsSlice.actions;
export default examsSlice.reducer;
