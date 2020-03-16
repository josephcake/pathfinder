import React from "react";

export const Legend = () => {
  return (
    <div className={"legend"}>
      <div className={"legend__section"}>
        <div className={"legend__item"}>
          <label className={"legend__item-label"}>Bullet :</label>
          <img
            className={"legend__item-icon bullet"}
            src={require("../Images/bullet.png")}
            alt={"Bullet"}
          />
        </div>
        <div className={"legend__item"}>
          <label className={"legend__item-label"}>Duck :</label>
          <img
            className={"legend__item-icon duck"}
            src={require("../Images/duck.png")}
            alt={"Duck"}
          />
        </div>
      </div>
      <div className={"legend__section"}>
        <div className={"legend__item"}>
          <label className={"legend__item-label"}>Path :</label>
          <td className={"legend__item-icon visited-legend"}></td>
        </div>
        <div className={"legend__item"}>
          <label className={"legend__item-label"}>Wall :</label>
          <td className={"legend__item-icon wall-legend"}></td>
        </div>
        <div className={"legend__item"}>
          <label className={"legend__item-label"}>Unvisited :</label>
          <td className={"legend__item-icon unvisited-legend"}></td>
        </div>
      </div>
      <div className={"legend__section"}>
        <div className={"legend__item"}>
          <label className={"legend__item-label"}>Goal :</label>
        </div>
        <div className={"legend__item"}>
          <label className={"legend__item-label"}>Destroy the Duck!!</label>
        </div>
      </div>
    </div>
  );
};
// export default Legend;
