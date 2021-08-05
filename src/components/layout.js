import React from 'react';
import Header from './Header';
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.secondary.light
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