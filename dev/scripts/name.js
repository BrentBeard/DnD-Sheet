import React from 'react';

class Name extends React.Component {
    constructor() {
        super();
        this.state = {
            class : "",
            background: "",
            race: "",
            align: "",
            name: "",
            list: []
        };
        this.addList = this.addList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        const dbref = firebase.database().ref(`/${this.props.userID}/Name`);
        
        dbref.on('value', (snapshot) => {

            const data = snapshot.val();
            const state = [];

            for (let key in data) {

                state.push(data[key]);
            }

            this.setState({
                list: state
            });
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    addList(e) {
        e.preventDefault();
        const listNew = {
            class: this.state.class,
            background: this.state.background,
            race: this.state.race,
            align: this.state.align,
            name: this.state.name,
        };
        const newState = Array.from(this.state.list);
        newState.push(listNew);
        this.setState({
            list: newState,
            class: "",
            background: "",
            race: "",
            align: "",
            name: "",
        });
        const dbName = firebase.database().ref(`/${this.props.userID}/Name`);
        dbName.push(listNew);

    }

    render() {
        return (
            <div>
                <form onSubmit={this.addList}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"
                        value={this.state.name}
                        onChange={this.handleChange} />

                    <label htmlFor="class">Class:</label>
                    <input id="class" type="text" value={this.state.class} onChange={this.handleChange} />

                    <label htmlFor="race">Race:</label>
                    <input id="race" type="text" value={this.state.race} onChange={this.handleChange} />

                    <label htmlFor="align">Alignment:</label>
                    <input id="align" type="text" value={this.state.align} onChange={this.handleChange} />

                    <label htmlFor="background">Background:</label>
                    <input id="background" type="text" value={this.state.background} onChange={this.handleChange} />
                    
                    <input type="submit" value="submit" />
                </form>
                
                    {this.state.list.map((item, i) => {
                        return (
                            <div key={i}>
                            <p>{item.name}</p>
                            <p>{item.class}</p>
                            <p>{item.race}</p>
                            <p>{item.align}</p>
                            <p>{item.background}</p>
                            </div>
                        )
                    })}   
            </div>
        )
    }
}

export default Name;