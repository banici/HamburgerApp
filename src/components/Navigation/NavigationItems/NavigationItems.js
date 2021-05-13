import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styling from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={styling.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;