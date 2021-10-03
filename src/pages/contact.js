import React from "react"
import Layout from "../components/Layout";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import Head from "../components/Head";
import Content from "../components/Content";
import Form from "../components/Form";
import Plate from "../components/Plate";
import Grid from '@mui/material/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid red 5px",
    width: "100%"
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
          <Plate title="Contact Form" form={true} className={classes.container}>
            <Form />
          </Plate>
        </Content>
      </Layout>
    </ThemeProvider>
  );
};

export default Contact;