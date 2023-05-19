import { DialogContentText, styled } from "@mui/material";

export const DialogHeader = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
}));
export const DialogContainer = styled("div")(() => ({
  padding: "16px",
}));
export const DialogContext = styled(DialogContentText)(() => ({
  color: "#000",
}));
export const ProjectViewsAndStar = styled("div")(() => ({
  display: "flex",
  gap: "10px",
}));
