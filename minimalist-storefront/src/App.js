// libs
import React, { Component } from "react";

// components
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Playground from "./pages/Playground";

// assets
import "./Reset.css";
import "./Global.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout className="App">
        {/* <HomePage /> */}
        <Playground />
      </Layout>
    );
  }
}

export default App;
