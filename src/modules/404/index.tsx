import { FC } from "react";

import { Container, Image, ResetRequest, Subtitle, Title } from "./style";

import NotFoundImg from "../../public/img/not-found.png";
import { useAction } from "../../hooks/redux/useAction";

const NotFound: FC = (): JSX.Element => {
  const actions = useAction();

  const handleReset = (): void => {
    actions.fetchProjectAsync({ page: 1, value: "", per_page: 10 });
    actions.setSearch("");
  };

  return (
    <Container>
      <Image src={NotFoundImg} />
      <Title>Мы ничего не нашли</Title>
      <Subtitle>Попробуйте скорректировать запрос</Subtitle>
      <ResetRequest onClick={handleReset}>Попробовать снова</ResetRequest>
    </Container>
  );
};

export default NotFound;
