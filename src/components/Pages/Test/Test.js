import React from "react";
import Style from "./Test.module.scss";

function Test() {
  return (
    <div>
      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <p>Paragraph</p>
      <div className={Style.ColorBlocks}>
        <div className={Style.ColorStyleOne}></div>
        <div className={Style.ColorStyleTwo}></div>
        <div className={Style.ColorStyleThree}></div>
        <div className={Style.ColorStyleFour}></div>
        <div className={Style.ColorStyleFive}></div>
      </div>
      <div className={Style.Shadow}>Shadow Box</div>
    </div>
  );
}

export default Test;
