import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import Cookies from 'js-cookie';
import { useLogin } from './ContextApi';

const App = () => {
  const { setAuth, auth } = useLogin();
  const navigate = useNavigate();

 
 
  useEffect(() => {
    const user = Cookies.get('sessiontoken');
    if(user) {
      setAuth(true);
    }
    if(auth) {
      navigate("/dashboard");
    }else {
      navigate("login");
    }

  }, [auth]);
  
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App;