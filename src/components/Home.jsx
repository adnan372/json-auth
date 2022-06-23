import React from 'react'
import './Home.css';
import Listing from './Listing'
import {Link} from 'react-router-dom';
import Changed from './Changed';

const Home = () => {
  
  const hanleLogout = () => {
    localStorage.clear();
    console.clear();
  };
  

  return (
   
    <>
    <section>
    <center>
      <div className="cen">
      <Link to ="/login"><button onClick={hanleLogout} className='btn-lo'>LOGOUT</button></Link>
      </div> 
      </center>
    
    <Listing/>
    {/* <Changed/> */}
      
    </section>
    </>
  )
}

export default Home