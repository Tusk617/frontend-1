import axiosWithAuth from './axiosWithAuth'
import { useParams } from 'react-router-dom'

function fetchAccountDetails () {

    return axiosWithAuth()
        .get('/users/:id')
        .then( res => { 
            console.log(res)
        }).catch( err => {
            console.log(err)
        })
}

export default fetchAccountDetails