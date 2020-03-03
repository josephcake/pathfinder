import React from "react";
import Table from "../Table/Table";
import { TableContext } from "../Context/TableContext";

class Main extends React.Component {
  // shouldComponentUpdate() {
  //   return false;
  // }
  render() {
    return (
      <TableContext.Consumer>
        {({ rows, cols, starting, ending, current }) => {
          return (
            <div className={"main"}>
              <Table
                rows={rows}
                starting={starting}
                ending={ending}
                current={current}
                cols={cols}
              />
              ;
            </div>
          );
        }}
      </TableContext.Consumer>
    );
  }
}

export default Main;
