import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./LandingPage";
import TopNav from "./Components/TopNav";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import DashboardRouter from "./DashboardRouter";
import {loadDepressionScores, loadUser, loadJournals} from "./loadFunctions"


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myInfo: {},
      depressionScores: {},
      journals: {}
    };
  }

  componentDidMount() {
      Promise.all([loadUser(), loadDepressionScores(), loadJournals()]).then((reso) => {
        this.setState({ myInfo: reso[0], depressionScores: reso[1], journals: reso[2]});
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
            <DashboardRouter myInfo={this.state.myInfo} depressionScores={this.state.depressionScores} journals={this.state.journals}/>
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
