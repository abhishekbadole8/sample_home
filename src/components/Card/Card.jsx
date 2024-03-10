import React from 'react'
import styles from "./Card.module.css";

function Card({ card }) {

  const { isActive,image, title, desc } = card;

  return (
    <div className={`${styles.card} ${isActive ? styles.cardActive:""}`}>

      <div className={styles.cardImgContainer}>
        <img src={image} alt={title} />
      </div>

      <h6 className={styles.cardTitle}>{title}</h6>
      <p className={styles.cardInfo}>{desc}</p>
    </div>
  )
}

export default Card