import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./types";
import { fetchProjectAsync } from "../../thunk/projectThunk";

const initialState: IInitialState = {
  project: {
    items: [],
    total_count: null,
    incomplete_results: false,
  },
  search: "",
  perPage: "10",
  page: 1,
  status: "idle",
};

const projectSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPerPage: (state, action: PayloadAction<string>) => {
      state.perPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjectAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.project = action.payload;
      })
      .addCase(fetchProjectAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSearch, setPerPage, setPage } = projectSlice.actions;
export default projectSlice.reducer;
