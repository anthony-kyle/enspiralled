import React from "react";
import Circle from "./Circle";
import stringHash from 'string-hash'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parent: false,
      cx: props.width / 2,
      cy: props.height / 2,
      children: [],
      level: 0,
      r: props.radius || 256,
    };
  }

  handleOver = (e) => {
    console.log(e)
    if (!e.state.parent) {
      this.makeChildren(e);
    }
  };

  makeChildren = (c) => {
    c.setState(
      {
        parent: true,
        children: [
          // North Child
          {
            key:stringHash(c + '1'),
            cx:c.state.cx,
            cy:c.state.cy - c.state.r,
            r: c.state.r / 2, 
            level:c.state.level + 1,
            handleOver: this.handleOver
          },
          // South Child
          {
            key:stringHash(c+2),
            cx:c.state.cx,
            cy:c.state.cy + c.state.r,
            r:c.state.r / 2  ,
            level:c.state.level + 1,
            handleOver:this.handleOver
          },
          // East Child
          {
            key:stringHash(c+3),
            cx:c.state.cx + c.state.r,
            cy:c.state.cy,
            r:c.state.r / 2  ,
            level:c.state.level + 1,
            handleOver:this.handleOver
          },
          // West Child
          {
            key:stringHash(c+4),
            cx:c.state.cx - c.state.r,
            cy:c.state.cy,
            r:c.state.r / 2  ,
            level:c.state.level + 1,
            handleOver:this.handleOver
          } 
        ]
      },
      console.log(c)
    );
  };

  render() {
    return (
      <svg width={this.props.width} height={this.props.height}>
        <Circle
          cx={this.state.cx}
          cy={this.state.cy}
          r={this.state.r}
          children={this.state.children}
          parent={this.state.parent}
          handleOver={this.handleOver}
        />
      </svg>
    );
  }
}

export default App;
