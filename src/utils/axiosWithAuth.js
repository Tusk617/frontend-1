import axios from "axios";

const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token
    },
    baseURL: "https://secret-family-recipes-2-api.herokuapp.com"
  });
};

export default axiosWithAuth;