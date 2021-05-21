import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    position: "fixed",
    bottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.light,
  },
}));

const Footer = (props) => {
    const classes = useStyles();
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    const year = new Date().getFullYear();
    return(
        <footer className={classes.container}>
            <p>{data.site.siteMetadata.author} © {year}</p>
        </footer>
    )
}
export default Footer;