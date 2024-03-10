import React from 'react'
import styles from "./Header.module.css";
import logo from "../../../public/Group 1.svg";

function Header() {
  return (
    <div className={styles.header}>

      <div className={styles.logoContainer}>
        <img src={logo} alt="" />
        <h5 className={styles.logoTitle}>Learning Exp.</h5>
      </div>

      <div className={styles.navbarContainer}>

        <nav className={styles.navbar}>
          <a href="" className={styles.navLink}>Home</a>
          <a href="" className={styles.navLink}>Services Us</a>
          <a href="" className={styles.navLink}>Why Us</a>
          <a href="" className={styles.navLink}>Our Goals</a>
        </nav>

        <button className={styles.contactButton}>
          Contact Us
        </button>

      </div>
    </div>
  )
}

export default Header