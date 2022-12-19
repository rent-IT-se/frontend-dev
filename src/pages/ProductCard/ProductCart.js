import React from 'react'
import Product from '../../components/product/Product'
import BreadCrumbs from '../../components/breadCrumbs/BreadCrumbs'
function ProductCart() {
  
  return (
    <div>
      <div className='bread'>
      <BreadCrumbs />
      </div>
      <Product/>
    </div>
  )
}

export default ProductCart