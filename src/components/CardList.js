import React from "react";
import Card from './Card';

const CardList = ({robots}) => {
    // if (true) {
    //     throw new Error('Noooo!');
    // }
    // console.log('Cardlist')
    return (
        robots.map((user, i) => {
            return <Card key={i} id={user.id} name={user.name} email={user.email}/>
        })
    )
}

export default CardList;