import React from "react"
import Layout from "../components/Layout";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import Head from "../components/Head";
import Content from "../components/Content";
import Form from "../components/Form";
import Plate from "../components/Plate";

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
          <Plate form variant="h4" className={classes.container}>
            <iframe height="650px" title="Embedded Wufoo Form" allowtransparency="true" frameborder="0" scrolling="no" style={{width:"100%", border:"none", display: "flex", justifyContent: "center"}} src="https://thomasdahlberg.wufoo.com/embed/z3ew9o30bhrty6/"> <a href="https://thomasdahlberg.wufoo.com/forms/z3ew9o30bhrty6/">Fill out my Wufoo form!</a> </iframe>
          </Plate>
        </Content>
      </Layout>
    </ThemeProvider>
  );
};

export default Contact;