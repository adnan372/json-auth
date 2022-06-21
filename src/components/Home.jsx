import React from 'react'
import './Home.css';
import Listing from './Listing'
import {Link} from 'react-router-dom';
import usersData from './invitations.json'
import { useState } from 'react';


const Home = (props) => {
  const [users ,setUsers] = useState("");
  
  const data = usersData.users
   

  
  return (
   
    <>
    <section>
    <center>
      <Link to ="/login"><button className='btn'>LOGOUT</button></Link>
      </center>
    
    <Listing/>

    
        
    </section>
    </>
  )
}

export default Home