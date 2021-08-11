import React from "react"
import Layout from "../components/Layout";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import Head from "../components/Head";
import Content from "../components/Content";
import Form from "../components/Form";
import Plate from "../components/Plate";

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head title="Contact Me" />
        <Content title="Contact Me">
          <Plate title="Contact Form" width="85%">
            <Form />
          </Plate>
        </Content>
      </Layout>
    </ThemeProvider>
  );
};

export default Contact;