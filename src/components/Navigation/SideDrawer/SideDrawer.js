import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/AuxFolder/AuxComponent';
import styling from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedStyling = [styling.SideDrawer, styling.Close];
    if(props.open){
        attachedStyling = [styling.SideDrawer, styling.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
                <div className={attachedStyling.join(' ')}>
                    <div className={styling.Logo}>
                        <Logo />
                    </div>
                    <nav>
                        <NavigationItems />
                    </nav>
                </div>
        </Aux>
    );
}

export default sideDrawer;