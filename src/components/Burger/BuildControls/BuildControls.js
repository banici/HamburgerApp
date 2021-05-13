import React from 'react';
import styling from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const control = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={styling.BuildControls}>
        <p>Current price: {props.price.toFixed(2)}$</p>
        {control.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                ingridientLabel={ctrl.label} 
                addIngridient={() => props.addClick(ctrl.type)}
                removeIngridient={() => props.removeClick(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
            className={styling.OrderButton} 
            disabled={!props.purchaseable}
            onClick={props.ordered}>Order Now</button>
    </div>
);

export default buildControls;