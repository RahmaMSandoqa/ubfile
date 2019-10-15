// Q3: Tasks Component (there are 8 mistakes)

import React, { Component } from 'react';
// WRITE || EDIT THE CODE UNDER THIS LINE
import Item from './Item';

// WRITE || EDIT THE CODE UNDER THIS LINE
class Tasks extends React Component {
  state = {
    day: "Sat"
  };
  changeDay() {
    // WRITE || EDIT THE CODE UNDER THIS LINE
    day = 'sat'
  }
  render() {
    return (
      <div>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <h1>{Tasks Component:this. state.day}</h1>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE */}
        <button onClick={ this.setState.changeDay}>Change Tasks </button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE*/}
        <button onClick={this.setState.changeTitle}>Change App State</button>
        {/* WRITE || EDIT THE CODE UNDER THIS LINE *2 */}
        day.map((elem)=>{
          return (
            <Item e={elem}/>

          );
        })
      </div>
    );
  }
}