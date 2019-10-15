import React, { Component } from "react";
export default class Item extends Component {
  state = {
    Bitar: 77
  };
  toggleIscompleted = () => {
    console.log("toggleIscompleted called");
  };

  render() {
    const { rahma, isCompleted } = this.props;
    const { toggleIscompleted } = this;
    console.log("this.props", this.props.a);

    return (
      <div style={{ border: "red 2px solid" }}>
        <p>
          <input
            onClick={toggleIscompleted}
            type="checkbox"
            defaultChecked={isCompleted}
          />
          <p style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
            {rahma.id}-{rahma.title}
          </p>
        </p>
      </div>
    );
  }
}
