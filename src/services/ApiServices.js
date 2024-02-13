
import axiosInstance from "./AxiosInstance";

export function getProducts(products) {
    return axiosInstance.get(products);
  }

  export function getCategories(urlPath) {
    return axiosInstance.get(urlPath);
  }
  
  export function getLoginToken({ username,password}){
    return axiosInstance.post('/auth/login', {
        username,
        password
      });
  }