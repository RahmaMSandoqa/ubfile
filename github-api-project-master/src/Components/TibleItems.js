import React, { Component } from "react";

export default class TibleItems extends Component {
  render() {
    const { response, index } = this.props;
    // console.log(response);
    return (
      <tr className="text-center">
        <th>{index + 1}</th>
        <td>{response[index].name}</td>
        <td>{response[index].private ? "private " : "Public"}</td>
        <td>
          {response[index].private ? (
            <input type="checkbox" checked disabled />
          ) : (
            <input type="checkbox" disabled />
          )}
        </td>
        <td>{response[index].private ? "YES " : "No"}</td>
        <td>{response[index].language}</td>
        <td>
          <a style={{ color: "#fff" }} href={response[index].clone_url}>
            {response[index].clone_url}
          </a>
        </td>
      </tr>
    );
  }
}
