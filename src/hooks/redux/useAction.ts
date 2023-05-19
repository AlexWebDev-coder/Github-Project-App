import { fetchProjectAsync } from "./../../store/thunk/projectThunk/index";
import { useAppDispatch } from ".";
import { bindActionCreators } from "@reduxjs/toolkit";
import {
  setComment,
  setPage,
  setPerPage,
  setSearch,
} from "../../store/features/projectSlice";

const allReducers = {
  setPage: setPage,
  setSearch: setSearch,
  setPerPage: setPerPage,
  setComment: setComment,
  fetchProjectAsync: fetchProjectAsync,
};

export const useAction = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allReducers, dispatch);
};
