import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../../Styles.module.css';

const propTypes = {};

const defaultProps = {};

const NavBar = () => (
  <nav className={classes.navbar}>
    <ul>
      <li><NavLink className={(navData) => (navData.isActive ? 'active' : 'none')} to="/"><h1 className={classes.navheader}>Bookstore CMS</h1></NavLink></li>
      <li><NavLink to="/category" className={classes.books}>Books</NavLink></li>
      <li><NavLink to="/category" className={classes.category}>Categories</NavLink></li>
    </ul>

  </nav>
);

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
// #endregion

export default NavBar;
