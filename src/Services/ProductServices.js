import axios from "axios";
import AuthHeader from "./AuthHeader";
const API_URL = process.env.REACT_APP_API;
console.log(AuthHeader())
class ProductService {
    async getAllSubCategories(){
        const response = await axios
          .get(API_URL + "product-sub-category/")
          return response.data;
      }
      async getAllCategories(){
        const response = await axios
          .get(API_URL + "product-category/")
          return response.data;
      }
      async postProduct(formData) {
        const response = await axios
          .post(API_URL + `product/`,formData, { headers: AuthHeader(),'Content-Type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2),});
        console.log(response) 
        return response.data; 
          
        }
      async getProducts(sub_category,page,per_page){
        console.log(per_page)
        const response = await axios  
          .get(API_URL + `product/`, {params:{sub_category:sub_category,p:page,page_size:per_page }});
        console.log(response) 
        return response.data; 
      }
      async getPopularProducts(){
        const response = await axios  
          .get(API_URL + `product/?ordering=-views&page_size=10'`);
        console.log(response) 
        return response.data; 
      }
      async getNewProducts(){
        const response = await axios  
          .get(API_URL + `product/?ordering=created_date&page_size=10'`);
        console.log(response) 
        return response.data; 
      }
      async getProductById(id) {
        console.log(id)
        const response = await axios
          .get(API_URL + `product/${id.product_id}/`);
        console.log(response) 
        return response.data; 
          
        }
}
export default new ProductService();
