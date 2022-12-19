import React, { useEffect } from 'react'
import img from "../../img/index"
import { Link,Route,Routes } from 'react-router-dom'
import MyProfile from './myProfile/MyProfile'
import styles from "./UserSide.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { GetUserById } from '../../redux/slices/user'
import Chat from '../chat/Chat'
import MyProduct from './myProducts/MyProduct'
import Tarifs from '../Tarifs/Tarifs'
function UserSideBar() {
  const UserData = useSelector((state) => state.auth.user.user_id);
  console.log(UserData)
  const id = UserData && UserData
  // console.log(UserData)
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(GetUserById({id}))
  }, [id]);
  return (
    <div>
         <div className={styles.flexWpap}>
        <div className={styles.sideWrapper} id="drawer-container'">
           <Link className={styles.sideLink} to="myprofile">
             <div className={styles.sideItem}> 
              <img src={img.me}/>
              <p className={styles.sideTxt}>Мой Профиль</p>
             </div>
            </Link>
            <Link className={styles.sideLink} to="myproducts">
             <div className={styles.sideItem}> 
              <img src={img.myproduct}/>
              <p className={styles.sideTxt}>Мои объявления</p>
             </div>
            </Link> 
            <Link className={styles.sideLink} to="chat">
             <div className={styles.sideItem}> 
              <img src={img.chat}/>
              <p className={styles.sideTxt}>Чат</p>
             </div>
            </Link>
            <Link className={styles.sideLink} to="tarifs">
             <div className={styles.sideItem}> 
              <img src={img.tarifs}/>
              <p className={styles.sideTxt}>Тарифы</p>
             </div>
            </Link>
        </div>
        <Routes>
            <Route index element={<MyProfile/>}/>
            <Route path='myprofile' element={<MyProfile/>}/>
            <Route path='chat/*' element={<Chat/>}/>
            <Route path='myproducts' element={<MyProduct/>}/>
            <Route path='tarifs' element={<Tarifs/>}/>
        </Routes>
        
    </div>
    </div>
  )
}

export default UserSideBar