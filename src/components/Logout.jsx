import React, { useEffect } from 'react'
import { useCookies  } from 'react-cookie'
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate=useNavigate();
    const [cookies]=useCookies();
    const signout=async()=>{
    const res=await fetch('https://secrets-backend.vercel.app/api/v1/sign-out',{
        method:"GET",
        headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${cookies.jwt}`
            },
    });
    if(!(res.status===200)){
        console.log("Error in log out");
        navigate('/')
    }else{
       
        window.alert("Logout Sucessfull");
        window.open('https://precious-baklava-88b41a.netlify.app/sign-in','_self')
    }
}
useEffect(()=>{
    signout();
    // eslint-disable-next-line
},[])
  return (
    <div></div>
  )
}

export default Logout