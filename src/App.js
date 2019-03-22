import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import AddTodo from "./app/containers/addTodo";
import Footer from "./app/components/footer";
import VisibleTodoList from "./app/containers/visibleTodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default App;
