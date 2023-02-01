import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
const Login = () => {
 
  const [user,setUser]=useState({
    email:'',
    password:''
  });
  const navigate=useNavigate();
  function handleChange(e){
    const {name,value}=e.target;
    setUser((prev)=>{
    return{
      ...prev,
      [name]:value
    }

    })
  }
 async function handleClick(e){
    e.preventDefault();
    const {email,password}=user;

    const res=await fetch("https://secrets-backend.vercel.app/api/v1/create-session",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })
    if(!(res.status===200)){
      console.log("Error in signing in");
      window.alert("Invalid username or password")
      navigate('https://secret-web.netlify.app/sign-in');
    }else{
      const data=await res.json();
      if(!data){
        console.log("Error");
        window.alert("Internal server error");
      }
      window.alert("Login Successfull")
      // navigate('/secret-page')
      window.open('/secret-page','_self')
    }
  }

  const googleAuth=async(e)=>{
    try {
      e.preventDefault();
      window.open('https://secrets-backend.vercel.app/api/v1/auth/google','_self')
      
    } catch (error) {
      console.log("error--:",error)
      navigate("/sign-in");
    }
  }



  return (
    <>
    

    <div className="login">
    <div className="container ">
      <main className="form-signin">
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              onChange={handleChange}
              type="email"
              value={user.email}
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name="email"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
            name="password"
              onChange={handleChange}
              type="password"
              value={user.password}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button onClick={handleClick} className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
        <NavLink className=" mt-2 btn btn-dark btn-lg" to="/sign-up">Not yet registered? click here to Register.</NavLink>
        <button className="mt-2 btn btn-danger" onClick={googleAuth}><i className="fa-brands fa-google-plus-g"></i>Login</button>
      </main>
    </div>
    </div>
    </>
  );
};

export default Login;
