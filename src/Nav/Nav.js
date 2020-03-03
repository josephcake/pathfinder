import React from "react";
import { TableContext } from "../Context/TableContext";

class Nav extends React.Component {
  render() {
    return (
      <TableContext.Consumer>
        {({ checkRunningFunc, knownEndPointSearch, unknownEndPointSearch }) => {
          return (
            <div>
              <button onClick={() => checkRunningFunc(knownEndPointSearch)}>
                Known Distance
              </button>
              <button onClick={() => checkRunningFunc(unknownEndPointSearch)}>
                Uknown Distance
              </button>
            </div>
          );
        }}
      </TableContext.Consumer>
    );
  }
}

export default Nav;
