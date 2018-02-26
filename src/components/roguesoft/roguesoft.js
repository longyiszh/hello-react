import React, { Component } from 'react';
import './roguesoft.css';

export class RoguesoftComponent extends Component {

  data = [
    {
      id: "0x000001",
      name: "One安全卫士",
      link: "http://www.360.cn/wshd/safev6.html",
      damage: 4
    },
    {
      id: "0x000002",
      name: "疼驯电饭煲管家",
      link: "https://guanjia.qq.com/?ADTAG=media.buy.baidu.SEM",
      damage: 4
    },
    {
      id: "0x000003",
      name: "今山毒爸",
      link: "http://sem.duba.net/sem/top/f93.shtml?sfrom=206&keyID=0010",
      damage: 5
    },
    {
      id: "0x000004",
      name: "醉心毒杀软件",
      link: "http://antivirus.rising.com.cn/",
      damage: 3
    },
    {
      id: "0x000005",
      name: "白毒卫视",
      link: "http://rj.baidu.com/soft/detail/17456.html?ald",
      damage: 5
    }
  ];

  rsList = () => {
    let listItem = this.data.map((rgsoft)=>{
      return (
        <article key={rgsoft.id}>
          <p> <a href={rgsoft.link} target="_blank">{rgsoft.name}</a></p>
          <p>威力：{rgsoft.damage}星</p>
        </article>
      )
    });
    return listItem;
  };

  render() {
    return (
      <div>
        <h1>流氓软件风云榜</h1>
        <h2>[list and keys]</h2>
        <div className="row">
          {this.rsList()}
        </div>
      </div>
    );
  }

}