import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

const Footer = (props) => {
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
        <footer>
            <p>{data.site.siteMetadata.author} © {year}</p>
        </footer>
    )
}
export default Footer;