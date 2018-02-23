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
          </form>
        </div>
        
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
