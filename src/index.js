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
import NewJournal from "./Dashboard/NewJournal"

import Anxiety from "./questionaires/Anxiety"

class Main extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        myInfo: {}
    }
  }

  componentDidMount() {
      fetch('/api/user', {
          method: 'GET'
      })
      .then(res => {
          return res.json()
      })
      .then(res => {
          this.setState({myInfo: res[0]})
      })
      .catch(err => {
          console.log(err)
          alert('An error occurred while loading the page.')
      })
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
              <TopNav isHome={true} myInfo={this.state.myInfo}></TopNav>
              <ListView myInfo={this.state.myInfo} />
          </Route>
          <Route path="/dashboard/graph" >
              <TopNav isHome={true} myInfo={this.state.myInfo}></TopNav>
              <GraphView myInfo={this.state.myInfo} />
          </Route>
          <Route path="/dashboard/journal">
              <TopNav isHome={true}></TopNav>
              <JournalView myInfo={this.state.myInfo} />
          </Route>
          <Route path="/dashboard/journal/new">
              <TopNav isHome={true}></TopNav>
              <NewJournal myInfo={this.state.myInfo} />
          </Route>

          <Route path="/dashboard/anxiety">
              <TopNav isHome={true}></TopNav>
              <Anxiety myInfo={this.state.myInfo} />
          </Route>

          <Route exact path="/">
            <div>
              <TopNav isLanding={true}></TopNav>
              <LandingPage myInfo={this.state.myInfo}></LandingPage>
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
