import { FC } from "react";

import ProjectCard from "../../../ui/project-card";

import { Card, Container } from "./style";
import { useAppSelector } from "../../../hooks/redux";
import Loading from "../../../ui/loading";

const HomePage: FC = (): JSX.Element => {
  const project = useAppSelector((state) => state.project.project);
  const status = useAppSelector((state) => state.project.status);

  console.log(project);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <Container>
      {project?.items.map((item) => (
        <Card key={item.id}>
          <ProjectCard
            url={item.html_url}
            projectName={item.name}
            author={item.owner.login}
            views={item.watchers_count}
            star={item.stargazers_count}
            avatar={item.owner.avatar_url}
          />
        </Card>
      ))}
    </Container>
  );
};

export default HomePage;
