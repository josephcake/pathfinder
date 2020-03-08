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
    refresh: false,
    wallOn: false,
    building: false
  };
  componentDidMount() {
    window.addEventListener("mouseup", this.wallConstructorOff);
    const node = document.getElementById(this.state.ending); //some animations takes a while to execute
    const mutation = nodeList => {
      if (nodeList[0].target.className === "ending-acquired") {
        node.className = "ending";
        this.setState({ running: false });
      }
    };
    const observer = new MutationObserver(mutation);
    observer.observe(node, { attributes: true, attributeFilter: ["class"] });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.ending !== this.state.ending ||
      this.state.wallOn !== nextState.wallOn
    ) {
      return true;
    }
    return false;
  }

  toggleWall = async () => {
    await this.setState({
      wallOn: !this.state.wallOn
    });
    console.log(this.state.wallOn);

    if (this.state.wallOn) {
      let main = document.getElementById("main");
      main.style.cursor = "pointer";
    } else {
      let main = document.getElementById("main");
      main.style.cursor = "auto";
    }
  };

  wallConstructorOn = () => {
    // debugger;
    if (this.state.wallOn) {
      this.setState(
        {
          building: true
        },
        () => console.log(this.state.building)
      );
    }
  };
  wallConstructorOff = () => {
    // debugger;
    if (this.state.wallOn) {
      this.setState(
        {
          building: false
        },
        () => console.log(this.state.building)
      );
    }
  };

  wallBuilding = e => {
    if (this.state.building) {
      console.log(e.target.id);
      let id = e.target.id;
      if (
        String(id) === this.state.starting ||
        String(id) === this.state.ending
      ) {
        console.log("starting/ending");
      } else {
        let cell = document.getElementById(id);
        cell.className = "wall";
      }
    }
  };

  refreshBoard = () => {
    // debugger;
    //  this.animatedCell();
    this.returnToUnvisited();
    this.setState({
      running: false,
      current: this.state.starting
    });
  };

  returnToUnvisited = () => {
    // debugger;
    const unvisitedAnimated = document.getElementsByClassName("visited");
    const walledCells = document.getElementsByClassName("wall");

    const arrWalls = Array.from(walledCells);
    const arrVisited = Array.from(unvisitedAnimated);
    for (let i = 0; i < arrWalls.length; i++) {
      let k = i;
      setTimeout(function() {
        arrWalls[k].className = "unvisited";
      }, 20 * k);
    }
    for (let i = 0; i < arrVisited.length; i++) {
      let k = i;
      setTimeout(function() {
        // arrVisited[k].className = "unvisitedAnimated";
        arrVisited[k].className = "unvisited";
      }, 10 * k);
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
    this.setState({
      running: true
    });
    let queue = [this.state.current];
    let path = {};
    let counter = 0;
    while (queue[counter] !== this.state.ending) {
      let current = queue[counter].split("-");
      let cR = Number(current[0]);
      let cC = Number(current[1]);
      this.depthHelper(cR, cC, path, queue); //go up first
      // debugger;
      counter++;
      if (queue[counter] === this.state.ending) {
        break;
      }
    }
    for (let i = 1; i < queue.length; i++) {
      //don't color the starting
      let k = i;
      if (queue[k] !== this.state.ending && queue[k] !== this.state.starting) {
        setTimeout(function() {
          let cell = document.getElementById(queue[k]);
          cell.className = "visited";
        }, 10 * k);
      }
      if (queue[k] === this.state.ending) {
        setTimeout(function() {
          let cell = document.getElementById(queue[k]);
          cell.className = "ending-acquired";
        }, 10 * k);
      }
    }
    // if (currentRow !== 0) {
    //   this.depthGoUp(currentRow, currentCol);
    // } else {
    //   this.depthGoDown(currentRow, currentCol);
    // }
  };
  depthHelper = (cR, cC, path, queue) => {
    let current = `${cR}-${cC}`;
    let upNext = `${cR - 1}-${cC}`;
    let downNext = `${cR + 1}-${cC}`;
    let leftNext = `${cR}-${cC - 1}`;
    let rightNext = `${cR}-${cC + 1}`;
    console.log(current);
    if (current === this.state.ending) {
      return;
    }
    if (!path[leftNext] && !path[rightNext] && cR !== 0 && !path[upNext]) {
      queue.push(upNext);
      path[upNext] = true;
    } else if (cR === 1 && path[rightNext] && path[downNext]) {
      queue.push(leftNext);
      path[leftNext] = true;
    } else if (
      cR !== 0 &&
      path[rightNext] &&
      path[upNext] &&
      cR !== this.state.rows - 1
    ) {
      queue.push(downNext);
      path[downNext] = true;
    } else if (cR !== 0 && path[rightNext] && path[downNext]) {
      queue.push(upNext);
      path[upNext] = true;
    } else if (!path[rightNext] && cR === 0 && cC !== this.state.cols - 1) {
      queue.push(rightNext);
      path[rightNext] = true;
    } else if (!path[rightNext] && cR === 0 && cC === this.state.cols - 1) {
      queue.push(downNext);
      path[downNext] = true;
    } else if (
      cC === this.state.cols - 1 &&
      cR !== this.state.rows - 1 &&
      path[upNext]
    ) {
      queue.push(downNext);
      path[downNext] = true;
    } else if (cR === this.state.rows - 1) {
      if (path[upNext]) {
        queue.push(leftNext);
        path[leftNext] = true;
      } else {
        queue.push(upNext);
        path[upNext] = true;
      }
    }
  };

  breadthFirstSearch = () => {
    this.setState({
      running: true
    });
    let queue = [this.state.current];
    let path = {};
    let counter = 0;
    while (queue[counter] !== this.state.ending) {
      let current = queue[counter].split("-");
      let cR = Number(current[0]);
      let cC = Number(current[1]);
      this.breadthHelper(cR, cC, path, queue);
      counter++;
      if (queue[counter] === this.state.ending) {
        break;
      }
    }
    for (let i = 1; i < queue.length; i++) {
      //don't color the starting
      let k = i;
      if (queue[k] !== this.state.ending && queue[k] !== this.state.starting) {
        setTimeout(function() {
          let cell = document.getElementById(queue[k]);
          cell.className = "visited";
        }, 10 * k);
      }
      if (queue[k] === this.state.ending) {
        setTimeout(function() {
          let cell = document.getElementById(queue[k]);
          cell.className = "ending-acquired";
        }, 10 * k);
      }
    }

    console.log(queue);
  };
  breadthHelper = (cR, cC, path, queue) => {
    let upNext = `${cR - 1}-${cC}`;
    let downNext = `${cR + 1}-${cC}`;
    let leftNext = `${cR}-${cC - 1}`;
    let rightNext = `${cR}-${cC + 1}`;
    let upCell = document.getElementById(upNext);
    let downCell = document.getElementById(downNext);
    let leftCell = document.getElementById(leftNext);
    let rightCell = document.getElementById(rightNext);
    if (rightCell) {
      if (!path[rightNext]) {
        path[rightNext] = true;
        if (rightCell.className !== "wall") {
          queue.push(rightNext);
        }
      }
    }
    if (upCell) {
      if (!path[upNext]) {
        path[upNext] = true;
        if (upCell.className !== "wall") {
          queue.push(upNext);
        }
      }
    }
    if (downCell) {
      if (!path[downNext]) {
        path[downNext] = true;
        if (downCell.className !== "wall") {
          queue.push(downNext);
        }
      }
    }
    if (leftCell) {
      if (!path[leftNext]) {
        path[leftNext] = true;
        if (leftCell.className !== "wall") {
          queue.push(leftNext);
        }
      }
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
      this.knownGoDown(this.knownEndPointSearch, cR, cC, eR, eC);
    } else if (cR > eR) {
      this.knownGoUp(this.knownEndPointSearch, cR, cC, eR, eC);
    } else if (cC < eC) {
      this.knownGoRight(this.knownEndPointSearch, cR, cC, eR, eC);
    } else if (cC > eC) {
      this.knownGoLeft(this.knownEndPointSearch, cR, cC, eR, eC);
    }
  };
  knownGoDown = (func, cR, cC, eR, eC) => {
    const current = `${cR}-${cC}`;
    if (current === this.state.ending) {
      return;
    } else if (current !== this.state.starting) {
      let currentCell = document.getElementById(current);
      currentCell.className = "visited";
    }

    if (cR !== eR) {
      let nextRow = cR + 1;
      let nextCurrent = `${nextRow}-${cC}`;
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
  knownGoLeft = (func, cR, cC, eR, eC) => {
    const current = `${cR}-${cC}`;
    if (current === this.state.ending) {
      return;
    } else if (current !== this.state.starting) {
      let currentCell = document.getElementById(current);
      currentCell.className = "visited";
    }
    if (cC !== eC) {
      let nextCol = cC - 1;
      let nextCurrent = `${cR}-${nextCol}`;
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
    const current = `${cR}-${cC}`;
    if (current === this.state.ending) {
      return;
    } else if (current !== this.state.starting) {
      let currentCell = document.getElementById(current);
      currentCell.className = "visited";
    }
    if (cC !== eC) {
      let nextCol = cC + 1;
      let nextCurrent = `${cR}-${nextCol}`;
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
  knownGoUp = (func, cR, cC, eR, eC) => {
    const current = `${cR}-${cC}`;
    if (current === this.state.ending) {
      return;
    } else if (current !== this.state.starting) {
      let currentCell = document.getElementById(current);
      currentCell.className = "visited";
    }
    if (cR !== eR) {
      let nextRow = cR - 1;
      let nextCurrent = `${nextRow}-${cC}`;

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

  testingReact = () => {
    let current = this.state.current.split("-");
    let cR = Number(current[0]);
    let cC = Number(current[1]);
    // debugger;
    let endPoint = this.state.ending.split("-");
    let eR = Number(endPoint[0]);
    let eC = Number(endPoint[1]);
    const nextCurrent = `${cR}-${cC + 1}`;
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
          testingReact: this.testingReact,
          toggleWall: this.toggleWall,
          wallConstructorOn: this.wallConstructorOn,
          wallConstructorOff: this.wallConstructorOff,
          wallBuilding: this.wallBuilding
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

// export const TableContextProvider = withRouter(TableContextProviderWithRouter);
