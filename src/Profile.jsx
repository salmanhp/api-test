import React, { useEffect, useState } from 'react';
import { Box, Typography, CardMedia, CardContent, Button } from '@mui/material';
import User from './Asset/user.png';
import { useLogin } from './ContextApi';
import Cookies from 'js-cookie';

export const Profile = () => {
    const { loginDetails, setAuth } = useLogin();
    const [userDetails, setUserDetails] = useState({});
    useEffect(() => {
        fetch("https://portal.mytasker.us/api/show_profile", {
            method: "POST",
            headers: { 'Content-Type': 'application/json', "X-API-KEY" : process.env.REACT_APP_API_KEY },
            body: JSON.stringify(loginDetails)
        })
        .then(res => res.json())
        .then(userDetail => setUserDetails(userDetail))
    }, [loginDetails]);

    const handleLogout = () => {
        setAuth(false);
        Cookies.remove('user_id');
        Cookies.remove('sessiontoken');
    }

    return (
        <Box>
            <Box>
                <CardMedia
                    component="img"
                    height="100"
                    image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    style={{ color: 'red', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}
                />
                <CardContent>
                    <img style={{ position: 'relative', left: '42%', bottom: '50px', borderRadius: '50%', border: '5px solid white' }} src={User} width={80} height={80} alt="User" />
                    <Box>
                        <Box sx={{ position: 'relative', bottom: '40px', textAlign: 'center' }}>
                            <Typography variant='h6'>{userDetails?.user_salute} {userDetails?.user_first_name} {userDetails?.user_last_name}</Typography>
                            <Typography variant='caption' sx={{ fontWeight: '400', color: 'GrayText' }}>{userDetails?.user_id}</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Box>
                                <Typography variant='h6'>1,269</Typography>
                                <Typography variant='caption'>Products</Typography>
                            </Box>
                            <div style={{ width: '1px', backgroundColor: 'lightgray' }}></div>
                            <Box>
                                <Typography variant='h6'>5.2k</Typography>
                                <Typography variant='caption'>Followers</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ marginLeft: '40px', marginY: '10px' }}>
                            <Typography variant='h6'>Email: {userDetails?.user_email}</Typography>
                            <Typography variant='h6'>Mobile No: {userDetails?.user_mobile}</Typography>
                        </Box>
                        <Button onClick={handleLogout} variant='outlined' fullWidth>Logout</Button>
                    </Box>
                </CardContent>
            </Box>

        </Box>
    )
}
