
import './App.css';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import { Forgot } from './pages/ForgotPass/Forgot';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CodePage } from './pages/ForgotPass/CodePage';
import {ChangePass} from './pages/ForgotPass/ChangePass'
import { Head } from './components';
import Facebook from './containers/Facebook';
import { MainPage } from './pages/MainPage/MainPage';
import { StyledEngineProvider } from '@mui/material';
import ApproveEmail from './containers/ApproveEmail';
function App() {
  return (
    
    <div className="App">
    <StyledEngineProvider injectFirst>
      <Routes>
        <Route path='/*'element={<Head/>}/>
        <Route path="users/api/register/email_verify/" element={<ApproveEmail/>}/>
        <Route path='login'element={<LoginPage/>}/>
        <Route path="facebook" element={<Facebook/>}/>
        <Route path='register'element={<RegisterPage/>}/>
        <Route path='forgotpassword'element={<Forgot/>}/>
        <Route path='confirmcode'element={<CodePage/>}/>
        <Route path='changepass'element={<ChangePass/>}/>
        
      </Routes>
      </StyledEngineProvider>
    </div>
   
  );
}

export default App;
