import React from "react";
// import { TableContext } from "../Context/TableContext";

class Td extends React.Component {
  // shouldComponentUpdate(nextProp, nextState) {
  // const { r, c, current, ending } = this.props;

  // const cell = `${r}-${c}`;
  // debugger;
  // if (nextProp.current !== cell) {
  // return false;
  // }
  // return true;
  // }

  render() {
    const { r, c, starting, ending, current } = this.props;
    // console.log(current);
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
      <td className={classN} id={cell}>
        0
      </td>
    );
  }
}
export default Td;
