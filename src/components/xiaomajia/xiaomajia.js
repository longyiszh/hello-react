import React from 'react';

export const XiaomajiaComponent = (props) => {

    return (
      <section className="xiaomajia">
        <h1>Welcome xiaomajia {props.name}!</h1>
        <p><small>[react-redux]</small></p>
        <button onClick={props.replaceUser}>Rub Him!</button>
      </section>
    );
}