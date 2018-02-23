import React from 'react';
import ReactDOM from 'react-dom';

var config = {
  apiKey: "AIzaSyBk3culam82m0j9_ToifzRLFszPs7rOSz8",
  authDomain: "character-sheet-26fb2.firebaseapp.com",
  databaseURL: "https://character-sheet-26fb2.firebaseio.com",
  projectId: "character-sheet-26fb2",
  storageBucket: "",
  messagingSenderId: "76450565623"
};
firebase.initializeApp(config);



class App extends React.Component {
  constructor() {
    super();
    this.state = {
        str: 10,
        dex: 10,
        con: 10,
        intel: 10,
        wis: 10,
        cha: 10 
    }
    console.log(this.state);
    this.abScore = this.abScore.bind(this)
  }
      abScore(e) {
//take number value of input. divide that input by 2 and subtract 5 render that value in the p tag 

        this.setState({
          [e.target.id] : e.target.value
        });
      }
      modify(score) {
        let newScore = (score / 2) - 5;
        let modScore = Math.floor(newScore);
        return modScore
      }
    render() {
      return (
        <div>
          <form>
            <div className="abilityScores"> 
              <label htmlFor="str">Strength</label>
              <input id="str" type="number" onChange={this.abScore}/>
              <p>{this.modify(this.state.str)}</p>
  
              <label htmlFor="dex">Dexterity</label>
              <input id="dex" type="number" onChange={this.abScore}/>
              <p>{this.modify(this.state.dex)}</p>
  
              <label htmlFor="con">Constitution</label>
              <input id="con" type="number" onChange={this.abScore}/>
              <p>{this.modify(this.state.con)}</p>
  
              <label htmlFor="intel">Intelligence</label>
              <input id="intel" type="number" onChange={this.abScore}/>
              <p>{this.modify(this.state.intel)}</p>
  
              <label htmlFor="wis">Wisdom</label>
              <input id="wis" type="number" onChange={this.abScore}/>
              <p>{this.modify(this.state.wis)}</p>
  
              <label htmlFor="cha">Charisma</label>
              <input id="cha" type="number" onChange={this.abScore}/>
              <p>{this.modify(this.state.cha)}</p>
            </div>
            <div className="saveThrows">
            <h2>Savings Throws</h2>
              <p><input id="" type="checkbox"/> {this.modify(this.state.str)} Strength</p>
              <p><input id="" type="checkbox" />  {this.modify(this.state.dex)} Dexterity</p>
              <p><input id="" type="checkbox" />  {this.modify(this.state.con)} Constitution</p>
              <p><input id="" type="checkbox" />  {this.modify(this.state.intel)} Intelligence</p>
              <p><input id="" type="checkbox" />  {this.modify(this.state.wis)} Wisdom</p>
              <p><input id="" type="checkbox" />  {this.modify(this.state.cha)} Charisma</p>
            </div>
            <div>
              {/* input inside label, vis hidden on input so it keeps its weight style label with border and background when checked */}
              <h2>Skills</h2>
              <p><label htmlFor=""><input id="" type="checkbox" /></label>{this.modify(this.state.dex)}Acrobatics<span>(Dex)</span></p>
              <p><label htmlFor=""><input id="" type="checkbox" /></label>{this.modify(this.state.wis)}Animal Handling<span>(Wis)</span></p>
              <p><label htmlFor=""><input id="" type="checkbox" /></label>{this.modify(this.state.intel)}Arcana<span>(Int)</span></p>
              <p><label htmlFor=""><input id="" type="checkbox" /></label>{this.modify(this.state.str)}Athletics<span>(Str)</span></p>
              <p><label htmlFor=""><input id="" type="checkbox" /></label>{this.modify(this.state.cha)}Deception<span>(Cha)</span></p>
              <p><label htmlFor=""><input id="" type="checkbox" /></label>{this.modify(this.state.intel)}History<span>(Int)</span></p>
              <p><label htmlFor=""><input id="" type="checkbox" /></label>{this.modify(this.state.wis)}Insight<span>(Wis)</span></p>
              <p><label htmlFor=""><input id="" type="checkbox" /></label>{this.modify(this.state.cha)}Intimidation<span>(Cha)</span></p>
              <p><label htmlFor=""><input id="" type="checkbox" /></label>{this.modify(this.state.intel)}Investigation<span>(Int)</span></p>
              <p><label htmlFor=""><input id="" type="checkbox" /></label>{this.modify(this.state.wis)}<span>()</span></p>
            </div>

          </form>
        </div>

      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
