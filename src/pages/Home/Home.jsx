import React from 'react';
import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import ReactPlayer from 'react-player'
import Footer from '../../components/Footer/Footer';


function Home() {

  const cards = [{
    image: "/smartphone (1).svg",
    title: "Learn Anything",
    desc: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable",
    isActive: false,
  }, {
    image: "/Dashboard.svg",
    title: "Learn Anything",
    desc: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable",
    isActive: true
  }, {
    image: "/layout.svg",
    title: "Learn Anything",
    desc: "It Is A Long Established Fact That A Reader Will Be Distracted By The Readable",
    isActive: false
  },]

  const achivements = [
    {
      image: "/clipboard.svg",
      title: "100+",
      desc: "Batch Complete"
    },
    {
      image: "/clipboard.svg",
      title: "50+",
      desc: "Active Batches"
    },
    {
      image: "/users.svg",
      title: "10,000+",
      desc: "Student Satisfied"
    },
    {
      image: "/users.svg",
      title: "10+",
      desc: "Course Modules"
    },
  ]

  return (
    <div className={styles.home}>
      <Hero />

      <section>

        <div className={styles.servicesHeader}>

          <h6>We provide various kind of learning modules for you</h6>
          <p>It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Oted Humour And The Like.</p>

        </div>

        <div className={styles.cards}>
          {cards.map((card, index) => {
            return <Card key={index} card={card} />
          })}
        </div>

        <div className={styles.servicesFooter}>
          <h6>Why Us</h6>
          <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
        </div>

        <div className={styles.dreamSection}>

          <section className={styles.heroVideoContainer}>

            <div className={styles.videoContainer}>
              <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' controls={true} width='100%' height='100%' />
            </div>

          </section>

          <div className={styles.servicesFooter}>

            <h6>Crafting Your Dream Career: Building a Path You Love with us</h6>
            <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.
              <br />
              <br />
              Our Platform Is Designed To Empower Learners Like You To Excel In Today’s Dynamic World.
            </p>

            <button className={styles.getMore}>Get more</button>
          </div>
        </div>

        <div className={styles.programs}>

          <div className={styles.servicesHeader}>

            <h6>We Completed 1200+ Certification Program Successfully & Counting</h6>
            <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
          </div>

          <ul className={styles.features}>
            {achivements.map((achivement, index) => {
              const { image, desc, title } = achivement;

              return (
                <li key={index}>
                  <div className={styles.featuresIcon}>
                    <img src={image} alt="" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p>{title}</p>
                    <span>{desc}</span>
                  </div>
                </li>)
            })}
          </ul>
        </div>

        <div className={styles.feedback}>

          <div className={styles.feedbackHeader}>

            <div className={styles.feedbackHeaderContext}>
              <h6>Our Students Feedback</h6>
              <p>At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success.</p>
            </div>

            <button className={styles.readMoreBtn}>Read More</button>
          </div>

          <div className={styles.feedbackContainer}>

            <div className={styles.feedbackUserImgContainer}>

              <img src="/person.png" alt="" />
            </div>

            <div className={styles.feedbackContext}>

              <div className={styles.starContainer}>
                <img src="/star.png" alt="" />
              </div>

              <p className={styles.feedbackDesc}>"Sed Ut Perspiciatis Unde Omnis Iste Natus Error <br /> Sit Voluptatem Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Modi Tem."</p>

              <div>
                <p className={styles.feedbackUsername}>Riad Isalm</p>
                <span className={styles.feedbackUserPro}>Product Manager. @Learning.Com</span>
              </div>

            </div>
          </div>

        </div>

      </section>

      <Footer />
    </div>
  )
}

export default Home