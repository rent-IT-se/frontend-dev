import axios from "axios";
const API_URL = process.env.REACT_APP_API;
class AuthService {
  async login(data) {
    const response = await axios
      .post(API_URL + "users/login/", data);
    if (response.data.access) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    console.log(response) 
    return response.data; 
      
    }
    async loginGoogle(data) {
      const response = await axios
        .post(API_URL + "users/google", data);
      if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
      console.log(response) 
      return response.data; 
       
      }
  async register(data){
    const response = await axios
      .post(API_URL + "users/register-phone/", data);
      return response.data;
  }
      
    logout() {
        localStorage.removeItem("user");
      }
   async sendEmail(data){
      const response = await axios
      .post(API_URL+"users/forgot/",data);
        return response.data;
      }
   async sendcode(code){
      const responce = await axios
      .post (API_URL+"v1/reset_password",null,{params:{code}})
      localStorage.setItem("user_id",JSON.stringify(responce.data))
      return responce.data;
    }
    async onChangePassword(newPassword, id){
      const responce = await axios
      .put (API_URL+`v1/users/${id}/change-password`,null,{params:{newPassword}})
      return responce.data;
    }
    }
    
 export default new AuthService();
