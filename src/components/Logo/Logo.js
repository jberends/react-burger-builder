import Logo from '../../assets/images/burger-logo.png';

import React from 'react';

import classes from './Logo.css'

const logo = () => (
    <div className={classes.Logo}>
      <img src={Logo} alt=""/>
    </div>
  );

export default logo;