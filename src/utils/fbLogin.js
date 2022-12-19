import axios from "axios";

/**
 * 
 * @param {*} accesstoken This is the accesstoken of the user obtained from FaceBook
 */
const fbLogin = async (accesstoken) => {
  const API_URL = process.env.REACT_APP_API;
  console.log(accesstoken)
  let res = await axios.post(
    API_URL + "users/facebook",
    {
      access_token : accesstoken,
    }
  );
  console.log(res);
  return await res.status;
};

export default fbLogin;