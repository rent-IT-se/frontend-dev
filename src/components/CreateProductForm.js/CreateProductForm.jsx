import React,{useEffect, useState} from 'react'
import styles from "./CreateForm.module.scss"
import img from "../../img/index";
import { ProfileInput,GreenBtn } from '../../muiStyles';
import { MenuItem} from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useFormik } from 'formik';
import { GetAllSubCategories, PostProduct } from '../../redux/slices/product';
import { useDispatch,useSelector } from 'react-redux';

function CreateProductForm() {
  const dispatch =useDispatch();
  const [categoryId, setcategoryId] = useState();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const selectFiles = (event) => {
    var images = [];
    for (let i = 0; i < event.target.files.length; i++) {
      images.push(URL.createObjectURL(event.target.files[i]));
    }
    setSelectedFiles(event.target.files);
    setImagePreviews(images);
    // console.log(imagePreviews)
  }
  // console.log(imagePreviews)  
  const uploadImages = (e) => {
    e.preventDefault()
    const files = Array.from(selectedFiles);
    const uploadPromises = files.map((file, i) => upload(i, file));
  };
  const upload = (idx, file) => {
    // console.log(file)
    let formData = new FormData();
    formData.append("file",file);
    console.table([...formData])
  }
  const image2=imagePreviews.slice(1,imagePreviews.length)

  const formik =useFormik({
    initialValues:{
      name: "",
      description: "",
      price: null,
      sub_category: "",
      characteristic: null,
      currency:"",
    },
    enableReinitialize: true,
    onSubmit: (formValue) => {
      CreatePost(formValue)
    }
  })
  
  const CreatePost=(formValue)=>{
    
    let arr = formValue.characteristic.map(obj => {
      return Object.values(obj);
    });

    console.log(arr)
    const entries = new Map(arr);
    const obj = Object.fromEntries(entries);
    console.log(obj)
    let formData = new FormData();
    [...selectedFiles].forEach((item, i) => formData.append(`picture${i+1}`, item))
    delete formValue.characteristic
    for ( var key in formValue ) {
        formData.append(key, formValue[key]);
    }
    const pictures=[...selectedFiles]
    formData.append("characteristic",JSON.stringify(obj))
    console.table([...formData])
    dispatch(PostProduct(formData))
  }
  
  useEffect(() => {
    dispatch(GetAllSubCategories());
  }, []);

  useEffect(() => {
    if (formik.values.sub_category !== '') {
      formik.values.characteristic = categories.find(i=>i.id === formik.values.sub_category)['characteristic'].map((item => ({name: item, value:''})));
    }
  }, [formik.values.sub_category])

  const categories = useSelector((state) => state.product.AllSubCategories);
  // categories.map((option, i) => console.log(option.id))
  return (
    <div className={styles.wrap}>
        <p className={styles.Title}>Создать объявление</p>
        <div className={styles.infoBlock}>
          <img src={img.not}></img>
          <p>Объявления с качественными фотографиями получают больше откликов! Удерживайте клавишу Ctrl, чтобы выбрать сразу несколько фотографий.</p>
          <p>1 объявление = 1 товар, услуга или вакансия. Фото и описание не должны содержать телефоны и ссылки</p>
        </div>
        <div className={styles.wrap2} >
          <form className={styles.formWrap} onSubmit={formik.handleSubmit}>
              <p className={styles.partTitle}>Загрузите фото<span className={styles.red}>*</span><span className={styles.grey}> (до 10 фото)</span></p>
           <div className={styles.ImgFlex}>
             <div className={styles.firstImgWrap}>
                <img className={styles.firstImg} src={imagePreviews[0]?imagePreviews[0]:img.defaultP}></img>
             </div>
           {image2 && (
        <div className={styles.ImgPrev}>
          {image2.map((img1, i) => {
            return (
              <div className={styles.ImgWrap}>
                <img className={styles.Preview} src={img1} alt={"image-" + i} key={i} />
              </div>
            );
          })}
        </div>
      )}
      </div>
    <div className={styles.postBtn}>
     <label >
          <input className={styles.inputBtn}
              type="file"
              multiple
              accept="image/*"
              onChange={selectFiles}
            />
            Выбрать
     </label>
     </div>
     <p className={styles.partTitle}>Название<span className={styles.red}>*</span></p>
     <ProfileInput name="name" size='small'
        sx={{width:"300px"}} onChange={formik.handleChange} 
     />
     <p className={styles.partTitle}>Добавьте описание<span className={styles.red}>*</span></p>
        
        <ProfileInput
          name='description'
          onChange={formik.handleChange}

          multiline
          fullWidth
          rows={4}
        />
        <p className={styles.partTitle}>Категория<span className={styles.red}>*</span></p>
          
        
        <ProfileInput
          size='small'
          name='sub_category'
          sx={{width:"150px", padding:"none"}}
          select
          value={formik.values.sub_category}
          onChange={formik.handleChange}
        >
            {Array.isArray(categories) &&
            categories.map((option,i) => (
                    <MenuItem key={option.id} value={option.id}>
                    { option.name}
                    </MenuItem>
                  ))}
           
           
        </ProfileInput>
        <div>
        
          {
            formik.values.characteristic &&
            formik.values.characteristic.map(({value, name}, i) => (
              <div key={i}>
                    <p className={styles.partTitle}>{name}</p>
                    <ProfileInput
                      size="small" 
                      type="text"
                      id={name} 
                      name={name} 
                      value={value}
                      onChange={({target}) => {
                        let arr = JSON.parse(JSON.stringify(formik.values.characteristic))
                        arr[i] = {name, value: target.value}
                        formik.setFieldValue('characteristic', arr)
                      }}/>
                </div>
            ))

            
          }
        </div>
        <div>
        <div className={styles.partPrice}>
        <p className={styles.partTitle}>Цена</p> <p className={styles.partTitle1}>Валюта</p>
        </div>
        <div className={styles.priceWrap}>
          <ProfileInput size='small' type="number" name='price' onChange={formik.handleChange}
            placeholder="Договорная"
          />
        <div>

      <RadioGroup 
       size="small"
       name="currency"
       onChange={formik.handleChange}
        >
        <div className={styles.Flex}>
        <FormControlLabel value="some" control={<Radio  color='success'/>} label="сом" />
        <FormControlLabel value="dollar"control={<Radio color='success'/>} label="$" />
        </div>
      </RadioGroup>
            </div>
          </div>
          </div>
          <div>
          <p className={styles.partTitle}>Телефон<span className={styles.red}>*</span></p>
          <ProfileInput size='small' type="number"/>
          </div>
          <GreenBtn sx={{width:"300px",marginTop:"40px",marginBottom:"40px"}} type="submit">Опубликовать объявление</GreenBtn>
        </form>

        </div>
        
    </div>
  )
}

export default CreateProductForm