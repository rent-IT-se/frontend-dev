
import React from "react"
import styles from "./backstyles.module.scss"
import img from "../../img/index"
const Fon = ({children}) => {
  return (
    
    <div className={styles.fon}>
        <div  className={styles.wrapper}>
          <div className={styles.d}>

            <img src={img.rentPic} alt="rent" className={styles.rentPic}/>
          </div>
            {children}
        </div>
    </div>
    
  ) 
}

export {Fon}