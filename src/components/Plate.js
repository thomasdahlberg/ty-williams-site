import React from "react"
import { Divider, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "0.5rem"
  },
  container: {
    margin: "0.5rem",
    "& h3": {
      paddingBottom: "0.5rem",
      textAlign: "left",
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: '500'
    },
    "& p": {
      marginTop: "1rem",
      marginBottom: "1rem",
    }
  }
}));

const Plate = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.wrapper}>
      <CardContent className={classes.container}>
        <Typography variant="h5" component="h3">{props.title}</Typography>
        <Divider />
        <Typography component="p">{props.children}</Typography>
      </CardContent>
    </Card>      
  );
};

export default Plate;