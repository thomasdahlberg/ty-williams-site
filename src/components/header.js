import React from 'react';
import NavBar from './NavBar';
import { Link } from "gatsby"
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../images/sb_logo.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "1rem",
    paddingTop: "2rem",
    backgroundColor: "#CCF6C8",
  },
  link: {
    textDecoration: "none",
    // padding: "2rem"
  },
  logo: {
    width: "350px",
  }
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Link to="/" className={classes.link}>
        <img className={classes.logo} src={logo} alt="logo" aria-label="Simply Becoming Counseling LLC logo" />
      </Link>
      <NavBar />
    </Box>
  )
}

export default Header;