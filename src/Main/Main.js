import React from "react";
import Table from "../Table/Table";
import { TableContext } from "../Context/TableContext";

class Main extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <TableContext.Consumer>
        {({
          rows,
          cols,
          starting,
          ending,
          current,
          changeEndpoint,
          wallConstructorOn,
          wallConstructorOff,
          wallBuilding
        }) => {
          return (
            <div id={"main"} className={"main"}>
              <Table
                rows={rows}
                starting={starting}
                ending={ending}
                current={current}
                cols={cols}
                draggable={false}
                wallConstructorOn={wallConstructorOn}
                wallConstructorOff={wallConstructorOff}
                wallBuilding={wallBuilding}
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
