import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";

import LandingPage from "./LandingPage";
import TopNav from "./Components/TopNav";

import Register from "./authentication/Register";
import Login from "./authentication/Login";

import ListView from "./Dashboard/ListView"
import GraphView from "./Dashboard/GraphView"
import JournalView from "./Dashboard/JournalView"

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route path="/register">
              <TopNav isLanding={false}></TopNav>
              <Register />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          
          <Route path="/dashboard">
              <TopNav isHome={true}></TopNav>
              <ListView />
          </Route>
          <Route path="/dashboard/graph">
              <TopNav isHome={true}></TopNav>
              <GraphView />
          </Route>
          <Route path="/dashboard/journal">
              <TopNav isHome={true}></TopNav>
              <JournalView />
          </Route>

          <Route exact path="/">
            <div>
              <TopNav isLanding={true}></TopNav>
              <LandingPage></LandingPage>
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const wrapper = document.getElementById("root");
wrapper
  ? ReactDOM.render(<Main />, wrapper)
  : console.log("Unable to locate root");
