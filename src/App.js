import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Home/Header.js";
import Footer from "./Home/Footer.js";
import Home from "./Home/Home.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/blog">
            <Header />
            <h2>Blog Articles on Scroll/Paginated</h2>
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <h2>About</h2>
            <Footer />
          </Route>
          <Route path="/tennis-book">
            <Header />
            <h2>Tennis Booking Calendar System</h2>
            <Footer />
          </Route>
          <Route path="/profile">
            <Header />
            <h2>Profile</h2>
            <Footer />
          </Route>
          <Route path="/login">
            <Header />
            <h2>Login/Register/Logout</h2>
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
