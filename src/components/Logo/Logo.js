import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styling from './Logo.css';

const logo = (props) => (
    <div className={styling.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;