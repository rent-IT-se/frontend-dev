import React,{useState} from 'react'
import styles from "./profile.module.scss"
import  Breadcrumbs  from '../../breadCrumbs/BreadCrumbs'
import img from '../../../img'
import { ProfileInput, WhiteBtn } from '../../../muiStyles'
import { GreenBtn } from '../../../muiStyles'
import { useDispatch,useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { PutUserById } from '../../../redux/slices/user'
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material'
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
function MyProfile() {
    const dispatch =useDispatch()
    const UserData = useSelector(state => state.userData.UserData);
    const id =UserData.id
    const [picture, setPicture] = useState();
    const [picture1, setPicture1] = useState();
    const [picture2, setPicture2] = useState();
    const [picture3, setPicture3] = useState();
    const [success,SetSuccess] =useState(false);
    console.log(picture)
    console.log(UserData)
    const formik =useFormik({
        initialValues: UserData,
        enableReinitialize: true,
        onSubmit: (formValue) => {
            let formData = new FormData();
            
              
            // for ( var key in formValue ) {
            //     formData.append(key, formValue[key]);
            // }
            // formData.append("pictures", formValue.pictures);
            delete formValue.id
            if(formValue.pictures instanceof File ){
                console.log("yes")
            }
            else{
                delete formValue.pictures
            }
            if(formValue.front_pictures instanceof File ){
                
            }
            else{
                delete formValue.front_pictures
            }
            if(formValue.back_pictures instanceof File ){
                
            }
            else{
                delete formValue.back_pictures
            }
            if(formValue.face_pictures instanceof File ){
                
            }
            else{
                delete formValue.face_pictures
            }
            
            
            
            delete formValue.passport_issues_date
            
           
            
            for ( var key in formValue ) {
                formData.append(key, formValue[key]);
            }
            
            
            console.table([...formData]);
            // console.log(formData.get("pictures"));
           
            // formValue.pictures=""
            if(formData){
            
          
            dispatch(PutUserById({id,formData}))
            
            .then(()=>window.location.reload())
            .then(()=>SetSuccess(true))
        }
            // console.log(formValue)  

          },
      
    })
    // console.log(formik.values)
  return (
    <div className={styles.wrapper}>
        <div className={styles.Bwrap}> <Breadcrumbs/></div>
            <p className={styles.pageTitle}>Мой профиль</p>
        <div className={styles.profileWrapper} >
            <form className={styles.profileForm} onSubmit={formik.handleSubmit}>
                <div className={styles.wpap1}>
                    <div className={styles.imgWrap}>
                        <img src={picture?picture:formik.values.pictures} alt="profileImg" className={styles.userImg}/>
                    </div>
                    <div className={styles.InputWrap1}>
                        <p className={styles.partTitle}>Серия и номер паспорта</p>
                        <ProfileInput InputLabelProps={{ shrink: true }}
                        name="passport_series"
                        fullWidth
                        label="Серия и номер паспорта"
                        required
                        size='small'
                        onChange={formik.handleChange}
                        value={formik.values.passport_series}
                        />
                        <ProfileInput InputLabelProps={{ shrink: true }}
                        name="passport_issues_date"
                        fullWidth
                        label="Дата выдачи"
                        required
                        size='small'
                        onChange={formik.handleChange}
                        value={formik.values.passport_issues_date} 
                        />
                    </div>
                </div>
                <div className={styles.wrap2}>
                    <p className={styles.partTitle}>Данные паспорта</p>
                    <div className={styles.block1}>
                    <ProfileInput InputLabelProps={{ shrink: true }}
                        name='first_name'
                        sx={{width:"260px"}}
                        label="Имя"
                        required
                        size='small'
                        onChange={formik.handleChange}
                        value={formik.values.first_name}
                        />
                    <ProfileInput InputLabelProps={{ shrink: true }}
                        name="last_name"
                        sx={{width:"250px"}}
                        label="Фамилия"
                        required
                        size='small'
                        onChange={formik.handleChange}
                        value={formik.values.last_name}
                        />
                    </div>
                    <div className={styles.block1}>
                    <ProfileInput InputLabelProps={{ shrink: true }}
                        name="middle_name"
                        sx={{width:"260px"}}
                        label="Отчество"
                        size='small'
                        onChange={formik.handleChange}
                        value={formik.values.middle_name}
                        />
                    <ProfileInput InputLabelProps={{ shrink: true }}
                        name="address"
                        sx={{width:"250px"}}
                        label="Адрес"
                        size='small'
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        />
                    </div>
                    <div className={styles.block1}>
                    <ProfileInput InputLabelProps={{ shrink: true }}
                        name="email"
                        sx={{width:"260px"}}
                        label="Email"
                        required
                        size='small'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        />
                    <ProfileInput InputLabelProps={{ shrink: true }}
                        name="phone"
                        sx={{width:"250px"}}
                        label="Телефон"
                        required
                        size='small'
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        />
                    </div>
                </div>
                <div className={styles.wrap3}>
                    <p>Фото паспорта</p>
                    <div className={styles.passportWrap}>
                        <div className={styles.passportImgWrap}>
                            <img src={picture1?picture1:formik.values.front_pictures} className={styles.passportImg}></img>
                            <label className={styles.passportInput}>
                                <input name="front_pictures"type="file" className={styles.ImgInput} onChange={(e) => {
                   formik.setFieldValue("front_pictures", e.currentTarget.files[0]);
                    setPicture1(URL.createObjectURL(e.currentTarget.files[0]))
                  } }/>
                                Изменить
                            </label>
                        </div>
                        <div className={styles.passportImgWrap}>
                            <img src={picture2?picture2:formik.values.back_pictures} className={styles.passportImg}></img>
                            <label className={styles.passportInput}>
                                <input name='back_pictures' type="file" className={styles.ImgInput} onChange={(e) => {
                   formik.setFieldValue("back_pictures", e.currentTarget.files[0]);
                    setPicture2(URL.createObjectURL(e.currentTarget.files[0]))
                  } }
                                />
                                Изменить
                            </label>
                        </div>
                        <div className={styles.passportImgWrap}>
                            <img src={picture3?picture3:formik.values.face_pictures} className={styles.passportImg}></img>
                            <label className={styles.passportInput}>
                                <input name='face_pictures' type="file" className={styles.ImgInput} onChange={(e) => {
                   formik.setFieldValue("face_pictures", e.currentTarget.files[0]);
                    setPicture3(URL.createObjectURL(e.currentTarget.files[0]))
                  } }
                                />
                                Изменить
                            </label>
                        </div>
                    </div>
                </div>
                <div className={styles.btnGroup}>
                    <label className={styles.changePicBtn}>
                            <input type="file" name='pictures' className={styles.ImgInput}
                             onChange={(e) => {
                   formik.setFieldValue("pictures", e.currentTarget.files[0]);
                    setPicture(URL.createObjectURL(e.currentTarget.files[0]))
                  } }
                                accept='image/*'
                            />
                            Изменить фото
                    </label>
                    <WhiteBtn sx={{width:"160px",fontSize:"13px"}}>Смена пароля</WhiteBtn>
                    <GreenBtn sx={{width:"160px",height:"36px",fontSize:"13px"}} type="submit">
                        Сохранить изменения
                    </GreenBtn>
                </div>
            </form>
        </div>
        <Snackbar open={success} autoHideDuration={6000}>
        <Alert  severity="success" sx={{ width: '100%' }}>
          Данные успешно изменены
        </Alert>
      </Snackbar>
    </div>
  )
}

export default MyProfile