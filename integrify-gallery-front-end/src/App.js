import React, { Component } from "react";
import "./App.css";
import Students from "./students.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Integrify Students Photo Gallery </h3>
        <Students />
      </div>
    );
  }
}

export default App;
