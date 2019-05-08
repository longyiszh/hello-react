import React from 'react';
import './registration.css';

export default class Registration extends React.Component {

  state = {
    name: "",
    password: "",
    talent: "dagou"
  };

  talentOptions = {
    ruamao: "rua猫",
    dagou: "打狗",
    qimama: "气妈妈"
  }


  changeState = (e) => {
    let name = e.target.name;
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({[name]: value});
    // []里面写动态key
  };

  composeTalentOptions = () => {
    let tolist = [];
    for (let key in this.talentOptions) {
      tolist.push(
        <option key={key} value={key}>{this.talentOptions[key]}</option>
      )
    }
    return tolist;
  };

  submitForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <section className="application">
        <h2>[Controlled component]</h2>
        <p>('2-way' binding in React's perspective)</p>
        <form>
          <main className="input">
            <div className="name">
              <input type="text" placeholder="username" name="name" maxLength="100" required value={this.state.name} onChange={this.changeState} />
              {/* 设个value={this.state.xxx}是为了从state处传入初始值。 */}
              {/* 而这个初始值可以从props里面取 */}
              {/* React的官方文档说建议把state整成"The single source of truth" */}
            </div>
            <div className="password">
              <input type="password" placeholder="password" name="password" maxLength="100" required value={this.state.password} onChange={this.changeState}/>
            </div>
            <div className="talent">
              <span>My talent:</span>
              <select name="talent" value={this.state.talent} onChange={this.changeState}>
                {this.composeTalentOptions()}
              </select>
            </div>
          </main>
          <section className="preview">
            {this.state.name.length > 0 && <p>Your name provided is: <span className="highlight">{this.state.name}</span> ,</p>}
            {this.state.password.length > 0 && <p>and luckily your password <span className="highlight">{this.state.password}</span> has already been compromised.</p>}
            <p>Since you are so scared, suddenly your talent <span className="highlight">{this.talentOptions[this.state.talent]}</span> has been bursted out by yourself.</p>
          </section>
          <footer>
            <button onClick={this.submitForm}>Submit</button>
          </footer>
        </form>
      </section>
    );
  }
}