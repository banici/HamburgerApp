import React from 'react';
import styling from './NavigationItem.css';

const navigationItem = (props) => (
    <li className={styling.NavigationItem}>
        <a 
            href={props.link}
            className={props.active ? styling.active : null}>
                {props.children}
            </a>
    </li>
);

export default navigationItem;