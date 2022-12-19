import React from 'react'
  import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Baner.module.scss"
import img from "../../img/index"
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';  
import { Autoplay } from "swiper";
import { StyledSearch } from '../../muiStyles';
import { InputAdornment } from '@mui/material';
import { Pagination } from "swiper";
const Baner = () => {
  return (
    <div className={styles.wrapper}>
        <Swiper className={styles.mySlider}
        pagination={{clickable: true}}
         autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay,Pagination]}
        >
        <SwiperSlide>
            <div className={styles.swipe}>
              <div className={styles.slideWpap}>
                    <p className={styles.bannerTitle}>ПРИСОЕДИНЯЙСЯ</p>
                    <div className={styles.banerTtx}>
                      <p className={styles.bannerDesc}>Больше <b className={styles.bold}>5000+</b> аренды в день</p>
                      <p className={styles.desc2}>Сравнение товаров и удобная оплата раз в месяц</p>
                    </div>
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
                      />
              </div>
              <img src={img.laptop}></img>
            </div>
           
        </SwiperSlide>
        
        <SwiperSlide>
        <div className={styles.swipe}>
                <div className={styles.banertxt}>
                    <h1 className={styles.SwipeTitle}>ЛУЧШЕЕ ЗВУЧАНИЕ</h1>
                    <h2 className={styles.SwipeDesc}>НАУШНИКИ URBANISTA LOS ANGELES С САМОЗАРЯДКОЙ И ПО ВЫГОДНОЙ ЦЕНЕ</h2>
                    
                </div>
                <img src={img.banerImg2}></img> 
            </div>
        </SwiperSlide>
        </Swiper>
        
    </div>
  )
}

export {Baner}