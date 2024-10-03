import React from "react";
import "./Clouds.css"; // 따로 만든 CSS 파일을 import

const Clouds = () => {
  return (
    <div id="background-wrap">
      <div className="x1">
        <div className="cloud"></div>
      </div>

      <div className="x2">
        <div className="cloud"></div>
      </div>

      <div className="x3">
        <div className="cloud"></div>
      </div>

      <div className="x4">
        <div className="cloud"></div>
      </div>

      <div className="x5">
        <div className="cloud"></div>
      </div>
    </div>
  );
};

export default Clouds;
