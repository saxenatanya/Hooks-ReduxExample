import React, { useState,useEffect } from 'react';

const AuthConext =React.createContext({
    isLoggedIn:false,
    onLogOut : ()=>{},
    onLogin : (email,password) =>{}
});

export const AuthConextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInfo = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInfo === '1') {
          setIsLoggedIn(true);
        }
      }, []);
const logoutHandler = () =>{
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
}

const loginHandler = () =>{
    localStorage.setItem('isLoggedIn', '1');
setIsLoggedIn(true);
};
    return <AuthConext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogOut: logoutHandler,
        onLogin: loginHandler
    }}>{props.children}</AuthConext.Provider>
}

export default AuthConext;
