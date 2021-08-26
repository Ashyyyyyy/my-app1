import styled from "styled-components";

export const WelcomeNavStyle = styled.div`
  overflow: hidden;
  background-color: #a8071a;
  font-size: 20px;
  width: 100%;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    left: 33.3%;
  }

  li {
    float: left;
    display: inline;
    width: 11.1%;
  }

  a {
    float: middle;
    display: block;
    color: #ffa39e;
    width: 100%;
    text-align: center;
    padding: 13px 16px;
    border-bottom: 2px solid #a8071a;
    text-decoration: none;
  }
  /* 链接 - 修改颜色 */
  a:hover {
    background-color: #f5222d;
    color: #fff;
    border-bottom:2px solid #fff;
  }
`;
