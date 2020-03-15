import React from "react";

export const Legend = () => {
  return (
    <div className={"legend"}>
      <div className={"legend__item"}>
        <label className={"legend__item-label"}>Duck :</label>
        <img
          className={"legend__item-icon"}
          src={require("../Images/duck.png")}
          alt={"Duck"}
        />
      </div>
      <div className={"legend__item"}>
        <label className={"legend__item-label"}>Bullet :</label>
        <img
          className={"legend__item-icon"}
          src={require("../Images/bullet.png")}
          alt={"Bullet"}
        />
      </div>
    </div>
  );
};
// export default Legend;
