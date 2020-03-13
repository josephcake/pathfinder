import React, { Component, createContext, lazy } from "react";
import * as _ from "underscore";
// import { withRouter } from "react-router";
// const { BASIC_WALL } = React.lazy(() => import("../Wall/BasicWall"));
import { BASIC_WALL } from "../Wall/BasicWall";
import { SPIRAL_WALL } from "../Wall/SpiralWall";
import { STAIR_WALL } from "../Wall/StairWall";
import { TARGET_WALL } from "../Wall/TargetWall";

export const TableContext = createContext();
export class TableContextProvider extends Component {
  state = {
    starting: "15-12",
    ending: "15-42",
    rows: 30,
    cols: 60,
    maze: "Maze",
    algorithm: "none",
    current: "15-12",
    running: false,
    refresh: false,
    wallOn: false,
    building: false,
    blocked: false
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
      this.state.wallOn !== nextState.wallOn ||
      this.state.maze !== nextState.maze
    ) {
      return true;
    }
    return false;
  }

  toggleWall = () => {
    this.setState(
      {
        wallOn: !this.state.wallOn,
        running: false
      },
      () => {
        let main = document.getElementById("main");
        if (this.state.wallOn === true) {
          main.style.cursor = "pointer";
        } else {
          main.style.cursor = "auto";
        }
      }
    );
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
      this.setState({ running: false, building: false });
    }
  };

  wallBuilding = e => {
    if (this.state.building) {
      // console.log(e.target.id);
      let id = e.target.id;
      if (
        String(id) === this.state.starting ||
        String(id) === this.state.ending
      ) {
      } else {
        let cell = document.getElementById(id);
        if (cell.id !== "15-59") cell.className = "wall";
      }
    }
  };

  buildMaze = e => {
    this.returnToUnvisited();

    const name = e.target.value.toLowerCase();
    if (name === "maze") {
      this.setState({ running: false });
      return;
    }
    const mazeType = ["basic", "spiral", "stair", "target"];
    if (name === "random") {
      this.randomlyGeneratedMaze();
    } else {
      const mazes = [BASIC_WALL, SPIRAL_WALL, STAIR_WALL, TARGET_WALL];
      const idx = mazeType.indexOf(name);

      for (let i = 0; i < mazes[idx].length; i++) {
        let k = i;
        let cell = document.getElementById(mazes[idx][k]);
        setTimeout(function() {
          cell.className = "wall";
        }, 10 * k);
      }
    }

    this.setState({ running: false });
  };

  randomlyGeneratedMaze = () => {
    this.returnToUnvisited();
    let wallsToBeBuild = [];

    const unvisited = document.getElementsByClassName("unvisited");
    const unvisitedArr = Array.from(unvisited);
    // debugger;
    for (let i = 0; i < unvisitedArr.length; i++) {
      const skip = Math.floor(Math.random() * 9);
      const walls = Math.floor(Math.random() * 4);
      if (i + walls < unvisitedArr.length) {
        for (let j = 0; j < walls; j++) {
          let cell = unvisitedArr[i + j];
          wallsToBeBuild.push(cell.id);
        }
      }

      i += skip;
    }

    for (let i = 0; i < wallsToBeBuild.length; i++) {
      let k = i;
      setTimeout(() => {
        let cell = document.getElementById(wallsToBeBuild[k]);
        cell.className = "wall";
      }, 20 * k);
    }
    this.setState({
      running: false
    });
  };

  clearBoard = e => {
    this.returnToUnvisited(e);
    this.setState({
      running: false,
      current: this.state.starting
    });
  };

  returnToUnvisited = e => {
    // debugger;
    if (e) {
      let name = e.target ? e.target.name : e;

      const cellsHTML = document.getElementsByClassName(name);
      const cellsArr = Array.from(cellsHTML);
      for (let i = 0; i < cellsArr.length; i++) {
        let k = i;
        cellsArr[k].className = "unvisited";
      }
    } else {
      const unvisitedAnimated = document.getElementsByClassName("visited");
      const cellsHTML = document.getElementsByClassName("wall");
      const cellsArr = Array.from(cellsHTML);
      const arrVisited = Array.from(unvisitedAnimated);

      for (let i = 0; i < cellsArr.length; i++) {
        let k = i;
        cellsArr[k].className = "unvisited";
      }
      for (let i = 0; i < arrVisited.length; i++) {
        let k = i;
        arrVisited[k].className = "unvisited";
      }
    }
  };

  checkRunningFunc = (func, e) => {
    // debugger;
    if (this.state.running) {
      return;
    } else {
      this.setState({ running: true });
      func(e);
    }
  };

  selectAlgorithm = e => {
    this.returnToUnvisited("visited");

    let name = e.target.value;
    if (name === "algorithm") {
      this.setState({ running: false });
      return;
    }

    let algorithmNames = [
      "knownEndPointSearch",
      "linearSearch",
      "breadthFirstSearch",
      "depthFirstSearch"
    ];
    let algorithms = [
      this.knownEndPointSearch,
      this.linearSearch,
      this.breadthFirstSearch,
      this.depthFirstSearch
    ];
    const selected = algorithmNames.indexOf(name);
    // console.log(selected);

    algorithms[selected]();
  };

  linearSearch = () => {
    let current = this.state.current.split("-");
    let path = {};
    const linearHelper = () => {
      let cR = Number(current[0]);
      let cC = Number(current[1]);
      // console.log(`${cR}-${cC}`);
      // debugger;
      if (`${cR}-${cC}` === this.state.ending) {
        return;
      }
      let upNext = `${cR - 1}-${cC}`;
      let downNext = `${cR + 1}-${cC}`;
      let leftNext = `${cR}-${cC - 1}`;
      let rightNext = `${cR}-${cC + 1}`;
      let currentCell = document.getElementById(`${cR}-${cC}`);
      let upCell = document.getElementById(upNext);
      let downCell = document.getElementById(downNext);
      let leftCell = document.getElementById(leftNext);
      let rightCell = document.getElementById(rightNext);

      setTimeout(() => {
        if (currentCell.className !== "starting") {
          currentCell.className = "visited";
        }

        if (
          (leftCell && leftCell.className === "ending") ||
          (rightCell && rightCell.className === "ending") ||
          (upCell && upCell.className === "ending") ||
          (downCell && downCell.className === "ending")
        ) {
          return;
        }
        if (leftCell && leftCell.className === "unvisited" && !path[leftNext]) {
          current = leftNext.split("-");
          path[leftNext] = true;
          linearHelper();
        } else if (
          !leftCell ||
          leftCell.className === "wall" ||
          leftCell.className === "visited" ||
          leftCell.className === "starting" ||
          path[leftNext]
        ) {
          // debugger;
          if (upCell && upCell.className === "unvisited" && !path[upNext]) {
            current = upNext.split("-");
            path[upNext] = true;
            linearHelper();
          } else if (
            downCell &&
            downCell.className === "unvisited" &&
            !path[downNext]
          ) {
            current = downNext.split("-");
            path[downNext] = true;
            linearHelper();
          } else if (
            rightCell &&
            rightCell.className === "unvisited" &&
            !path[rightNext]
          ) {
            current = rightNext.split("-");
            path[rightNext] = true;
            linearHelper();
          } else {
            const potentialPaths = Object.keys(path);
            for (let i = 0; i < potentialPaths.length; i++) {
              current = potentialPaths[i].split("-");
              cR = Number(current[0]);
              cC = Number(current[1]);
              rightNext = `${cR}-${cC + 1}`;
              rightCell = document.getElementById(rightNext);
              upNext = `${cR - 1}-${cC}`;
              downNext = `${cR + 1}-${cC}`;
              leftNext = `${cR}-${cC - 1}`;
              currentCell = document.getElementById(`${cR}-${cC}`);
              upCell = document.getElementById(upNext);
              downCell = document.getElementById(downNext);
              leftCell = document.getElementById(leftNext);
              if (upCell && upCell.className === "unvisited" && !path[upNext]) {
                current = upNext.split("-");
                path[upNext] = true;
                return linearHelper();
              } else if (
                downCell &&
                downCell.className === "unvisited" &&
                !path[downNext]
              ) {
                current = downNext.split("-");
                path[downNext] = true;
                return linearHelper();
              } else if (
                rightCell &&
                rightCell.className === "unvisited" &&
                !path[rightNext]
              ) {
                current = rightNext.split("-");
                path[rightNext] = true;
                return linearHelper();
              }
            }
          }
        }
      }, 15);
    };
    linearHelper();
    this.setState({ running: false });
  };

  depthFirstSearch = () => {
    let queue = ["15-59"];
    let path = {};
    let counter = 0;
    while (queue[counter] !== this.state.ending) {
      let current = queue[counter].split("-");
      let cR = Number(current[0]);
      let cC = Number(current[1]);
      // console.log(queue[counter]);
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
  };

  breadthFirstSearch = () => {
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

    // console.log(queue);
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
    let current = this.state.current.split("-");
    let path = {};
    let ending = this.state.ending.split("-");
    let eR = ending[0];
    let eC = ending[1];

    const knownHelper = () => {
      let cR = Number(current[0]);
      let cC = Number(current[1]);
      // console.log(`${cR}-${cC}`);
      // debugger;
      if (`${cR}-${cC}` === this.state.ending) {
        return;
      }
      let upNext = `${cR - 1}-${cC}`;
      let downNext = `${cR + 1}-${cC}`;
      let leftNext = `${cR}-${cC - 1}`;
      let rightNext = `${cR}-${cC + 1}`;
      let currentCell = document.getElementById(`${cR}-${cC}`);
      let upCell = document.getElementById(upNext);
      let downCell = document.getElementById(downNext);
      let leftCell = document.getElementById(leftNext);
      let rightCell = document.getElementById(rightNext);

      setTimeout(() => {
        if (currentCell.className !== "starting") {
          currentCell.className = "visited";
        }

        if (
          (leftCell && leftCell.className === "ending") ||
          (rightCell && rightCell.className === "ending") ||
          (upCell && upCell.className === "ending") ||
          (downCell && downCell.className === "ending")
        ) {
          return;
        }

        if (cC < eC) {
          if (
            rightCell &&
            rightCell.className === "unvisited" &&
            !path[rightNext]
          ) {
            current = rightNext.split("-");
            path[rightNext] = true;
            return knownHelper();
          } else {
            const potentialPaths = Object.keys(path);
            if (!potentialPaths.length || potentialPaths.length < 5) {
              if (upCell && upCell.className === "unvisited" && !path[upNext]) {
                current = upNext.split("-");
                path[upNext] = true;
                return knownHelper();
              } else if (
                downCell &&
                downCell.className === "unvisited" &&
                !path[downNext]
              ) {
                current = downNext.split("-");
                path[downNext] = true;
                return knownHelper();
              } else if (
                leftCell &&
                leftCell.className === "unvisited" &&
                !path[leftNext]
              ) {
                current = leftNext.split("-");
                path[leftNext] = true;
                return knownHelper();
              }
            }
            const bottomRow = this.state.rows - 1;
            if (cR === bottomRow) {
              for (let i = potentialPaths.length - 1; i > 0; i--) {
                current = potentialPaths[i].split("-");
                cR = Number(current[0]);
                cC = Number(current[1]);
                upNext = `${cR - 1}-${cC}`;
                upCell = document.getElementById(upNext);
                if (
                  upCell &&
                  upCell.className === "unvisited" &&
                  !path[upNext]
                ) {
                  current = upNext.split("-");
                  path[upNext] = true;
                  return knownHelper();
                }
              }
            } else if (cR === 0) {
              for (let i = potentialPaths.length - 1; i > 0; i--) {
                current = potentialPaths[i].split("-");
                cR = Number(current[0]);
                cC = Number(current[1]);
                downNext = `${cR + 1}-${cC}`;
                downCell = document.getElementById(downNext);
                if (
                  downCell &&
                  downCell.className === "unvisited" &&
                  !path[downNext]
                ) {
                  current = downNext.split("-");
                  path[downNext] = true;
                  return knownHelper();
                }
              }
            } else {
              for (let i = potentialPaths.length - 1; i > 0; i--) {
                current = potentialPaths[i].split("-");
                cR = Number(current[0]);
                cC = Number(current[1]);
                rightNext = `${cR}-${cC + 1}`;
                rightCell = document.getElementById(rightNext);
                upNext = `${cR - 1}-${cC}`;
                downNext = `${cR + 1}-${cC}`;
                leftNext = `${cR}-${cC - 1}`;
                currentCell = document.getElementById(`${cR}-${cC}`);
                upCell = document.getElementById(upNext);
                downCell = document.getElementById(downNext);
                leftCell = document.getElementById(leftNext);

                if (
                  upCell &&
                  upCell.className === "unvisited" &&
                  !path[upNext]
                ) {
                  current = upNext.split("-");
                  path[upNext] = true;
                  return knownHelper();
                } else if (
                  downCell &&
                  downCell.className === "unvisited" &&
                  !path[downNext]
                ) {
                  current = downNext.split("-");
                  path[downNext] = true;
                  return knownHelper();
                } else if (
                  leftCell &&
                  leftCell.className === "unvisited" &&
                  !path[leftNext]
                ) {
                  current = leftNext.split("-");
                  path[leftNext] = true;
                  return knownHelper();
                }
              }
            }
          }
        } else if (cC > eC) {
          if (
            leftCell &&
            leftCell.className === "unvisited" &&
            !path[leftNext]
          ) {
            current = leftNext.split("-");
            path[leftNext] = true;
            return knownHelper();
          } else {
            const potentialPaths = Object.keys(path);
            const bottomRow = this.state.rows - 1;
            if (cR === 0) {
              for (let i = potentialPaths.length - 1; i > 0; i--) {
                current = potentialPaths[i].split("-");
                cR = Number(current[0]);
                cC = Number(current[1]);
                downNext = `${cR + 1}-${cC}`;
                downCell = document.getElementById(downNext);
                if (
                  downCell &&
                  downCell.className === "unvisited" &&
                  !path[downNext]
                ) {
                  current = downNext.split("-");
                  path[downNext] = true;
                  return knownHelper();
                }
              }
            } else if (cR === bottomRow) {
              for (let i = potentialPaths.length - 1; i > 0; i--) {
                current = potentialPaths[i].split("-");
                cR = Number(current[0]);
                cC = Number(current[1]);
                upNext = `${cR - 1}-${cC}`;
                upCell = document.getElementById(upNext);

                if (
                  upCell &&
                  upCell.className === "unvisited" &&
                  !path[upNext]
                ) {
                  current = upNext.split("-");
                  path[upNext] = true;
                  return knownHelper();
                }
              }
            } else {
              for (let i = potentialPaths.length - 1; i > 0; i--) {
                current = potentialPaths[i].split("-");
                cR = Number(current[0]);
                cC = Number(current[1]);
                rightNext = `${cR}-${cC + 1}`;
                rightCell = document.getElementById(rightNext);
                upNext = `${cR - 1}-${cC}`;
                downNext = `${cR + 1}-${cC}`;
                leftNext = `${cR}-${cC - 1}`;
                currentCell = document.getElementById(`${cR}-${cC}`);
                upCell = document.getElementById(upNext);
                downCell = document.getElementById(downNext);
                leftCell = document.getElementById(leftNext);
                if (
                  upCell &&
                  upCell.className === "unvisited" &&
                  !path[upNext]
                ) {
                  current = upNext.split("-");
                  path[upNext] = true;
                  return knownHelper();
                } else if (
                  downCell &&
                  downCell.className === "unvisited" &&
                  !path[downNext]
                ) {
                  current = downNext.split("-");
                  path[downNext] = true;
                  return knownHelper();
                } else if (
                  rightCell &&
                  rightCell.className === "unvisited" &&
                  !path[rightNext]
                ) {
                  current = rightNext.split("-");
                  path[rightNext] = true;
                  return knownHelper();
                }
              }
            }
          }
        }
        if (cR > eR) {
          if (upCell && upCell.className === "unvisited" && !path[upNext]) {
            current = upNext.split("-");
            path[upNext] = true;
            return knownHelper();
          } else {
            const potentialPaths = Object.keys(path);
            for (let i = potentialPaths.length - 1; i > 0; i--) {
              current = potentialPaths[i].split("-");
              cR = Number(current[0]);
              cC = Number(current[1]);
              rightNext = `${cR}-${cC + 1}`;
              rightCell = document.getElementById(rightNext);
              upNext = `${cR - 1}-${cC}`;
              downNext = `${cR + 1}-${cC}`;
              leftNext = `${cR}-${cC - 1}`;
              currentCell = document.getElementById(`${cR}-${cC}`);
              upCell = document.getElementById(upNext);
              downCell = document.getElementById(downNext);
              leftCell = document.getElementById(leftNext);
              if (cC < eC) {
                if (
                  leftCell &&
                  leftCell.className === "unvisited" &&
                  !path[leftNext]
                ) {
                  current = leftNext.split("-");
                  path[leftNext] = true;
                  return knownHelper();
                }
              } else {
                if (
                  rightCell &&
                  rightCell.className === "unvisited" &&
                  !path[rightNext]
                ) {
                  current = rightNext.split("-");
                  path[rightNext] = true;
                  return knownHelper();
                } else if (
                  downCell &&
                  downCell.className === "unvisited" &&
                  !path[downNext]
                ) {
                  current = downNext.split("-");
                  path[downNext] = true;
                  return knownHelper();
                }
              }
            }
          }
        } else if (cR < eR) {
          if (
            downCell &&
            downCell.className === "unvisited" &&
            !path[downNext]
          ) {
            current = downNext.split("-");
            path[downNext] = true;
            return knownHelper();
          } else {
            const potentialPaths = Object.keys(path);
            for (let i = potentialPaths.length - 1; i > 0; i--) {
              current = potentialPaths[i].split("-");
              cR = Number(current[0]);
              cC = Number(current[1]);
              rightNext = `${cR}-${cC + 1}`;
              rightCell = document.getElementById(rightNext);
              upNext = `${cR - 1}-${cC}`;
              downNext = `${cR + 1}-${cC}`;
              leftNext = `${cR}-${cC - 1}`;
              currentCell = document.getElementById(`${cR}-${cC}`);
              upCell = document.getElementById(upNext);
              downCell = document.getElementById(downNext);
              leftCell = document.getElementById(leftNext);
              if (cC < eC) {
                if (
                  leftCell &&
                  leftCell.className === "unvisited" &&
                  !path[leftNext]
                ) {
                  current = leftNext.split("-");
                  path[leftNext] = true;
                  return knownHelper();
                }
              } else {
                if (
                  rightCell &&
                  rightCell.className === "unvisited" &&
                  !path[rightNext]
                ) {
                  current = rightNext.split("-");
                  path[rightNext] = true;
                  return knownHelper();
                } else if (
                  upCell &&
                  upCell.className === "unvisited" &&
                  !path[upNext]
                ) {
                  current = upNext.split("-");
                  path[upNext] = true;
                  return knownHelper();
                }
              }
            }
          }
        }
      }, 15);
    };

    knownHelper();
    this.setState({ running: false });
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
          clearBoard: this.clearBoard,
          testingReact: this.testingReact,
          toggleWall: this.toggleWall,
          wallConstructorOn: this.wallConstructorOn,
          wallConstructorOff: this.wallConstructorOff,
          wallBuilding: this.wallBuilding,
          buildMaze: this.buildMaze,
          linearSearch: this.linearSearch,
          randomlyGeneratedMaze: this.randomlyGeneratedMaze,
          selectAlgorithm: this.selectAlgorithm
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

// export const TableContextProvider = withRouter(TableContextProviderWithRouter);
