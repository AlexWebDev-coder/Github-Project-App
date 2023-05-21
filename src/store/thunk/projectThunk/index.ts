import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/axios";
import { toast } from "react-toastify";

interface IProps {
  value: string;
  page: number;
  per_page: number;
}

export const fetchProjectAsync = createAsyncThunk(
  "get/project",
  async ({ page, value, per_page }: IProps) => {
    try {
      const { data } = await api.get(
        `search/repositories?q=${
          value || "subject"
        }&per_page=${per_page}&page=${page}`
      );

      return data;
    } catch (error: any) {
      const err = error?.response?.data?.message;

      if (err === "Only the first 1000 search results are available") {
        toast.error("Доступны только первые 1000 результатов поиска");
      }
      return error;
    }
  }
);
