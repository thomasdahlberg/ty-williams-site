import React from 'react';
import { Link } from 'gatsby';
import { Container } from '@material-ui/core';
import useStyles from '../styles/NavBarStyles';

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Link className={classes.link}>About Me</Link>
      <Link className={classes.link}>Services</Link>
      <Link className={classes.link}>Client Portal</Link>
      <Link className={classes.link}>Rates</Link>
      <Link className={classes.link}>FAQs</Link>
      <Link className={classes.link}>Contact Me</Link>
      <Link className={classes.link}>Links & Resources</Link>
    </Container>
  )
}

export default NavBar;