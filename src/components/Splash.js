import { Box, Button, Container, Paper, Typography } from "@material-ui/core";
import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  splash: {
    height: "50%",
    padding: "1.45rem",
    backgroundImage: "url('./splash.jpg')",
    backgroundSize: "cover",
    backgroundPostion: "center",
  },
  blurb: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    "& button": {
      marginTop: "2rem",
    }
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
        {/* <Paper elevation={3} className={classes.blurb}> */}
          <Typography variant="h4" component="h2">Lorem ipsum dolor sit amet.</Typography>
          <Button variant="contained" color="primary">Get Started</Button>
        {/* </Paper> */}
      </Container>
    </Box>
  )
}

export default Splash;