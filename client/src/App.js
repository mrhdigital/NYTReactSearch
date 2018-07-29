import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Sharks from "./components/Sharks";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path="/sharks" component={Sharks} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
