import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import styles from './register.module.css';
import logo from '../../assets/logo.png';
import cross from './assets/cross.png';
import warning from './assets/Badges.png';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the email is valid
    if (!validateEmail(email)) {
      setEmailError('Enter a valid email address.');
    } else {
      // Clear any previous errors
      setEmailError('');
      // Set submitted to true to trigger the redirect
      setSubmitted(true);
    }
  };

  // Email validation function
  const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className={styles.register}>
      {submitted && <Navigate to="/register/success" />}
      <div className={styles.header}>
        <img src={logo} alt="logo" className={styles.logo} />
        <Link to="/home">
          <img src={cross} alt="cross" className={styles.cross} />
        </Link>
      </div>
      <div className={styles.registertext}>
        <p className={styles.registerhere}>Registration Form </p>
        <p className={styles.journey}>Start your success here Journey here!</p>
      </div>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" id="fullName" name="fullName" placeholder='Enter your name' value={fullName} onChange={handleFullNameChange} required />
          </div>
          <div>
            <input type="text" id="email" name="email" placeholder='Enter your email' value={email} onChange={handleEmailChange} required />
            {emailError && <p className={styles.error}><img src={warning} alt="warning" className={styles.warning}/>{emailError}</p>}
          </div>
          <button type="submit" className={styles.submit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
