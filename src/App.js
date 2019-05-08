import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

// elements
import Clock from "./components/clock";

// views
import Header from "./components/header";
import Index from "./views/index";
import Http404 from "./views/http404";
import Registration from "./views/registration";

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Clock />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/index">index</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/404">404</Link>
              </li>
            </ul>
          </nav>

          <Switch>

            <Route exact path="/" render={() => ( <Redirect to="/index"/> )}/>
            <Route path="/index" component={Index} />
            <Route path="/registration" component={Registration} />
            <Route component={Http404} />
            
          </Switch>

        </Router>
      </div>
    );
  }

}
