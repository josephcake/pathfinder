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
    running: false,
    refresh: false
  };
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.ending !== this.state.ending) {
      return true;
    }
    return false;
  }
  refreshBoard = () => {
    // debugger;

    //  this.animatedCell();
    this.returnToUnvisited();
    // for (let i = 0; i < arrVisited.length; i++) {
    //   let k = i;
    //   setTimeout(function() {
    //     arrVisited[k].className = "unvisitedAnimated";
    //     // arrVisited[k].className = "unvisited";
    //   }, 20 * k);
    // }
    this.setState({
      running: false,
      current: this.state.starting
    });
  };
  returnToUnvisited = () => {
    // debugger;
    const unvisitedAnimated = document.getElementsByClassName("visited");
    const arrVisited = Array.from(unvisitedAnimated);
    for (let i = 0; i < arrVisited.length; i++) {
      let k = i;
      setTimeout(function() {
        // arrVisited[k].className = "unvisitedAnimated";
        arrVisited[k].className = "unvisited";
      }, 20 * k);
    }
  };
  animatedCell = () => {
    const visited = document.getElementsByClassName("visited");
    const arrVisited = Array.from(visited);
    for (let i = 0; i < arrVisited.length; i++) {
      let k = i;
      setTimeout(function() {
        arrVisited[k].className = "unvisitedAnimated";
        // arrVisited[k].className = "unvisited";
      }, 20 * k);
    }
  };

  checkRunningFunc = func => {
    // debugger;
    if (this.state.running) {
      return;
    } else {
      func();
    }
  };
  depthFirstSearch = () => {
    let current = this.state.current.split("-");
    let currentRow = Number(current[0]);
    let currentCol = Number(current[1]);
    this.setState({
      running: true
    });
    if (currentRow !== 0) {
      this.depthGoUp(currentRow, currentCol);
    } else {
      this.depthGoDown(currentRow, currentCol);
    }
  };
  depthGoUp = (cR, cC, path = {}) => {
    const current = [cR, cC].join("-");
    // debugger;
    if (current === this.state.ending) {
      this.setState({
        running: false
      });
      return;
    }
    let currentCell = document.getElementById(current);
    let nextRow = cR - 1;
    if (cR === 0) {
      if (!path[current]) {
        currentCell.className = "visited";
        path[String(current)] = true;
      }
      this.depthGoRight(cR, cC + 1, path);
    } else if (
      currentCell.className === "visited" ||
      currentCell.className === "starting"
    ) {
      this.depthGoUp(nextRow, cC, path);
    } else if (currentCell.className === "unvisited") {
      setTimeout(() => {
        currentCell.className = "visited";
        path[String(current)] = true;
        let nextId = [nextRow, cC].join("-");
        let nextCell = document.getElementById(nextId);
        if (
          nextCell.className === "unvisited" ||
          nextCell.className === "ending"
        ) {
          this.depthGoUp(nextRow, cC, path);
        } else if (nextCell.className === "visited") {
          this.depthGoLeft(cR, cC - 1, path);
        }
      }, 10);
    }
  };
  depthGoRight = (cR, cC, path) => {
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      this.setState({
        running: false
      });
      return;
    }
    setTimeout(() => {
      let currentCell = document.getElementById(current);
      if (cR === 0 && cC !== this.state.cols - 1) {
        currentCell.className = "visited";
        path[String(current)] = true;
        this.depthGoRight(cR, cC + 1, path);
      } else if (cR === 0 && cC === this.state.cols - 1) {
        currentCell.className = "visited";
        path[String(current)] = true;
        this.depthGoDown(cR + 1, cC, path);
      }
    }, 10);
  };
  depthGoDown = (cR, cC, path = {}) => {
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      this.setState({
        running: false
      });
      return;
    }
    let nextRow = cR + 1;
    setTimeout(() => {
      let currentCell = document.getElementById(current);
      currentCell.className = "visited";
      path[String(current)] = true;
      if (nextRow !== this.state.rows) {
        this.depthGoDown(nextRow, cC, path);
      } else {
        this.depthGoLeft(cR, cC - 1, path);
      }
    }, 10);
  };
  depthGoLeft = (cR, cC, path) => {
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      this.setState({
        running: false
      });
      return;
    }
    setTimeout(() => {
      let currentCell = document.getElementById(current);
      currentCell.className = "visited";
      path[String(current)] = true;
      if (cR !== 1) {
        this.depthGoUp(cR - 1, cC, path);
      } else {
        this.depthGoDown(cR + 1, cC, path);
      }
    }, 10);
  };

  breadthFirstSearch = () => {
    let current = this.state.current.split("-");
    let currentRow = Number(current[0]);
    let currentCol = Number(current[1]);
    this.setState({
      running: true
    });
    if (currentRow !== 0) {
      this.breadthGoUp(currentRow, currentCol);
    } else {
      this.breadthGoDown(currentRow, currentCol);
    }
  };

  breadthGoUp = (cR, cC, path = {}) => {
    // Color current
    // console.log("up:", cR, cC, path);

    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      this.setState({
        running: false
      });
      return;
    }
    let currentCell = document.getElementById(current);
    let nextRow = cR - 1;
    if (cR === 0) {
      if (!path[current]) {
        currentCell.className = "visited";
        path[String(current)] = true;
      }
      this.breadthGoRight(cR, cC + 1, path);
    } else if (
      currentCell.className === "visited" ||
      currentCell.className === "starting"
    ) {
      this.breadthGoUp(nextRow, cC, path);
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
          this.breadthGoUp(nextRow, cC, path);
        } else if (nextCell.className === "unvisited") {
          this.breadthGoRight(cR, next, path);
        }
      }, 10);
    }
  };
  breadthGoRight = (cR, cC, path = {}) => {
    // console.log("right:", cR, cC, path);
    // Color current
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      this.setState({
        running: false
      });
      return;
    }
    let currentCell = document.getElementById(current);
    let nextCol = cC + 1;
    if (cC === this.state.cols - 1) {
      if (!path[current]) {
        currentCell.className = "visited";
        path[String(current)] = true;
      }
      this.breadthGoDown(cR + 1, cC, path);
    } else if (
      currentCell.className === "visited" ||
      currentCell.className === "starting"
    ) {
      this.breadthGoRight(cR, nextCol, path);
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
          this.breadthGoRight(cR, nextCol, path);
        } else if (nextCell.className === "unvisited") {
          this.breadthGoDown(next, cC, path);
        }
      }, 10);
    }
  };
  breadthGoDown = (cR, cC, path = {}) => {
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      this.setState({
        running: false
      });
      return;
    }
    let currentCell = document.getElementById(current);
    let nextRow = cR + 1;
    if (cR === this.state.rows - 1) {
      if (!path[current]) {
        currentCell.className = "visited";
        path[String(current)] = true;
      }
      this.breadthGoLeft(cR, cC - 1, path);
    } else if (
      currentCell.className === "visited" ||
      currentCell.className === "starting"
    ) {
      this.breadthGoDown(nextRow, cC, path);
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
          this.breadthGoDown(nextRow, cC, path);
        } else if (nextCell.className === "unvisited") {
          this.breadthGoLeft(cR, next, path);
        }
      }, 10);
    }
  };
  breadthGoLeft = (cR, cC, path = {}) => {
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      this.setState({
        running: false
      });
      return;
    }
    let currentCell = document.getElementById(current);
    let nextCol = cC - 1;
    if (cC === 0) {
      if (!path[current]) {
        currentCell.className = "visited";
        path[String(current)] = true;
      }
      this.breadthGoUp(cR - 1, cC, path);
    } else if (
      currentCell.className === "visited" ||
      currentCell.className === "starting"
    ) {
      this.breadthGoLeft(cR, nextCol, path);
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
          this.breadthGoLeft(cR, nextCol, path);
        } else if (nextCell.className === "unvisited") {
          this.breadthGoUp(next, cC, path);
        }
      }, 10);
    }
  };

  knownEndPointSearch = () => {
    console.log("running parent:");
    // debugger
    let current = this.state.current.split("-");
    let cR = Number(current[0]);
    let cC = Number(current[1]);
    // debugger;
    let endPoint = this.state.ending.split("-");
    let eR = Number(endPoint[0]);
    let eC = Number(endPoint[1]);
    if (this.state.current === this.state.ending) {
      this.setState({
        running: false
      });
    } else {
      this.setState({
        running: true
      });
    }

    if (cR < eR) {
      this.knownGoUp(this.knownEndPointSearch, cR, cC, eR, eC);
    } else if (cR > eR) {
      this.knownGoDown(this.knownEndPointSearch, cR, cC, eR, eC);
    } else if (cC < eC) {
      this.knownGoRight(this.knownEndPointSearch, cR, cC, eR, eC);
    } else if (cC > eC) {
      this.knownGoLeft(this.knownEndPointSearch, cR, cC, eR, eC);
    }
  };
  knownGoUp = (func, cR, cC, eR, eC) => {
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      return;
    } else if (current !== this.state.starting) {
      let currentCell = document.getElementById(current);
      currentCell.className = "visited";
    }

    if (cR !== eR) {
      let nextRow = cR + 1;
      let nextCurrent = [nextRow, cC].join("-");
      if (nextRow === eR) {
        setTimeout(() => {
          this.setState(
            {
              current: nextCurrent
            },
            () => {
              func();
            }
          );
        }, 0);
      } else {
        setTimeout(() => {
          this.knownGoUp(func, nextRow, cC, eR, eC);
        }, 10);
      }
    }
  };
  knownGoLeft = (func, cR, cC, eR, eC) => {
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      return;
    } else if (current !== this.state.starting) {
      let currentCell = document.getElementById(current);
      currentCell.className = "visited";
    }
    if (cC !== eC) {
      let nextCol = cC - 1;
      let nextCurrent = [cR, nextCol].join("-");
      if (nextCol === eC) {
        setTimeout(() => {
          this.setState(
            {
              current: nextCurrent
            },
            () => {
              func();
            }
          );
        }, 0);
      } else {
        setTimeout(() => {
          this.knownGoLeft(func, cR, nextCol, eR, eC);
        }, 10);
      }
    }
  };
  knownGoRight = (func, cR, cC, eR, eC) => {
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      return;
    } else if (current !== this.state.starting) {
      let currentCell = document.getElementById(current);
      currentCell.className = "visited";
    }
    if (cC !== eC) {
      let nextCol = cC + 1;
      let nextCurrent = [cR, nextCol].join("-");
      if (nextCol === eC) {
        setTimeout(() => {
          this.setState(
            {
              current: nextCurrent
            },
            () => {
              func();
            }
          );
        }, 0);
      } else {
        setTimeout(() => {
          this.knownGoRight(func, cR, nextCol, eR, eC);
        }, 10);
      }
    }
  };
  knownGoDown = (func, cR, cC, eR, eC) => {
    const current = [cR, cC].join("-");
    if (current === this.state.ending) {
      return;
    } else if (current !== this.state.starting) {
      let currentCell = document.getElementById(current);
      currentCell.className = "visited";
    }
    if (cR !== eR) {
      let nextRow = cR - 1;
      let nextCurrent = [nextRow, cC].join("-");

      if (nextRow === eR) {
        setTimeout(() => {
          this.setState(
            {
              current: nextCurrent
            },
            () => {
              func();
            }
          );
        }, 0);
      } else {
        setTimeout(() => {
          this.knownGoDown(func, nextRow, cC, eR, eC);
        }, 10);
      }
    }
  };

  testingReact = () => {
    let current = this.state.current.split("-");
    let cR = Number(current[0]);
    let cC = Number(current[1]);
    // debugger;
    let endPoint = this.state.ending.split("-");
    let eR = Number(endPoint[0]);
    let eC = Number(endPoint[1]);
    const nextCurrent = [cR, cC + 1].join("-");
    setTimeout(() => {
      if (cC !== eC && cC < 100) {
        // debugger;
        this.setState(
          {
            current: nextCurrent
          },
          () => this.testingReact()
        );
      }
    }, 5);
  };

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
          breadthFirstSearch: this.breadthFirstSearch,
          checkRunningFunc: this.checkRunningFunc,
          changeEndpoint: this.changeEndpoint,
          depthFirstSearch: this.depthFirstSearch,
          refreshBoard: this.refreshBoard,
          testingReact: this.testingReact
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

// export const TableContextProvider = withRouter(TableContextProviderWithRouter);
