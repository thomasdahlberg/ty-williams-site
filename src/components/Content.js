import React from "react"

import { Box, Divider, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "1.45rem",
    "& h2": {
      marginLeft: "1.45rem",
      paddingBottom: "0.5rem",
      textAlign: "left",
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: '600'
    },
    "& img": {
      padding: "1.45rem",
    },
    "& p": {
      marginBottom: "1rem",
    }
  }

}));

const Content = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.container} display="flex" flexDirection="column" justifyContent="center">
      <Typography variant={props.headerSize ? props.headerSize : "h4"} component={props.headerComponent ? props.headerComponent : "h2"}>{props.title}</Typography>
      <Divider />
      <Box display="flex" alignItems="center" padding="1rem" flexDirection="column">
        <Box sx={{ flexGrow: 1 }}>{props.children}</Box>
      </Box>
    </Box>
  )
}

export default Content;