import React from 'react';
import ReactDOM from 'react-dom';
import Equipment from './equipment.js';
import Languages from './lang.js';
import Background from './background.js';
import Weapons from './weapons.js';
import HealthAndSpeed from './healthAndSpeedBox.js'
import AbilityScores from './abilityScores.js'
import Name from './name.js'

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
    }
    this.goodbye = this.goodbye.bind(this);
    const dbRef = firebase.database().ref(`/${this.state.user.uid}`)
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
                <h1>Adventure on, {this.state.user.displayName}</h1>
                <button onClick={this.goodbye}>Sign out!</button>
              </div>
              <Name userID={this.state.user.uid} />
              <AbilityScores userID={this.state.user.uid} />
              <Equipment userID={this.state.user.uid}/>
              <HealthAndSpeed userID={this.state.user.uid}/>
              <Languages userID={this.state.user.uid}/>
              <Background userID={this.state.user.uid}/>
              <Weapons userID={this.state.user.uid}/>
            </div>
             :
            <div className="welcomeBox">
              <h2>Welcome Please sign in</h2>
              <button className="signOutButton" onClick={this.signIn}>Sign in with Google</button>
            </div>
          }
            
          </div>
      
      )

      
      
      

        
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
