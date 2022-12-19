import React from 'react'
import styles from "./adminPanel.module.scss"
import img from "../../img/index"
import { Route,Routes } from 'react-router-dom';
import Empoyers from './Employers/Empoyers';
import { Link } from 'react-router-dom';
import Tarifs from '../Tarifs/Tarifs';
import Statistic from './Statistic/Statistic';
export default function AdminSide() {
  return (
    <div className={styles.flexWpap}>
        <div className={styles.sideWrapper} id="drawer-container'">
           <Link className={styles.sideLink}>
             <div className={styles.sideItem}> 
              <img src={img.home}/>
              <p className={styles.sideTxt}> Главная</p>
             </div>
            </Link>
            <Link className={styles.sideLink} to="employers">
             <div className={styles.sideItem}> 
              <img src={img.users}/>
              <p className={styles.sideTxt}> Сотрудники</p>
             </div>
           </Link> 
           <Link className={styles.sideLink}>
             <div className={styles.sideItem}> 
              <img src={img.chat}/>
              <p className={styles.sideTxt}> Чат</p>
             </div>
           </Link>
           <Link className={styles.sideLink} to="statistics">
             <div className={styles.sideItem}> 
              <img src={img.documents}/>
              <p className={styles.sideTxt}> Статистика</p>
             </div>
           </Link>
           <Link className={styles.sideLink} to="tarifs">
             <div className={styles.sideItem}> 
              <img src={img.tarif}/>
              <p className={styles.sideTxt}> Тарифы</p>
             </div>
           </Link>
        </div>
        <Routes>
            <Route index element={<Empoyers/>}/>
            <Route path='employers' element={<Empoyers/>}/>
            <Route path='tarifs' element={<Tarifs/>}/>
            <Route path= "statistics" element={<Statistic/>}/>
        </Routes>
        
    </div>
  )
}
