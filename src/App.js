import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/header";
import Index from "./views/index";
import Http404 from "./views/http404";

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/index">index</Link>
              </li>
              <li>
                <Link to="/404">404</Link>
              </li>
            </ul>
          </nav>
          <main className="router">
            <Route path="/" exact component={Index} />
            <Route path="/index" component={Index} />
            <Route path="/404" exact component={Http404} />
          </main>
        </Router>
      </div>
    );
  }

}
