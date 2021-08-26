import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import routes from "./routes";
import { ContainerStyle } from "./style";

const Container = () => {
  const { Content } = Layout;
  return (
    <Content>
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
    </Content>
  );
};

export default Container;
