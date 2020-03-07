import React from "react";
import Tr from "./Tr";

class Table extends React.Component {
  shouldComponentUpdate(nextProp, nextState) {
    if (this.props.ending !== nextProp.ending) {
      return true;
    }
    return false;
  }
  render() {
    const rowsData = [];
    const { rows, cols, current, starting, ending } = this.props;

    for (let i = 0; i < rows; i++) {
      rowsData.push(
        <Tr
          r={i}
          key={i}
          cols={cols}
          current={current}
          starting={starting}
          ending={ending}
        />
      );
    }

    return rowsData;
  }
}
export default Table;
