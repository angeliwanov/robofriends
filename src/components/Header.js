import React from 'react';
import CounterButton from './CounterButton';



class Header extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value;
    }

    
    render() {
        // console.log('header')
        return (
            <div>
                <h1 className="f2">RoboFriends</h1>
                <CounterButton color='red'/>
            </div>
        )
    } 
}


export default Header;