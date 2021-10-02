import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, ThemeProvider, Typography, List, ListItem, ListItemText, ListItemIcon, Divider } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@mui/material/Grid';

import Layout from "../components/Layout";
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import Head from "../components/Head";
import Plate from "../components/Plate";
import Content from "../components/Content";
import { Box } from "@mui/system";
import Splash from "../components/Splash";

const useStyles = makeStyles((theme) => ({
  about: {
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
    // color: theme.palette.black,
    paddingBottom: "0.5rem",
    textAlign: "left",
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600'
  },
  details: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  accordion: {
    color: theme.palette.black,
    paddingBottom: "0.5rem",
    textAlign: "left",
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600'
  },
  container: {
    backgroundColor: "#fafafa",
    // width: "100vw",
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
          <Splash />
          <Grid container spacing={2} className={classes.container}>
            <Grid item xs={12} sm={8}>
              <Plate title="A Little About Me" variant="h4">
                <div className={classes.about}>
                  <Typography component="p" className={classes.bio}> 
                    Hi There! I’m TyaNisha Williams, the founder of Simply Becoming, LLC and a Licensed Clinical Professional Counselor located in Baltimore, Maryland. I am a native of upstate New York. I received my Bachelors of Arts degree in Health Education from State University New York at Cortland. After many years of teaching, I moved to Baltimore to pursue my dream of attending graduate school. I obtained a Master’s degree in Clinical Mental Health Counseling from Loyola University Maryland.  I am particularly passionate about working with young adults and adults. I have over 11 years of experience working in diverse therapeutic settings such as outpatient, hospitals and schools.  I have specialized training and experience in anxiety, depression, trauma, life transitions, self-esteem, spirituality, and relationship issues. In my spare time, I enjoy listening to music, dancing, biking, coloring and building Lego models.
                  </Typography>
                  <img className={classes.headshot} src='./headshot.png' alt='counselor headshot' />
                </div>
              </Plate>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
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
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="primary"/>}
                  className={classes.summary}
                >
                  <Typography component="h3" variant="h5" className={classes.accordion}>Why I Do It</Typography>
                  <Divider />
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
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
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
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

