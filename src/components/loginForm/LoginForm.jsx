
import React,{ useState, useEffect }  from "react"
import styles from "./formstyles.module.scss"
import { InputAdornment,IconButton } from "@mui/material";
import { Visibility,VisibilityOff } from "@mui/icons-material";
import { StyledLoginInput,CofirmBtn,SocialBtn } from "../../muiStyles";
import { StyledEngineProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link,useNavigate } from "react-router-dom";
import img from "../../img/index"
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SocialAuth from "../socialAuth/SocialAuth";
import { useDispatch, useSelector } from "react-redux";
import { validationLogin } from "../../validations/validator";
import { Formik, useFormik } from "formik";
import { login } from "../../redux/slices/auth";
import { clearMessage } from "../../redux/slices/message";
const LoginForm = () => {
  const { user } = useSelector((state) => state.auth);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  let navigate = useNavigate(); 
  
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleLogin = (formValue) => {
    const { email, password } = formValue;
    console.log(formValue);
    
    dispatch(login(formValue))
      .unwrap()
      .then(()=>navigate("/"))
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationLogin,
    onSubmit: (event) => {
      handleLogin(event);
    },
  });
  
  
  return (
    <div  className={styles.wrapper}>
      <StyledEngineProvider injectFirst>
        <h2 className="title1">Вход в личный кабинет</h2>
        <form className={styles.form1}
          onSubmit={formik.handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              formik.handleSubmit();
            }
          }}
        >
      
        <StyledLoginInput
          id="email"
          name="email" 
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className={styles.inputLogin}
          fullWidth="true"
          variant="outlined"
          label="Email или номер телефона" 
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
          label="Пароль" 
          fullWidth="true"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
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
        <div className={styles.ref}>
        <FormControlLabel control={
        <Checkbox  icon={<RadioButtonUncheckedIcon />}
             checkedIcon={<CircleIcon color="success" />
            }size="small"
        />} label="Запомнить вход" />
        <Link to="/forgotpassword" className="link1">Забыли Пароль?</Link>
        </div>
        <CofirmBtn 
          className={styles.btn} 
         
          type="submit"

          >Подтвердить
          </CofirmBtn >
        
        <SocialAuth/>
        </form>
        <div className={styles.end}>
        <p>Вы еще не зарегистрированы? <Link to="/register" className="link2">Регистрация</Link></p>
        </div>
         </StyledEngineProvider>
    </div>
  ) 
}

export {LoginForm}