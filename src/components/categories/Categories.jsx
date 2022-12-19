import React from 'react'
import styles from "./categories.module.scss"
import img from "../../img/index"
import { Swiper, SwiperSlide } from "swiper/react";

const Categories = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.tit1}>Категории</h1>
    <div className={styles.swipeContainer}>
      <div className={styles.toggle}>
      <button className={styles.categorBtn}>
            Телефоны и аксессуары
        </button>
        <button className={styles.categorBtn}>
            Бытовая техника
        </button>
        <button className={styles.categorBtn}>
            ТВ и видео
        </button>
        <button className={styles.categorBtn}>
            Видеоигры и приставки
        </button>
        <button className={styles.categorBtn}>
            Проекторы
        </button>
        </div>
        <Swiper className={styles.mySlider}>
          
          <SwiperSlide>
            <div className={styles.wrapper}>
              <div class={`${styles.item} ${styles.pink}`}>    <img src={img.p1}></img> </div>
              <div class={`${styles.item} ${styles.upcenter}`}><img src={img.p2}></img> </div>
              <div class={`${styles.item} ${styles.orange}`}>  <img src={img.p3}></img> </div>
              <div class={styles.item}>                        <img src={img.p4}></img>   </div>
              <div class={`${styles.item} ${styles.bcenter}`}> <img src={img.p5}></img>   </div>
              <div class={styles.item}><img src={img.p6}></img></div>
            </div>
          </SwiperSlide>
          
        </Swiper>
    </div>
    </div>
  )
}

export  {Categories}