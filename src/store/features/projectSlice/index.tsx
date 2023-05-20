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
  comment: "",
  perPage: "10",
  page: 1,
  status: "idle",
};

const projectSlice = createSlice({
  name: "project",
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
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
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
        if (action.payload?.name) state.page = 1;
      })
      .addCase(fetchProjectAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSearch, setPerPage, setPage, setComment } =
  projectSlice.actions;
export default projectSlice.reducer;
