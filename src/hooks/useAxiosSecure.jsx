import axios from "axios";

const useAxiosSecure = () => {
  const API = axios.create({
    baseURL: "http://localhost:5000",
    // baseURL: 'https://b10-a10-md-nayeem-uddin-server-side.vercel.app',
  });

  return API;
};

export default useAxiosSecure;
