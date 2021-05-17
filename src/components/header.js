import React from 'react';
import NavBar from './NavBar';
import { Link } from "gatsby"

const Header = (props) => {
  return (
    <div>
      <Link to="/"><h1>Header Placeholder</h1></Link>
      <NavBar />
    </div>
  )
}

export default Header;