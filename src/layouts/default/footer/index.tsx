import {
  ChangeEvent,
  FC,
  lazy,
  memo,
  useCallback,
  useEffect,
  Suspense,
} from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../hooks/redux";
import { useAction } from "../../../hooks/redux/useAction";

import { valuesPerPage } from "../../../util/constants";

import { Footer, SelectPerPage } from "./style";
import { SelectChangeEvent } from "@mui/material";

import { IQueryParams } from "./types";

const FormSelect = lazy(() => import("../../../ui/form/select"));
const AppPagination = lazy(() => import("../../../ui/pagination"));

const DefaultLayoutFooter: FC = memo((): JSX.Element => {
  const actions = useAction();
  const perPage = useAppSelector((state) => state.project.perPage);
  const page = useAppSelector((state) => state.project.page);
  const status = useAppSelector((state) => state.project.status);
  const total_count = useAppSelector(
    (state) => state.project.project.total_count
  );

  const navigate = useNavigate();
  const location = useLocation();

  const handleQueryParams = (params: IQueryParams) => {
    const searchParams = new URLSearchParams(location.search);
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        searchParams.set(key, value.toString());
      } else {
        searchParams.delete(key);
      }
    });
    navigate({ search: searchParams.toString() });
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const perPageParam = searchParams.get("per_page");
    const pageParam = searchParams.get("page");
    if (perPageParam) {
      actions.setPerPage(parseInt(perPageParam));
    }
    if (pageParam) {
      actions.setPage(parseInt(pageParam));
    }
  }, [page, perPage]);

  const handlePerPageChange = useCallback(
    (event: SelectChangeEvent) => {
      actions.setPerPage(+event.target.value);
      handleQueryParams({ per_page: parseInt(event.target.value), page: page });
    },
    [actions, handleQueryParams, page]
  );

  const handlePageChange = useCallback(
    (_event: ChangeEvent<unknown>, value: number) => {
      actions.setPage(value);
      handleQueryParams({ per_page: perPage, page: value });
    },
    [actions, handleQueryParams, perPage]
  );

  const pages = total_count ? Math.ceil(total_count / +perPage) : 1;

  if (!total_count || status === "loading") {
    return <></>;
  }

  return (
    <Footer>
      <Suspense fallback={<div>Loading...</div>}>
        <SelectPerPage>
          <FormSelect
            variant="outlined"
            value={perPage}
            values={valuesPerPage}
            onChange={handlePerPageChange}
          />
        </SelectPerPage>
        <AppPagination
          count={pages}
          page={page}
          handleChange={handlePageChange}
        />
      </Suspense>
    </Footer>
  );
});

export default DefaultLayoutFooter;
