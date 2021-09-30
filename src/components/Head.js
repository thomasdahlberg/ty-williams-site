import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../../static/favicon.ico';

const Head = ({title}) => {
  return (
    <div>
      <Helmet title={`${title}`}>
        <link rel="icon" href={favicon}/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap" rel="stylesheet"/>
      </Helmet>
    </div>
  )
}

export default Head;