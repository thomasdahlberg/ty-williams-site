import React from "react"
import Layout from "../components/Layout";
import { CssBaseline, ThemeProvider, Divider } from "@material-ui/core";
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import Head from "../components/Head";
import Plate from "../components/Plate";
import Content from "../components/Content";

const Home = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head title="Welcome" />
        <Content title="Welcome!">
          <Plate title="About Me">
            Hi There! I’m TyaNisha Williams, the founder of Simply Becoming, LLC and a Licensed Clinical  Professional Counselor located in Baltimore, Maryland. I obtained a Master’s degree in Clinical Mental Health Counseling from Loyola University Maryland. I am particularly passionate about  working with children, young adults and adults. I  have over 11 years of experience working in diverse settings such as outpatient, hospitals and schools. 
          </Plate>
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default Home;

