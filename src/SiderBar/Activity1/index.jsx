import React from "react";
import { Anchor } from "antd";

const Activity1 = () => {
  const { Link } = Anchor;

  return (
    // <p>activity1</p>
    <Anchor>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#API" title="API">
        <Link href="#Anchor-Props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </Anchor>
  );
};

export default Activity1;
