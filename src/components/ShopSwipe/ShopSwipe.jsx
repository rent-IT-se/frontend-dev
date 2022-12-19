import React, { useEffect } from 'react'
import img from "../../img/index"
import styles from "./shopSwipe.module.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import "swiper/css";
import { StyledEngineProvider } from '@mui/material';
import "swiper/css/grid";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetNewProducts, GetPopularProducts } from '../../redux/slices/product';
import { Link } from 'react-router-dom';
const ShopSwipe = () => {
    const navigate =useNavigate();
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(GetPopularProducts())
        dispatch(GetNewProducts())
      }, [])
      const NewProducts = useSelector((state) => state.product.NewProducts);
      const PopularProducts = useSelector((state) => state.product.PopularProducts);

      console.log("greagae",NewProducts.results)
  return (
      <div>
          <StyledEngineProvider injectFirst>
    <div className={styles.wrapper}>
        <p className={styles.tit}>Популярные</p>
        <Swiper
        slidesPerView={5}
        grid={{
          rows: 1,
        }}
        spaceBetween={20}
        
        modules={[Grid]}
        className={styles.mySwiper}
      >
          {Array.isArray(PopularProducts.results)&&PopularProducts.results.map((item,i)=>{
              return(
        <SwiperSlide key={item.id}>
            <div className={styles.item}>
                <div className={styles.imgWrap}>
                <img  className={styles.itemImg}src={item.picture1?item.picture1:img.defaultP}></img>
                </div>
                <div className={styles.txtWrap}>
                    <p className={styles.itemTit}>{item.name}</p>
                    <p className={styles.itemDes}>{item.description}</p>
                </div>
                <div className={styles.owner}>
                    <div className={styles.ownerImgWrap}>
                    <img src={item.user.pictures} className={styles.ownerImg}></img>
                    </div>
                    <p className={styles.ownerName}>{item.user.first_name+ " "+item.user.last_name}</p>
                </div>
                <div className={styles.priceWrap}>
                    <p className={styles.price}>{item.price}c<span>/ День</span></p>
                    <Link to={`/product/${item.id}`} ><button className={styles.RentBtn}><img src={img.arr}></img></button></Link>
                </div>
            </div>
               
        </SwiperSlide>
            )})}
        
          </Swiper>
          <div className={styles.more}>
          <p >Показать еще</p>
            <img src={img.more}></img>
          </div>
    </div>
    <div className={styles.wrapper}>
        <p className={styles.tit}>Новые</p>
        <Swiper
        slidesPerView={5}
        grid={{
          rows: 1,
        }}
        spaceBetween={20}
        
        modules={[Grid]}
        className={styles.mySwiper}
      >
          {Array.isArray(NewProducts.results)&&NewProducts.results.map((item,i)=>{
              return(
        <SwiperSlide>
            <div className={styles.item}>
                <div className={styles.imgWrap}>
                <img  className={styles.itemImg}src={item.picture1?item.picture1:img.defaultP}></img>
                </div>
                <div className={styles.txtWrap}>
                    <p className={styles.itemTit}>{item.name}</p>
                    <p className={styles.itemDes}>{item.description}</p>
                </div>
                <div className={styles.owner}>
                    <div className={styles.ownerImgWrap}>
                    <img src={item.user.pictures?item.user.pictures:img.defaultP} className={styles.ownerImg}></img>
                    </div>
                    <p className={styles.ownerName}>{item.user.first_name+ " "+item.user.last_name}</p>
                </div>
                <div className={styles.priceWrap}>
                    <p className={styles.price}>{item.price} <span>/ День</span></p>
                    <Link to={`/product/${item.id}`} ><button className={styles.RentBtn}><img src={img.arr}></img></button></Link>
                </div>
            </div>
               
        </SwiperSlide>
              )})}
        
        
          </Swiper>
        
          <div className={styles.more}>
          <p >Показать еще</p>
            <img src={img.more}></img>
          </div>
    </div>

    </StyledEngineProvider>
    </div>
  )
}

export  {ShopSwipe}