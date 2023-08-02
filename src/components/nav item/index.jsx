import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navitem.module.css";

const NavItem = ({ href, linkName, isActive, onClick }) => {
    return (
        <li
            className={`${styles["nav-item"]} ${isActive ? styles.active : ""}`}
            onClick={onClick}
        >
            <Link to={href}>{linkName}</Link>
        </li>
    );
};

export default NavItem;
