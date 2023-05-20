import { FC } from "react";

import ProjectCard from "../../../ui/project-card";

import { Card, Container } from "./style";
import { useAppSelector } from "../../../hooks/redux";
import Loading from "../../../ui/loading";
import NotFoundPage from "../../../page/404";
import Error500 from "../../../page/500";

const HomePage: FC = (): JSX.Element => {
  const project = useAppSelector((state) => state.project.project);
  const status = useAppSelector((state) => state.project.status);
  const total_count = useAppSelector(
    (state) => state.project.project.total_count
  );

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "failed") {
    return <Error500 />;
  }

  if (!total_count) {
    return <NotFoundPage />;
  }

  return (
    <Container>
      {project?.items.map((item) => (
        <Card key={item.id}>
          <ProjectCard
            id={item.id}
            url={item.html_url}
            projectName={item.name}
            language={item.language}
            author={item.owner.login}
            created={item.created_at}
            views={item.watchers_count}
            star={item.stargazers_count}
            lastUpdate={item.updated_at}
            avatar={item.owner.avatar_url}
            description={item.description}
          />
        </Card>
      ))}
    </Container>
  );
};

export default HomePage;
