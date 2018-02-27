import React from 'react';

class HealthAndSpeed extends React.Component {
    constructor() {
        super();
        this.state = {
            ac: "",
            init: 10,
            spd: 10,
            hp: 10,
            list: []
        }
        this.values = this.values.bind(this);
        this.add = this.add.bind(this);
    }
    componentDidMount() {
        const dbref = firebase.database().ref(`/${this.props.userID}/HealthAndSpeedBox`);

        dbref.on('value', (snapshot) => {

            const data = snapshot.val();
            const state = [];

            for (let key in data) {

                state.push(data[key]);
            }
            // console.log(state);

            this.setState({
                list: state
            });
        });
    }

    add(e) {
        e.preventDefault();
        const newTotals = {
            ac: this.state.ac,
            init: this.state.init,
            spd: this.state.spd,
            hp: this.state.hp
        }
        const newState = Array.from(this.state.list);

        newState.push(newTotals);

        // console.log(newArray);

        this.setState({
            list: newState,
            ac: "",
            init: "",
            spd: "",
            hp: ""
        });
        const dbHealth = firebase.database().ref(`/${this.props.userID}/HealthAndSpeedBox`)
        dbHealth.push(newTotals);

        // console.log(newTotals);
        // console.log(this.state);
        
    }


    values(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
        // console.log(this.state);
    }

    render() {
        return (
                <div className="healthSpeedBox">
                    <form onSubmit={this.add}>
                        <label htmlFor="ac">Armor Class</label>
                        <input id="ac" type="number" onChange={this.values} />
                    {this.state.list.map((item, i) => {
                        return (<p key={i}>{item.ac}</p>)})}

                        <label htmlFor="init">Initiative</label>
                        <input id="init" type="number" onChange={this.values} />
                        {this.state.list.map((item, i) => {
                        return (<p key={i}>{item.init}</p>)})}

                        <label htmlFor="spd">Speed</label>
                        <input id="spd" type="number" onChange={this.values} />
                    {this.state.list.map((item, i) => {
                        return (<p key={i}>{item.spd}</p>)
                    })}

                        <label htmlFor="hp">Hit Points</label>
                        <input id="hp" type="number" onChange={this.values} />
                    {this.state.list.map((item, i) => {
                        return (<p key={i}>{item.hp}</p>)
                    })}

                        <input type="submit" value="submit"/>
                    </form>
                    <ul>
                        
                    </ul>
                </div>
        )
    }
}

export default HealthAndSpeed;