import React from "react";
import { TableContext } from "../Context/TableContext";

class Nav extends React.Component {
  render() {
    return (
      <TableContext.Consumer>
        {({
          checkRunningFunc,
          clearBoard,
          toggleWall,
          wallOn,
          buildMaze,
          selectAlgorithm,
          go
        }) => {
          return (
            <div className={"nav"}>
              <div className={"nav__algo nav__items"}>
                <select
                  className={"nav__select"}
                  onChange={e => selectAlgorithm(e)}
                >
                  <option className={"nav__select_option"} value={"algorithm"}>
                    Select An Algorithm
                  </option>

                  <option
                    className={"nav__select_option"}
                    value={"knownEndPointSearch"}
                  >
                    Known Direction
                  </option>
                  <option
                    className={"nav__select_option"}
                    value={"linearSearch"}
                  >
                    Linear Search
                  </option>
                  <option
                    className={"nav__select_option"}
                    value={"breadthFirstSearch"}
                  >
                    Breadth First Search
                  </option>
                  <option
                    className={"nav__select_option"}
                    value={"depthFirstSearch"}
                  >
                    Depth First Search
                  </option>
                  <option
                    className={"nav__select_option"}
                    value={"bidirectionalSearch"}
                  >
                    Bidirectional Search
                  </option>
                  <option
                    className={"nav__select_option"}
                    value={"randomSearch"}
                  >
                    Random Search
                  </option>
                </select>
              </div>
              <div className={"nav__wall nav__items"}>
                <div className={"nav__wall_self"}>
                  <h5>Build your own</h5>
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
                  onChange={e => checkRunningFunc(buildMaze, e)}
                >
                  <option className={"nav__select_option"} value={"maze"}>
                    Build A Maze
                  </option>
                  <option className={"nav__select_option"} value={"basic"}>
                    Basic
                  </option>
                  <option className={"nav__select_option"} value={"spiral"}>
                    Spiral
                  </option>
                  <option className={"nav__select_option"} value={"target"}>
                    Target
                  </option>
                  <option className={"nav__select_option"} value={"stair"}>
                    Stair
                  </option>
                  <option className={"nav__select_option"} value={"horizontal"}>
                    Horizontal Wide
                  </option>
                  <option className={"nav__select_option"} value={"vertical"}>
                    Vertical Wide
                  </option>
                  <option
                    className={"nav__select_option"}
                    value={"horizontalNarrow"}
                  >
                    Horizontal Narrow
                  </option>
                  <option
                    className={"nav__select_option"}
                    value={"verticalNarrow"}
                  >
                    Vertical Narrow
                  </option>
                  <option className={"nav__select_option"} value={"random"}>
                    Random
                  </option>
                </select>
              </div>

              {/* <div>
                <button onClick={() => checkRunningFunc(testingReact)}>
                  TESTING REACT VS DOM
                </button>
              </div> */}
              <div className={"nav__action nav__items"}>
                <button
                  onClick={() => checkRunningFunc(go)}
                  className={"nav__button go"}
                >
                  Go!
                </button>
              </div>

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
