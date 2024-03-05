import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "-https://connecthub-1.netlify.app/api",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
