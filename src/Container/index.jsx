import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from "./routes";
import { ContainerStyle } from "./style";

const Container = () => {
  return (
    <Router>
      <ContainerStyle className={"container"}>
        <p>toolBar</p>
        {routes.map((route, key) => {
          return (
            <Route key={key} path={route.path} component={route.component} />
          );
        })}
      </ContainerStyle>
    </Router>
  );
};

export default Container;
