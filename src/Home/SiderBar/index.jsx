import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Affix } from "antd";
import routes from "./routes";
import { SiderBarStyle } from "./style";

import Activity1 from "./Activity1/index";
import Activity2 from "./Activity2/index";
import Activity3 from "./Activity3/index";

const SiderBar = () => {
  const { Sider } = Layout;
  return (
    <Sider>
      <Router>
        <SiderBarStyle className={"toolBar"}>
          <Affix offsetTop={65}>
            <p>toolBar</p>
            {routes.map((route, key) => {
              return (
                <Route
                  key={key}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
          </Affix>
        </SiderBarStyle>
      </Router>
    </Sider>
  );
};

export default SiderBar;
