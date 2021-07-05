import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head";
import Content from "../components/Content";
import { CssBaseline, ThemeProvider, Typography, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import theme from '../gatsby-theme-material-ui-top-layout/theme';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
  },
}));


const Services = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head title="Services" />
        <Content title="Services">
          <Content title="Individual Sessions" headerSize="h5" headerComponent="h3">
            <Typography>
              I believe that clients are the experts in their lives. I utilize a collaborative, supportive approach to the counseling relationship.  Individual sessions are 45-50 minutes.
            </Typography>
          </Content>
          <Content title="Rates" headerSize="h5" headerComponent="h3">
            <Typography>
              Simply Becoming is currently  a telehealth, private pay practice. I am not on any insurance panels at this time and therefore do not accept insurance. Intake sessions are 60 minutes. Following intakes, sessions are typically 45-50 minutes in length unless otherwise noted by the clinician. 
            </Typography>
            <List className={classes.list}>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>Intake Fee:  $140.00 (60 Minute Session)</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>Individual Counseling: $140.00 (45-50 Minute Session)</ListItemText>
              </ListItem>
            </List>
          </Content>
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default Services;