
import axiosInstance from "./AxiosInstance";

export function getProducts(products) {
    return axiosInstance.get(products);
  }

  export function getCategories(urlPath) {
    return axiosInstance.get(urlPath);
  } 