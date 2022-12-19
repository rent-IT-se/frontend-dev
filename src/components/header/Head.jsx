import React,{useEffect} from 'react'
import styles from "./header.module.scss"
import img from "../../img/index"
import { Link,Routes,Route } from 'react-router-dom'
import { Menu } from '@mui/material'
import { MenuItem } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { CreateBtn } from '../../muiStyles'
import { Select,FormControl ,} from '@mui/material'
import { Outlet } from 'react-router-dom'
import { MainPage } from '../../pages/MainPage/MainPage'
import Allcategories from '../../pages/Categories/Allcategories'
import { Paper,MenuList,ListItemIcon } from '@mui/material'
import { useSelector } from 'react-redux'
import { positions } from '@mui/system'
import { Avatar } from '@mui/material'
import { Logout,Chat ,Campaign,Construction} from '@mui/icons-material'
import { logout } from '../../redux/slices/auth'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import AdminPanel from '../../pages/AdminPanel/AdminPanel'
import ProductCart from '../../pages/ProductCard/ProductCart'
import Favorites from '../../pages/Favorites/Favorites'
import ProfilePage from '../../pages/Profile/ProfilePage'
import CreateProduct from '../../pages/CreateProduct/CreateProduct'
import { GetUserById } from '../../redux/slices/user'
const Head = () => {
  const isLog = useSelector((state) => state.auth.isLoggedIn);
  const currentUser=useSelector((state) => state.auth.user);
    const dispatch=useDispatch()
    let navigate = useNavigate();
    const [location, setlocation] = React.useState('');
    const handleChange = (event) => {
      setlocation(event.target.value);
    };
    const handleLog = () =>{ 
        navigate("/login");
      }
      const handleReg = () =>{ 
        navigate("/register");
      } 
      const logOut = useCallback(() => {
        dispatch(logout());
      }, [dispatch]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    function handleClick(event) {
        if (anchorEl !== event.currentTarget) {
          setAnchorEl(event.currentTarget);
        }
      }
      function handleClose() {
        setAnchorEl(null);
      }
      const UserData = useSelector((state) => state.auth.user.user_id);
  console.log(UserData)
  const id = UserData && UserData

  useEffect(() => {
    dispatch(GetUserById({id}))
  }, [id]);
  const User = useSelector(state => state.userData.UserData);
  return (
    <div>
      <div className={styles.topHead}>
          
            <div className={styles.leftF}>
              <FormControl >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          value={location}
          label="Age"
          onChange={handleChange}
          sx={{width:"150px",height:"20px",color:"#fff9"}}  
        >
          <MenuItem value={""}><img src={img.kg}/>Kyrgyztan</MenuItem>
          <MenuItem value={30}>Ten</MenuItem>
        </Select>
              </FormControl>
                <img src={img.tel}></img>
                <p>+996 702 000000</p>
            </div>
            <div className={styles.rigthF}>
              {currentUser.user_type!="client"&&
             <Link to="/admin"> <img src={img.config} alt="pic" className={styles.pic2}></img></Link>
              }
               <Link to="/favourites"> <img src={img.fav} alt="pic" className={styles.pic}></img></Link>
                <img src={img.mailMark} alt="pic" className={styles.pic1}></img>
            </div>
      </div>
        <div className={styles.wrapper}>
          <div className={styles.lPics}>
          <Link to="/home"><img src={img.logo}></img></Link>
          </div>  
            <div className={styles.list}>
            <ul className={styles.menu}>
                <li className={styles.item}><Link to="/home"className={styles.link1}>Главная</Link></li>
                <li className={styles.item}><Link to="/allcategories"className={styles.link1}>Каталог</Link></li>
                <li className={styles.item}><Link to=""className={styles.link1}>О нас</Link></li>
                <li className={styles.item1}><Link className={styles.link1}>Контакты</Link></li>
                {/* <Link to="#" className={styles.add}><span>+</span>ДОБАВИТЬ ОБЪЯВЛЕНИЕ</Link> */}
            </ul>
        </div>  
            <div className={styles.rPics}>
              <CreateBtn onClick={()=>navigate("/createproduct")}>+Подать объявление</CreateBtn>
            <div className={styles.pics}>
                
                <img src={img.noti} alt="pic" className={styles.pic}></img>
                <img src={img.profile} alt="pic" className={styles.pic} onClick={handleClick} anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onMouseOver={handleClick}></img>  
            </div>
            </div>
            {isLog?
              <Menu
              sx={{width: "331px",
                height: "385px",}}
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                PaperProps={{
                  sx:{
                    borderRadius: "10px",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    width: "300px",
                    padding:"21px"
                  }
                }}
            >
              <Link to="/profile" className={styles.link2}><MenuItem ><Avatar src={User.pictures?User.pictures:img.defaultP} /><p className={styles.menuItem}>{User.first_name}</p></MenuItem></Link>
              <MenuItem ><Campaign/><p className={styles.menuItem}>Мои объявления</p></MenuItem>
              <MenuItem ><Chat/><p className={styles.menuItem}>Чат</p></MenuItem>
              <MenuItem > <Construction/><p className={styles.menuItem}>Улучшить профиль</p></MenuItem>
              <MenuItem sx={{marginTop:"20px"}} onClick={logOut} > <Logout/><p className={styles.menuItem}>Выход</p></MenuItem>
            </Menu>:
                <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
              >
                <MenuItem onClick={handleLog}>Вход</MenuItem>
                <MenuItem onClick={handleReg}>Регистрация</MenuItem>
              </Menu>
              }
            
        </div>
        <Routes>
          <Route index element={<MainPage/>}/>
          <Route path='home' element={<MainPage/>}/>
          <Route path='allcategories/*' element={<Allcategories/>}/>
          <Route path='admin/*' element={<AdminPanel/>}/>
          <Route path="product/:id" element={<ProductCart/>}/>
          <Route path='favourites' element={<Favorites/>}/>
          <Route path="profile/*"element={<ProfilePage/>}/>
          <Route path="createproduct" element={<CreateProduct/>}/>
        </Routes>
    </div>
    
  )
}

export  {Head}