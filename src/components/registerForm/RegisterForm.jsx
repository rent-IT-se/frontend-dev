import React,{ useState, useEffect } from 'react'
import styles from "./registerForm.module.scss"
import { InputAdornment, TextField } from "@mui/material";
import { IconButton } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { StyledLoginInput,CofirmBtn } from "../../muiStyles";
import { StyledEngineProvider } from '@mui/material/styles';
import img from "../../img/index"
import { useNavigate } from 'react-router-dom';
import SocialAuth from '../socialAuth/SocialAuth';
import { Link } from 'react-router-dom';
import { register } from '../../redux/slices/auth';
import { Formik, useFormik } from "formik";
import { validationRegister } from '../../validations/validator';
import { useDispatch, useSelector } from "react-redux";
const RegisterForm = () => {
  const isRegistered = useSelector((state) => state.auth.isRegistered);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  let navigate = useNavigate(); 


  const handleRegister = (formValue) => {
    
    delete formValue.confirmPassword;
    console.log(formValue);
    dispatch(register(formValue))
      .unwrap()
      .then(()=>navigate("/login"))
  };
  
  const formik = useFormik({
    initialValues: {
      first_name:"",
      email: "",
      password: "",
      confirmPassword:""
    },
    validationSchema: validationRegister,
    onSubmit: (event) => {
      handleRegister(event);
    },
  });

  const [value, setValue] = React.useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <div className={styles.wrapper}>
        <h1 className='title1'>Регистрация</h1>
        <StyledEngineProvider injectFirst>
        <form className={styles.formWrap}
           onSubmit={formik.handleSubmit}
           onKeyDown={(e) => {
             if (e.key === "Enter") {
               formik.handleSubmit();
             }
           }}
        >
          <div className={styles.container}>
              
                <StyledLoginInput 
                    id="first_name"
                    name="first_name"
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                    helperText={formik.touched.first_name && formik.errors.first_name} 
                    className={styles.inputReg}
                    fullWidth="true"
                    variant="outlined"
                    label="Имя" 
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={img.person}></img>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <StyledLoginInput 
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    className={styles.inputReg}
                    fullWidth="true"
                    variant="outlined"
                    label="Email" 
                    placeholder="example@gmail.com"
                    autoComplete="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <img src={img.mailIco}></img>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <StyledLoginInput 
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    className={styles.inputReg}
                    label="Пароль" 
                    variant="outlined"
                    fullWidth="true"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment >
                          <img src={img.key}></img>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <StyledLoginInput 
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    className={styles.inputReg}
                    fullWidth="true"
                    label="Повторите пароль"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    helperText={
                      formik.touched.confirmPassword && formik.errors.confirmPassword
                    }
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    InputProps={{
                      startAdornment: (
                        <InputAdornment >
                          <img src={img.key}></img>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  
            <CofirmBtn className={styles.btn} type="submit">Подтвердить</CofirmBtn>
            </div>
            <SocialAuth/>
            <p className={styles.link3}>Вы уже зарегистрированы?<Link to="/login" className="link2">Войти</Link></p>
        </form>
        </StyledEngineProvider>
    </div>
  ) 
}

export  {RegisterForm}