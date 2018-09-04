import React from 'react';
import Aux from '../../hoc/Aux'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideBar from '../Navigation/SIdeDrawer/SideDrawer';

import classes from './Layout.css'

const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
};

export default layout;