import { FC } from "react";
import { Pagination } from "@mui/material";

interface IProps {
  page: number;
  count: number;
  handleChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const AppPagination: FC<IProps> = (props): JSX.Element => {
  const { page, count, handleChange } = props;

  return (
    <Pagination
      page={page}
      count={count}
      color="primary"
      onChange={handleChange}
    />
  );
};

export default AppPagination;
