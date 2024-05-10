import React from "react";
import styles from './bottom.module.css';
import Union from './assets/Union.png'
import plus from './assets/plus.png';
import minus from './assets/minus.png';
import copyright from './assets/copyright.png';

function Bottom (){

    return(
        <div className={styles.bottom}>
            {/* Container for the main content */}
            <div className={styles.bottomcontainer}>
                {/* Green container */}
                <div className={styles.greencontainer}>
                    {/* Left section */}
                    <div className={styles.left}>
                        {/* Main heading */}
                        <h1 className={styles.mind}>What's on your mind</h1>
                        {/* Subheading */}
                        <h1 className={styles.ask}>Ask Questions</h1>
                        {/* Arrow image */}
                        <img src={Union} alt="arrow" className={styles.union}/>
                    </div>
                    {/* Right section */}
                    <div className={styles.right}>
                        {/* Question containers */}
                        <div className={styles.questioncontainer}>
                            <h1 className={styles.question}>Do you offer freelancers?<img alt="plus" src={plus} className={styles.plus}/></h1>
                        </div>
                        <div className={styles.questioncontainer}>
                            <h1 className={styles.question}>What’s the guarantee that I will be satisfied with the hired talent?<img alt="plus" src={plus} className={styles.plus}/></h1>
                        </div>
                        <div className={styles.questioncontainer}>
                            <h1 className={styles.question}>Can I hire multiple talents at once?<img alt="plus" src={minus} className={styles.plus}/></h1>
                            {/* Answer container */}
                            <div className={styles.answer}>
                                <p className={styles.answer}>If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</p>
                            </div>
                        </div>
                        <div className={styles.questioncontainer}>
                            <h1 className={styles.question}>Why should I not go to an agency directly? <img alt="plus" src={plus} className={styles.plus}/></h1>
                        </div>
                        <div className={styles.lastquestion}>
                            <h1 className={styles.question}>Who can help me pick a right skillset and duration for me?<img alt="plus" src={plus} className={styles.plus}/></h1> 
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer container */}
            <div className={styles.footercontainer}>
                {/* Footer content */}
                <div className={styles.footer}>
                    {/* Copyright section */}
                    <div className={styles.copyright}>
                        <h4><img src={copyright} alt="copyrightpic" className={styles.copyrightpic}/> Talup 2023. All rights reserved</h4>
                    </div>
                    <div className={styles.footerright}>
                        <p>
                            <u>Terms & Conditions</u>
                        </p>
                        <p>
                            <u>Privacy Policy</u>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bottom;
