import React, { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from "../../App";

const Logout = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useContext(UserContext);
    const location = useLocation();

    const logoutPage = async () => {
        try {
            const res = await fetch('/logout', {
                method: "GET",
                headers: {
                    'Content-Type' : 'application/json',
                }
            })
    
            if (res.status === 200) {
                // dispatch({type: "USER", payload: false})
                dispatch({type: "USER", payload:false});
                localStorage.setItem("state","false");
                navigate('/');
                // setTimeout(() => {
                    window.location.reload();
                // }, 1000);
            }
        } catch (error) {
            console.log(error.message);
        }
        
    }

    useEffect(() => {
        logoutPage();
    })

  return (
    <h1 className='text-center mt-5'>Logout</h1>
  )
}

export default Logout;