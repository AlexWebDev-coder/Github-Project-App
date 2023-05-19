import { FC } from "react";

import Home from "./modules/home";

import { Route, Routes } from "react-router-dom";

const Router: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/user-details/:id" element={<UserDetails />} /> */}
    </Routes>
  );
};

export default Router;
