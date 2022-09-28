import React from "react";
import CardList from "./CardList";
import Searchbox from './Searchbox';
import './App.css';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
        if (!(this.state.robots.length)) {
            return <h1>Loading...</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <Searchbox SearchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            )
        } 
    }
}

export default App;