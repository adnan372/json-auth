import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import usersData from './users.json';

const LoginH = () => {
    const [email , setEmail] = useState("");
    const [pwd , setPwd] = useState("");
    const [users, setUsers] = useState("");

    const submitHandler = (e) => {
         console.log(users);
         

         if (users.email ===email && users.password === pwd) {
                return window.alert("got it")
            }  else {
                window.alert("err")
            }    
        console.log("btn clicked")

    }
    useEffect(() => {
        setUsers(usersData.users)
    } , []);

  return (
    <>
    <input type="email"
           onChange={(e) => {setEmail(e.target.value)}} />
    <input type="password"
           onChange={(e) => {setPwd(e.target.value)}} />
    <button onClick={submitHandler}>submit</button>
    </>
  )
}

export default LoginH