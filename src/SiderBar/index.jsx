import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from "./routes";
import { SiderBarStyle } from "./style";

const SiderBar = () => {
  return (
    <Router>
      <SiderBarStyle className={"toolBar"}>
        <p>toolBar</p>
        {routes.map((route, key) => {
          return (
            <Route key={key} path={route.path} component={route.component} />
          );
        })}
      </SiderBarStyle>
    </Router>
  );
};

export default SiderBar;
