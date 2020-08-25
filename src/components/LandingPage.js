import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";


export const LandingPage = () => {

    const { location } = useHistory();
    const { updateNotes } = useContext();
    
    useEffect(() => {
        axiosWithAuth()
            .get("")
            .then(res => {
                console.log(res.data)
                updateNotes(res.data)
              } )
            .catch(err => console.log(err.response));
          }, [location]);
    
    return (
        <div>

        </div>
    )
}

