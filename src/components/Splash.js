import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  splash: {
    height: "400px",
  },
  blurb: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  text: {
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600',
    color: theme.palette.black,
    textAlign: "center"
  }

}));


const Splash = (props) => {
  const classes = useStyles();
  return (
    <Box 
      display="flex" 
      justifyContent="center"
      flexWrap="wrap"
      component="div" 
      className={classes.splash}
      color="white"
    >
      <Container className={classes.blurb}>
          <Typography variant="h2" component="h2" className={classes.text}>Take time to work on you.</Typography>
      </Container>
    </Box>
  )
}

export default Splash;