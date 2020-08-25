import axios from 'axios'

const axiosWithAuth = () => {
    console.log("Making Req")
    return axios.create({
        baseURL: "https://git.heroku.com/wonderlist-backend.git",
        headers: {
            Authorization: JSON.parse(localStorage.getItem("token"))
        }
    })
}

export default axiosWithAuth