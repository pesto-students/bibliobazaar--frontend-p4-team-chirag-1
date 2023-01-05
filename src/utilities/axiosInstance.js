import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    Authorization: `<Your Auth Token>`,
  },
});

export default axiosInstance;