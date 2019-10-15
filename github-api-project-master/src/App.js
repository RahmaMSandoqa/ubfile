import React, { Component } from "react";
import axios from "axios";
import Search from "./Components/Search";
import Table from "./Components/Table";
export default class App extends Component {
  state = {
    repos: [],
    isLodded: false
  };

  // getData
  getData = title => {
    this.setState({
      userName: title
    });
    // console.log(title);

    let request = `https://api.github.com/users/${title}/repos`;
    // console.log(request);
    axios
      .get(request)
      .then(response => {
        // console.log(response.data);
        this.setState({
          repos: response.data,
          isLodded: true
        });
      })
      .catch(error => {
        console.log(
          "the api call might have been locked for today, we will use the static data"
        );
        console.log(error);
      });
  };
  render() {
    return (
      <div className="container-fluid">
        <Search userName={this.userName} getData={this.getData} />
        {this.state.isLodded && this.state.repos.length < 1 ? (
          <h1 className="text-center">No User Find </h1>
        ) : (
          <Table response={this.state.repos} />
        )}
      </div>
    );
  }
}
