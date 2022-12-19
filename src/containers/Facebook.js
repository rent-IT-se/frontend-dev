import React from 'react'
import  FacebookLogin  from 'react-facebook-login'
import fbLogin from '../utils/fbLogin';
import { useNavigate } from 'react-router-dom';
function Facebook() {
    const navigate= useNavigate();
    const responseFacebook = async (response) => {
        console.log(response)
        try{
        fbLogin(response.accessToken)
        .then(()=>navigate("/"))
        }
        catch(e){
            console.log(e)
            .then(()=>navigate("/login"))
        }
    }
  return (
    <div>
        <FacebookLogin
        autoLoad
        appId="605440604668383"
        fields="name,email,picture"
        callback={responseFacebook}
        
  /></div>
  )
}

export default Facebook