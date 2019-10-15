import React from "react";
import List from "./components/list";
class App extends React.Component {
  state = {
    moath: 1,
    colortext: "red",
    todos: [
      {
        id: 1,
        title: "eat pizza",
        isCompleted: true
      },

      {
        id: 2,
        title: "eat sban5",
        isCompleted: false
      },

      {
        id: 3,
        title: "say aseeeeeem",
        isCompleted: false
      }
    ]
  };
  edit = ID => {
    console.Log("this:", ID);
    this.setState({ colorText: "yellow" });
      let newState =  this.State.todos.map((elem,i) => {

        if (ID===elem.id){
          elem.isCompleted=!elem.isCompleted;
        }

       return elem;
        });
    this.setState({todos: newState});

  };


  delete = ID => {
    console.log("this:", ID);
      let newState =  this.State.todos.filter((elem,i) => {

       return ID ===elem.id; 
        });
    this.setState({todos: newState});
  };
   
  
  render() {
    const { state} = this;
    const { todos, moath, colorText } = state;

    console.log("this.state.todos", this.state.todos);

    return (
      <div style={{ border: "black 1px solid" }}>
        <h1 style={{ color: colorText }}>{moath}</h1>
        <button onClick={this.edit.bind(this, 3)}> toggle</button>
        {<button onClick={this.delete.bind(this, 3)}> delete </button>}

        <br />
        <List rahma={todos} />
      </div>
    );
  }
}
export default App;


