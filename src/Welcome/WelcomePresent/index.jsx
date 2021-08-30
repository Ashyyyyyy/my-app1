import React, { Component } from "react";
import { TextShow, TitleStyle, WelcomePresentStyle } from "./style";

import { Popover, Image } from "antd";

import map from "/Web Dev/react/my-app1/src/assets/image/map.png";
import beijing from "/Web Dev/react/my-app1/src/assets/image/beijing.png";
import hubei from "/Web Dev/react/my-app1/src/assets/image/hubei.png";
import jiangxi from "/Web Dev/react/my-app1/src/assets/image/jiangxi.png";
import liaoning from "/Web Dev/react/my-app1/src/assets/image/liaoning.png";

import hb1 from "/Web Dev/react/my-app1/src/assets/image/hb1.png";
import ln1 from "/Web Dev/react/my-app1/src/assets/image/ln1.png";
import jx1 from "/Web Dev/react/my-app1/src/assets/image/jx1.png";

export default class WelcomePresent extends Component {
  render() {
    const titleln = <TitleStyle>辽宁 · 丹东</TitleStyle>;
    const contentln = (
      <div>
        <Image width={300} src={ln1} />
        <p>“一战风标惊列位，百年雪耻泰诸黎。”</p>
      </div>
    );

    const titlehb = <TitleStyle>湖北 · 孝感 · 大悟</TitleStyle>;
    const contenthb = (
      <div>
        <Image width={300} src={hb1} />
        <p>“星火燎原的红色华章”</p>
      </div>
    );

    const titlejx = <TitleStyle>江西 · 南昌</TitleStyle>;
    const contentjx = (
      <div>
        <Image width={200} src={jx1} />
        <p>
          “敌人只能砍下我们的头颅，
          <br />
          决不能动摇我们的信仰！”
        </p>
      </div>
    );

    const contentbj = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );

    return (
      <WelcomePresentStyle>
        <div className="chineseMap">
          <img className="map" src={map} />
          <Popover
            placement="right"
            content={contentln}
            title={titleln}
            trigger="hover"
          >
            <img className="liaoning" src={liaoning} />
          </Popover>
          <Popover
            placement="right"
            content={contenthb}
            title={titlehb}
            trigger="hover"
          >
            <img className="hubei" src={hubei} />
          </Popover>
          <Popover
            placement="right"
            content={contentjx}
            title={titlejx}
            trigger="hover"
          >
            <img className="jiangxi" src={jiangxi} />
          </Popover>
          <Popover
            placement="right"
            content={contentbj}
            title="Title"
            trigger="hover"
          >
            <img className="beijing" src={beijing} />
          </Popover>
        </div>

        <TextShow>
          <div className="title1">title1</div>
          <div className="content1">
            <span>content1</span>
          </div>
          <div className="title1">          title1</div>
          <div className="content1">
            <span>        content1</span>
          </div>
          <div className="title1">                      title1</div>
          <div className="content1">
            <span>                   content1</span>
          </div>
        </TextShow>
      </WelcomePresentStyle>
    );
  }
}
