import React from 'react';
import Header from './header';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.black,
  },
  content: {
    minHeight: "75vh",  
    backgroundImage: `url("./splash_full.jpg")`,  
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "100px"
  },
  veil:{
    backgroundColor: "rgba(135, 214, 126, 0.2)",
    minHeight: "75vh",  
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: "-100px",
    height: "100px",
    zIndex: "1",
    backgroundColor: "rgba(135, 214, 126, 0.6)",
    "& p": {
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: '600',
      marginRight: "1rem",
      marginBottom: "0.25rem"
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
        <Typography variant="h6" component="p"><Link href="mailto: ty@simplybecounseling.org">ty@simplybecounseling.org</Link></Typography>
        <Typography variant="h6" component="p">(443) 857-0893</Typography>
      </footer>
    </div>
  )
}

export default Layout