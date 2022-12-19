import React from 'react'
import styles from "./social.module.scss"
import img from "../../img/index"
import {gapi} from "gapi-script";
import { SocialBtn } from '../../muiStyles'
// import  FacebookLogin  from 'react-facebook-login'
//import fbLogin from '../../utils/fbLogin';
import { useState } from 'react';
import GoogleLogin from 'react-google-login'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginGoogle } from '../../redux/slices/auth';
import { useDispatch } from 'react-redux';
function SocialAuth() {
  const navigate= useNavigate();
  const dispach=useDispatch();
  const [ profile, setProfile ] = useState([]);
  console.log(profile)
  useEffect(() => {
    function start() {
        gapi.client.init({
            clientId: "735645348910-0unv4ru6ehco7rab452gqh22alhqclgv.apps.googleusercontent.com",
            scope: ""
        })
    };

    gapi.load('client:auth2', start);
})
  // const responseFacebook = async (response) => {
	//   fbLogin(response);
  //   console.log(response.accessToken)
    
  // }
  
  const onSuccess = (res) => {
    
    setProfile(res);
    const user=JSON.stringify(res)
    localStorage.setItem("socialUser",user)
    const obj = 
      {
        access_token :res.accessToken ,
      }
    
    dispach(loginGoogle(obj))
    .then(()=>navigate("/"))
};

const onFailure = (err) => {
    console.log('failed', err);
};
  

    
  return (
    <div className={styles.wrapper}>
        <div className={styles.or}>
          <span className={styles.line}></span>
          <p className={styles.divider}>или</p>
          <span className={styles.line}></span>
        </div>
        <span>Войти через социальные сети</span>
        <div className={styles.social}>

        <GoogleLogin
              onSuccess={onSuccess}
              onFailure={onFailure}
              clientId="735645348910-0unv4ru6ehco7rab452gqh22alhqclgv.apps.googleusercontent.com"
              buttonText="GOOGLE"
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                
              <SocialBtn className={styles.stylesBtn}onClick={renderProps.onClick}  >
                <img src={img.google} className={styles.socialLogo}></img>
              </SocialBtn>
              )}
        />
          
          
          
          <SocialBtn onClick={()=>navigate("/facebook")} >
            <img src={img.facebook} className={styles.socialLogo}></img>
            
          </SocialBtn>
         
            

        </div>
        
        
    </div>
  )
}

export default SocialAuth