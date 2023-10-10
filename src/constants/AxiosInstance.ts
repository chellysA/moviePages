import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "0b97a531d5627d04bf68076ad1254c21"
      },
      headers: {
        'Accept-Language': 'en-US'
      }
})
export default axiosInstance