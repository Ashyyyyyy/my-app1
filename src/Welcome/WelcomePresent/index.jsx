import React, { Component } from "react";
import { WelcomePresentStyle } from "./style";

import map from "/Web Dev/react/my-app1/src/assets/image/map.png";
import beijing from "/Web Dev/react/my-app1/src/assets/image/beijing.png";
import hubei from "/Web Dev/react/my-app1/src/assets/image/hubei.png";
import jiangxi from "/Web Dev/react/my-app1/src/assets/image/jiangxi.png";
import liaoning from "/Web Dev/react/my-app1/src/assets/image/liaoning.png";

export default class WelcomePresent extends Component {
  render() {
    return (
      <WelcomePresentStyle>
        <div className="chineseMap">
        <img className="map" src={map} />
        <img className="liaoning" src={liaoning} />
        <img className="hubei" src={hubei} />
        <img className="jiangxi" src={jiangxi} />
        <img className="beijing" src={beijing} />
        </div>
      </WelcomePresentStyle>
    );
  }
}
