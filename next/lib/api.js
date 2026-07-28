import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.defaults.withCredentials = true;
axiosInstance.interceptors.response.use((response) => response.data);

export default axiosInstance;
