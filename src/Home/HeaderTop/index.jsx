import React, { Component } from "react";
import { Layout } from "antd";
import { headerTopStyle, HeaderTopImgStyle } from "./style";
//import { red } from '@ant-design/colors';

import HeaderTopImg from "/Web Dev/react/my-app1/src/assets/image/HeaderTop.png";

const HeaderTop = () => {
  const { Header } = Layout;
  return (
    // <Header>
      <div>
        <HeaderTopImgStyle src={HeaderTopImg} />
      </div>
    // </Header>
  );
};

export default HeaderTop;
