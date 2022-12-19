import React from 'react'
import styles from "./changePassForm.module.scss"
import { Link } from 'react-router-dom'
import { StyledLoginInput,CofirmBtn } from '../../muiStyles'
import { StyledEngineProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { InputAdornment } from '@mui/material';
import img from "../../img/index"
import { sendEmail } from '../../redux/slices/auth';
import { validationEmail } from '../../validations/validator';
import { useDispatch, useSelector } from "react-redux";
import { Formik, useFormik } from "formik";

const SendEmailForm = () => {
  const dispatch=useDispatch();
  let navigate = useNavigate(); 
  const { message } = useSelector((state) => state.message);

  const handleSendEmail = (formValue) => {
    
    console.log(formValue);
    dispatch(sendEmail(formValue))
      .unwrap()
      .then(()=>navigate("/confirmcode"))
      .catch((e)=>console.log(e))
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationEmail,
    onSubmit: (event) => {
      handleSendEmail(event);
    },
  });

  return (
    <div className={styles.wrapper1}>
        <h2 className="title1">Восстановление пароля</h2>
        <StyledEngineProvider injectFirst>
         <div className={styles.formWrapper}>
           <form className={styles.formStyles} onSubmit={formik.handleSubmit}>
            <StyledLoginInput
              id="email"
              name="email"
              value={formik.values.email} 
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment >
                  <img src={img.mailIco}></img>
                </InputAdornment>
              ),    
              }}
            variant="outlined"
          className={styles.inputLogin}
          label="Введите Email" 
          placeholder="example@gmail.com"
          fullWidth="true"/>
            
          <CofirmBtn className={styles.btn} type="submit">Подтвердить</CofirmBtn>
          <p>Вы еще не зарегистрированы? <Link to="/register" className={styles.link2}>Регистрация</Link></p>
           </form>
           
         </div>
         </StyledEngineProvider>
    </div>
  )
}

export {SendEmailForm}