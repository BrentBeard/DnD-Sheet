import React from 'react';

class Background extends React.Component {
    constructor() {
        super();
        this.state = {
            listItem: "",
            list: []
        }
        //THROW YOUR BINDS HERE BRUV!
        this.addList = this.addList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        const dbref = firebase.database().ref(`/${this.props.userID}/Background`);

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

        const dbBack = firebase.database().ref(`/${this.props.userID}/Background`)
        dbBack.push(this.state.listItem);

        this.setState({
            listItem: ""
        });
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h2>Write your story</h2>
                <div className="box">
                    {this.state.list.map((listFinal, i) => {
                        return (
                            <p key={i}>{listFinal}</p>
                        )
                    })}
                </div>
                <form onSubmit={this.addList}>
                    {/* <input type="text" id="listItem"
                        value={this.state.listItem}
                        onChange={this.handleChange} /> */}
                    <textarea name="text1" id="listItem" cols="40" rows="5" value={this.state.listItem} onChange={this.handleChange}></textarea>
                    <input type="submit" value="submit" />
                </form>
                
            </div>
        )
    }
}

export default Background;