import React from 'react'
import styles from "./favoriteList.module.scss"
import img from '../../img'
import { GreenBtn } from '../../muiStyles'
function FavoriteList() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.favItem}>
           <div className={styles.up}>
              <div className={styles.imgWrapper}>
                  <img src={img.fav1} alt="fav" />
              </div> 
              <div className={styles.txtWrapper}>
                <div className={styles.redFav} >
                  <img src={img.redFav} alt="f" />
                </div>
                <p className={styles.productName}>
                Смартфон BlackBerry Motion 
с аккумулятором ...
                </p>  
              </div> 
           </div>
           <div className={styles.down}>
                <div>
                  <p className={styles.date}>День</p>
                  <p className={styles.price}>260 сом / 2$</p>
                </div>
                <GreenBtn>Перейти в чат</GreenBtn>
           </div>
        </div>
        <div className={styles.favItem}>

        </div>
        <div className={styles.favItem}>

        </div>
        <div className={styles.favItem}>

        </div>
    </div>
  )
}

export default FavoriteList