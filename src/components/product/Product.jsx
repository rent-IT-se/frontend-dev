import React,{useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from "./product.module.scss"
import { Pagination,Navigation } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import "./swiper.css"
import img from "../../img/index"
import { GreenBtn,BlackBtn } from '../../muiStyles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetProductById } from '../../redux/slices/product';
import Rating from '@mui/material/Rating';
function TabPanel(props) {
    
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div className={styles.panel}>
            <p className={styles.panelTxt}>{children}</p>
        </div>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


function Product(route) {
    const dispatch=useDispatch()
    const [value, setValue] = React.useState(0);
    const  id = useParams();
    console.log(id.id)
    const product_id =id.id
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    useEffect(() => {
      dispatch(GetProductById({product_id}))
    }, [product_id])
    const product = useSelector((state) => state.product.ProductById)

    let entries = product.characteristic&&Object.entries(product.characteristic)
    console.log(entries)
    const pictures =[]
    for(let i=1; i<=10;i++){
      if (product[`picture${i}`] != null) {
        pictures.push(product[`picture${i}`]);
      }
    }
    console.log(pictures)
  return (
      <div>
    <div className={styles.wrapper}>
        <div className={styles.productWrapper}>
            <div className={styles.imageSide}>
                <Swiper className={styles.mySlider}
                    pagination={{clickable: true}}
                    navigation={{clickable: true}}
                    modules={[Pagination,Navigation]}
                >
                { pictures.map((p, i)=> {
                    return(
                  <SwiperSlide key={i}>
                      <img src={p} alt="img" className={styles.productImg}></img>
                  </SwiperSlide>
                    )})}
                </Swiper>
            </div>
        </div>
        <div className={styles.txtSide}>
            <div>
                <p className={styles.productTitle}>
                   {product.name}
                </p>
                <div className={styles.info1}>
                    <div className={styles.ownerInfo}>
                        <img src={img.defaultUserSmall} alt="a"className={styles.ownerAva} />
                        <p className={styles.ownerName}>Андрей К</p>
                    </div>
                    <div className={styles.productViews}>
                        <div className={styles.viewsItem}>
                            <img src={img.eye} alt="eye" />
                            <p className={styles.itemNum}>{product.views}</p>
                        </div>
                        <div className={styles.viewsItem}>
                            <img src={img.like} alt="eye" />
                            <p className={styles.itemNum}>{product.likes}</p>
                        </div>  
                    </div>
                </div>
                <div className={styles.btnBlock}>
                    <GreenBtn sx={{width:"180px",marginRight:"20px"}}>Перейти в чат</GreenBtn>
                    <BlackBtn sx={{width:"220px"}}>Сравнить товар</BlackBtn>
                </div>
                <Rating></Rating>
            </div>
            <div>
            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} TabIndicatorProps={{
    style: {
      background: "#2E9850",
    }
  }}>
          <Tab label={<span className={styles.panelLabel}>Описание</span>} {...a11yProps(0)} />
          <Tab label={<span className={styles.panelLabel}>Характеристики</span>} {...a11yProps(1)} />
          <Tab label={<span className={styles.panelLabel}>Оценка</span>} {...a11yProps(2)} />

        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {product.description}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {entries && entries.map(([key, val])=>{
          return(
            <p className={styles.characteristic}><b>{key}</b>:<span>{val}</span></p>
          )
        })}
      </TabPanel>
      <TabPanel value={value} index={2} >
        <Rating value={product.rating} readOnly></Rating>
      </TabPanel>
    </Box>
            </div>
        </div>
    </div>
        <div className={styles.PriceWrapper}>

        </div>
    </div>
  )
}
    
export default Product