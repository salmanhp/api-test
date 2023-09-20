import React, { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';


const LoginPage = () => {
  const [inputVal, setInputVal] = useState({
    username: "",
    password: ""
  });

  const [loginDetails, setLoginDetails] = useState({
    user_id : "",
    sessiontoken: ""
  });

  const [userDetails, setUserDetails] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://portal.mytasker.us/api/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json', "X-API-KEY" : "mytasker@2023" },
      body: JSON.stringify(inputVal)
    })
    .then(res => res.json())
    .then(data => setLoginDetails({user_id: data.user_id, sessiontoken: data.sessiontoken}));
  }


  const handleChange = (e) => {
    const{ name, value } = e.target;
    setInputVal({...inputVal, [name]: value});
  }

  useEffect(() => {
    fetch("https://portal.mytasker.us/api/show_profile", {
      method: "POST",
      headers: { 'Content-Type': 'application/json', "X-API-KEY" : "mytasker@2023" },
      body: JSON.stringify(loginDetails)
    })
    .then(res => res.json())
    .then(userDetail => setUserDetails(userDetail))
  }, [loginDetails]);


  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          boxShadow: 3,
          width: '30%',
          textAlign: 'center',
          paddingY: '20px'
        }}
      >
        
        <div>
          <TextField
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
    </div>

    
    <Box 
      component="div"
      style={{
        marginTop: '5%',
        display: "flex",
        justifyContent: 'center',
      }}
    >
      <Card sx={{width: '30%'}}>
        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
          <Avatar sx={{ position: 'relative', left: '50%', transform: 'Translate(-50%)', marginBottom: '9px' }}>
            <AccountCircle fontSize='large' />
          </Avatar>
          
          <Box sx={{ textAlign: 'start', paddingLeft: '30%', marginTop: '10px'}}>
            <Typography variant='h6'>ID: {userDetails?.user_id}</Typography>
            <Typography variant='h6'>Name: {userDetails?.user_salute} {userDetails?.user_first_name} {userDetails?.user_last_name}</Typography>
            <Typography variant='h6'>Email: {userDetails?.user_email}</Typography>
            <Typography variant='h6'>Mobile No: {userDetails?.user_mobile}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  </>
  )
}

export default LoginPage;