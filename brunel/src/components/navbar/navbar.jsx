import React from "react";
import styles from './navbar.module.css';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className={styles.nav}>
            <div className={styles.navcontainer}>
            <div className={styles.navbar}>
            <img src={logo} alt='logo' className={styles.logo}/>
            <div className={styles.buttoncontainer}>
            <div className={styles.button1}><Link to="/register" style={{ color: '#1C1C1C', textDecoration: 'none' }}><p className={styles.buttontext}>Get Project</p></Link></div>
            <button className={styles.button2}><p className={styles.buttontext}>Talent Onboard</p></button>
            </div>

        </div>
        </div>
        </div>
    );
}

export default Navbar;
