import React from "react";

const Page_2 = ({ censored }) => {
  return (
    <div className={"page"}>
      {censored ? (
        <React.Fragment>
          <h1 className={"intro-header"}>Why F*ck The Duck?</h1>
          <h2 className={"intro-description"}>
            Ever heard of{" "}
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href={"https://en.wikipedia.org/wiki/Rubber_duck_debugging"}
            >
              Rubber Duck Debugging?
            </a>{" "}
            I have the f*cking rights to pound down on my duck when I cannot
            find the bug!
          </h2>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h1 className={"intro-header"}>Why Destroy The Duck?</h1>
          <h2 className={"intro-description"}>
            Ever heard of{" "}
            <a
              target={"_blank"}
              rel="noopener noreferrer"
              href={"https://en.wikipedia.org/wiki/Rubber_duck_debugging"}
            >
              Rubber Duck Debugging?
            </a>{" "}
            Chances are you probably don't have a Rubber Duck on your desk. So
            you need to hunt one down first.
          </h2>
        </React.Fragment>
      )}
      <div>
        <img
          className={"page-image__duck-hunt"}
          src={require("../Images/duck-hunt.gif")}
          alt={"Duck"}
        />
      </div>
    </div>
  );
};
export default Page_2;
