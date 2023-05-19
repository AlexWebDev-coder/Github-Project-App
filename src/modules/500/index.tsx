import { FC } from "react";

import { Container, Image, Subtitle, Title } from "./style";

import Error500Img from "../../public/img/404.png";

const Error500: FC = (): JSX.Element => {
  return (
    <Container>
      <Image src={Error500Img} />
      <Title>Что-то пошло не так</Title>
      <Subtitle>Постараемся быстро починить</Subtitle>
    </Container>
  );
};

export default Error500;
