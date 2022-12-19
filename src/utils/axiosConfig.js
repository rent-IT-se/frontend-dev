import axios from "axios";
const user = localStorage.getItem("user")
export const API = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
  },
});
// user&&(
// axios.interceptors.request.use(
//   async (req) => {
  
//     req.headers["Autorization"] = "Bearer " + JSON.parse(localStorage.getItem("user")).access
   
  
//     return req;
//   }
//   )
// )
