import React from 'react';
import styling from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div
        className={styling.DrawerToggle} 
        onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
    </div>
);

export default drawerToggle;