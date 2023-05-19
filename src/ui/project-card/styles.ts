import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const Card = styled("div")(() => ({
  background: "#FFFFFF",
  width: "440px",
  border: "1px solid #A2A3A4",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  padding: "7px 16px",
}));

export const ProjectTitle = styled(Link)(() => ({
  color: "#000",
}));

export const ProjectAuthor = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "18px",
}));

export const ProjectViewAndStar = styled("div")(() => ({
  display: "flex",
}));

export const IconItems = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  margin: "10px",
}));

export const ProjectAddComment = styled("div")(() => ({}));
