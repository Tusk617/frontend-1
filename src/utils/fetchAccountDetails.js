import axiosWithAuth from './axiosWithAuth'
// import { useParams } from 'react-router-dom'

function fetchAccountDetails (user) {
    console.log(user)
    const { username } = user
    
    return axiosWithAuth()
        .get(`/username/${ username.toLowerCase() }` )
        .then( res => { 
            return res
        }).catch( err => {
            console.log(err)
        })
}

export default fetchAccountDetails