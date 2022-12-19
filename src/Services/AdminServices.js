import axios from "axios";
const API_URL = process.env.REACT_APP_API;
class AdminServices {
    
    async getSupports(){
      const response = await axios
        .get(API_URL + "supports/");
        return response.data;
    } 
 }
      
   export default new AdminServices();