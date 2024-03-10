import React from 'react'
import styles from "./Hero.module.css";
import Header from "../Header/Header";
import ReactPlayer from 'react-player'

function Hero() {
  return (
    <div className={styles.hero}>

      <Header />

      <main className={styles.heroMain}>

        <section className={styles.mainHeading}>
          <h4 className={styles.mainHeadingTitle}>We Create Learning Experience With Excellent Technology.</h4>
          <p className={styles.mainHeadingSubtitle}>Unlimited Access To 100+ World-Class Courses, Hands-On Projects, And Job-Ready Certificate Programs— <br /> All Included In Your Subscription</p>

          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>Book Demo Class</button>
            <span className={styles.additionalInfo}>Explore More</span>
          </div>
        </section>

        <section className={styles.heroVideoContainer}>

          <div className={styles.videoContainer}>
            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls={true} width='100%' height='100%'/>
          </div>

        </section>
      </main>

    </div>
  )
}

export default Hero