import React from 'react'
import PropTypes from 'prop-types'

//Stateless functional component
const NavBar = ({totalCounters}) => {
  return(
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar
        <span className = 'badge badge-pill badge-secondary m-2'>
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};


export default NavBar;
