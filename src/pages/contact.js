import React from "react";
import Layout from "../components/layout";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import Head from "../components/Head";
import Content from "../components/Content";
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
            {/* <iframe height="650px" title="Embedded Wufoo Form" allowtransparency="true" frameborder="0" scrolling="no" style={{width:"100%", border:"none", display: "flex", justifyContent: "center"}} src="https://thomasdahlberg.wufoo.com/embed/z3ew9o30bhrty6/"> <a href="https://thomasdahlberg.wufoo.com/forms/z3ew9o30bhrty6/">Fill out my Wufoo form!</a> </iframe> */}
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeCmWju8TOy75l1N9GZ4h4XUSuGHE0K_eZYlPAI23MUsWekHQ/viewform?embedded=true" width="640" height="780" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </Plate>
        </Content>
      </Layout>
    </ThemeProvider>
  );
};

export default Contact;