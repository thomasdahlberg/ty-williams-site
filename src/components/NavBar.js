import React from 'react';
import { Link } from 'gatsby';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: "wrap",
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
  },
  link: {
    padding: '0.5rem 1rem',
    color: "white",
    marginLeft: "0.5rem",
    textDecoration: "none",
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  }
}));

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Link className={classes.link} to="/about"><Typography variant="button">About Me</Typography></Link>
      <Link className={classes.link}><Typography variant="button">Services</Typography></Link>
      <Link className={classes.link}><Typography variant="button">Client Portal</Typography></Link>
      <Link className={classes.link}><Typography variant="button">Rates</Typography></Link>
      <Link className={classes.link}><Typography variant="button">FAQs</Typography></Link>
      <Link className={classes.link}><Typography variant="button">Contact Me</Typography></Link>
      <Link className={classes.link}><Typography variant="button">Links & Resources</Typography></Link>
    </Box>
  )
}

export default NavBar;