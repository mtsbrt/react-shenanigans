import React, { Component } from 'react';

export default class Counter extends Component {

    state = {
        number: this.props.start
    }

    add(quantity) {
        this.setState({ number: this.state.number + quantity });
    }
    sub(quantity) {
        this.setState({ number: this.state.number - quantity });
    }
    render() {
        return (
            <div>
                <div>Counter: {this.state.number}</div>
                <button onClick={() => this.sub(10)}>Sub 10</button>
                <button onClick={() => this.sub(1)}>Sub 1</button>
                <button onClick={() => this.add(1)}>Add 1</button>
                <button onClick={() => this.add(10)}>Add 10</button>
            </div>
        )
    }
}