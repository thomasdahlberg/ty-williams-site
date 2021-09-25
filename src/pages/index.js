import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, ThemeProvider, Typography, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionPlate from "../components/AccordionPlate";
import Grid from '@mui/material/Grid';

import Layout from "../components/Layout";
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import Head from "../components/Head";
import Plate from "../components/Plate";
import Content from "../components/Content";
import { Box } from "@mui/system";

const useStyles = makeStyles(() => ({
  about: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  philosophy: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head title="Welcome" />
        <Content title="Welcome!">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Plate title="A Little About Me">
                <div className={classes.about}>
                  <Typography component="p"> 
                    Hi There! I’m TyaNisha Williams, the founder of Simply Becoming, LLC and a Licensed Clinical Professional Counselor located in Baltimore, Maryland. I am a native of upstate New York. I received my Bachelors of Arts degree in Health Education from State University New York at Cortland. After many years of teaching, I moved to Baltimore to pursue my dream of attending graduate school. I obtained a Master’s degree in Clinical Mental Health Counseling from Loyola University Maryland.  I am particularly passionate about working with young adults and adults. I have over 11 years of experience working in diverse therapeutic settings such as outpatient, hospitals and schools.  I have specialized training and experience in anxiety, depression, trauma, life transitions, self-esteem, spirituality, and relationship issues. In my spare time, I enjoy listening to music, dancing, biking, coloring and building Lego models.
                  </Typography>
                  <img className={classes.headshot} src='./sample_headshot.png' alt='headshot' />
                </div>
              </Plate>
            </Grid>
            <Grid item xs={4}>
              <AccordionPlate component="h3" variant="h5" title="What I Do" startExpanded={true}>
                <Box display="flex" flexDirection="column">
                  <Typography component="p">
                    I provide individual therapy to support partners who are:
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>Struggling with excessive and/or unrealistic worry that is difficult to control.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>Overextending themselves and having a challenging time prioritizing self-care.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>Constantly feeling burned out and depleted by the demands and expectations they put on themselves as well as others.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>Having a difficult time articulating their feelings, needs, and wants.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>Living unbalanced lives due to difficulty setting boundaries.</ListItemText>
                    </ListItem>
                  </List>
                </Box>
              </AccordionPlate>
            </Grid>
          </Grid>
          {/* 
          <div className={classes.philosophy}>
            <div title="Why I Do It">
            <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography component="h3">Why I Do It</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>I am passionate about equipping individuals with the tools needed to lie balanced lives.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>It’s rewarding for me to be able to guide individuals towards awareness, growth, healing, and wellness.</ListItemText>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </div>
            <div title="What I Believe">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography component="h3">What I Believe</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography component="p">
                    It is my belief that therapy is about equipping individuals to develop practical tools to navigate through life's challenges while taking the necessary steps to become the best versions of themselves. I believe that you can: 
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>Be empowered to live a balanced and healthy life.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>Develop emotional resilience to adapt to life's ups and downs.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>Set clear boundaries and effectively maintain and refine them.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>Develop healthy coping mechanisms and thoughts patterns.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>Effectively communicate your needs and wants.</ListItemText>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
            </div>
          </div> */}
        </Content>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;

