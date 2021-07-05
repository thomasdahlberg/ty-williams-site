import React from 'react';
import Layout from "../components/Layout";
import Head from "../components/Head";
import Content from "../components/Content";
import { CssBaseline, ThemeProvider, Typography, List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import theme from '../gatsby-theme-material-ui-top-layout/theme';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  question: {
    width: "100%",
  },
  answer: {
    display: "flex",
    flexDirection: "column"
  }
}));


const FAQs = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Layout>
      <Head title="FAQs" />
      <Content title="Frequently Asked Questions">
        <Accordion className={classes.question}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography variant="h6" component="h3">What are some common goals in counseling?</Typography>  
          </AccordionSummary>
          <AccordionDetails className={classes.answer}>
            <Typography>A number of benefits are available from participating in therapy.Therapists can provide a fresh perspective on a difficult problem or point you in the direction of a solution. The benefits you obtain from therapy depend on how well you use the process and put into practice what you learn. Some of the benefits available from therapy include:</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Attaining a better understanding of yourself, your goals and values
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Developing skills for improving your relationships
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Finding resolution to the issues or concerns that led you to seek therapy
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Learning new ways to cope with stress and anxiety
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>Managing anger, grief, depression, and other emotional pressures</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Improving communications and listening skills
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>Changing old behavior patterns and developing new ones</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Discovering new ways to solve problems in your family or marriage
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>Improving your self-esteem and boosting self-confidence</ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.question}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header">
            <Typography variant="h6" component="h3">
              Do I need therapy?  I can usually handle problems on my own.
            </Typography>  
          </AccordionSummary>
          <AccordionDetails className={classes.answer}>
            <Typography>
              Everyone goes through challenging situations in life, and while you may have successfully navigated through other difficulties you’ve faced, there’s nothing wrong with seeking out extra support when you need it. In fact, therapy is for people who have enough self-awareness to realize they need a helping hand, and that is something to be admired. You are taking responsibility by accepting where you’re at in life and making a commitment to change the situation by seeking therapy. Therapy provides long-lasting benefits and support, giving you the tools you need to avoid triggers, re-direct damaging patterns, and overcome whatever challenges you face.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.question}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography variant="h6" component="h3">What is therapy like?</Typography>  
          </AccordionSummary>
          <AccordionDetails className={classes.answer}>
            <Typography>Usually, it all starts with a phone call and setting up an appointment. When you call the office, you will either be greeted by me or, if I am in session with a client, you will leave me a voicemail. I will return your call as soon as sessions end. Next, we will discuss your needs. If you decide my expertise is a fit for your needs,  we will schedule a counseling session.</Typography>
            <Typography>In the first session, you can expect to discuss the current events happening in your life, your personal history relevant to your challenges. Towards the end of our first session, we will decide how often you should come to counseling.</Typography>
            <Typography>Sometimes I will ask you to practice some of the tools we cover outside of the therapy session. This helps to maintain the work we do in sessions.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.question}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography variant="h6" component="h3">How long will I need therapy?</Typography>  
          </AccordionSummary>
          <AccordionDetails className={classes.answer}>
            <Typography>Depending on your specific needs, therapy can be short-term or longer-term. It all depends on the challenges you are facing and the severity in which it is impacting your life.</Typography>
            <Typography>When challenges are more severe, it may take a bit longer to heal from. You will get better results from therapy if you actively and consistently participate in the process.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.question}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography variant="h6" component="h3">What about medication vs. psychotherapy?</Typography>  
          </AccordionSummary>
          <AccordionDetails className={classes.answer}>
            <Typography >When dealing with issues that threaten our mental and emotional wellness, medication alone is not always the best solution.</Typography>
            <Typography>Oftentimes, clients are recommended to seek counseling from a medical doctor. Both medical and mental health communities understand the benefits of collaboration to help the client achieve full wellness.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.question}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography variant="h6" component="h3">Are you in network with insurances?</Typography>  
          </AccordionSummary>
          <AccordionDetails className={classes.answer}>
            <Typography>I am currently out of network with all insurance plans.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.question}>
          <AccordionSummary 
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography variant="h6" component="h3">Do you keep what we talk about in therapy confidential?</Typography>  
          </AccordionSummary>
          <AccordionDetails className={classes.answer}>
            <Typography>Confidentiality is of the utmost importance to me as your therapist. I follow ethical and legal statutes as it relates to client confidentiality.</Typography>
            <Typography>There are only a few reasons why I would have to break confidentiality:</Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  If a client may be an immediate danger to themselves or others.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  If the client is endangering a child or an elder.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  If I am ordered to release information by a judge in a court of law.
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Content>
    </Layout>
  </ThemeProvider>

  )
}

export default FAQs;