import React from "react"
import Layout from "../components/Layout";
import { CssBaseline, ThemeProvider, Box, Typography } from "@material-ui/core";
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import Head from "../components/Head";
import Splash from "../components/Splash";
import Content from "../components/Content";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "1rem",
    margin: "1rem",
    maxWidth: "40%",
    "& h3": {
      paddingBottom: "0.5rem",
      color: theme.palette.primary.dark
    },
    "& p": {
      paddingTop: "1rem",
    }
  }
}));


const Home = (props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head title="Welcome" />
        <Splash />
        <Content title="Welcome!">
        <Typography variant="h6">
            Hi There! I’m TyaNisha Williams, the founder of Simply Becoming, LLC and a Licensed Clinical  Professional Counselor located in Baltimore, Maryland. I obtained a Master’s degree in Clinical Mental Health Counseling from Loyola University Maryland. I am particularly passionate about  working with children, young adults and adults. I  have over 11 years of experience working in diverse settings such as outpatient, hospitals and schools. 
          </Typography>
        </Content>
        <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
          {/* <Paper className={classes.paper} elevation={3}>
            <Typography variant="h5" component="h3">Excepteur Sint</Typography>
            <Divider />
            <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Paper>
          <Paper className={classes.paper} elevation={3}>
            <Typography variant="h5" component="h3">Consectetur Adipiscing</Typography>
            <Divider />
            <Typography variant="body2" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Paper> */}
        </Box> 
      </Layout>
    </ThemeProvider>
  )
}

export default Home;

