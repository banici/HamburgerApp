import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import styling from './Toolbar.css';



const toolbar = (props) => (
       
    <header className={styling.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={styling.Logo}>
            <Logo />
        </div>
        <nav className={styling.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;