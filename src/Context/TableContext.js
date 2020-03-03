import React, { Component, createContext } from "react";
import * as _ from "underscore";
// import { withRouter } from "react-router";

export const TableContext = createContext();
export class TableContextProvider extends Component {
  state = {
    starting: "20-20",
    ending: "25-60",
    rows: 40,
    cols: 80,
    current: "20-20",
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
  knownEndPointSearch = () => {
    let current = this.state.current.split("-");
    let currentRow = Number(current[0]);
    let currentCol = Number(current[1]);

    let endPoint = this.state.ending.split("-");
    let endPointRow = Number(endPoint[0]);
    let endPointCol = Number(endPoint[1]);
    if (currentRow < endPointRow) {
      this.goUp(this.knownEndPointSearch);
    } else if (currentRow > endPointRow) {
      this.goDown(this.knownEndPointSearch);
    } else if (currentCol < endPointCol) {
      this.goRight(this.knownEndPointSearch);
    } else if (currentCol > endPointCol) {
      this.goLeft(this.knownEndPointSearch);
    }
  };
  goUp = func => {
    console.log("up");
    let current = this.state.current.split("-");
    let currentRow = Number(current[0]);
    let currentCol = Number(current[1]);
    let endPoint = this.state.ending.split("-");
    let endPointRow = Number(endPoint[0]);

    if (currentRow !== endPointRow) {
      let nextRow = currentRow + 1;
      let nextCurrent = [nextRow, currentCol].join("-");
      let data = document.querySelector(`[data="${nextCurrent}"]`);
      data.className = "visited";
      setTimeout(() => {
        this.setState(
          {
            current: nextCurrent,
            running: true
          },
          () => func()
        );
      }, 0);

      // let newPath = this.state.path;
      // newPath[nextCurrent] = true;
      // this.setState(
      //   {
      //     path: newPath,
      //     current: nextCurrent
      //   },
      //   () => {
      //     func();
      //   }
      // );
    }
  };
  goLeft = func => {
    console.log("left");
    let current = this.state.current.split("-");
    let currentRow = Number(current[0]);
    let currentCol = Number(current[1]);
    let endPoint = this.state.ending.split("-");
    // let endPointRow = Number(endPoint[0]);
    let endPointCol = Number(endPoint[1]);
    if (currentCol !== endPointCol) {
      let nextCol = currentCol - 1;
      let nextCurrent = [currentRow, nextCol].join("-");
      let data = document.querySelector(`[data="${nextCurrent}"]`);
      data.className = "visited";
      setTimeout(() => {
        this.setState(
          {
            current: nextCurrent,
            running: true
          },
          () => func()
        );
      }, 1);
    }
  };
  goRight = func => {
    console.log("right");
    let current = this.state.current.split("-");
    let currentRow = Number(current[0]);
    let currentCol = Number(current[1]);
    let endPoint = this.state.ending.split("-");
    // let endPointRow = Number(endPoint[0]);
    let endPointCol = Number(endPoint[1]);
    if (currentCol !== endPointCol) {
      let nextCol = currentCol + 1;
      let nextCurrent = [currentRow, nextCol].join("-");
      let data = document.querySelector(`[data="${nextCurrent}"]`);
      data.className = "visited";
      setTimeout(() => {
        this.setState(
          {
            current: nextCurrent,
            running: true
          },
          () => func()
        );
      }, 1);
    }
  };
  goDown = func => {
    console.log("down");
    let current = this.state.current.split("-");
    let currentRow = Number(current[0]);
    let currentCol = Number(current[1]);
    let endPoint = this.state.ending.split("-");
    let endPointRow = Number(endPoint[0]);

    if (currentRow !== endPointRow) {
      let nextRow = currentRow - 1;
      let nextCurrent = [nextRow, currentCol].join("-");
      let data = document.querySelector(`[data="${nextCurrent}"]`);
      data.className = "visited";
      setTimeout(() => {
        this.setState(
          {
            current: nextCurrent,
            running: true
          },
          () => func()
        );
      }, 1);
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
    let value = e.target.getAttribute("data");
    if (!value) {
      return;
    }
    if (value === this.state.starting || value === this.state.ending) {
      return;
    }
    let nextEnding = document.querySelector(`[data="${value}"]`);
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
