import React from 'react';
import NavBar from './NavBar';
import { Link } from "gatsby"
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    padding: "2rem"
  },
  logo: {
    maxWidth: "350px",
  }
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Link to="/" className={classes.link}>
        <img className={classes.logo} src="./sbc_logo.png" alt="logo" aria-label="Simply Becoming Counseling LLC logo" />
      </Link>
      <NavBar />
    </Box>
  )
}

export default Header;