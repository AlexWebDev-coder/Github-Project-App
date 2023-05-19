import { FC, ReactNode } from "react";
import { IconButton, Tooltip } from "@mui/material";

interface IProps {
  children: ReactNode;
  title: string;
}

const ActionTooltip: FC<IProps> = (props): JSX.Element => {
  const { title, children } = props;
  return (
    <Tooltip title={title}>
      <IconButton>{children}</IconButton>
    </Tooltip>
  );
};

export default ActionTooltip;
