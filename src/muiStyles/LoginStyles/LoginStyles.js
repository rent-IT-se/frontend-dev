
import {  styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { textTransform } from '@mui/system';
const StyledLoginInput = styled(TextField)(({ theme }) => ({
    height:"38px", 
    '& label.Mui-focused': {
        color: 'green',
      },
    '& .MuiOutlinedInput-root': {
         height:"38px",
        '& fieldset': {
            borderRadius:"10px",
        },
        '&.Mui-focused fieldset': {
            borderColor: 'green',
        },
    },
    'label + &': {
        fontSize: "16px",
        fontWeight:"500",
    },
    '& .MuiInputBase-input': {
        margin:"none",  
          
    }
}))

const CofirmBtn =styled(Button)(({theme})=>({
    backgroundColor: '#29974D',
    width:"100%",
    height:"50px",
    color:"#fff",
    fontWeight:"600",
    fontSize: "18px",
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#1FAF6A',
        borderColor: '#1FAF6A',
        boxShadow: 'none',
      },
}))
const SocialBtn =styled(Button)(({theme})=>({
    backgroundColor: 'none',
    width:"28px",
    height:"28px",
    alignItems:"center",
    borderRadius: "50%",
    justifyContent:"center",
    display:'flex',
    '&:hover': {
            
      },
}))
export {StyledLoginInput,CofirmBtn,SocialBtn}