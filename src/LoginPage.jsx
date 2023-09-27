import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useLogin } from './ContextApi';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Login from './Asset/login.jpg';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setLoginDetails, loginDetails, setAuth } = useLogin();

  const [inputVal, setInputVal] = useState({
    username: "",
    password: ""
  });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://portal.mytasker.us/api/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json', "X-API-KEY" : "mytasker@2023" },
      body: JSON.stringify(inputVal)
    })
    .then(res => res.json())
    .then(data => {
      setLoginDetails({user_id: data.user_id, sessiontoken: data.sessiontoken});
      data.responsecode === "200" && setAuth(true);
      data.responsecode === "200" && Cookies.set('user_id', loginDetails.user_id);
      data.responsecode === "200" && Cookies.set('sessiontoken', loginDetails.sessiontoken);
      data.responsecode === "200" ? navigate("/dashboard") : navigate("/login");
    });

  }
  

  const handleChange = (e) => {
    const{ name, value } = e.target;
    setInputVal({...inputVal, [name]: value});
  }

  
  return (
    <>
    <Box sx={{height: '95vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box sx={{boxShadow: 3, display: 'flex', width: '70%', height: '70vh' }}>
        <Box sx={{ width: '50%'}}>
          <img style={{width: '100%', height: '100%'}} src={Login} alt="login" />
        </Box>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            '& .MuiTextField-root': { m: 1, width: '20ch', bgcolor: 'white' },
            width: '50%',
            textAlign: 'center',
            paddingY: '20px',
            bgcolor: '#D169CA',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          
          <div>
            <TextField
              required
              name='username'
              type='text'
              onChange={handleChange} 
              value={inputVal.username}
              label="User Name"
              style = {{width: '400px'}}
              autoComplete='off'
            />
          </div>
          <div>
            <TextField
              required
              name='password'
              type='password'
              onChange={handleChange} 
              value={inputVal.password}
              label="Password"
              style = {{width: '400px'}}
              autoComplete='off'
            />
          </div>
          <Button type='submit' variant="contained" style = {{width: '400px', marginTop: '20px'}} >Login</Button>
        </Box>
      </Box>
    </Box>

  </>
  )
}

export default LoginPage;