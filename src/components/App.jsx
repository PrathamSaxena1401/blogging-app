import React, { Component } from "react";
import Posts from "./Posts";
import Post from "./post";
import { Router } from "@reach/router";
function App(props) {
  return (
    <div className="app_container">
      <Router>
        <Posts default />
        <Post path="post/:id" />
      </Router>
    </div>
  );
}
export default App;
