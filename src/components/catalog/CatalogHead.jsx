import React from 'react'
import { Link, Routes,Route } from 'react-router-dom'
import CatalogLists from './CatalogLists'
import styles from "./styles.module.scss"
import Phones from './Phones'
import img from "../../img/index"
import { InputAdornment } from '@mui/material'
import { StyledSearch } from '../../muiStyles'
function CatalogHead() {
  return (
      
    <div className={styles.headWrap}>
        <div className={styles.container}>
            <ul className={styles.menu}>
               <li className={styles.menuItem}><Link  to="catalog"className={styles.link1}>Все категории</Link></li>
               <li className={styles.menuItem}><Link className={styles.link1}>Ноутбуки и компьютеры</Link></li>
               <li className={styles.menuItem}><Link to="catalog/phones" className={styles.link1}>Телефоны и аксессуары</Link></li>
               <li className={styles.menuItem}><Link className={styles.link1}>Видеоигры и приставки</Link></li>
               <li className={styles.menuItem}><Link className={styles.link1}>Бытовая техника</Link></li>
               <li className={styles.menuItem}><Link className={styles.link1}>Самокаты и велосипеды</Link></li>
            </ul>
        </div>
        <div className={styles.search}>
        <StyledSearch
                      fullWidth="true"
                      placeholder="Поиск"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment >
                            <img src={img.find}></img>
                          </InputAdornment>
                        ),
                      }}
                      sx={{width:'500px'}}
                      />
        </div>
        <Routes>
            <Route index element={<CatalogLists/>}/>
            <Route path="catalog/*" element={<CatalogLists/>}>
                <Route path='phones' element={<Phones/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default CatalogHead