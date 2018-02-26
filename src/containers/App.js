import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import './App.css';

import { ClockComponent } from "../components/clock/clock";
import { GreetComponent } from "../components/greet/greet";
import { SwitchComponent } from "../components/switch/switch";
import { RoguesoftComponent } from "../components/roguesoft/roguesoft";
import { ApplicationComponent } from "../components/application/application";
import { XiaomajiaComponent } from '../components/xiaomajia/xiaomajia';

// actions
import { setName } from "../actions/user.action";

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
            <hr/>
            <XiaomajiaComponent name={this.props.user.name} replaceUser={() => { this.props.setName("longyiszh") }} />
          </div>
        </main>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
