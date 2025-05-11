import React from 'react'
 
import { Navigate } from 'react-router-dom';

const OpenRoute = ({children}) => {

    if(localStorage.getItem('user') === null)
        return children
    else
        return <Navigate to="/dashboard" />

}

export default OpenRoute