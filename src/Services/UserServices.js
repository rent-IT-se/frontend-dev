import axios from "axios";
import AuthHeader from "./AuthHeader";
const API_URL = process.env.REACT_APP_API;

class UserServices {
    async getUserData(id) {
        const response = await axios
          .get(API_URL + `users-profile/${id}/`);
        console.log(response) 
        return response.data; 
          
        }
        async putUserData(id,formData) {
            const response = await axios
              .put(API_URL + `users-profile/${id}/`,formData);
            console.log(response) 
            return response.data; 
            }
      async getMyProducts() {
            const response = await axios
              .get(API_URL + `my-products/`,{ headers: AuthHeader()});
            console.log(response) 
            return response.data; 
            }
          
}
export default new UserServices ();