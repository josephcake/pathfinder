import React from "react";
import { TableContext } from "../Context/TableContext";

class Nav extends React.Component {
  render() {
    return (
      <TableContext.Consumer>
        {({
          checkRunningFunc,
          knownEndPointSearch,
          breadthFirstSearch,
          depthFirstSearch,
          refreshBoard,
          testingReact
        }) => {
          return (
            <div>
              <div>
                <button onClick={() => checkRunningFunc(refreshBoard)}>
                  REFRESH The Page
                </button>
              </div>
              <button onClick={() => checkRunningFunc(knownEndPointSearch)}>
                Known Distance
              </button>
              <button onClick={() => checkRunningFunc(breadthFirstSearch)}>
                Breadth First Search
              </button>
              <button onClick={() => checkRunningFunc(depthFirstSearch)}>
                Depth First Search
              </button>
              {/* <div>
                <button onClick={() => checkRunningFunc(testingReact)}>
                  TESTING REACT VS DOM
                </button>
              </div> */}
            </div>
          );
        }}
      </TableContext.Consumer>
    );
  }
}

export default Nav;
