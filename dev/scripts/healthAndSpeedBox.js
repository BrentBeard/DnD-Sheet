import React from 'react';

class HealthAndSpeed extends React.Component {
    constructor() {
        super();
        this.state = {
            ac: 10,
            init: 10,
            spd: 10,
            hp: 10,
        }
        this.values = this.values.bind(this)
    }
    values(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
                <div className="healthSpeedBox">
                    <form>
                        <label htmlFor="ac">Armor Class</label>
                        <input id="ac" type="number" onChange={this.values} />

                        <label htmlFor="init">Initiative</label>
                        <input id="init" type="number" onChange={this.values} />

                        <label htmlFor="spd">Speed</label>
                        <input id="spd" type="number" onChange={this.values} />

                        <label htmlFor="hp">Hit Points</label>
                        <input id="hp" type="number" onChange={this.values} />
                    </form>
                </div>
        )
    }
}

export default HealthAndSpeed;