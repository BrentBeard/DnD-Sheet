import React from 'react';

class AbilityScores extends React.Component {
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
            [e.target.id]: e.target.value
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
                        <input id="str" type="number" onChange={this.abScore} />
                        <p>{this.modify(this.state.str)}</p>

                        <label htmlFor="dex">Dexterity</label>
                        <input id="dex" type="number" onChange={this.abScore} />
                        <p>{this.modify(this.state.dex)}</p>

                        <label htmlFor="con">Constitution</label>
                        <input id="con" type="number" onChange={this.abScore} />
                        <p>{this.modify(this.state.con)}</p>

                        <label htmlFor="intel">Intelligence</label>
                        <input id="intel" type="number" onChange={this.abScore} />
                        <p>{this.modify(this.state.intel)}</p>

                        <label htmlFor="wis">Wisdom</label>
                        <input id="wis" type="number" onChange={this.abScore} />
                        <p>{this.modify(this.state.wis)}</p>

                        <label htmlFor="cha">Charisma</label>
                        <input id="cha" type="number" onChange={this.abScore} />
                        <p>{this.modify(this.state.cha)}</p>
                    </div>
                    <div className="saveThrows">
                        <h2>Savings Throws</h2>
                        <p><label htmlFor="strThr"><input id="strThr" type="checkbox" /></label>{this.modify(this.state.str)} Strength</p>
                        <p><label htmlFor="dexThr"><input id="dexThr" type="checkbox" /></label>{this.modify(this.state.dex)} Dexterity</p>
                        <p><label htmlFor="conThr"><input id="conThr" type="checkbox" /></label>{this.modify(this.state.con)} Constitution</p>
                        <p><label htmlFor=""><input id="" type="checkbox" /></label>{this.modify(this.state.intel)} Intelligence</p>
                        <p><label htmlFor=""><input id="" type="checkbox" /></label>  {this.modify(this.state.wis)} Wisdom</p>
                        <p><label htmlFor=""><input id="" type="checkbox" /></label> {this.modify(this.state.cha)} Charisma</p>
                    </div>
                    <div>
                        {/* input inside label, vis hidden on input so it keeps its weight style label with border and background when checked */}
                        <h2>Skills</h2>
                        <p><label htmlFor="acro"><input id="acro" type="checkbox" /></label>{this.modify(this.state.dex)}Acrobatics<span>(Dex)</span></p>
                        <p><label htmlFor="aniHan"><input id="aniHan" type="checkbox" /></label>{this.modify(this.state.wis)}Animal Handling<span>(Wis)</span></p>
                        <p><label htmlFor="arc"><input id="arc" type="checkbox" /></label>{this.modify(this.state.intel)}Arcana<span>(Int)</span></p>
                        <p><label htmlFor="ath"><input id="ath" type="checkbox" /></label>{this.modify(this.state.str)}Athletics<span>(Str)</span></p>
                        <p><label htmlFor="dec"><input id="dec" type="checkbox" /></label>{this.modify(this.state.cha)}Deception<span>(Cha)</span></p>
                        <p><label htmlFor="his"><input id="his" type="checkbox" /></label>{this.modify(this.state.intel)}History<span>(Int)</span></p>
                        <p><label htmlFor="ins"><input id="ins" type="checkbox" /></label>{this.modify(this.state.wis)}Insight<span>(Wis)</span></p>
                        <p><label htmlFor="intim"><input id="intim" type="checkbox" /></label>{this.modify(this.state.cha)}Intimidation<span>(Cha)</span></p>
                        <p><label htmlFor="inves"><input id="inves" type="checkbox" /></label>{this.modify(this.state.intel)}Investigation<span>(Int)</span></p>
                        <p><label htmlFor="med"><input id="med" type="checkbox" /></label>{this.modify(this.state.wis)}Medicine<span>(Wis)</span></p>
                        <p><label htmlFor="nat"><input id="nat" type="checkbox" /></label>{this.modify(this.state.intel)}Nature<span>(Int)</span></p>
                        <p><label htmlFor="perc"><input id="perc" type="checkbox" /></label>{this.modify(this.state.wis)}Perception<span>(Wis)</span></p>
                        <p><label htmlFor="perf"><input id="perf" type="checkbox" /></label>{this.modify(this.state.cha)}Performance<span>(Cha)</span></p>
                        <p><label htmlFor="pers"><input id="pers" type="checkbox" /></label>{this.modify(this.state.cha)}Persuasion<span>(Cha)</span></p>
                        <p><label htmlFor="reli"><input id="reli" type="checkbox" /></label>{this.modify(this.state.intel)}Religion<span>(Int)</span></p>
                        <p><label htmlFor="sleiHand"><input id="sleiHand" type="checkbox" /></label>{this.modify(this.state.dex)}Sleight of Hand<span>(Dex)</span></p>
                        <p><label htmlFor="steal"><input id="steal" type="checkbox" /></label>{this.modify(this.state.dex)}Stealth<span>(Dex)</span></p>
                        <p><label htmlFor="surv"><input id="surv" type="checkbox" /></label>{this.modify(this.state.wis)}Survival<span>(Wis)</span></p>
                    </div>
                    <div>
                        <p><label htmlFor=""><input id="" type="checkbox" /></label>{this.modify(this.state.wis)}Passive Wisdom<span>(Perception)</span></p>
                    </div>
                </form>
            </div>
        )
    }    
}

export default AbilityScores