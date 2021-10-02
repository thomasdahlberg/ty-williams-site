import React from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.black,
  },
  content: {
    backgroundImage: `url("./splash_crop.jpg")`,  
    minHeight: "100%",  
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "50px"
  },
  veil:{
    backgroundColor: "rgba(135, 214, 126, 0.3)",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-50px",
    height: "50px",
    zIndex: "1",
    backgroundColor: "rgba(213, 240, 213, 1)",
    "& p": {
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: '600',
      margin: "0.5rem"
    },
    "& a": {
      color: theme.palette.black,
      textDecoration: "none"
    },
    "& a:visited":
    {
      color: theme.palette.black,
      textDecoration: "none"
    }
  }
}));

const Layout = (props) => {
  const classes = useStyles();
  const date = new Date();
  return(
    <div className={classes.paper}>
      <Header theme={props.theme}/>
      <div className={classes.content}>
        <div className={classes.veil}>
          {props.children}
        </div>
      </div>
      <footer className={classes.footer}>
        <Typography variant="h6" component="p">Ty Williams &copy; {date.getFullYear()}</Typography>
        <Typography variant="h6" component="p">|</Typography>
        <Typography variant="h6" component="p"><Link href="mailto: ty@simplybecounseling.org">ty@simplybecounseling.org</Link></Typography>
        
      </footer>
    </div>
  )
}

export default Layout