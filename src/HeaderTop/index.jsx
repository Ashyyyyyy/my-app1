import React from "react";
import { Layout } from "antd";
import { headerTopStyle } from "./style";
//import { red } from '@ant-design/colors';

const HeaderTop = () => {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Header >
      <p>This is HeaderTop!</p>
    </Header>
  );
};

export default HeaderTop;
