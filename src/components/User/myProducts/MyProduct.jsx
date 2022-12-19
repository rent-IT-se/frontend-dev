import React, { useEffect } from 'react'
import styles from "./myproduct.module.scss"
import img from '../../../img'
import { GreenBtn } from '../../../muiStyles';
import { useDispatch,useSelector } from 'react-redux';
import { GetMyProducts } from '../../../redux/slices/user';




function MyProduct() {
    const dispatch=useDispatch();
   useEffect(()=>{
        dispatch(GetMyProducts())
   },[])
   const myProducts= useSelector((state)=>state.userData.MyProducts)
   console.log(myProducts)
   
  return (
    <div className={styles.wrapper}>
         <p className={styles.title}>Мои объявления</p>
         <div className={styles.listWrap}>
            {myProducts&& myProducts.map((item,key)=>{
                return(
             <div className={styles.listItem} key={myProducts.id}>
                <div className={styles.leftSide}>
                    <div className={styles.imgwrap}>
                         <img className={styles.productImg} src={item.picture1}></img>
                    </div>
                    <div className={styles.txtWrap}>
                        <p className={styles.ProductName}> 
                            {item.name}     
                        </p>
                        <p className={styles.uptate}>ОБНОВЛЕНО<span className={styles.date}>{item.updated_date}</span></p>
                        <div className={styles.productViews}>
                            <div className={styles.viewsItem}>
                                <img src={img.eye} alt="eye" />
                                <p className={styles.itemNum}>{item.views}</p>
                            </div>
                            <div className={styles.viewsItem}>
                                <img src={img.like} alt="eye" />
                                <p className={styles.itemNum}>{item.likes}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.rightItem}>
                    <div>
                        <div className={styles.productP}><img src={img.edit}></img><p className={styles.Ptxt}>Редактировать</p></div>
                        <div className={styles.productP}><img src={img.del}></img><p className={styles.Ptxt}>Деактивировать</p></div>
                        <div className={styles.productP}><img src={img.update}></img><p className={styles.Ptxt}>Улучшить профиль</p></div>
                        
                    </div>
                    <GreenBtn sx={{height:"30px"}}>Запустить рекламу</GreenBtn>
                </div>
             </div>
                )})}


         </div>
    </div>
  )
}

export default MyProduct;