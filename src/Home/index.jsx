import { Layout } from "antd";

import HeaderNav from "./HeaderNav/index";
import SiderBar from "./SiderBar/index";
import HeaderTop from "./HeaderTop/index";
import Container from "./Container/index";

const Home = () => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout>
      <HeaderTop />
      <HeaderNav />
      <Layout>
        <SiderBar />
        <Container />
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Home;
