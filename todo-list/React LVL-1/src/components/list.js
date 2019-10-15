import React, { Component } from "react";
import Item from "./Item";

export default class List extends Component {
  render() {
    const { rahma } = this.props;

    return (
      <div style={{ border: "green 2px dotted" }}>
        {rahma.map(elem => {
          return <Item rahma={elem} isCompleted={elem.isCompleted} />;
        })}
      </div>
    );
  }
}
