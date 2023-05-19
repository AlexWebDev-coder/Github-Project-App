import { styled } from "@mui/material";

export const Container = styled("main")(() => ({
  width: "100%",
  padding: "34px 25px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
}));

export const Card = styled("div")(() => ({
  flex: "0 1 calc(25% - 1em)",
  gap: "10px",
  margin: "1rem .25em",
}));
