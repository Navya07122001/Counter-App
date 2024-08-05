import React from 'react';
import { useState } from 'react';
function CounterApp() {
    const [count,setCount]=useState(0);
    const handleDecrement=()=>{
        setCount(prev=>prev-1);
    }
    const handleIncrement=()=>{
        setCount(prev=>prev+1);
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h4>Count: {count} </h4>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default CounterApp;