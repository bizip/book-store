import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../../Styles.module.css';

const propTypes = {};

const defaultProps = {};

const NavBar = () => (
  <nav className={classes.navbar}>
    <ul>
      <li><NavLink to="/"><h1>Bookstore CMS</h1></NavLink></li>
      <li><NavLink to="/book">Books</NavLink></li>
      <li><NavLink to="/category">Categories</NavLink></li>
    </ul>

  </nav>
);

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
// #endregion

export default NavBar;
