import React from "react";
import { TableContext } from "../Context/TableContext";

class Nav extends React.Component {
  render() {
    return (
      <TableContext.Consumer>
        {({
          checkRunningFunc,
          knownEndPointSearch,
          breadthFirstSearch,
          depthFirstSearch,
          clearBoard,
          testingReact,
          toggleWall,
          wallOn,
          buildMaze,
          linearSearch,
          maze,
          selectAlgorithm
        }) => {
          return (
            <div className={"nav"}>
              <div className={"nav__algo nav__items"}>
                <select
                  className={"nav__select"}
                  onChange={e => checkRunningFunc(selectAlgorithm, e)}
                >
                  <option>- Select An Algorithm-</option>

                  <option
                    className={"nav__button"}
                    onClick={() => checkRunningFunc(knownEndPointSearch)}
                    value={"knownEndPointSearch"}
                  >
                    Known Direction
                  </option>
                  <option
                    className={"nav__button"}
                    onClick={() => checkRunningFunc(linearSearch)}
                    value={"linearSearch"}
                  >
                    Linear Search
                  </option>
                  <option
                    className={"nav__button"}
                    onClick={() => checkRunningFunc(breadthFirstSearch)}
                    value={"breadthFirstSearch"}
                  >
                    Breadth First Search
                  </option>
                  <option
                    className={"nav__button"}
                    onClick={() => checkRunningFunc(depthFirstSearch)}
                    value={"depthFirstSearch"}
                  >
                    Depth First Search
                  </option>
                </select>
              </div>
              <div className={"nav__wall nav__items"}>
                <div>
                  <label className={"switch"}>
                    <input
                      type={"checkbox"}
                      checked={wallOn}
                      onChange={() => checkRunningFunc(toggleWall)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
                <select
                  className={"nav__select"}
                  value={maze}
                  onChange={e => checkRunningFunc(buildMaze, e)}
                >
                  <option>- Build A Maze-</option>
                  <option className={"nav__button"} name={"basic"}>
                    Basic
                  </option>
                  <option className={"nav__button"} name={"spiral"}>
                    Spiral
                  </option>
                  <option className={"nav__button"} name={"target"}>
                    Target
                  </option>
                  <option className={"nav__button"} name={"stair"}>
                    Stair
                  </option>
                  <option className={"nav__button"} name={"random"}>
                    {" "}
                    Random
                  </option>
                </select>
              </div>

              {/* <div>
                <button onClick={() => checkRunningFunc(testingReact)}>
                  TESTING REACT VS DOM
                </button>
              </div> */}
              <div className={"nav__board nav__items"}>
                <button
                  className={"nav__button"}
                  onClick={() => checkRunningFunc(clearBoard)}
                >
                  Clear Board
                </button>

                <button
                  name={"wall"}
                  className={"nav__button"}
                  onClick={e => checkRunningFunc(clearBoard, e)}
                >
                  Clear Wall
                </button>

                <button
                  name={"visited"}
                  className={"nav__button"}
                  onClick={e => checkRunningFunc(clearBoard, e)}
                >
                  Clear Path
                </button>
              </div>
            </div>
          );
        }}
      </TableContext.Consumer>
    );
  }
}

export default Nav;
