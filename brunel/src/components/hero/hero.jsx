import React from "react";
import styles from './hero.module.css';
import girl from './assets/girl.png';
import Card from '../card/card'; 
import fortystyle from './assets/fortystyle.png'
import aeroplane from './assets/aeroplane.png';
import dots from './assets/dots.png';
import arrow from './assets/arrow.png';

function Hero(){
    return(
        <div className={styles.hero}>
            {/* Hero container */}
            <div className={styles.herocontainer} style={{ justifyContent: 'center' }}>
                {/* Text section */}
                <div className={styles.herotext} style={{ justifyContent: 'center' }}>
                    {/* Main heading */}
                    <h1 className={styles.stories}>Success Stories</h1>
                    {/* Subheading */}
                    <h1 className={styles.herocentertext}>Every success journey we've encountered</h1>
                </div>
                {/* Second section */}
                <div className={styles.secondsection}>
                    {/* Hero image */}
                    <div className={styles.heroimage}>
                        {/* Card component */}
                        <Card borderRadius="27.11px" width="267.82px" height="239px" backgroundColor="white" position="absolute" top="45%" left="-3%" borderColor='rgba(30, 30, 30, 0.09)'>
                            <img src={fortystyle} alt='40-style'className={styles.fortystyle}/>
                            <h4 className={styles.forty}>40%</h4>
                            <p className={styles.cardtext}>Achieved reduction in project execution time by optimising team availability</p>
                        </Card>
                       
                        {/* Another Card component */}
                        <Card borderRadius="111.54px" width="245px" height="80px" backgroundColor="white" position="absolute" top="80%" left="3.5%" borderColor='rgba(30, 30, 30, 0.09)'>
                            <div className={styles.aeroplanetext}>
                                <div className={styles.aeroplane}><img src={aeroplane} alt='aeroplane' className={styles.planepic}/></div>
                                <div >
                                    <h1 className={styles.days}>10 Days</h1>
                                    <p className={styles.planetext}>Staff Deployment</p>
                                </div>
                            </div>
                        </Card>

                        {/* Another Card component */}
                        <Card borderRadius="28.36px" width="290px" height="239px" backgroundColor="#002E18" position="absolute" top="80%" left="30%" borderColor='#3D3D3D'>
                            <h1 className={styles.dollar}>$0.5 <span className={styles.million} > MILLION</span></h1>
                            <p className={styles.cardmillion}>Reduced client expenses by saving on hiring and employee costs.</p>
                        </Card>

                        {/* Image */}
                        <img src={girl} alt="girl"/>
                    </div>
                    {/* Text container */}
                    <div className={styles.secondtextcontainer}>
                        {/* Text */}
                        <p className={styles.secondsectiontext}>Enhance fortune 50 company's insight teams research capabilities
                            {/* Dots image */}
                            <img className={styles.dots} src={dots} alt="dots"/>
                        </p>
                        {/* Button */}
                        <button className={styles.button}>Explore More <img src={arrow} alt="arrow" className={styles.arrow}/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
