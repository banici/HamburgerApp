import React from 'react';
import styling from './BuildControl.css';

const buildControl = (props) => (
    <div className={styling.BuildControl}>
        <div className={styling.IngridientLabel}>{props.ingridientLabel}</div>
        <button className={styling.Less} onClick={props.removeIngridient} disabled={props.disabled}>Remove</button>
        <button className={styling.More} onClick={props.addIngridient}>Add</button>
    </div>
);

export default buildControl;