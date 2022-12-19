import React,{useEffect,useState} from 'react'
import styles from "./changePassForm.module.scss"
import { Link } from 'react-router-dom'
import { StyledLoginInput,CofirmBtn } from "../../muiStyles";
import { StyledEngineProvider } from '@mui/material/styles';
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import img from "../../img/index"
const ResetPass = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate("/login");
  }
  return (
    <div className={styles.wrapper2}>
        <h2 className="title1">Cмена пароля</h2>
        <StyledEngineProvider injectFirst>
        <div className={styles.formWrapper}>
           <form className={styles.formStyles}>
           <StyledLoginInput 
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
            // <-- This is where the toggle button is added.
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
          sx={{
            marginTop:"20px",
            marginBottom:"30px"

          }}
        />
        <StyledLoginInput 
          fullWidth="true"
          label="Повторите пароль" 
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          InputProps={{
            // <-- This is where the toggle button is added.
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
        <CofirmBtn className={styles.btn2} onClick={routeChange}>Подтвердить</CofirmBtn>
        <p>Вы еще не зарегистрированы? <Link to="/register" className={styles.link2}>Регистрация</Link></p>
            </form>
           
        </div>
        </StyledEngineProvider>
    </div>
  )
}

export {ResetPass}