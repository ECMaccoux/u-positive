import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./LandingPage";
import TopNav from "./Components/TopNav";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import Dashboard from "./Dashboard"

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
          <Route path="/dashboard">
              <TopNav isHome={true}></TopNav>
              <Dashboard />
          </Route>
          <Route path="/login">
              <Login />
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
