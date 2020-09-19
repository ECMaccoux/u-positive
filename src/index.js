import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import TopNav from "./Components/TopNav";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import DashboardRouter from "./DashboardRouter";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myInfo: {},
    };
  }

  componentDidMount() {
    fetch("/api/user", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
          if(res[0]) {
            this.setState({ myInfo: res[0] });
          }
      })
      .catch((err) => {
        console.log(err);
        alert("An error occurred while loading the page.");
      });
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <TopNav isHome={true} myInfo={this.state.myInfo}></TopNav>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <DashboardRouter myInfo={this.state.myInfo} />
          </Route>
          <Route exact path="/">
            <LandingPage myInfo={this.state.myInfo}></LandingPage>
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
