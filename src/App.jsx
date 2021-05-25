import React from "react";
import Header from "./Header";
import Home from "./Home";
import YouTube from "./YouTube";
import Channel from "./Channel";
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header
          brandName="Sambhav Sarswat"
          link1="Home"
          link2="YouTube Videos"
          link3="YouTube channel"
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Videos">
            <YouTube />
          </Route>
          <Route exact path="/Channel">
            <Channel />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
