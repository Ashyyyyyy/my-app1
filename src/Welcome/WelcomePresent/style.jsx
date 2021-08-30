import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const myln = keyframes`
    0% { opacity: 0;filter: drop-shadow(40px 40px 5px black);}
    1% { opacity: 0;filter: drop-shadow(40px 40px 5px black);}
    20% { opacity:1; filter: drop-shadow(0px 0px 0px black);}
    100% {filter: drop-shadow(0px 0px 0px black);}`;

const myhb = keyframes`
    0% { opacity: 0;filter: drop-shadow(40px 40px 5px black);}
    10% { opacity: 0;filter: drop-shadow(40px 40px 5px black);}
    40% {filter: drop-shadow(0px 0px 0px black);}
    100% {filter: drop-shadow(0px 0px 0px black);}`;

const mybj = keyframes`
    0% { opacity: 0;filter: drop-shadow(40px 40px 5px black);}
    10% { opacity: 0;filter: drop-shadow(40px 40px 5px black);}
    40% { filter: drop-shadow(0px 0px 0px black);}
    100% {filter: drop-shadow(0px 0px 0px black);}`;

const myjx = keyframes`
    0% { opacity: 0;filter: drop-shadow(40px 40px 5px black);}
    20% { opacity: 0;filter: drop-shadow(40px 40px 5px black);}
    60% { filter: drop-shadow(0px 0px 0px black);}
    100% {filter: drop-shadow(0px 0px 0px black);}`;

const myHover = keyframes`
    0% { filter: drop-shadow(0px 0px 0px black);}
    100% {filter: drop-shadow(20px 20px 5px black);}`;

export const WelcomePresentStyle = styled.div`
  ${
    "" /* width: 100px;
  height: 100px;
  background-color: orange;
  transition: all 2s;

  :hover{ border-radius:100%}; */
  }
  
  display: block;
  position: relative;
  width: 100%
  ${"" /* height: 1000px; */}
  background-color: #a8071a;
  color: #fff;

  ${"" /* transition: filter 2s ease; */}

  .chineseMap {
    display: inline;
    ${
      "" /* width:100%;
    height: auto; */
    }
  }

  img {
    position: absolute;
  }

  img.map {
    width:800px;
    height:auto;
    z-index: 1;
    animation: 1s ${fadeIn} ease-out;
  }

  img.liaoning {
    width: 58.3333px;
    height:auto;
    left: 485.8333px;
    top: 137.5px;
    z-index:2;
    animation: 2s ${myln} ease-out;
  }
  img.hubei {
    width: 77.0833px;
    height:auto;
    left: 395.8333px;
    top: 262.9167px;
    z-index:2;
    animation: 2s ${myhb} ease-out;
  }
  img.beijing {
    width: 16.6667px;
    height:auto;
    left: 459.1667px;
    top: 171.6667px;
    z-index:2;
    animation: 2s ${mybj} ease-out;
  }
  img.jiangxi {
    width: 47.0833px;
    height:auto;
    left: 450px;
    top: 297.5px;
    z-index:2;
    animation: 2s ${myjx} ease-out;
  }

  .beijing:hover{ animation: 1s ${myHover} ease-out;animation-fill-mode:both}; 
  .jiangxi:hover{ animation: 1s ${myHover} ease-out;animation-fill-mode:both}; 
  .hubei:hover{ animation: 1s ${myHover} ease-out;animation-fill-mode:both}; 
  .liaoning:hover{ animation: 1s ${myHover} ease-out;animation-fill-mode:both}; 
`;

export const TitleStyle = styled.span`
  font-family: "STXihei";
  font-whight: bold;
  font-size: 18px;
`;

const showup = keyframes`
    0% {opacity:0;}
    20% {opacity:1;}
    100% {opacity:1;}
`;

const slidein = keyframes`
    0% {opacity:0; margin-right:-800px; }
    50% {opacity:0; margin-right:-800px; }
    80% { margin-right:0px; }
    100% { margin-right:0px; }
`;

const reveal = keyframes`
    0% {opacity:0;width:0px;}
    25% {opacity:1;width:0px;}
    80% {width:100%;}
    100% {width:100%;}
`;

export const TextShow = styled.div`
  display: inline-block;
  float: right;
  overflow: hidden;
  width: 50%;
  text-align: center;
  ${'' /* height: 30%; */}
  ${'' /* background-color: #fff; */}
  
  display: inline-block;
  white-space: pre;


  .title1 {
    font-size: 28px;
    color: #ffd666;
    filter: drop-shadow(10px 10px 3px black);
    animation: 4s ${ showup } linear;animation-fill-mode:both;
  }

  .content1 {

    width:0px;
    animation: 4s ${ reveal } linear;animation-fill-mode:both;
  }

  .content1 span {
    text-align: right;
    ${'' /* margin-right:-800px; */}
    animation: 4s ${ slidein } linear;animation-fill-mode:both;
  }
`;