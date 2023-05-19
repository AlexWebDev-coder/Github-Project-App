import { useMemo } from "react";
import { format } from "date-fns";

interface Props {
  dateString: string;
}

const useFormatDate = (props: Props) => {
  const { dateString } = props;

  const formattedDate = useMemo(() => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const day = format(date, "d");
    const month = format(date, "MMMM");
    return `${year} year ${day} ${month}`;
  }, [dateString]);

  return formattedDate;
};

export default useFormatDate;
