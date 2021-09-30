import React from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.black,
    backgroundImage: url("./splash.jpg"),  
    minHeight: "500px",  
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
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