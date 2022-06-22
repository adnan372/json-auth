import React from 'react'
import './Home.css';
import Listing from './Listing'
import {Link} from 'react-router-dom';





const Home = (props) => {
  // const [users ,setUsers] = useState("");
  // const [email, setEmail] = useState("");
  // const [pwd, setPwd] = useState("");
  
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
    
    {/* <UpdateInv/> */}
    {/* <Listing/>
    <Listing/>
    <Listing/> */}

    
        
    </section>
    </>
  )
}

export default Home