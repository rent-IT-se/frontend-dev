import React from 'react'
import styles from "./styles.module.scss"
import img from "../../img/index"
import { Pagination } from '@mui/material'
function Phones() {
  return (
    <div>
    <div className={styles.itemsWrap}>
      <div className={styles.item}>
                <div className={styles.imgWrap}>
                <img  className={styles.itemImg}src={img.p2}></img>
                </div>
                <div className={styles.txtWrap}>
                    <p className={styles.itemTit}>Powerbank Mountain Hiking ...</p>
                    <p className={styles.itemDes}>Mountain Hiking Tour</p>
                </div>
                <div className={styles.owner}>
                    <div className={styles.ownerImgWrap}>
                    <img src={img.owner} className={styles.ownerImg}></img>
                    </div>
                    <p className={styles.ownerName}>Андрей К</p>
                </div>
                <div className={styles.priceWrap}>
                    <p className={styles.price}>260 сом <span>/ День</span></p>
                     <button className={styles.RentBtn}><img src={img.arr}></img></button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.imgWrap}>
                <img  className={styles.itemImg}src={img.p1}></img>
                </div>
                <div className={styles.txtWrap}>
                    <p className={styles.itemTit}>Powerbank Mountain Hiking ...</p>
                    <p className={styles.itemDes}>Mountain Hiking Tour</p>
                </div>
                <div className={styles.owner}>
                    <div className={styles.ownerImgWrap}>
                    <img src={img.owner} className={styles.ownerImg}></img>
                    </div>
                    <p className={styles.ownerName}>Андрей К</p>
                </div>
                <div className={styles.priceWrap}>
                    <p className={styles.price}>260 сом <span>/ День</span></p>
                     <button className={styles.RentBtn}><img src={img.arr}></img></button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.imgWrap}>
                <img  className={styles.itemImg}src={img.p2}></img>
                </div>
                <div className={styles.txtWrap}>
                    <p className={styles.itemTit}>Powerbank Mountain Hiking ...</p>
                    <p className={styles.itemDes}>Mountain Hiking Tour</p>
                </div>
                <div className={styles.owner}>
                    <div className={styles.ownerImgWrap}>
                    <img src={img.owner} className={styles.ownerImg}></img>
                    </div>
                    <p className={styles.ownerName}>Андрей К</p>
                </div>
                <div className={styles.priceWrap}>
                    <p className={styles.price}>260 сом <span>/ День</span></p>
                     <button className={styles.RentBtn}><img src={img.arr}></img></button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.imgWrap}>
                <img  className={styles.itemImg}src={img.p4}></img>
                </div>
                <div className={styles.txtWrap}>
                    <p className={styles.itemTit}>Powerbank Mountain Hiking ...</p>
                    <p className={styles.itemDes}>Mountain Hiking Tour</p>
                </div>
                <div className={styles.owner}>
                    <div className={styles.ownerImgWrap}>
                    <img src={img.owner} className={styles.ownerImg}></img>
                    </div>
                    <p className={styles.ownerName}>Андрей К</p>
                </div>
                <div className={styles.priceWrap}>
                    <p className={styles.price}>260 сом <span>/ День</span></p>
                     <button className={styles.RentBtn}><img src={img.arr}></img></button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.imgWrap}>
                <img  className={styles.itemImg}src={img.p2}></img>
                </div>
                <div className={styles.txtWrap}>
                    <p className={styles.itemTit}>Powerbank Mountain Hiking ...</p>
                    <p className={styles.itemDes}>Mountain Hiking Tour</p>
                </div>
                <div className={styles.owner}>
                    <div className={styles.ownerImgWrap}>
                    <img src={img.owner} className={styles.ownerImg}></img>
                    </div>
                    <p className={styles.ownerName}>Андрей К</p>
                </div>
                <div className={styles.priceWrap}>
                    <p className={styles.price}>260 сом <span>/ День</span></p>
                     <button className={styles.RentBtn}><img src={img.arr}></img></button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.imgWrap}>
                <img  className={styles.itemImg}src={img.p4}></img>
                </div>
                <div className={styles.txtWrap}>
                    <p className={styles.itemTit}>Powerbank Mountain Hiking ...</p>
                    <p className={styles.itemDes}>Mountain Hiking Tour</p>
                </div>
                <div className={styles.owner}>
                    <div className={styles.ownerImgWrap}>
                    <img src={img.owner} className={styles.ownerImg}></img>
                    </div>
                    <p className={styles.ownerName}>Андрей К</p>
                </div>
                <div className={styles.priceWrap}>
                    <p className={styles.price}>260 сом <span>/ День</span></p>
                     <button className={styles.RentBtn}><img src={img.arr}></img></button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.imgWrap}>
                <img  className={styles.itemImg}src={img.p2}></img>
                </div>
                <div className={styles.txtWrap}>
                    <p className={styles.itemTit}>Powerbank Mountain Hiking ...</p>
                    <p className={styles.itemDes}>Mountain Hiking Tour</p>
                </div>
                <div className={styles.owner}>
                    <div className={styles.ownerImgWrap}>
                    <img src={img.owner} className={styles.ownerImg}></img>
                    </div>
                    <p className={styles.ownerName}>Андрей К</p>
                </div>
                <div className={styles.priceWrap}>
                    <p className={styles.price}>260 сом <span>/ День</span></p>
                     <button className={styles.RentBtn}><img src={img.arr}></img></button>
                </div>
            </div>
      </div>
      <div className={styles.pagin}>
    <Pagination count={10} color="success" />
    </div>
      </div>
  )
}

export default Phones