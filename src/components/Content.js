import React from "react"

import { Box, Divider, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    "& p": {
      marginBottom: "1rem",
    }
  },
  title: {
    backgroundColor: "#fafafa",
    paddingLeft: "1.45rem",
    paddingBottom: "0.5rem",
    textAlign: "left",
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600'
  },
  divider: {
    height: "2px"
  },
}));

const Content = (props) => {
  const classes = useStyles();
  if (props.title) {
    return (
      <Box className={classes.container} display="flex" flexDirection="column" justifyContent="center">
        <Typography variant={props.headerSize ? props.headerSize : "h4"} component={props.headerComponent ? props.headerComponent : "h2"} className={classes.title}>{props.title}</Typography>
        <Divider className={classes.divider}/>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box sx={{ flexGrow: 1 }}>{props.children}</Box>
        </Box>
      </Box>
    )
  } else {
    return (
      <Box className={classes.container} display="flex" flexDirection="column" justifyContent="center">
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box sx={{ flexGrow: 1 }}>{props.children}</Box>
        </Box>
      </Box>
    )
  }
  
}

export default Content;