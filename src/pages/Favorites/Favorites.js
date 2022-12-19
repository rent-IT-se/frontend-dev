import React from 'react'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'
import FavoriteList from '../../components/favoriteList/FavoriteList'
import styles from "./favorites.module.scss"
function Favorites() {
  return (
    <div className={styles.wrapper}>
      <BreadCrumbs/>
      <p className={styles.title}>Избранное</p>
      <FavoriteList/> 
    </div>
  )
}

export default Favorites