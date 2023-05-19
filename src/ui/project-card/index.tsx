import { ChangeEvent, FC, useState } from "react";
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
import ClearIcon from "@mui/icons-material/Clear";

import FormTextField from "../form/textfield";
import { Link } from "react-router-dom";
import ActionTooltip from "../action-tooltip";
import ViewsDetailProject from "../modal/views-project";
import { IProps } from "./types";

const ProjectCard: FC<IProps> = (props): JSX.Element => {
  const {
    id,
    url,
    star,
    views,
    author,
    avatar,
    projectName,
    description,
    language,
    created,
    lastUpdate,
  } = props;
  const [value, setValue] = useState<string>("");

  const handleAddComment = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  return (
    <Card>
      <ProjectTitle>
        <Link to={url} target="_blank" style={{ color: "#000" }}>
          {projectName}
        </Link>
        <div>
          <ViewsDetailProject
            id={id}
            url={url}
            star={star}
            views={views}
            avatar={avatar}
            author={author}
            projectName={projectName}
            description={description}
            created={created}
            lastUpdate={lastUpdate}
            language={language}
          />
          <ActionTooltip title="Delete">
            <ClearIcon color="error" />
          </ActionTooltip>
        </div>
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
          disabled
          value={value}
          variant="outlined"
          iconEnd={<CreateIcon />}
          onChange={handleAddComment}
        />
      </ProjectAddComment>
    </Card>
  );
};

export default ProjectCard;
