import React, { Component } from 'react';

export class ClockComponent extends Component {
  timerID;

  tick = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  };

  // constructor() {super();}

  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>clock snapshot</h1>
        <p>[state, life-cycle]</p>
        <h2>It is now {this.state.time}.</h2>
      </div>
    );
  }
}