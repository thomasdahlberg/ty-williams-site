import React from "react"

import { Box, Button, Container, Divider, Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "1.45rem",
    "& h2": {
      paddingBottom: "0.5rem",
      color: theme.palette.primary.dark
    },
    "& img": {
      paddingRight: "1.45rem",
    }
  }

}));

const Content = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography variant="h4" component="h2">{props.title}</Typography>
      <Divider />
      <Box display="flex" alignItems="center" padding="1rem">
        {props.image ? <img src="./avatar.png" alt="avatar"/> : null}
        <Typography variant="body1" component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
      </Box>
    </Box>
  )
}

export default Content;