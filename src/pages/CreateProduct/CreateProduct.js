import React from 'react'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'
import styles from "./Create.module.scss"
import CreateProductForm from '../../components/CreateProductForm.js/CreateProductForm'
function CreateProduct() {
  return (
    <div>
        <div className={styles.breacrumb}>
            <BreadCrumbs/>
        </div>
        <CreateProductForm/>
    </div>
  )
}

export default CreateProduct