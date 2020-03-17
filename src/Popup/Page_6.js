import React from "react";

const Page_6 = ({ censored }) => {
  return (
    <div className={"page"}>
      {censored ? (
        <React.Fragment>
          <h1 className={"intro-header"}>Wall</h1>
          <h2 className={"intro-description"}>
            In case you fail (duck is probably quarantine somewhere), clean up
            your mess and try again.
          </h2>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1 className={"intro-header"}>Wall</h1>
          <h2 className={"intro-description"}>
            Clear the board, wall, or path to start again.
          </h2>
        </React.Fragment>
      )}
      <div>
        <img
          className={"page-image__nav"}
          src={require("../Images/wall.jpg")}
          alt={"algorithm"}
        />
      </div>
    </div>
  );
};
export default Page_6;
