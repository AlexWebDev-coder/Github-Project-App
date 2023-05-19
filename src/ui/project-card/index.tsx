import { FC, useState } from "react";
import { Avatar } from "@mui/material";
import {
  Card,
  IconItems,
  ProjectAddComment,
  ProjectAuthor,
  ProjectTitle,
  ProjectViewAndStar,
} from "./styles";

import StarIcon from "@mui/icons-material/Star";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";

import FormTextField from "../form/textfield";
import { Link } from "react-router-dom";

interface IProps {
  url: string;
  star: number;
  views: number;
  author: string;
  avatar: string;
  projectName: string;
}

const ProjectCard: FC<IProps> = (props): JSX.Element => {
  const { url, star, views, author, avatar, projectName } = props;
  const [value, setValue] = useState("");

  return (
    <Card>
      <ProjectTitle to={url} target="_blank">
        {projectName}
      </ProjectTitle>
      <ProjectAuthor>
        <Avatar alt="Author" src={avatar} sx={{ width: 56, height: 56 }} />
        <Link target="_blank" to={`https://github.com/${author}`}>
          {author}
        </Link>
      </ProjectAuthor>
      <ProjectViewAndStar>
        <IconItems>
          <StarIcon />
          {star}
        </IconItems>
        <IconItems>
          <RemoveRedEyeIcon />
          {views}
        </IconItems>
      </ProjectViewAndStar>
      <ProjectAddComment>
        <FormTextField
          fullWidth
          value={value}
          variant="outlined"
          iconEnd={<CreateIcon />}
          onChange={(e) => setValue(e.target.value)}
        />
      </ProjectAddComment>
    </Card>
  );
};

export default ProjectCard;
