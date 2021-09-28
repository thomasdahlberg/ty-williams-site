import React from "react"
import { Typography, Divider } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "0",
  },
  summary: {
    // color: theme.palette.black,
    paddingBottom: "0.5rem",
    textAlign: "left",
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600'
  },
  details: {
    marginTop: "1rem",
    marginBottom: "1rem",
  }
}));

const AccordionPlate = (props) => {
  const classes = useStyles();
  return (
    <Accordion className={classes.wrapper}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography component={props.component} variant={props.variant} className={classes.summary}>
          {props.title}
        </Typography>
        <Divider />
      </AccordionSummary>
      <AccordionDetails className={classes.details}>{props.children}</AccordionDetails>
    </Accordion>      
  );
};

export default AccordionPlate;