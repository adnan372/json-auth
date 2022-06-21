import React, { useState  ,useEffect} from 'react';
import {Navigate} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import usersData from './users.json';
import './Login.css';
import { Link } from 'react-router-dom'
import Home from './Home'
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)


const Login = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [users, setUsers] = useState([]);
    

    

    function handleOnSubmit(e) {
        e.preventDefault();

        // hashing password

        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(pwd , salt)

        localStorage.setItem("password" , hashedPassword);
        console.log("password encrypted")
      

        const isUserExist = users.find((user) => {
            if (user.email ===email && user.password===pwd)
            
            return user;

        }
        
        );
        
        if (isUserExist) {
            window.location.href= "/home"
            localStorage.setItem("user_id",isUserExist.user_id)
        }

        
        console.log(isUserExist);


    }
    useEffect(() => {
        setUsers(usersData.users)
    }, [])


    return (
        <>
            <section>
                <center>
                    <div className="main">
                        <div className="card">
                            <h1>Log In</h1>
                            <form action="" onSubmit={handleOnSubmit}>
                                <div className="user">

                                    <input type="text"
                                        placeholder='Enter Username'
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        required
                                    />
                                </div>

                                <div className="pwd">

                                    <input
                                        type="password"
                                        placeholder='Enter Password'
                                        required
                                        onChange={(e) => { setPwd(e.target.value) }}
                                    />

                                </div>
                                <div >
                                    <button className="btn" >LOGIN</button>
                                    {/* <button onClick={hehe} className="btn" >hehe</button> */}
                                    {/* <Link to="/home"><button className="btn" >LOGIN</button></Link> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </center>
            </section>
        </>
    )



}



export default Login