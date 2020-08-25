import axios from "axios";

const axiosWithAuth = () => {

  const token = window.localStorage.getItem("token");

    console.log("Making Req")
    return axios.create({
        baseURL: "http://wonderlist-backend.herokuapp.com/",
        headers: {
            Authorization: JSON.parse(localStorage.getItem("token"))
        }
    })
}

export default axiosWithAuth
