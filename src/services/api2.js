import axios from "axios";
const api = axios.create({
    baseURL: "https://ecommerce-api-idyt.onrender.com/",
});

export default api;
