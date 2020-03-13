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
                  <option value={"algorithm"}>- Select An Algorithm -</option>

                  <option value={"knownEndPointSearch"}>Known Direction</option>
                  <option value={"linearSearch"}>Linear Search</option>
                  <option value={"breadthFirstSearch"}>
                    Breadth First Search
                  </option>
                  <option value={"depthFirstSearch"}>Depth First Search</option>
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
                  <option value={"maze"}>- Build A Maze -</option>
                  <option value={"basic"}>Basic</option>
                  <option value={"spiral"}>Spiral</option>
                  <option value={"target"}>Target</option>
                  <option value={"stair"}>Stair</option>
                  <option value={"random"}>Random</option>
                </select>
              </div>

              {/* <div>
                <button onClick={() => checkRunningFunc(testingReact)}>
                  TESTING REACT VS DOM
                </button>
              </div> */}
              <div className={"nav__action nav__items"}>
                <button className={"nav__button go"}>Go!</button>
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
