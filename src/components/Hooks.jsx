import React, { useState, useEffect } from 'react';

export default props => {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState('Even');

    useEffect(() => {
        count % 2 === 0 ? setStatus('Even') : setStatus('Odd');
    })
    return (
        <div>
            <h1>Counter With Hooks -</h1>
            <div>Counter: {count}</div>
            <div>{status}</div>
            <button onClick={() => setCount(count - 10)}>Sub 10</button>
            <button onClick={() => setCount(count - 1)}>Sub</button>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count + 10)}>Add 10</button>
        </div>
    );
}