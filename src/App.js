import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./General/Header.js";
import Footer from "./General/Footer.js";
import Home from "./General/Home.js";
import Blog from "./General/Blog.js";
import Book from "./Book/Book.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/blog">
            <Header />
            <Blog />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <h2>About</h2>
            <Footer />
          </Route>
          <Route path="/tennis-book">
            <Header />
            <Book />
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
