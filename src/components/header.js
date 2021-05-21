import React from 'react';
import NavBar from './NavBar';
import { Link } from "gatsby"
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import theme from '../gatsby-theme-material-ui-top-layout/theme';

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    alignItems: "center",
    width: "30%",
    padding: "1rem",
    color: "white",
    textDecoration: "none",
    '& svg': {
      marginLeft: "0.5rem",
    }

  }
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <Box
      display="flex" 
      flexWrap="wrap"
      justifyContent="space-between"
      bgcolor={theme.palette.primary.main}
    >
      <Link to="/" className={classes.logo}>
        <Typography variant="h4" component="h1">Ty Williams</Typography>
        <ChatBubbleOutlineIcon color="secondary" fontSize="large"/>
      </Link>
      <NavBar />
    </Box>
  )
}

export default Header;