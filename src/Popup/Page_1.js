import React from "react";

const Page_1 = ({ censored }) => {
  return (
    <div className={"page"}>
      {censored ? (
        <React.Fragment>
          <h1 className={"intro-header"}>Welcome to F*ck The Duck!</h1>
          <h2 className={"intro-description"}>
            The goal of this game is to find the duck and F*CK - IT - UP!!
          </h2>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1 className={"intro-header"}>Welcome to Destroy The Duck!</h1>
          <h2 className={"intro-description"}>
            The goal of this game is to find the duck and unleash your wrath
            upon it!
          </h2>
        </React.Fragment>
      )}

      <div className={"page-image-container"}>
        <img
          className={"page-image"}
          src={require("../Images/duck.png")}
          alt={"Duck"}
        />
      </div>
    </div>
  );
};
export default Page_1;
