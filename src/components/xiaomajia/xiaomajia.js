import React from 'react';

export const XiaomajiaComponent = (props) => {

    return (
      <section className="xiaomajia">
        <h1>Welcome xiaomajia {props.name}!</h1>
        <h2>AGE: {props.age}</h2>
        <p><small>[react-redux]</small></p>
        <button onClick={props.replaceUser}>Rub Him!</button> 
        <button onClick={props.downgrade}>Hammer Him!(async action)</button>
      </section>
    );
}