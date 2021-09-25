import React from "react"
import { Divider, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "0.5rem",
  },
  oneThird: {
    maxWidth: "475px",
    margin: "0.5rem",
  },
  container: {
    margin: "0.5rem",
    "& h3": {
      color: theme.palette.black,
      paddingBottom: "0.5rem",
      textAlign: "left",
      fontFamily: 'Quicksand, sans-serif',
      fontWeight: '600'
    },
    "& p": {
      marginTop: "1rem",
      marginBottom: "1rem",
    }
  },
}));

const Plate = (props) => {
  const classes = useStyles();
  return (
    <Card className={props.width === "30" ? classes.oneThird : classes.wrapper}>
      <CardContent className={classes.container}>
        <Typography variant="h5" component="h3">{props.title}</Typography>
        <Divider />
        {props.children}
      </CardContent>
    </Card>      
  );
};

export default Plate;