import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Courses from './components/courses'
import AddCourse from './components/addCourse'

function App() {

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
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/course">
            <AddCourse />
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
        Learn React, Redux and React Router for fast performing Web Applications
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
  return (
    <h2>Oopsie! Page Not Found! Please check your URL.</h2>
  );
}

export default App;
