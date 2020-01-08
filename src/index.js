import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Hooks from './components/Hooks';

ReactDOM.render(
    <div>
        <Counter start={0}></Counter>
        <Hooks></Hooks>
    </div>, document.getElementById('root'));