import React, { Component } from "react";

export default class Search extends Component {
  state = {
    searchTitle: ""
  };

  onChange = e => this.setState({ searchTitle: e.target.value });

  render() {
    const { getData } = this.props;
    return (
      <div className="input-group ">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="add Git Hub Name"
          value={this.state.title}
          onChange={this.onChange}
        />
        <div className="input-group-append">
          <button
            className="input-group-text"
            onClick={getData.bind(this, this.state.searchTitle)}
          >
            get Data
          </button>
        </div>
      </div>
    );
  }
}
