import React, { Component } from "react";
import TibleItems from "./TibleItems";
export default class Table extends Component {
  render() {
    // console.log(this.props.response);
    const { response } = this.props;
    // console.log(response);
    return (
      <table className="table table-dark">
        <thead className="text-center">
          <tr>
            <th scope="col">number</th>
            <th scope="col">Name</th>
            <th scope="col">rebo state</th>
            <th scope="col">Check</th>
            <th scope="col">Private</th>
            <th scope="col">Languge</th>
            <th scope="col">Url</th>
          </tr>
        </thead>
        <tbody>
          {response.map((x, index) => {
            return <TibleItems key={index} index={index} response={response} />;
          })}
        </tbody>
      </table>
    );
  }
}
