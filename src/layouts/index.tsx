import DefaultLayout from "./default";

interface IProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<IProps> = ({ children }) => {
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default AppLayout;
