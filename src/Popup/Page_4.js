import React from "react";

const Page_4 = ({ censored }) => {
  return (
    <div className={"page"}>
      {censored ? (
        <React.Fragment>
          <h1 className={"intro-header"}>A-maze-ing</h1>
          <h2 className={"intro-description"}>
            Select a maze to hide the duck, but why? Trying to slaughter this
            F*CKING DUCK!
          </h2>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1 className={"intro-header"}>Maze</h1>
          <h2 className={"intro-description"}>
            You can select a maze to block off some paths. Where is the Duck
            hiding?
          </h2>
        </React.Fragment>
      )}
      <div>
        <img
          className={"page-image__nav"}
          src={require("../Images/maze.jpg")}
          alt={"algorithm"}
        />
      </div>
    </div>
  );
};
export default Page_4;
