import React from 'react'
import { CatalogHead } from '../../components'
import CatalogLists from '../../components/catalog/CatalogLists'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'
import styles from "./categories.module.scss"
function Allcategories() {
  const routes = [
    { path: '/', breadcrumb: 'Главная' },
    { path: '/allcategories', breadcrumb: 'Категории' },
    { path: '/allcategories/catalog', breadcrumb: 'Каталог' },
    { path: '/allcategories/catalog/laptops', breadcrumb: 'Ноутбуки' }
  ];
  return (
    <div>
      <div className={styles.breadCrumpStyles}>
        <BreadCrumbs rout={routes}/>
      </div>
      <CatalogHead />
    {/* <CatalogLists/> */}
    </div>
  )
}

export default Allcategories