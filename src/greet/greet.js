import React, { Component } from 'react';

export class GreetComponent extends Component {

  render() {
    return (
      <section className="greet">
        <h1>Hello, {this.props.name}!</h1>
        <h2>[props]</h2>
      </section>
      
    );
  }
}