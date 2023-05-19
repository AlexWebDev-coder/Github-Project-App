import { styled } from "@mui/material";

export const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "133px",
}));

export const Image = styled("img")(() => ({}));

export const Title = styled("h1")(() => ({
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "17px",
  lineHeight: "22px",
  textAlign: "center",
  color: "#050510",
  marginTop: "8px",
}));
export const Subtitle = styled("p")(() => ({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "20px",
  textAlign: "center",
  color: "#97979B",
  margin: "12px 0",
}));
export const ResetRequest = styled("p")(() => ({
  fontStyle: "normal",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "20px",
  textAlign: "center",
  color: "#6534FF",
}));
