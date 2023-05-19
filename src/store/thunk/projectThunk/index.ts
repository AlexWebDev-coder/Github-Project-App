import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axios";

interface IProps {
  page: number;
  per_page: string;
}

export const fetchProjectAsync = createAsyncThunk(
  "get/project",
  async ({ page, per_page }: IProps) => {
    try {
      const { data } = await api.get(
        `search/repositories?q=subject&per_page=${per_page}&page=${page}`
      );

      return data;
    } catch (error: any) {
      console.log(error);

      return error;
    }
  }
);
