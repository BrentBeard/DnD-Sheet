import React from 'react';

class Weapons extends React.Component {
    constructor() {
        super();
        this.state = {
            listItem: "",
            atkBonus: 0,
            dType: "",
            list: []
        };
        //THROW YOUR BINDS HERE BRUV!
        this.addList = this.addList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        const dbref = firebase.database().ref(`/${this.props.userID}/Weapons`);

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
    addList(e) {
        e.preventDefault();
        const listNew = {
            listItems: this.state.listItem,
            atkBonus: this.state.atkBonus,
            dType: this.state.dType
        };
        console.log(listNew)
        const newState = Array.from(this.state.list);
        newState.push(listNew);
        this.setState({
            list: newState,
            listItem: "",
            atkBonus: "",
            dType: ""
        });
        const dbWeapons = firebase.database().ref(`/${this.props.userID}/Weapons`)
        dbWeapons.push(listNew)
        console.log(this.state.list);
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h2>Attacks</h2>
                <form onSubmit={this.addList}>
                    <label htmlFor="listItem">Weapon:</label>
                    <input type="text" id="listItem"
                        value={this.state.listItem}
                        onChange={this.handleChange}/>
                        <label htmlFor="atkBonus">Atk Bonus</label>
                        <input id="atkBonus" type="number" value={this.state.atkBonus} onChange={this.handleChange}/>
                        <label htmlFor="dType">Dice</label>
                        <input id="dType" type="text" value={this.state.dType} onChange={this.handleChange}/>
                    <input type="submit" value="submit" />
                </form>
                <ul>
                    {this.state.list.map((listFinal, i) => {
                        return (
                            <li key={i}>
                                <p><span>{listFinal.listItems}</span><span>{listFinal.atkBonus}</span><span>{listFinal.dType}</span></p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Weapons;