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
    addList(e) {
        e.preventDefault();
        const listNew = {
            listItems: this.state.listItem
        };
        // console.log(listNew)
        const newState = Array.from(this.state.list);
        newState.push(this.state.listItem);
        this.setState({
            list: newState,
            listItem: ""
        });
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
                <h2>Background</h2>
                <form onSubmit={this.addList}>
                    {/* <input type="text" id="listItem"
                        value={this.state.listItem}
                        onChange={this.handleChange} /> */}
                    <textarea name="text1" id="listItem" cols="40" rows="5" value={this.state.listItem} onChange={this.handleChange}></textarea>
                    <input type="submit" value="submit" />
                </form>
                <div>
                    {this.state.list.map((listFinal, i) => {
                        return (
                                <p key={i}>{listFinal}</p>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Background;