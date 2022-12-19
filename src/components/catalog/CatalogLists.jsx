import React, { useEffect, useState } from 'react'
import { Route, Routes,Link } from 'react-router-dom'

import styles from "./styles.module.scss"
import { useDispatch,useSelector } from 'react-redux'
import { GetAllCategories } from '../../redux/slices/product'
import Products from './Products'

function CatalogLists() {
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(GetAllCategories());
      }, []);
      const categories = useSelector((state) => state.product.AllCategories);
      console.log(categories)
    const [sub_category,setSub_category]=useState()
  return (
      <div>
          <h1 className={styles.title1}>Каталог</h1>
        <div className={styles.flexWrap}>

            <div>
            {/* {categories.map((item,index)=>{<div key={index}>{item.name}</div>})} */}
            
            
            {Array.isArray(categories) && categories?.map((category, i) => {
              return(
            <div className={styles.listWrapper} key={category.id}>
                <p className={styles.categotyTitle}>{category.name}</p>
                <div className={styles.catalogLists}>
                    <ul className={styles.links}>
                    {category.sub_category.map((sub, index) => {
              return (
                        <li key={index} className={styles.linksItem} onClick={()=>setSub_category(sub.id)}><Link className={styles.catalogLink}>{sub.name}</Link></li>
              )})}

                    </ul>
                </div>
                </div>
              )})}
              
               
                
                
                
            </div>
            
            <div>
            <Products  sub={sub_category}/>
            </div>
        </div>
    </div>
  )
}

export default CatalogLists