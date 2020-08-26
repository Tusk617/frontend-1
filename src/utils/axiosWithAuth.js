import axios from "axios";

const axiosWithAuth = () => {
    const token = JSON.stringify(window.localStorage.getItem("token"));
    return axios.create({
        baseURL: "http://wonderlist-backend.herokuapp.com/",
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth
