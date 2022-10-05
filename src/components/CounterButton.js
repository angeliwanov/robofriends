import React, { useState } from "react";



const CounterButton = React.memo((props) => {
    const [count, setCount] = useState(0);
    // console.log('CounterButton')
    return (
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    )
})

export default CounterButton;