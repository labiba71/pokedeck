import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(() =>({
  toolbarStyle : {
    display: "flex",
    justifyContent: "space-between"
  }
}));
const Header = () => {
  const classes = useStyles();
  return(
    <AppBar position="static" >
      <Toolbar className={classes.toolbarStyle}>
        <Typography >
          This is the header
        </Typography>
        <AcUnitIcon/>
      </Toolbar>
    </AppBar>
  );
}

export default Header;