import React from 'react';
import ReactDOM from 'react-dom';
import Equipment from './equipment.js';
import Languages from './lang.js';
import Background from './background.js';
import Weapons from './weapons.js';
import HealthAndSpeed from './healthAndSpeedBox.js'
import AbilityScores from './abilityScores.js'

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
      loggedIn: false,
      user: {},
      userText: ''
    }
    this.goodbye = this.goodbye.bind(this);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((userRes) => {
      console.log(userRes);
      if (userRes) {
        this.setState({
          loggedIn: true,
          user: userRes
        })
      } else {
        this.setState({
          loggedIn: false,
          user: {}
        })
      }

    })
  }

  signIn() {
    console.log("Singing");
    //creating a new instance of google auth provider
    const provider = new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: 'select_account'
    })

    firebase.auth().signInWithPopup(provider)
      .then((userRes) => {
        // console.log(userRes);
      })
  }
  goodbye() {
    console.log('see ya fam');
    firebase.auth().signOut();

    this.setState({
      loggedIn: false
    })
  }

    render() {
      return (
          <div>
          {this.state.loggedIn === true ?
            <div>
              <div>
                <h2>Welcome, {this.state.user.displayName}</h2>
                <form onSubmit={this.addText}>
                  <input id="userText" onChange={this.handleChange} type="text" value={this.state.userText} />
                  <input type="submit" />
                </form>
                <button onClick={this.goodbye}>Sign out!</button>
              </div>
              <AbilityScores />
              <Equipment />
              <HealthAndSpeed />
              <Languages />
              <Background />
              <Weapons />
            </div>
             :
            <div>
              <h2>Welcome Please sign in</h2>
              <button onClick={this.signIn}>Sign in with Google</button>
            </div>
          }
            
          </div>
      
      )

      
      
      

        
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
