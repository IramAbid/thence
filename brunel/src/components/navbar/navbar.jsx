import React from "react";
import styles from './navbar.module.css';
import logo from './logo.png';

function Navbar(){
    return(
        <nav className={styles.navbar}>
        <img src={logo} alt='logo'className={styles.logo}/>
            <div className={styles.buttoncontainer}>
            <button className={styles.button1}><p className={styles.buttontext}>Get Project</p></button>
            <button className={styles.button2}><p className={styles.buttontext}></p>Talent Onboard</button>
            </div>

        </nav>
    );
}

export default Navbar;