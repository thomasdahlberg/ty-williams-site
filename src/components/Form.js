import React from "react"

import { TextField, TextareaAutosize, Box, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%"
  },
  actionZone: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "2rem"
  },
  input: {
    marginBottom: "1rem"
  },
  button: {
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '700',
    marginLeft: ".5rem"
  }
}));

const Form = () => {
  const classes = useStyles();
  return (
    <form className={classes.container}>
      <Box
        display="flex" 
        justifyContent="center"
        flexDirection="column"
        flexWrap="wrap">
        <TextField className={classes.input} required id="first-name" label="First Name" />
        <TextField className={classes.input} required id="last-name" label="Last Name" />
        <TextField className={classes.input} required id="email" label="Email" />
        <TextareaAutosize aria-label="Message Content" minRows={5} placeholder="Type your message here" />
      </Box>
      <Box className={classes.actionZone}>
        <Button className={classes.button} variant="contained" color="secondary">Submit</Button>
      </Box>
    </form>
  );
};

export default Form;