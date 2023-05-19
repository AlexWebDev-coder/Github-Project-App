import { FC } from "react";
import DefaultLayoutHeader from "../header";
import DefaultLayoutFooter from "../footer";

interface IProps {
  children: React.ReactNode;
}

const DefaultLayoutContainer: FC<IProps> = ({ children }) => {
  return (
    <>
      <DefaultLayoutHeader />
      {children}
      <DefaultLayoutFooter />
    </>
  );
};

export default DefaultLayoutContainer;
