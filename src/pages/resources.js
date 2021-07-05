import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head";
import Content from "../components/Content";
import { CssBaseline, ThemeProvider, Typography, List, ListItem, ListItemText, ListItemIcon, Link } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import theme from '../gatsby-theme-material-ui-top-layout/theme';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
  },
}));

const Resources = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <Head title="Resources" />
      <Content title="Links & Resources">
        <List className={classes.list}>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText>
              <a href="https://save.org/">SAVE: Suicide Prevention, Information, and Awareness</a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText>
              <a href="https://www.ptsd.va.gov/">PTSD: National Center for PTSD Home (va.gov)</a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText>
              <a href="https://www.apa.org/topics/depression/recover">Depression and how psychotherapy and other treatments can help people recover (apa.org)</a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText>
              <a href="https://www.apa.org/topics/trauma/memories">Questions and answers about memories of childhood abuse (apa.org)</a>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText>
              <a href="https://suicidepreventionlifeline.org/">Lifeline (suicidepreventionlifeline.org)</a>
            </ListItemText>
          </ListItem>
        </List>
      </Content>
    </Layout>
    </ThemeProvider>
  )
}

export default Resources;