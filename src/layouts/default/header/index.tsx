import { FC, ChangeEvent, useEffect } from "react";

import FormTextField from "../../../ui/form/textfield";

import { Header } from "./style";

import { useAppSelector } from "../../../hooks/redux";
import { useAction } from "../../../hooks/redux/useAction";

import SearchIcon from "@mui/icons-material/Search";

const DefaultLayoutHeader: FC = (): JSX.Element => {
  const actions = useAction();
  const searchValue = useAppSelector((state) => state.project.search);
  const per_page = useAppSelector((state) => state.project.perPage);
  const page = useAppSelector((state) => state.project.page);

  useEffect(() => {
    actions.fetchProjectAsync({ page, per_page });
  }, [page, per_page]);

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    actions.setSearch(e.target.value);
  };

  const handleSearch = () => {};

  return (
    <Header>
      <FormTextField
        fullWidth
        variant="outlined"
        value={searchValue}
        onChange={handleChange}
        iconEnd={<SearchIcon onClick={handleSearch} />}
        placeholder="Начните вводить текст для поиска (не менее трех символов)"
      />
    </Header>
  );
};

export default DefaultLayoutHeader;
