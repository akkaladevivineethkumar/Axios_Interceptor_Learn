import axios from 'axios';
import Cookies from 'js-cookie'
const instance = axios.create();
instance.interceptors.request.use(
  (config) => {
    const authToken = Cookies.get("jwtToken");
    config.headers['Authorization'] = `Bearer ${authToken}`;
    console.log(authToken)
    return config;
  },
  (error) => {
    return error
  }
);

export default instance;
