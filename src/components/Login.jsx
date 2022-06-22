import React, { useState  ,useEffect} from 'react';
import usersData from './users.json';
import './Login.css';
import bcrypt from 'bcryptjs'

const salt = bcrypt.genSaltSync(10)


const Login = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [users, setUsers] = useState([]);
    

    

    function handleOnSubmit(e) {
        e.preventDefault();

        
      

        const isUserExist = users.find((user) => {
            if (user.email ===email && user.password===pwd)
            
            return user;

        }
        
        );
        
        if (isUserExist) {
        //  hashing password
            var salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(pwd , salt)

        localStorage.setItem("password" , hashedPassword);
        console.log("password encrypted")

            window.location.href= "/home";
            localStorage.setItem("user_id",isUserExist.user_id)
            localStorage.setItem("first name",isUserExist.first_name)
            localStorage.setItem("last_name",isUserExist.last_name)
            localStorage.setItem("email",isUserExist.email)
            
          
        } else {
            document.getElementById("demo").innerHTML = "Please enter a  valid Email/Password"
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
                        <div className="cardd">
                            <h2 className='htag'>Log In</h2>
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
                                    <p id="demo"></p>

                                </div>
                                <div >
                                    <button className="btn" >LOGIN</button>
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