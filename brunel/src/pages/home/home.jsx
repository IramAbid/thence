import React from "react";
import Hero from '../../components/hero/hero';
import Bottom from "../../components/bottom/bottom";
import styles from './home.module.css';
import Navbar from "../../components/navbar/navbar";
function Home (){

    return(
        <div className={styles.Home}>  
          <Navbar/>     
            <div className={styles.homecontainer}>
            <Hero className={styles.hero} />
            <Bottom className={styles.bottom} />
            </div>
        </div>
    );

}

export default Home;
