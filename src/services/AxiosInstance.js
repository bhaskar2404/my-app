import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/"
});
// axiosInstance.interceptors.request.use((confing) => {
//   console.log(confing);
//   const state = store.getState();
//   confing.params = confing.params || {};
//   confing.params["auth"] = state.auth.auth.idToken;
//   return confing;
// });

export default axiosInstance;