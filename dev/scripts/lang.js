import React from 'react';

class Languages extends React.Component {
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