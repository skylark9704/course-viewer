import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Courses from './components/courses/Courses'

export default function App() {

  let navItems = [
    {label:"Home", route:'/', exact:true},
    {label:"Courses", route:'/courses'},
    {label:"About",route:'/about'}
  ]
  return (
    <Router>
      <div className="container">
        <Navbar items={navItems} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Pluralsight Administration</h1>
      <p className="lead">
        Lean React, Redux and React router for fast performing Web Applications
      </p>
      <Link className="btn btn-primary" to="/about">
        Learn More
      </Link>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        This app uses React, Redux and React Router and many other helpful
        libraries
      </p>
    </div>
  );
}

function PageNotFound() {
  setTimeout(() => {
    window.location.href = "/";
  }, 3000);
  return (
    <h2>Oopsie! Page Not Found, You will be redirected to home in 3 seconds</h2>
  );
}
