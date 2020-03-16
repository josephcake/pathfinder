import React, { useState } from "react";
import Page_1 from "./Page_1";

const Intro = () => {
  const [count, setCount] = useState(0);
  const [censored, setCensorship] = useState(false);
  const pages = [<Page_1 censored={censored} />];
  const currentPage = pages[count];
  return (
    <div className={"intro"}>
      <div className={"intro-censorship-switch"}>
        <h5>Censorship</h5>
        <label className={"switch"}>
          <input
            type={"checkbox"}
            checked={censored}
            onChange={() => setCensorship(!censored)}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className={"intro-current"}>
        {/* <p>You clicked {count} times</p> */}
        {currentPage}

        <div className={"intro-button-container"}>
          <div>
            <button className={"intro-button"}>Close</button>
          </div>
          <div>
            <button
              className={"intro-button"}
              onClick={() => setCount(count - 1)}
            >
              Previous
            </button>
            <button
              className={"intro-button"}
              onClick={() => setCount(count + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
