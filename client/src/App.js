import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Checklist from "./components/Checklist";
import Done from "./components/Done";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/checklist" component={Checklist} />
            <Route path="/done" component={Done} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
