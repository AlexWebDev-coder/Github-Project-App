import { FC } from "react";

import { Container, Image, ResetRequest, Subtitle, Title } from "./style";

import Error500Img from "../../public/img/500.png";
import { useAction } from "../../hooks/redux/useAction";

const Error500: FC = (): JSX.Element => {
  const actions = useAction();

  const handleReset = (): void => {
    actions.fetchProjectAsync({ page: 1, value: "", per_page: 10 });
    actions.setSearch("");
  };

  return (
    <Container>
      <Image src={Error500Img} />
      <Title>Что-то пошло не так</Title>
      <Subtitle>Постараемся быстро починить</Subtitle>
      <ResetRequest onClick={handleReset}>Попробовать снова</ResetRequest>
    </Container>
  );
};

export default Error500;
