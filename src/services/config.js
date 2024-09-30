import axios from "axios";


const URL = "https://fakestoreapi.com/";
const api = axios.create({ baseURL: URL })

// REQUEST
api.interceptors.request.use(
      (request) => request,
      (error) => Promise.reject(error)
);

// RESPONSE
api.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error)
)




export default api;