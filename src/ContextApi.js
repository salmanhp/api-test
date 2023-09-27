import React, { createContext, useContext, useState } from "react";

const Context = createContext({});

export const ContextProvider = ({ children }) => {

    const [auth, setAuth] = useState(false);
    const [loginDetails, setLoginDetails] = useState({
        user_id : "",
        sessiontoken: ""
    });
    

    return (
        <Context.Provider value={{ loginDetails, setLoginDetails, auth, setAuth }}>
            {children}
        </Context.Provider>
    );
};

export const useLogin = () => useContext(Context);