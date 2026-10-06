// import axios from "axios";
// const api_url= import.meta.env.VITE_API_URL;
// const api = axios.create({
// baseURL:"https://book-management-system-ggx6.onrender.com/api/v1",
// })

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
});

export default api;