import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/';


axios.interceptors.request.use(config => {
    console.log("Token fucntion is called");
    const authToken = localStorage.getItem('token');
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    console.log("Token set");
    return config;
  });

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

 

