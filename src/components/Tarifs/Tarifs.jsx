import React from 'react'
import styles from "./tarif.module.scss"
import { GreyBtn,GreenBtn } from '../../muiStyles'
function Tarifs() {
  return (
    <div className={styles.wrapper}>
        <p className={styles.title}>Тарифы</p>
        <div className={styles.tarifsWrapper}>
            <div className={styles.baseTarif}>

                <p className={styles.title1}>
                    Базовый 
                </p>
                <p className={styles.title1}>
                (бесплатно)
                </p>
                <p className={styles.description}>
                    Подойдет, чтобы начать бизнес или попробовать тариф 
                </p>
                <div className={styles.Info}>
                    <b>Лимит объявлений</b>
                    <p>Малый бизнес (1 - 10 объявлений)</p>
                    <p className={styles.desc}>Каждые 2 дня нужно активировать свой товар</p>
                </div>
                <div className={styles.BtnwWrap}>
                    <div>
                        <p>Бесплатно/<span className={styles.desc}>год</span></p>
                        <GreyBtn size='small'sx={{width:'150px',height:"30px",marginTop:"20px"}} >Выбрано</GreyBtn>
                    </div>
                </div>
            </div>  

             <div className={styles.bissnessTarif}>

                <p className={styles.title1}>
                Расширенный 
                </p>
                <p className={styles.title1}>
                (Бизнес аккаунт)
                </p>
                <p className={styles.description}>
                    Покупателям станет проще найти ваши объявления
                </p>
                <div className={styles.Info}>
                    <b>Лимит объявлений</b>
                    <p>Большой бизнес (5 - 50 объявлений)</p>
                    <p className={styles.desc}>Активация товара идет автоматически</p>
                </div>
                <div className={styles.BtnwWrap}>
                    <div>
                        <p>12500 сом/<span className={styles.desc}>год</span></p>
                        <GreenBtn size='small'sx={{width:'150px',height:"30px",marginTop:"20px"}} >Выбрать</GreenBtn>
                    </div>
                </div>
            </div>  

        </div>
    </div>

  )
}

export default Tarifs