import React from "react";
// import { TableContext } from "../Context/TableContext";

class Td extends React.Component {
  shouldComponentUpdate(nextProp, nextState) {
    const { r, c, current } = this.props;
    const cell = `${r}-${c}`;
    if (cell !== current) {
      return false;
    }
    return true;
  }

  render() {
    const { r, c, starting, ending, current } = this.props;
    const cell = `${r}-${c}`;
    let classN =
      cell === ending
        ? "ending"
        : cell === starting
        ? "starting"
        : cell === current
        ? "visited"
        : "unvisited";
    return (
      <td className={classN} data={cell}>
        0
      </td>
    );
  }
}
export default Td;
