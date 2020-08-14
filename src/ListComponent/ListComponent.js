import React, { Component } from 'react';
import ListItem from './ListItem'

class ListComponent extends Component {
    state = {
        itemNames: [],
    }

    updateStateHandler = (event) => {
        if (event.key === "Enter") {
            this.setState({
                itemNames: [...this.state.itemNames, event.target.value]
            })
        }
        console.log(this.state.itemNames)
    }

    deleteItemHandler=(event)=>{
       // let items = this.state.itemNames.filter((item,index)=>index!==event.target.value)
        let items = this.state.itemNames.slice(0,event.target.value).concat(this.state.itemNames.slice(event.target.value+1))
        this.setState({
           itemNames:items
        })
    }
    render() {
       const style={
            display: 'inline',
            border: '1px',
            borderColor: 'slategrey'
        };
        return (
            <div style={style} > 
                <h1>Enter Item to Add in List Group</h1>
                <input type='text' onKeyPress={this.updateStateHandler} />
                <ListItem
                 deleteItemHandler={this.deleteItemHandler}
                 listOfPerson={this.state.itemNames}
                />
            </div>
        );
    }

}

export default ListComponent;
