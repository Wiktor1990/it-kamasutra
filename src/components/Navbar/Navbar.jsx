import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeclassname={classes.activeLink}> Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.activeLink}`}>
                <NavLink to="/dialogs" activeclassname={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeclassname={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/Music" activeclassname={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeclassname={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/friends" activeclassname={classes.activeLink}>Friends</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;