import { SelectChangeEvent } from "@mui/material";

export interface IProps {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  values: string[];
  inputLabel?: string;
  minWidth?: number;
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  disabled?: boolean;
}
