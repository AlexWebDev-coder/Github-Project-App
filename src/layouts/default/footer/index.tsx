import { useAppSelector } from "../../../hooks/redux";
import { useAction } from "../../../hooks/redux/useAction";

import FormSelect from "../../../ui/form/select";
import AppPagination from "../../../ui/pagination";

import { valuesPerPage } from "../../../util/constants";

import { Footer, SelectPerPage } from "./style";

const DefaultLayoutFooter = () => {
  const actions = useAction();
  const perPage = useAppSelector((state) => state.project.perPage);
  const page = useAppSelector((state) => state.project.page);
  const total_count = useAppSelector(
    (state) => state.project.project.total_count
  );

  const pages = total_count ? Math.ceil(total_count / +perPage) : 1;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    actions.setPage(value);
  };

  return (
    <Footer>
      <SelectPerPage>
        <FormSelect
          variant="outlined"
          value={perPage}
          values={valuesPerPage}
          onChange={(e) => actions.setPerPage(e.target.value)}
        />
      </SelectPerPage>
      <AppPagination count={pages} page={page} handleChange={handleChange} />
    </Footer>
  );
};

export default DefaultLayoutFooter;
