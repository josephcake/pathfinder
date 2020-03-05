import React, { Component, createContext } from "react";
import * as _ from "underscore";
// import { withRouter } from "react-router";

export const TableContext = createContext();
export class TableContextProvider extends Component {
  state = {
    starting: "15-10",
    ending: "15-45",
    rows: 30,
    cols: 60,
    current: "15-10",
    path: {},
    running: false
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.ending !== this.state.ending) {
      return true;
    }
    return false;
  }

  checkRunningFunc = func => {
    if (this.state.running) {
      return;
    } else {
      func();
    }
  };
  unknownEndPointSearch = () => {
    let current = this.state.current.split("-");
    let currentRow = Number(current[0]);
    let currentCol = Number(current[1]);
    if (currentRow !== 0) {
      this.unknownGoUp(currentRow, currentCol);
    } else {
      this.unknownGoDown(currentRow, currentCol);
    }
  };

  unknownGoUp = (cR, cC, path = {}) => {
    // Color current
    // console.log("up:", cR, cC, path);
    console.log("up");
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      return;
    }
    let currentCell = document.getElementById(current);
    let nextRow = cR - 1;
    if (cR === 0) {
      if (!path[current]) {
        currentCell.className = "visited";
        path[String(current)] = true;
      }
      this.unknownGoRight(cR, cC + 1, path);
    } else if (
      currentCell.className === "visited" ||
      currentCell.className === "starting"
    ) {
      this.unknownGoUp(nextRow, cC, path);
    } else if (currentCell.className === "unvisited") {
      setTimeout(() => {
        currentCell.className = "visited";
        path[String(current)] = true;
        let next = cC + 1;
        let nextId = [cR, next].join("-");
        let nextCell = document.getElementById(nextId);
        if (
          nextCell.className === "visited" ||
          nextCell.className === "starting"
        ) {
          this.unknownGoUp(nextRow, cC, path);
        } else if (nextCell.className === "unvisited") {
          this.unknownGoRight(cR, next, path);
        }
      }, 10);
    }
  };
  unknownGoRight = (cR, cC, path = {}) => {
    // console.log("right:", cR, cC, path);
    // Color current
    console.log("right");
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      return;
    }
    let currentCell = document.getElementById(current);
    let nextCol = cC + 1;
    if (cC === this.state.cols - 1) {
      if (!path[current]) {
        currentCell.className = "visited";
        path[String(current)] = true;
      }
      this.unknownGoDown(cR + 1, cC, path);
    } else if (
      currentCell.className === "visited" ||
      currentCell.className === "starting"
    ) {
      this.unknownGoRight(cR, nextCol, path);
    } else if (currentCell.className === "unvisited") {
      setTimeout(() => {
        currentCell.className = "visited";
        path[String(current)] = true;
        let next = cR + 1;
        let nextId = [next, cC].join("-");
        let nextCell = document.getElementById(nextId);
        if (
          nextCell.className === "visited" ||
          nextCell.className === "starting"
        ) {
          this.unknownGoRight(cR, nextCol, path);
        } else if (nextCell.className === "unvisited") {
          this.unknownGoDown(next, cC, path);
        }
      }, 10);
    }
  };
  unknownGoDown = (cR, cC, path = {}) => {
    // Color current
    // console.log("down:", cR, cC, path);
    console.log("down");
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      return;
    }
    let currentCell = document.getElementById(current);
    let nextRow = cR + 1;
    if (cR === this.state.rows - 1) {
      if (!path[current]) {
        currentCell.className = "visited";
        path[String(current)] = true;
      }
      this.unknownGoLeft(cR, cC - 1, path);
    } else if (
      currentCell.className === "visited" ||
      currentCell.className === "starting"
    ) {
      this.unknownGoDown(nextRow, cC, path);
    } else if (currentCell.className === "unvisited") {
      setTimeout(() => {
        currentCell.className = "visited";
        path[String(current)] = true;
        let next = cC - 1;
        let nextId = [cR, next].join("-");
        let nextCell = document.getElementById(nextId);
        if (
          nextCell.className === "visited" ||
          nextCell.className === "starting"
        ) {
          this.unknownGoDown(nextRow, cC, path);
        } else if (nextCell.className === "unvisited") {
          this.unknownGoLeft(cR, next, path);
        }
      }, 10);
    }
  };
  unknownGoLeft = (cR, cC, path = {}) => {
    console.log("left");
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      return;
    }
    let currentCell = document.getElementById(current);
    let nextCol = cC - 1;
    if (cC === 0) {
      if (!path[current]) {
        currentCell.className = "visited";
        path[String(current)] = true;
      }
      this.unknownGoUp(cR - 1, cC, path);
    } else if (
      currentCell.className === "visited" ||
      currentCell.className === "starting"
    ) {
      this.unknownGoLeft(cR, nextCol, path);
    } else if (currentCell.className === "unvisited") {
      setTimeout(() => {
        currentCell.className = "visited";
        path[String(current)] = true;
        let next = cR - 1;
        let nextId = [next, cC].join("-");
        let nextCell = document.getElementById(nextId);
        if (
          nextCell.className === "visited" ||
          nextCell.className === "starting"
        ) {
          this.unknownGoLeft(cR, nextCol, path);
        } else if (nextCell.className === "unvisited") {
          this.unknownGoUp(next, cC, path);
        }
      }, 10);
    }
  };

  knownEndPointSearch = () => {
    console.log("running parent:");
    // debugger
    let current = this.state.current.split("-");
    let cRow = Number(current[0]);
    let cCol = Number(current[1]);
    // debugger;
    let endPoint = this.state.ending.split("-");
    let eRow = Number(endPoint[0]);
    let eCol = Number(endPoint[1]);
    if (cRow < eRow) {
      this.knownGoUp(this.knownEndPointSearch, cRow, cCol, eRow, eCol);
    } else if (cRow > eRow) {
      this.knownGoDown(this.knownEndPointSearch, cRow, cCol, eRow, eCol);
    } else if (cCol < eCol) {
      this.knownGoRight(this.knownEndPointSearch, cRow, cCol, eRow, eCol);
    } else if (cCol > eCol) {
      this.knownGoLeft(this.knownEndPointSearch, cRow, cCol, eRow, eCol);
    }
  };
  knownGoUp = (func, currentRow, currentCol, endPointRow, endPointCol) => {
    console.log("up");

    if (currentRow !== endPointRow) {
      let nextRow = currentRow + 1;
      let nextCurrent = [nextRow, currentCol].join("-");
      let data = document.getElementById(nextCurrent);
      data.className = "visited";
      if (nextRow === endPointRow) {
        setTimeout(() => {
          this.setState(
            {
              current: nextCurrent,
              running: true
            },
            () => {
              func();
            }
          );
        }, 0);
      } else {
        setTimeout(() => {
          this.knownGoUp(func, nextRow, currentCol, endPointRow, endPointCol);
        }, 10);
      }
    }
  };
  knownGoLeft = (func, currentRow, currentCol, endPointRow, endPointCol) => {
    console.log("left");
    if (currentCol !== endPointCol) {
      let nextCol = currentCol - 1;
      let nextCurrent = [currentRow, nextCol].join("-");
      let data = document.getElementById(nextCurrent);
      data.className = "visited";
      if (nextCol === endPointCol) {
        setTimeout(() => {
          this.setState(
            {
              current: nextCurrent,
              running: true
            },
            () => {
              func();
            }
          );
        }, 0);
      } else {
        setTimeout(() => {
          this.knownGoLeft(func, currentRow, nextCol, endPointRow, endPointCol);
        }, 10);
      }
    }
  };
  knownGoRight = (func, currentRow, currentCol, endPointRow, endPointCol) => {
    console.log("right");

    if (currentCol !== endPointCol) {
      let nextCol = currentCol + 1;
      let nextCurrent = [currentRow, nextCol].join("-");
      let data = document.getElementById(nextCurrent);
      data.className = "visited";
      if (nextCol === endPointCol) {
        setTimeout(() => {
          this.setState(
            {
              current: nextCurrent,
              running: true
            },
            () => {
              func();
            }
          );
        }, 0);
      } else {
        setTimeout(() => {
          this.knownGoRight(
            func,
            currentRow,
            nextCol,
            endPointRow,
            endPointCol
          );
        }, 10);
      }
    }
  };
  knownGoDown = (func, currentRow, currentCol, endPointRow, endPointCol) => {
    console.log("down");
    if (currentRow !== endPointRow) {
      let nextRow = currentRow - 1;
      let nextCurrent = [nextRow, currentCol].join("-");
      let data = document.getElementById(nextCurrent);
      data.className = "visited";
      // debugger;
      if (nextRow === endPointRow) {
        setTimeout(() => {
          this.setState(
            {
              current: nextCurrent,
              running: true
            },
            () => {
              func();
            }
          );
        }, 0);
      } else {
        setTimeout(() => {
          this.knownGoDown(func, nextRow, currentCol, endPointRow, endPointCol);
        }, 10);
      }
    }
  };

  // dragOver = target => {
  //   // console.log(target);
  //   this.debouncedDrop(target);
  // };

  // debouncedDrop = _.debounce(function(target) {
  //   console.log("debounced:", target);
  //   this.setState({
  //     ending: target
  //   });
  // }, 1000);

  changeEndpoint = e => {
    // debugger;
    let value = e.target.id;
    if (!value) {
      return;
    }
    if (value === this.state.starting || value === this.state.ending) {
      return;
    }
    let nextEnding = document.getElementById(value);
    // let ending = document.querySelector(`[data="${this.state.ending}"]`);
    nextEnding.className = "ending";
    // ending.className = "";

    this.setState({
      ending: value,
      running: false
    });
  };

  render() {
    return (
      <TableContext.Provider
        value={{
          ...this.state,
          knownEndPointSearch: this.knownEndPointSearch,
          unknownEndPointSearch: this.unknownEndPointSearch,
          checkRunningFunc: this.checkRunningFunc,
          changeEndpoint: this.changeEndpoint
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

// export const TableContextProvider = withRouter(TableContextProviderWithRouter);
