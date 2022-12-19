import React from 'react'
import styles from "./changePassForm.module.scss"
import { Link } from 'react-router-dom'
import { CofirmBtn } from '../../muiStyles'
import { StyledEngineProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import VerifCode from "react-verification-code-input";
import { SocialBtn } from '../../muiStyles';
import img from '../../img';
const ConfirmCode = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate("/changepass");
  }

  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
    setInterval(() => {
      // Must use callback form here; outer `counter` is in stale closure
      setCounter(counter => counter === 0 ? counter : counter - 1);
    },1000);
  }, [counter]);
  const handleReset = () => {
    setCounter(59);
  }
  const [value, setValue] = React.useState("");
  console.log(value)

  return (
    <div className={styles.wrapper2}>
        <h2 className="title1">Восстановление пароля</h2>
        <StyledEngineProvider injectFirst>
        <div className={styles.formWrapper}>
           <form className={styles.formStyles}>
               <p>Мы  отправили код  на вашу почту</p>
               <VerifCode fields={4} autoFocus={true} className={styles.verifcode}onChange={setValue} values={value}/>
               <CofirmBtn className={styles.btn} onClick={routeChange}>Подтвердить</CofirmBtn>
               {counter===0?<p onClick={handleReset} className={styles.reset}>Отправить код снова</p>
               :<p className={styles.time}>Отправить код снова можно через 00:{counter} </p>}
               <div className={styles.or}>
          <span className={styles.line}></span>
          <p className={styles.divider}>или</p>
          <span className={styles.line}></span>
        </div>
        <span>Войти через социальные сети</span>
        <div className={styles.social}>
          <SocialBtn className={styles.stylesBtn}>
            <img src={img.google} className={styles.socialLogo}></img>
           
          </SocialBtn>
          <SocialBtn>
            <img src={img.facebook} className={styles.socialLogo}></img>
            
          </SocialBtn>
          {/* <FbLogin
						appId="605440604668383"
						fields="name,email,picture"
						callback={responseFacebook}
					/> */}


        </div>
               <p>Вы еще не зарегистрированы? <Link to="/register" className={styles.link2}>Регистрация</Link></p>
            </form>
            
        </div>
        </StyledEngineProvider>
    </div>

  )
}

export {ConfirmCode}