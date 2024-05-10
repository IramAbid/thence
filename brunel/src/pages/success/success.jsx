import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './success.module.css';
import logo from '../../assets/logo.png';
import right from './right.png';

function Success() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      }
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(countdown);
  }, [count]); // Re-run effect when the count changes

  // Redirect to homepage when countdown reaches 0
  if (count === 0) {
    return <Navigate to="/home" />;
  }

  return (
    <div className={styles.success}>
      <div className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
      <div className={styles.successtext}>
        <img src={right} alt='success-msg' className={styles.right}/>
        <p className={styles.successhere}>Success Submitted </p>
        <p className={styles.congratulation}>Congratulations</p>
        <p className={styles.message}>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
      </div>
      <div className={styles.redirectdiv}>
        <p className={styles.para}>Redirecting you to Homepage in <span>{count} Seconds</span></p>
      </div>
    </div>
  );
}

export default Success;
