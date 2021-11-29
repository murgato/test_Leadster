import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../views/home";

const ComponentRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
};

export default ComponentRoutes;
