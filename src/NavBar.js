import React, {Component} from 'react'

class NavBar extends Component{

    render() {
        const { totalCounters } = this.props 
        return(
            <h1>Counters - {totalCounters}</h1>
        )
    }
}

export default NavBar