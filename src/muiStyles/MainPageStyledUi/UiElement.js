import {  styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { textTransform } from '@mui/system';
import { MenuItem, Select } from '@mui/material';
const StyledSearch = styled(TextField)(({ theme }) => ({
   
    border:"none",
    'label + &': {
        fontSize: "16px",
        fontWeight:"500",
    },

    '& .MuiInputBase-input': {
        width:"100%",
        filter: "drop-shadow(-4px -4px 44px rgba(0, 0, 0, 0.08))",
        
    },
    '& .MuiOutlinedInput-root': {
        background:"#fff",
        '& fieldset': {
            borderRadius:"10px",
            
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
        
    },
    
}))
const RentBtn =styled(Button)(({theme})=>({
    backgroundColor: '#3B5B7E',
    width:"172px",
    height:"38px",
    color:"#fff",
    fontWeight:"600",
    fontSize: "16px",
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#6A95AD',
        borderColor: '#6A95AD',
        boxShadow: 'none',
      },
}))
const CreateBtn =styled(Button)(({theme})=>({
    backgroundColor: '#2E9850',
    width:"200px",
    height:"38px",
    color:"#fff",
    fontWeight:"600",
    fontSize: "16px",
    textTransform: 'none',
    borderRadius:'10px',
    '&:hover': {
        backgroundColor: '#29973a', 
        borderColor: '#29973a',
        boxShadow: 'none',
      },
}))
const GreenBtn =styled(Button)(({theme})=>({
    backgroundColor: '#2E9850',
    height:"38px",
    color:"#fff",
    fontWeight:"500",
    fontSize: "16px",
    textTransform: 'none',
    borderRadius:'10px',
    maxWidth:'250px',
    '&:hover': {
        backgroundColor: '#29973a', 
        borderColor: '#29973a',
        boxShadow: 'none',
      },
}))
const GreyBtn =styled(Button)(({theme})=>({
    backgroundColor: '#9E9E9E',
    height:"38px",
    color:"#fff",
    fontWeight:"500",
    fontSize: "16px",
    textTransform: 'none',
    borderRadius:'10px',
    maxWidth:'250px',
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: '#9E9E9E'
      },
}))
const BlackBtn =styled(Button)(({theme})=>({
    backgroundColor: '#292929;',
    height:"38px",
    color:"#fff",
    fontWeight:"500",
    fontSize: "16px",
    textTransform: 'none',
    borderRadius:'10px',
    maxWidth:'170px',
    '&:hover': {
        backgroundColor: '#000', 
        borderColor: '#000',
        boxShadow: 'none',
      },
}))
const ProfileInput = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            
            borderRadius:"10px",
            
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
    
    '& label.Mui-focused': {
        color: 'green',
      },
     
    'label + &': {
        fontSize: "16px",
        fontWeight:"500",
    },
    '& .MuiOutlinedInput-input': {
        margin:"none", 
        padding:"none", 
       
        
         
    }
}))


const WhiteBtn =styled(Button)(({theme})=>({
    backgroundColor: '#fff',
    height:"36px",
    color:"rgba(3, 1, 4, 0.4)",
    fontWeight:"500",
    fontSize: "13px",
    textTransform: 'none',
    borderRadius:'10px',
    border: '1px solid rgba(3, 1, 4, 0.4)',
    '&:hover': {
        backgroundColor: '#fff', 
        borderColor: 'rgba(3, 1, 4, 0.4)',
        boxShadow: 'none',
      },
}))
const StyledMenu =styled(MenuItem)(({theme})=>({
    "& MuiSelect-select":{
        padding :0,
    }
    
}))
const StyledSearch2 = styled(TextField)(({ theme }) => ({
   
    border:"none",
    '& .MuiInputBase-input': {
        width:"100%",
    },
    '& .MuiOutlinedInput-root': {
        background:"#F9F9F9",
        border:"none",
        '& fieldset': {
            border:"none",
        },
    },
    
}))
export {StyledSearch,GreenBtn, RentBtn,CreateBtn,BlackBtn,ProfileInput,WhiteBtn,StyledMenu,StyledSearch2,GreyBtn}