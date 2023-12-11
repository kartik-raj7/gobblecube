import React from "react";
import Tree from "react-d3-tree";
import './App.css';
import { transformData } from "./assets/utils/transformData";
import { data } from "./data/data";
const keys = Object.keys(data);
const myTreeData = transformData(data, keys[0]);
const renderRectSvgNode = ({ nodeDatum, toggleNode }) => {
  const negative = nodeDatum?.name?.props?.children[1].props.children.includes('-');
  const comingsoon = nodeDatum?.name?.props?.children[1].props.children.includes('Coming Soon');
  const firstkey = nodeDatum?.name?.props?.children[0].props.children==keys[0];
  return (
    <g>
      <foreignObject x="-80" y="-25" width="200" height="80">
        <div
          onClick={toggleNode}
          className="treenode"
          style={{
            backgroundColor: firstkey?'black':(comingsoon?'white':(negative?'#fff8f6':'#ebf9ea')),
            border:comingsoon?'2px solid black':(negative?'2px solid #e9c7c7':'2px solid #d1e8d4'),
            color:firstkey?'white':'black'
          }}
        >
          <span >{nodeDatum.name}</span>
        </div>
      </foreignObject>
    </g>
  );
};

function App() {
  return (
    <div className="App">
      <div className='treeChart'>
        <Tree
          data={myTreeData}
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation="vertical"
          renderCustomNodeElement={renderRectSvgNode}
        />
      </div>
    </div>
  );
}
export default App