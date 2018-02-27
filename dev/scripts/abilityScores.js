import React from 'react';

class AbilityScores extends React.Component {
    constructor() {
        super();
        this.state = {
            str: 0,
            dex: 0,
            con: 0,
            intel: 0,
            wis: 0,
            cha: 0,
            list: []
        }
        this.abScore = this.abScore.bind(this);
        this.add = this.add.bind(this);
    }
    componentDidMount() {
        const dbref = firebase.database().ref(`/${this.props.userID}/AbilityScores`);

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
    abScore(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    modify(score) {
        let newScore = (score / 2) - 5;
        let modScore = Math.floor(newScore);
        return modScore
    }

    add(e) {
        e.preventDefault();
        const newTotals = {
            str: this.state.str,
            dex: this.state.dex,
            con: this.state.con,
            intel: this.state.intel,
            wis: this.state.wis,
            cha: this.state.cha,
            list: []
        }
        const newState = Array.from(this.state.list);
        newState.push(newTotals);

        this.setState({
            list: newState,
            str: "",
            dex: "",
            con: "",
            intel: "",
            wis: "",
            cha: ""
        });
       const dbScores = firebase.database().ref(`/${this.props.userID}/AbilityScores`)
       dbScores.push(newTotals);
    //    console.log(dbScores);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.add} >
                    <div className="abilityScores">
                        <label htmlFor="str">Strength</label>
                        <input id="str" type="number" onChange={this.abScore} />
                        {this.state.list.map((item, i) => {
                            return (<h3 key={i}>{item.str}</h3>)
                        })}
                        {this.state.list.map((item, i) => {
                            return (
                                <p key={i}>{this.modify(item.str)}</p>
                            )
                        })}

                        <label htmlFor="dex">Dexterity</label>
                        <input id="dex" type="number" onChange={this.abScore} />
                        {this.state.list.map((item, i) => {
                            return (<h3 key={i}>{item.dex}</h3>)
                        })}
                        {this.state.list.map((item, i) => {
                            return (
                                <p key={i}>{this.modify(item.dex)}</p>
                            )
                        })}

                        <label htmlFor="con">Constitution</label>
                        <input id="con" type="number" onChange={this.abScore} />
                        {this.state.list.map((item, i) => {
                            return (<h3 key={i}>{item.con}</h3>)
                        })}
                        {this.state.list.map((item, i) => {
                            return (
                                <p key={i}>{this.modify(item.con)}</p>
                            )
                        })}

                        <label htmlFor="intel">Intelligence</label>
                        <input id="intel" type="number" onChange={this.abScore} />
                        {this.state.list.map((item, i) => {
                            return (<h3 key={i}>{item.intel}</h3>)
                        })}
                        {this.state.list.map((item, i) => {
                            return (
                                <p key={i}>{this.modify(item.intel)}</p>
                            )
                        })}

                        <label htmlFor="wis">Wisdom</label>
                        <input id="wis" type="number" onChange={this.abScore} />
                        {this.state.list.map((item, i) => {
                            return (<h3 key={i}>{item.wis}</h3>)
                        })}
                        {this.state.list.map((item, i) => {
                            return (
                                <p key={i}>{this.modify(item.wis)}</p>
                            )
                        })}

                        <label htmlFor="cha">Charisma</label>
                        <input id="cha" type="number" onChange={this.abScore} />
                        {this.state.list.map((item, i) => {
                            return (<h3 key={i}>{item.cha}</h3>)
                        })}
                        {this.state.list.map((item, i) => {
                            return (
                                <p key={i}>{this.modify(item.cha)}</p>
                            )
                        })}

                        <input type="submit" value="submit"/>
                    </div>
                    <div className="saveThrows">
                        <h2>Savings Throws</h2>

                        <p><label htmlFor="strThr"><input id="strThr" type="checkbox" /></label>{this.state.list.map((item, i)=>{ return this.modify(item.str)
                        })} Strength</p>

                        <p><label htmlFor="dexThr"><input id="dexThr" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.dex)
                        })} Dexterity</p>

                        <p><label htmlFor="conThr"><input id="conThr" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.con)
                        })} Constitution</p>

                        <p><label htmlFor="intelThr"><input id="intelThr" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.intel)
                        })} Intelligence</p>

                        <p><label htmlFor="wisThr"><input id="wisThr" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.wis)
                        })} Wisdom</p>

                        <p><label htmlFor="chaThr"><input id="chaThr" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.cha)
                        })} Charisma</p>
                    </div>
                    <div>
                        {/* input inside label, vis hidden on input so it keeps its weight style label with border and background when checked */}
                        <h2>Skills</h2>
                        <p><label htmlFor="acro"><input id="acro" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.dex)
                        })} Acrobatics<span>(Dex)</span></p>
                        
                        <p><label htmlFor="aniHan"><input id="aniHan" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.wis)
                        })} Animal Handling<span>(Wis)</span></p>

                        <p><label htmlFor="arc"><input id="arc" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.intel)
                        })} Arcana<span>(Int)</span></p>

                        <p><label htmlFor="ath"><input id="ath" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.str)
                        })} Athletics<span>(Str)</span></p>

                        <p><label htmlFor="dec"><input id="dec" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.cha)
                        })} Deception<span>(Cha)</span></p>

                        <p><label htmlFor="his"><input id="his" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.intel)
                        })} History<span>(Int)</span></p>

                        <p><label htmlFor="ins"><input id="ins" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.wis)
                        })} Insight<span>(Wis)</span></p>

                        <p><label htmlFor="intim"><input id="intim" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.cha)
                        })} Intimidation<span>(Cha)</span></p>

                        <p><label htmlFor="inves"><input id="inves" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.intel)
                        })} Investigation<span>(Int)</span></p>

                        <p><label htmlFor="med"><input id="med" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.wis)
                        })} Medicine<span>(Wis)</span></p>

                        <p><label htmlFor="nat"><input id="nat" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.intel)
                        })} Nature<span>(Int)</span></p>

                        <p><label htmlFor="perc"><input id="perc" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.wis)
                        })} Perception<span>(Wis)</span></p>

                        <p><label htmlFor="perf"><input id="perf" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.cha)
                        })} Performance<span>(Cha)</span></p>

                        <p><label htmlFor="pers"><input id="pers" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.cha)
                        })} Persuasion<span>(Cha)</span></p>

                        <p><label htmlFor="reli"><input id="reli" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.intel)
                        })} Religion<span>(Int)</span></p>

                        <p><label htmlFor="sleiHand"><input id="sleiHand" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.dex)
                        })} Sleight of Hand<span>(Dex)</span></p>

                        <p><label htmlFor="steal"><input id="steal" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.dex)
                        })} Stealth<span>(Dex)</span></p>

                        <p><label htmlFor="surv"><input id="surv" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.wis)
                        })} Survival<span>(Wis)</span></p>
                    </div>
                    <div>
                        <p><label htmlFor="pasWis"><input id="pasWis" type="checkbox" /></label>{this.state.list.map((item, i) => {
                            return this.modify(item.wis)
                        })} Passive Wisdom<span>(Perception)</span></p>
                    </div>
                </form>
            </div>
        )
    }    
}

export default AbilityScores