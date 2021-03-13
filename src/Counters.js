import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {
    
    render() { 
        return (  
            <div>
                <button onClick={this.props.onReset} className="btn btn-warning m-2">Reset</button>
                <button onClick={this.props.onAdd} className="btn btn-primary m-2">Add</button>
                
                {this.props.counters.map(c => 
                    <Counter 
                    key={c.id}
                    counter={c}
                    onIncrement={this.props.onIncrement}
                    onDecrement={this.props.onDecrement}
                    onDelete={this.props.onDelete}
                    />
                )}
            </div>

        );
    }
}
 
export default Counters;