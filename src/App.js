import React, { Component } from "react";

import "./App.css";
import AnimalList from "./AnimalList";

class App extends Component {
  render() {
    return (
      <div>
        <h1>APP</h1>
        <AnimalList />
      </div>
    );
  }
}

export default App;
