import React from 'react';

class Equipment extends React.Component {
    
    constructor() {
        super();
        this.state = {
            listItem: "",
            counter: false,
            list: []
        }
    //THROW YOUR BINDS HERE BRUV!
    this.addList = this.addList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
    }

    addList(e) {
        e.preventDefault();
        const newValue = this.state.listItem
        const newCheckboxValue = this.state.counter

        const newItem = {
            value: newValue,
            counter: newCheckboxValue
        }

        let newArray = this.state.list
        newArray.push(newItem)

        this.setState({
            list: newArray,
            listItem: "",
            counter: false
        });
    }
    
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    toggleChange(e) {
        this.setState({
            counter : e.target.checked
        });
    }
    
    render() {
        return (
            <div>
                <h2>Equipment & Treasure</h2>
                <form onSubmit={this.addList}>
                    <input type="text" id="listItem" 
                    value={this.state.listItem}
                    onChange={this.handleChange} />
                    <label htmlFor="counter">Counter?
                    <input type="checkbox" id="counter" checked={this.state.counter} onChange={this.toggleChange} /></label>
                    <input type="submit" value="submit"/>
                </form>
                <ul>
                    {this.state.list.map((item, i) => {
                        if(item.counter === true){
                            return (
                                <li key={i}>
                                    <p>{item.value} <input type="number"/></p>
                                </li>
                            )
                        } else{
                            return (
                                <li key={i}>
                                    <p>{item.value}</p>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        )
    }
}

export default Equipment;