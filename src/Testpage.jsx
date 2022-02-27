import React, { useState } from "react";
import "./index1.css";
import Timer from "./Timer";
import Header from "./Header";
import Questions from "./Questions";
import Right from "./Right";

const Testpage = () => {
  return (
    <>
      <div className="header">
        <img src="images/logo.png" className="logo" />
        <Timer />
      </div>
      <div className="quest">
        <div className="innerquest">
          <Questions />
        </div>
      </div>
      <div className="right">
        <div className="innerright">
          <Right />
        </div>
      </div>
    </>
  );
};

export default Testpage;
