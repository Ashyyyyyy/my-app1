import React from "react";
import { Menu, Layout } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route } from "react-router-dom";

const { SubMenu } = Menu;
const { Header } = Layout;

class HeaderNav extends React.Component {
  // state = {
  //   current: "activity2",
  // };

  // handleClick = (e) => {
  //   console.log("click ", e);
  //   this.setState({ current: e.key });
  // };

  render() {
    // const { current } = this.state;
    return (
      <Header>
        <Menu
          // onClick={this.handleClick}
          // selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="activity1" icon={<CaretDownOutlined />}>
            <a href="/activity1">任务一</a>
          </Menu.Item>
          <Menu.Item key="activity2" icon={<CaretDownOutlined />}>
            <a href="/activity2">任务二</a>
          </Menu.Item>
          <Menu.Item key="activity3" icon={<CaretDownOutlined />}>
            <a href="/activity3">任务三</a>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default HeaderNav;
