import React from 'react';
import styling from './Button.css';

const button = (props) => (
    <button
        className={[styling.Button, styling[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}
    </button>
);

export default button;