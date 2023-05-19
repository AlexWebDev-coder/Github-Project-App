import { FC, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import StarIcon from "@mui/icons-material/Star";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ClearIcon from "@mui/icons-material/Clear";

import ActionTooltip from "../../action-tooltip";
import { Avatar, DialogContentText } from "@mui/material";
import {
  DialogContainer,
  DialogContext,
  DialogHeader,
  ProjectViewsAndStar,
} from "./style";
import useFormatDate from "../../../hooks/useFormatDate";
import { IProps } from "../../project-card/types";
import { Link } from "react-router-dom";

const ViewsDetailProject: FC<IProps> = (props): JSX.Element => {
  const {
    url,
    avatar,
    author,
    star,
    views,
    description,
    language,
    created,
    lastUpdate,
  } = props;

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((val) => !val);
  };

  return (
    <>
      <ActionTooltip title="Views detail">
        <RemoveRedEyeIcon color="info" onClick={handleClick} />
      </ActionTooltip>
      <Dialog open={open}>
        <DialogContainer>
          <DialogHeader>
            <DialogTitle>
              <div>
                <Avatar
                  alt="Author"
                  src={avatar}
                  sx={{ width: 56, height: 56 }}
                />
                {author}
              </div>
            </DialogTitle>
            <ClearIcon
              sx={{ cursor: "pointer" }}
              color="error"
              onClick={handleClick}
            />
          </DialogHeader>

          <DialogContent>
            <DialogContext>
              <ProjectViewsAndStar>
                <StarIcon /> {star}
                <RemoveRedEyeIcon /> {views}
              </ProjectViewsAndStar>
            </DialogContext>
          </DialogContent>
          <DialogContent>
            <DialogDetail
              value="Created"
              descvalue={useFormatDate({ dateString: created })}
            />
            <DialogDetail
              value="Last update"
              descvalue={useFormatDate({ dateString: lastUpdate })}
            />
            <DialogDetail value="Language" descvalue={language} />
            <DialogDetail value="Description" descvalue={description} />
            <DialogDetail
              url
              value="User profile"
              descvalue={`https://github.com/${author}`}
            />
            <DialogDetail url value="Repository" descvalue={url} />
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions> */}
        </DialogContainer>
      </Dialog>
    </>
  );
};

export default ViewsDetailProject;

interface IDetailProps {
  url?: boolean;
  value: string;
  descvalue: string;
}

const DialogDetail = (props: IDetailProps): JSX.Element => {
  const { url, value, descvalue } = props;
  return (
    <>
      {descvalue && (
        <DialogContentText>
          {value}:
          {url ? (
            <Link to={descvalue} target="_blank">
              {descvalue}
            </Link>
          ) : (
            descvalue
          )}
        </DialogContentText>
      )}
    </>
  );
};
