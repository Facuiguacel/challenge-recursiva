import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: `https://api.openweathermap.org/`,
});

instance.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    toast.error("Error inesperado.");
  }

  return Promise.reject(error);
});

export default instance;
