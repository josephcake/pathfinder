import React, { Component, createContext } from "react";
// import { withRouter } from "react-router";

export const TableContext = createContext();
export class TableContextProvider extends Component {
  state = {
    starting: "20-0",
    ending: "25-60",
    rows: 40,
    cols: 80,
    current: "20-0",
    path: {},
    pattern: "right",
    running: false
  };

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
    // let top = row - 1 >= 0 ? row - 1 : 0;
    // let bottom = row + 1 <= this.state.rows ? row + 1 : this.state.rows;
    // let left = col - 1 >= 0 ? col - 1 : 0;
    // let right = col + 1 <= this.state.cols ? col + 1 : this.state.cols;

    if (currentRow < endPointRow) {
      this.goUp(this.knownEndPointSearch);
    } else if (currentRow > endPointRow) {
      this.goDown(this.knownEndPointSearch);
    } else if (currentCol < endPointCol) {
      this.goRight(this.knownEndPointSearch);
    } else if (currentCol > endPointCol) {
      this.goLeft();
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
      }, 1);

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
  goLeft = () => {
    console.log("left");
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
    // console.log("down");
    // let current = this.state.current.split("-");
    // let currentRow = current[0];
    // let currentCol = current[1];
    // let endPoint = this.state.ending.split("-");
    // let endPointRow = endPoint[0];
    // if (currentRow !== endPointRow) {
    //   let nextRow = currentRow - 1;
    //   let nextCurrent = [nextRow, currentCol].join("-");
    //   let newPath = this.state.path;
    //   newPath[nextCurrent] = true;
    //   this.setState(
    //     {
    //       path: newPath,
    //       current: nextCurrent
    //     },
    //     () => {
    //       func();
    //     }
    //   );
    // }
  };

  render() {
    return (
      <TableContext.Provider
        value={{
          ...this.state,
          knownEndPointSearch: this.knownEndPointSearch,
          checkRunningFunc: this.checkRunningFunc
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

// export const TableContextProvider = withRouter(TableContextProviderWithRouter);
