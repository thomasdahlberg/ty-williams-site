import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, ThemeProvider, Typography, List, ListItem, ListItemText, ListItemIcon, Divider } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@mui/material/Grid';

import Layout from "../components/layout";
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import Head from "../components/Head";
import Plate from "../components/Plate";
import Content from "../components/Content";
import { Box } from "@mui/system";
import Splash from "../components/Splash";

const useStyles = makeStyles((theme) => ({
  about: {
    paddingTop: "0.5rem",
    display: "flex",
    flexWrap: "wrap-reverse",
    alignItems: "center",
    justifyContent: "space-evenly",
    "& img": {
      maxWidth: "250px"
    }
  },
  bio: {
    maxWidth: "600px"
  },
  summary: {
    paddingBottom: "0.5rem",
    textAlign: "left",
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600'
  },
  details: {
    marginTop: "1rem",
    marginBottom: "1rem",
    "& p": {
      fontWeight: "700"
    }
  },
  accordion: {
    color: theme.palette.black,
    paddingBottom: "0.5rem",
    textAlign: "left",
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600'
  },
  container: {
    backgroundColor: "#CCF6C8",
    padding: "1rem",
    paddingBottom: "3rem"
  },
  philosophy: {
    marginBottom: "0.5rem"
  }
}));

const Home = () => {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Head title="Welcome" />
        <Content>
          <Splash text={"Become the best version of yourself."}/>
          <Grid container spacing={2} className={classes.container}>
            <Grid item xs={12} sm={8}>
              <Plate title="A Little About Me" variant="h4">
                <div className={classes.about}>
                  <div>
                    <Typography component="p" className={classes.bio}>Hi There! I’m TyaNisha Williams, the founder of Simply Becoming Counseling, LLC
                      and a Licensed Clinical Professional Counselor located in Baltimore, Maryland. I
                      am a native of upstate New York. I received my Bachelors of Arts degree in Health
                      Education from State University New York at Cortland. After many years of
                      teaching, I moved to Baltimore where I obtained a Master’s degree in Clinical
                      Mental Health Counseling from Loyola University Maryland.
                    </Typography>
                    <Typography component="p" className={classes.bio}>I am particularly passionate about working with adult men and women to help
them develop practical tools to navigate through seasons of transition. I have over 11 years of
                      experience working in diverse therapeutic settings such as outpatient, hospitals
                      and schools. I have specialized training and experience in anxiety, depression,
                      trauma, life transitions, self-esteem, spirituality, and relationship issues. My
                      holistic, person-centered approach provides a safe and supportive
                      environment while promoting hope, growth, healing and wellness.
                    </Typography>
                    <Typography component="p" className={classes.bio}>In my spare time, I enjoy listening to music, dancing, biking, coloring and
                       building Lego models.
                    </Typography>
                  </div>
                  <img className={classes.headshot} src='./headshot.png' alt='counselor headshot' />
                </div>
              </Plate>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.philosophy}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary"/>}
                  className={classes.summary}
                >
                  <Typography component="h3" variant="h5" className={classes.accordion}>What I Do</Typography>
                  <Divider />
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  <Box display="flex" flexDirection="column">
                    <Typography component="p">
                      I provide individual therapy to support partners who are:
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText>Struggling with signs and symptoms of anxiety, depression and trauma.</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText>Overextending themselves and having a difficult time prioritizing self-care.</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText>Constantly feeling burned out and depleted by demands and expectations.</ListItemText>
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
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.philosophy}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary"/>}
                  className={classes.summary}
                >
                  <Typography component="h3" variant="h5" className={classes.accordion}>Why I Do What I Do</Typography>
                  <Divider />
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  {/* <Typography component="p"></Typography> */}
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>As a wife, a mom, and a career woman, I know the challenge in trying to find balance.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>It’s rewarding for me to be able to guide individuals towards awareness, growth, healing, and wellness.</ListItemText>
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <ChevronRightIcon />
                      </ListItemIcon>
                      <ListItemText>I am passionate about equipping individuals with the tools needed to become 
                        the best version of themselves.</ListItemText>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className={classes.philosophy}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary"/>}
                  className={classes.summary}
                >
                  <Typography component="h3" variant="h5" className={classes.accordion}>What I Believe</Typography>
                  <Divider />
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                  <Box display="flex" flexDirection="column">
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
                        <ListItemText>Learn to set clear boundaries and effectively maintain them.</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText>Develop healthy coping mechanisms and thought patterns.</ListItemText>
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText>Effectively communicate your needs and wants.</ListItemText>
                      </ListItem>
                    </List>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Content>
      </Layout>
    </ThemeProvider>
  );
};

export default Home;

