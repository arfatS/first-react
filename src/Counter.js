import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        return (
            <div>
                <span className="badge badge-primary m-2">{this.props.counter.value}</span>
                
                <button onClick={() => { this.props.onIncrement(this.props.counter)}} className="btn btn-secondary m-2">Increment</button>
                
                <button onClick={() => { this.props.onDecrement(this.props.counter)}} className="btn btn-secondary m-2">Decrement</button>
                
                <button onClick={() => { this.props.onDelete(this.props.counter.id)}} className="btn btn-danger m-2">Delete</button>
            </ div>
        )
    }

}

export default Counter;