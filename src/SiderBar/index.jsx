import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import routes from "./routes";
import { SiderBarStyle } from "./style";

const SiderBar = () => {
  const { Sider } = Layout;
  return (
    <Sider>
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
    </Sider>
  );
};

export default SiderBar;
