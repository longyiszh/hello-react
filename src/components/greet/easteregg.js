import React, { Component } from 'react';

export class EasterEggComponent extends Component {

  render() {
    return (
      <section className="greet-easteregg">
        <h1>【触发彩蛋！】由于您颜值过高，系统已自动为您推荐几首歌，请您欣赏：</h1>
        <ul>
          <li>Gao xiao de ma ma bing gan guang</li>
          <li>Bing gan gao xiao bing gan mao, mo mo bing gan mo mo mao, mo wan bing gan mo mao mao</li>
          <li>Dong ci da ci, dong ci da ci, dong ci da ci, dong ci da ci (nn di gua la hua jian jiao jiao, pa pa!)</li>
        </ul>
      </section>
      
    );
  }
}