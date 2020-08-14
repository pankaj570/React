import React, { Component } from 'react';
export default class FormExample extends Component {

    state = {
        inputValue: ''
    }

    handleInput = (event) => {
        alert(this.state.inputValue);
        event.preventDefault();
    }

    updateInput = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }
    render() {
        return (
            <form onSubmit={this.handleInput}>
                <label>
                 Name :
                  <input type="text" 
                         value={this.state.value}
                         onChange={this.updateInput} />
                </label>
                <input type="submit" value="Submit" />
            </form>

        );
    }
}