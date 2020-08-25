import React from "react";
import stringHash from "string-hash";

const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0x1000000)
    .toString(16)
    .padStart(6, 0)}`;

class Circle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parent: props.parent || false,
      children: props.children || [],
      cx: props.cx || 128,
      cy: props.cy || 128,
      level: props.level || 0,
      r: props.r || 256,
      color: randomHexColor(),
      opacity: 0,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ opacity: 0.7 });
    }, 0);
  }
  render() {
    return (
      <>
        <circle
          cx={this.state.cx}
          cy={this.state.cy}
          r={this.state.r}
          onMouseOver={() => {
            this.props.handleOver(this);
          }}
          style={{ fill: this.state.color, opacity: this.state.opacity }}
        />
        {this.state.children.map((child) => {
          return (
            <Circle
              key={child.key}
              parent={child.parent}
              cx={child.cx}
              cy={child.cy}
              r={child.r}
              handleOver={child.handleOver}
            />
          );
        })}
      </>
    );
  }
}

export default Circle;
