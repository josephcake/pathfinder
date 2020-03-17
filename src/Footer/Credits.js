import React from "react";

const Credits = ({ setCredit }) => {
  return (
    <div className={"intro"}>
      <div className={"intro-current"}>
        <div className={"page"}>
          <h1 className={"intro-header"}>Credit</h1>
          <div>
            <h2 className={"intro-description"}>
              Massive amount of credits the engineers below. Without them, I
              wouldn't have been able to build this.
            </h2>
            <h2 className={"intro-description"}>
              <a
                rel="noopener noreferrer"
                target={"_blank"}
                href={"https://github.com/qiao"}
              >
                Xueqiao (Joe) Xu
              </a>
            </h2>
            <h2 className={"intro-description"}>
              <a
                rel="noopener noreferrer"
                target={"_blank"}
                href={"https://github.com/clementmihailescu"}
              >
                Clément Mihailescu
              </a>
            </h2>
          </div>
        </div>
        <div className={"intro-button-container"}>
          <div>
            <button className={"intro-button"} onClick={() => setCredit(false)}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Credits;
