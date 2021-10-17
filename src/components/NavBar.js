import React from 'react';
import { Link } from 'gatsby';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: "wrap",
    alignItems: 'center',
  },
  link: {
    padding: '0.5rem 1rem',
    marginLeft: "0.5rem",
    color: theme.palette.black,
    textDecoration: "none",
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  activeLink: {
    borderBottom: `${theme.palette.primary.main} solid 4px`
  },
  text: {
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '700'
  }
}));

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Link className={classes.link} activeClassName={classes.activeLink} to="/"><Typography variant="button" className={classes.text}>Home</Typography></Link>
      <Link className={classes.link} activeClassName={classes.activeLink} to="/services"><Typography variant="button" className={classes.text}>Services</Typography></Link>
      <Link className={classes.link} activeClassName={classes.activeLink} to="/contact"><Typography variant="button" className={classes.text}>Contact Me</Typography></Link>
      <Link className={classes.link} activeClassName={classes.activeLink} to="https://tyanisha-williams.clientsecure.me/"><Typography variant="button" className={classes.text}>Client Portal</Typography></Link>
    </Box>
  )
}

export default NavBar;