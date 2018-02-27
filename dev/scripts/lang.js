import React from 'react';

class Languages extends React.Component {
    constructor() {
        super();
        this.state = {
            listItem: "",
            list: [],
            
        }
        //THROW YOUR BINDS HERE BRUV!
        this.addList = this.addList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        const dbref = firebase.database().ref(`/${this.props.userID}/Languages`);

        dbref.on('value', (snapshot) => {
            // console.log(snapshot.val());
            const data = snapshot.val();
            const state = [];
            // console.log(data);
            for (let key in data) {
                // console.log(data.key);
                // console.log(data[key]);
                // Ki ki's key exchange
                // Here we use the value stored in the key
                // variable to access the object stored at that location.
                //Then we add a new property to that object, called key(confusing right?)
                //And assign it the value of, key.
                // data[key].key = key;
                state.push(data[key]);
            }
            // console.log(state);

            this.setState({
                list: state
            });
        });
    }
    addList(e) {
        e.preventDefault();
        // const listNew = {
        //     listItems: this.state.listItem
        // };
        // console.log(listNew)
        // const newState = Array.from(this.state.list);
        // newState.push(this.state.listItem);
        // this.setState({
        //     list: newState,
        //     listItem: ""
        // });
        const dbLang = firebase.database().ref(`/${this.props.userID}/Languages/`)
        dbLang.push(this.state.listItem);
        // console.log(newLangList);
        this.setState({
            listItem: "",
        })
        // console.log(this.state.listItem);
        // console.log(this.state.list);
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div className="langBox">
                <h2>Languages & Proficiencies</h2>
                <form onSubmit={this.addList}>
                    <input type="text" id="listItem"
                        value={this.state.listItem}
                        onChange={this.handleChange} />
                    <input type="submit" value="submit" />
                </form>
                <ul>
                    {this.state.list.map((listFinal, i) => {
                        return (
                            <li key={i}>
                                <p>{listFinal}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Languages;