import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigatonItems';

const sideDrawer = (props) => {
  // ...
  return (
    <div className={classes.SideDrawer}>
      <Logo />
      <nav>
        <NavigationItems>
          
        </NavigationItems>
      </nav>
    </div>
  );
};

export default sideDrawer