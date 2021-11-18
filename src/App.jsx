import { Component } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/homepage/Home";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
