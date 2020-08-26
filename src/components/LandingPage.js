import React, { useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";


export const LandingPage = () => {

    const { location } = useHistory();
    // const { updateNotes } = useContext();
    
    // useEffect(() => {
        // axiosWithAuth()
        //     .get("/todos")
        //     .then(res => {
        //         // updateNotes(res.data)
        //       } )
        //     .catch(err => console.log(err.response));
        //   }, [location]);
    
    return (
        <div>

        </div>
    )
}

