import { FC } from "react";

import { Container, Image, Subtitle, Title } from "./style";

import NotFoundImg from "../../public/img/not-found.png";

const NotFound: FC = (): JSX.Element => {
  return (
    <Container>
      <Image src={NotFoundImg} />
      <Title>Мы ничего не нашли</Title>
      <Subtitle>Попробуйте скорректировать запрос</Subtitle>
    </Container>
  );
};

export default NotFound;
