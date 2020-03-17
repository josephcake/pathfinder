import React from "react";

const Page_7 = ({ censored }) => {
  return (
    <div className={"page"}>
      {censored ? (
        <React.Fragment>
          <h1 className={"intro-header"}>Bonus</h1>
          <h2 className={"intro-description"}>Build your own f*cking wall.</h2>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1 className={"intro-header"}>Bonus</h1>
          <h2 className={"intro-description"}>You can build your own wall.</h2>
        </React.Fragment>
      )}
      <div>
        <img
          className={"page-image__nav-bonus"}
          src={require("../Images/self-build.gif")}
          alt={"algorithm"}
        />
      </div>
    </div>
  );
};
export default Page_7;
