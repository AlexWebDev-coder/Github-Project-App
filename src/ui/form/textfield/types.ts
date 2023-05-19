export interface IProps {
  position?: "start" | "end";
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  name?: string;
  control?: any;
  label?: string;
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  disabled?: boolean;
  fullWidth?: boolean;
  margin?: "normal" | "dense" | "none";
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
  value: string | number;
  onKeyPress?: (e: any) => void;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}
