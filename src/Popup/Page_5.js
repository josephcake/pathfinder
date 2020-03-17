import React from "react";

const Page_5 = ({ censored }) => {
  return (
    <div className={"page"}>
      {censored ? (
        <React.Fragment>
          <h1 className={"intro-header"}>Shoot</h1>
          <h2 className={"intro-description"}>
            Pull that F*CKING trigger. Make sure you selected your weapon.
          </h2>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1 className={"intro-header"}>Go</h1>
          <h2 className={"intro-description"}>
            Start the Search. Make sure you selected a search method.
          </h2>
        </React.Fragment>
      )}
      <div>
        <img
          className={"page-image__nav"}
          src={require("../Images/go.jpg")}
          alt={"algorithm"}
        />
      </div>
    </div>
  );
};
export default Page_5;
