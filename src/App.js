import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ClockComponent } from "./clock/clock";
import { GreetComponent } from "./greet/greet";
import { SwitchComponent } from "./switch/switch";
import { RoguesoftComponent } from "./roguesoft/roguesoft";
import { ApplicationComponent } from "./application/application";

class App extends Component {
  render() {
    return (
      <section className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello React</h1>
        </header>
        <main>
          <div className="content">
            <ClockComponent />
            <hr/>
            {/* Try changing to daruabao={true}: */}
            <GreetComponent name="Noto" daruabao={false} />
            <hr/>
            <SwitchComponent />
            <hr/>
            <RoguesoftComponent />
            <hr />
            <ApplicationComponent />
          </div>
        </main>
      </section>
    );
  }
}

export default App;
