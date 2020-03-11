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
          linearSearch
        }) => {
          return (
            <div className={"nav"}>
              <div>
                <label for={"wall"}>Wall</label>
                <input
                  id={"wall"}
                  type={"checkbox"}
                  onChange={() => checkRunningFunc(toggleWall)}
                  checked={wallOn}
                />
              </div>
              <div>
                <button onClick={() => checkRunningFunc(clearBoard)}>
                  Clear Board
                </button>

                <button
                  name={"wall"}
                  onClick={e => checkRunningFunc(clearBoard, e)}
                >
                  Clear Wall
                </button>

                <button
                  name={"visited"}
                  onClick={e => checkRunningFunc(clearBoard, e)}
                >
                  Clear Path
                </button>
              </div>
              {/* <button onClick={() => checkRunningFunc(knownEndPointSearch)}>
                Known Distance
              </button> */}
              <button onClick={() => checkRunningFunc(breadthFirstSearch)}>
                Breadth First Search
              </button>
              <button onClick={() => checkRunningFunc(depthFirstSearch)}>
                Depth First Search
              </button>
              <button
                onClick={e => checkRunningFunc(buildMaze, e)}
                name={"basic"}
              >
                Build Basic Maze
              </button>
              <button
                onClick={e => checkRunningFunc(buildMaze, e)}
                name={"spiral"}
              >
                Build Spiral Maze
              </button>
              <button
                onClick={e => checkRunningFunc(buildMaze, e)}
                name={"stair"}
              >
                Build Stair Maze
              </button>
              <button onClick={e => checkRunningFunc(linearSearch)}>
                Linear Search
              </button>
              {/* <div>
                <button onClick={() => checkRunningFunc(testingReact)}>
                  TESTING REACT VS DOM
                </button>
              </div> */}
            </div>
          );
        }}
      </TableContext.Consumer>
    );
  }
}

export default Nav;
