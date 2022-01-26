import React from "react"
import { Divider, Typography, Card, CardContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  formWrapper: {
    margin: "1rem",
    width: "60vw"
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
  divider: {
    backgroundColor: theme.palette.primary.light,
    height: "3px"
  }
}));

const Plate = (props) => {
  const { variant, component } = props;
  const classes = useStyles();
  return (
    <Card className={props.form ? classes.formWrapper : null}>
      <CardContent className={classes.container}>
        <Typography variant={variant ? variant : "h5"} component={component ? component: "h3"}>{props.title}</Typography>
        {props.title ? <Divider className={classes.divider}/> : null}
        {props.children}
      </CardContent>
    </Card>      
  );
};

export default Plate;