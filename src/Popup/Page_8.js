import React from "react";

const Credits = () => {
  return (
    <div className={"page"}>
      <React.Fragment>
        <h1 className={"intro-header"}>Credit</h1>
      </React.Fragment>
      <div>
        <h2 className={"intro-description"}>
          Massive amount of credits the engineers below. Without them, I
          would've been able to build this.
        </h2>
        <h2 className={"intro-description"}>
          <a href={"https://github.com/qiao"}>Xueqiao (Joe) Xu</a>
        </h2>
        <h2 className={"intro-description"}>
          <a href={"https://github.com/clementmihailescu"}>
            Clément Mihailescu
          </a>
        </h2>
      </div>
    </div>
  );
};
export default Credits;
