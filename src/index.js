import React from "react";
import ReactDOM from "react-dom";
import FrontPage from "./FrontPage";
import TopNav from "./Components/TopNav";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Register from "./authentication/Register";
import Login from "./authentication/Login";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <div>
              <TopNav></TopNav>
              <FrontPage></FrontPage>
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
