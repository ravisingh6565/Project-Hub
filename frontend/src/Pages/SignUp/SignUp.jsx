import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "./SignUp.css";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const[passMatch,setPassMatch] = useState("empty");
  const[pass, setPass] = useState();
  const[conPass, setConPass] = useState();
  const navigate = useNavigate();
  const submitHnadler = async (e)=>{

    e.preventDefault();
    console.log(e)
    const data = {
      firstName: e.target[0].value,
      lastName: e.target[2].value,
      email:e.target[4].value,
      password : e.target[6].value,
      confirmPass:e.target[8].value
    };
    console.log(data);
    setFormData(data);
    // console.log(formData)
    let response = await fetch('http://localhost:5000/api/v1/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    
    response = await response.json();
    console.log(response)
    
    navigate('/login')

  }

  const passHandler = (cp)=>{
    if(pass===cp){
      setPassMatch(true);
    }else{
      setPassMatch(false);
    }
      
  }
  
  return (
    
    <div className="container">
      {console.log(formData)}
     <div className="form-container">
      <div className="signup-form">
        <h2>Sign-Up</h2>
        <form onSubmit={submitHnadler}>
        <TextField
          // required
          id="outlined-required xyz"
          label="First Name"
          placeholder="Enter the first name"
          className="user-input"
        />
        <TextField
          // required
          id="outlined-required xyz2"
          label="last Name"
          placeholder="Enter the last name"
          className="user-input"
        />
        <TextField
          // required
          id="outlined-required"
          label="Enter E-mail"
          placeholder="Enter E-mail"
          className="user-input"
        />
        <TextField
          id="outlined-password-input abc"
          label="Password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter Password"
          onChange={(e)=>{setPass(e.target.value)}}
        />
       
         {passMatch=== "empty" && <p style={{ color: 'sucess' }}></p>}
        {passMatch==true && <p style={{ color: 'green' }}>Passwords match!</p>}
        {passMatch==false && <p style={{ color: 'red' }}>Passwords doesn't match!</p>}
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          placeholder="Confirm password"
          onChange={(e)=>{
            setConPass(e.target.value);
            passHandler(e.target.value);
          }}
        />
        <Link to="/login">already have a account ? Login</Link>
        {/* <Button type="submit" variant="contained" color="success">
          Sign Up
        </Button> */}
        <button type="submit">Sign Up</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
