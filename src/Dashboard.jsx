import { useEffect, useState } from 'react';
import { Avatar, Box, Button, Card, CardContent, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useLogin } from './ContextApi';
import Cookies from 'js-cookie';


const Dashboard = () => {
    const { loginDetails, setAuth } = useLogin();
    const [userDetails, setUserDetails] = useState({});

    // const user_id = Cookies.get('user_id');
    // const sessiontoken = Cookies.get('sessiontoken');
    // const RefreshData = {user_id, sessiontoken};
    // console.log(RefreshData);
    

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
        <Box 
            sx={{
                marginTop: '5%',
                display: "flex",
                justifyContent: 'center',
            }}
        >
            <Card sx={{width: '50%', padding: '30px 0px'}}>
                <Button onClick={handleLogout}>Logout</Button>
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
    )
}

export default Dashboard