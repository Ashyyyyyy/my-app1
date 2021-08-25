import React from "react";
import { Layout } from "antd";
import HeaderNav from "./HeaderNav/index";
import SiderBar from "./SiderBar/index";
import HeaderTop from "./HeaderTop/index";
import Container from "./Container/index";


const App = () => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout>
      <HeaderTop />
      <Header>
        <HeaderNav />
      </Header>
      <Layout>
        <Sider>
          <SiderBar />
        </Sider>
        <Content><Container/></Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default App;
