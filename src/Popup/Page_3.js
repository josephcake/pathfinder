import React from "react";

const Page_3 = ({ censored }) => {
  return (
    <div className={"page"}>
      {censored ? (
        <React.Fragment>
          <h1 className={"intro-header"}>Al Gore Rid Them</h1>
          <h2 className={"intro-description"}>
            Select a method to F*CK THAT DUCK (Al Gore would not approve of
            this).
          </h2>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1 className={"intro-header"}>Algorithm</h1>
          <h2 className={"intro-description"}>
            Select a method to find your Rubber Duck.
          </h2>
        </React.Fragment>
      )}
      <div>
        <img
          className={"page-image__nav"}
          src={require("../Images/algorithm.jpg")}
          alt={"algorithm"}
        />
      </div>
    </div>
  );
};
export default Page_3;
