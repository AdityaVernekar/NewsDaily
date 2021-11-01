import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  state = {
    progress: 0,
    apiKey:'672b157a42e14ceea4f559fbacb3ed96'
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
       
      /> 
          <Switch>
            <Route exact path="/"><News setProgress = {this.setProgress} apikey={this.state.apiKey}  key="general" pageSize={9} country="in" category="general" /></Route>
            <Route exact path="/business"><News setProgress = {this.setProgress} apikey={this.state.apiKey}  key="business" pageSize={9} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News setProgress = {this.setProgress} apikey={this.state.apiKey}  key="entertainment" pageSize={9} country="in" category="entertainment" /></Route>
            <Route exact path="/health"><News setProgress = {this.setProgress} apikey={this.state.apiKey}  key="health" pageSize={9} country="in" category="health" /></Route>
            <Route exact path="/science"><News setProgress = {this.setProgress} apikey={this.state.apiKey}   key="science"pageSize={9} country="in" category="science" /></Route>
            <Route exact path="/sports"><News setProgress = {this.setProgress} apikey={this.state.apiKey}  key="sports" pageSize={9} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News setProgress = {this.setProgress} apikey={this.state.apiKey}  key="technology" pageSize={9} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
