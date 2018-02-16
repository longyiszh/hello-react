import React, { Component } from 'react';

export class SwitchComponent extends Component {
  flipSwitch = () => {
    this.setState((prevState) => (
      {
        lightOn: !prevState.lightOn
      }
    ));
  };

  // constructor() {super();};

  state = { lightOn: true }

  render() {
    return (
      <section className="switch">
        <h1>[event handling]</h1>
        <button onClick={this.flipSwitch}>
          {this.state.lightOn ? 'ON' : 'OFF'}
        </button>
      </section>
    );
  }
}