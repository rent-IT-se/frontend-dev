import React, { useEffect,useState } from 'react'
import styles from "./styles.module.scss"
import img from "../../img/index"
import { MenuItem, Pagination } from '@mui/material'
import { useDispatch,useSelector } from 'react-redux'
import { GetProducts } from '../../redux/slices/product'
import { ProfileInput } from '../../muiStyles'
import { Link } from 'react-router-dom'
function Products({sub}) {
  const dispatch=useDispatch()
  const [page,setPage]=useState(1)
  const [per_page,setPer_page]=useState(5)
  useEffect(() => {
    dispatch(GetProducts({ sub, per_page, page}));
  }, [sub, per_page, page]);
  const products = useSelector((state) => state.product.Products);
  // const isProductGet=useSelector((state)=>state.Products.isProductsGetted)
  return (
    <div>
     {products?(
    <div>
      <div className={styles.itemsWrap}>
        {/* {
          status === 'Loading products' &&
          <h1>Загрузка...</h1>
        } */}
    {Array.isArray(products.results) && products.results.map((product,i)=> {
              return(
    
        <div className={styles.item}  key={product.id}>
                <div className={styles.imgWrap}>
                <img  className={styles.itemImg}src={product.picture1}></img>
                </div>
                <div className={styles.txtWrap}>
                    <p className={styles.itemTit}>{product.name}</p>
                    <p className={styles.itemDes}>{product.description}</p>
                </div>
                <div className={styles.owner}>
                    <div className={styles.ownerImgWrap}>
                    <img src={img.owner} className={styles.ownerImg}></img>
                    </div>
                    <p className={styles.ownerName}>Андрей К</p>
                </div>
                <div className={styles.priceWrap}>
                    <p className={styles.price}>{product.price} <span>{product.currency=="dollar"?"$":"c"}</span></p>
                    <Link to={`/product/${product.id}`} ><button className={styles.RentBtn}><img src={img.arr}></img></button></Link>
                </div>
          </div>
              )})}
               </div> 

    <div className={styles.pagin}>
      <div></div>
        <Pagination count={products.count/per_page} color="success" onChange={(e, value)=>setPage(value)} />
      <div className={styles.perPage}>
      <p >Кол-во Продуктов</p>
      <ProfileInput
          sx={{width:"70px", padding:"none"}}
          select
          size='small'
          value={per_page}
          onChange={(e)=>setPer_page(e.target.value)}

        >
          
                    <MenuItem value={5}>
                    5
                    </MenuItem>
                   
                    <MenuItem value={10}>
                    10
                    </MenuItem>
                    <MenuItem value={20}>
                    20
                    </MenuItem>
                  
           
           
        </ProfileInput>
      </div>
    </div>
    </div>
    ):(<div>Loading</div>)}
    </div>
    
  
  )
}

export default Products