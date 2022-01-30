import React from "react";
import Layout from "../components/layout";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Grid from '@mui/material/Grid';
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import Head from "../components/Head";
import Content from "../components/Content";
import Plate from "../components/Plate";


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#CCF6C8",
    padding: "1rem",
    paddingBottom: "3rem",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // border: "solid red 5px",
    // width: "50%"
  }
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head title="Contact Me" />
        <Content>
          {/* <Grid container spacing={2} className={classes.container}>
            <Grid item xs={12} sm={12}> */}
              {/* <Plate form variant="h4"> */}
              {/* <div className={classes.container}> */}
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeCmWju8TOy75l1N9GZ4h4XUSuGHE0K_eZYlPAI23MUsWekHQ/viewform?embedded=true" title="Contact Form" width="100%" height="780" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
              {/* </div> */}
              {/* </Plate> */}
            {/* </Grid>
          </Grid> */}
        </Content>
      </Layout>
    </ThemeProvider>
  );
};

export default Contact;