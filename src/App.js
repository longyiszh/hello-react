import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ClockComponent } from "./clock/clock";
import { GreetComponent } from "./greet/greet";
import { SwitchComponent } from "./switch/switch";

class App extends Component {
  render() {
    return (
      <section className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello React</h1>
        </header>
        <main>
          <ClockComponent />
          <hr/>
          <GreetComponent name="Noto" />
          <hr/>
          <SwitchComponent />

        </main>
      </section>
    );
  }
}

export default App;
