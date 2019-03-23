import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import RedditContainer from "./main/RedditContainer";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <RedditContainer />
      </React.Fragment>
    );
  }
}

export default App;
