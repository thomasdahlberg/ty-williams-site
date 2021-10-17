import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head";
import Content from "../components/Content";
import { CssBaseline, ThemeProvider, Typography, List, ListItem, ListItemText, ListItemIcon, Accordion, AccordionDetails, AccordionSummary, Divider, Box } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import theme from '../gatsby-theme-material-ui-top-layout/theme';

import { makeStyles } from '@material-ui/core/styles';
import Plate from "../components/Plate";
import Grid from '@mui/material/Grid';
import Splash from "../components/Splash";



const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
  },
  container: {
    backgroundColor: "#CCF6C8",
    padding: "1rem",
    paddingBottom: "3rem"
  },
  summary: {
    paddingBottom: "0.5rem",
    textAlign: "left",
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600'
  },
  details: {
    marginTop: "1rem",
    marginBottom: "1rem",
    "& p": {
      fontWeight: "700"
    }
  },
  accordion: {
    color: theme.palette.black,
    paddingBottom: "0.5rem",
    textAlign: "left",
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600'
  },
  info: {
    fontWeight: "700"
  }
}));


const Services = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head title="Services" />
        <Content title="">
          <Splash text={"Navigate through various life experiences."}/>
          <Grid container spacing={2} className={classes.container}>
            <Grid item xs={12} sm={8}>
              <Plate title="Services" variant="h4">
                <Typography component="p" className={classes.info}>
                  We only accept individuals who are self-pay or who have CareFirst BCBS and Cigna
                  insurance. We do not accept other insurances.
                </Typography>
                <List className={classes.list}>
                  <ListItem>
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>
                    <ListItemText>Complimentary Video Consulatation (15 minutes)</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>
                    <ListItemText>Intake (60 minutes):  $140.00</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ChevronRightIcon />
                    </ListItemIcon>
                    <ListItemText>Individual Counseling (50 minutes): $140.00</ListItemText>
                  </ListItem>
                </List>
              </Plate>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.philosophy}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary"/>}
                  className={classes.summary}
                >
                  <Typography component="h3" variant="h5" className={classes.accordion}>Planning to Use Insurance?</Typography>
                  <Divider />
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  <Box display="flex" flexDirection="column">
                    <Typography component="p">Please check your coverage carefully by asking the following questions:</Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText>What is my deductible and has it been met?</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText>How many sessions per year does my health insurance cover?</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText>What is the coverage amount per therapy session?</ListItemText>
                      </ListItem>
                    </List>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default Services;