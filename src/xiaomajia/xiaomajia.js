import React, { Component } from 'react';

export class XiaomajiaComponent extends Component {

  render() {
    return (

      <section className="xiaomajia">
        <h1>Welcome xiaomajia {this.props.name}!</h1>
        <p><small>[react-redux]</small></p>
        <button onClick={this.props.replaceUser}>Rub Him!</button>
      </section>

    );
  }
}