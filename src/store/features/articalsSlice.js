import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../api/Api";

export const fetchArticles = createAsyncThunk(
  "articles/articlesJops",
  async () => {
    const resposne = await Api.get("/articles");
    return resposne.data;
  }
);

const initialState = {
  articles: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const {get} = jobsSlice.actions;
export default articlesSlice.reducer;
