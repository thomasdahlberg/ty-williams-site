import React from "react"
import Layout from "../components/Layout";
import Head from "../components/Head";
import Content from "../components/Content";
import { CssBaseline, ThemeProvider, Box, Paper, Typography, Divider } from "@material-ui/core";
import theme from '../gatsby-theme-material-ui-top-layout/theme';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "1rem",
    margin: "1rem",
    maxWidth: "30%",
    "& h3": {
      color: theme.palette.primary.dark,
      marginRight: "1rem",
    },
    "& svg": {
      color: theme.palette.primary.dark
    },
    "& p": {
      paddingTop: "1rem",
    }
  }
}));

const About = (props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head title="About Me" />
        <Content title="A Little About Me" image={true}>
          <Typography>
            Hi There! I’m TyaNisha Williams, the founder of Simply Becoming, LLC and a Licensed Clinical  Professional Counselor located in Baltimore, Maryland. I obtained a Master’s degree in Clinical Mental Health Counseling from Loyola University Maryland. I am particularly passionate about  working with children, young adults and adults. I  have over 11 years of experience working in diverse settings such as outpatient, hospitals and schools.
          </Typography>
          <Typography>
            My work focuses on building self-esteem, increasing coping skills, developing boundaries, decreasing disruptive thought patterns and behaviors, while also fostering self-love, personal insight and emotional resilience. I have  specialized training and experience in anxiety, depression, trauma, life transitions, self-esteem, spirituality, and relationship issues. While specifically using cognitive behavioral, solution focused, and strength based therapies, I use  a  multidimensional approach to assist clients in building self-awareness and developing inner peace.
          </Typography>
          <Typography>
            It is my belief that therapy is about helping clients to develop practical tools to navigate life’s challenges while taking steps to become the best version of themselves. I  believe in honoring my client’s journey through  validating their experiences and collaboratively working with them  to identify their individual needs and achieve their therapeutic goals.
          </Typography>
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default About;

