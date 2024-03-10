import React from 'react'
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>

      <div className={styles.leftContianer}>

        <div className={styles.logoContainer}>
          <img src="/Group 1.svg" alt="" />
          <h5 className={styles.logoTitle}>Learning Exp.</h5>
        </div>

        <div className={styles.socialIconContainer}>

          <div className={styles.socialIcon}>
            <img src="/Group 45.png" alt="" />
          </div>
          <div className={styles.socialIcon}>
            <img src="/Group 45.png" alt="" />
          </div>
          <div className={styles.socialIcon}>
            <img src="/Group 45.png" alt="" />
          </div>

        </div>

      </div>
      
      <table>

        <thead>
          <tr>
            <th>Links</th>
            <th>Support</th>
            <th>Contact Us</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Home</td>
            <td>Home</td>
            <td>Home</td>
          </tr>
          <tr>
            <td>Home</td>
            <td>Home</td>
            <td>Home</td>
          </tr>
          <tr>
            <td>Home</td>
            <td>Home</td>
            <td>Home</td>
          </tr>
        </tbody>

      </table>

      <div className={styles.contactus}>

        <div className={styles.contactusContext}>
          <h6>Contact Us!</h6>
          <span>There are many variations of passages of Lorem Ipsum but the majority have suffered alteration.</span>
        </div>

        <div className={styles.sendContainer}>
          <input type="text" placeholder='Email here' />
          <button >Send</button>
        </div>

      </div>

    </div>
  )
}

export default Footer