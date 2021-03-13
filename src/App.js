import React, { Component } from 'react';
import Counters from './Counters'
import NavBar from './NavBar'

class App extends Component {
    state = { 
        counters : [
            { id: 0, value:0},
        ]
    }
    
    handleIncrement = (counter) => {
        const counters = this.state.counters.map( c => {
            if (c.id === counter.id) {
                c.value++
            }
            return c
        })
        this.setState({counters})
    }

    handleDecrement = (counter) => {
        const counters = this.state.counters.map( c => {
            if (c.id === counter.id) {
                c.value--
            }
            return c
        })
        this.setState({counters})        
    }

    handleDelete = (id) => {
        const counters = this.state.counters.filter(c => c.id !== id)
        this.setState({counters})
    }

    handleReset = () => {
        const counters = this.state.counters.map( c =>{
            c.value = 0
            return c
        })
        this.setState({counters})        
    }

    handleAdd = () => {
        const counters = this.state.counters
        console.log(counters)
        counters.push({
            id : this.state.counters.length,
            value : 0
        })
        this.setState({counters})        

    }

    render() { 
        return (
            <div className="container">
                <NavBar totalCounters={this.state.counters.length} />
                <Counters 
                    counters={this.state.counters} 
                    onIncrement={this.handleIncrement} 
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onReset={this.handleReset}
                    onAdd={this.handleAdd}
                />
            </div>
        );
    }
}
 
export default App;