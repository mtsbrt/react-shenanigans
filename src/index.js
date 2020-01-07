import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';

ReactDOM.render(
    <div>
        <h1>Counter -</h1>
        <Counter start={0}></Counter>
    </div>, document.getElementById('root'));