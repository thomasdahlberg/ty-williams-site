import React from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.black,
    // backgroundColor: theme.palette.white,
  }
}));

const Layout = (props) => {
  const classes = useStyles();
  return(
    <div className={classes.paper}>
      <Header theme={props.theme}/>
      <div>{props.children}</div>
    </div>
  )
}

export default Layout