import React, { Component } from 'react';

import { EasterEggComponent } from "./easteregg";
import { NormalComponent } from "./normal";

export class GreetComponent extends Component {

  currentTime = new Date();

  render() {

    let slot = <NormalComponent />;
    let hours = this.currentTime.getHours();
    
    let tip = false;
    if (hours >= 21 || hours < 6) {
      tip = true;
    }

    if (this.props.daruabao) {
      slot =  <EasterEggComponent />
    }

    return (
      <section className="greet">
        <h1>Hello, {this.props.name}!</h1>

        <h2>[props, conditional rendering]</h2>

        { slot }

        <h3>温馨提示：现在是 {tip? '半夜三更': '大好日间'} 时段</h3>

        { tip &&
          <h3>(夜深了)都已经这么晚了，你是不是应该睡了!!!</h3>
        }

        { !tip &&
          <h3>(大白天)太阳当空照，请您勿睡觉！</h3>
        }
        
      </section>
    );


  }
}