import React from "react";
import { Router, BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewUser from "./pages/NewUser";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={NewUser} path="/newuser" />
    </BrowserRouter>
  );
};

export default Routes;
