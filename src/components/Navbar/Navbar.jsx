import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to="/profile" className = {navData => navData.isActive ? classes.activeLink : classes.item}>Profile</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/dialogs" className = {navData => navData.isActive ? classes.activeLink : classes.item}>Messages</NavLink>
    </div>
    <div className={classes.item}>
      <a>News</a>
    </div>
    <div className={classes.item}>
      <a>Music</a>
    </div>
    <div className={classes.item}>
      <a>Settings</a>
    </div>
  </nav>
}

export default Navbar