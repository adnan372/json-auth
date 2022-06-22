import React from 'react'
import { useState , useEffect } from 'react'
import './Listing.css'
import invData from './invitations.json'

const Listing = () => {

  const [user , setUser] = useState("");
  const [data , setData] = useState(""); 

  
  useEffect(() => {
    var uId = localStorage.getItem("user_id");
    const { invites } = invData;

    const user = invites.filter((u) => u.user_id === uId)
    console.log(user)

    setUser(user)

  }, [])
 
  useEffect(()=> {
    setData(invData.invites)
  } , [])
  

  return (
    <section>

      {/* <center> */}
      <div className="card">
      
        
        
        
        <div className='mid' >
            <ul>
                {/* <li>sender_id</li> */}
                { user && user.map((u, index) => (
                  
                  <div className="user_detail" key={index}>
                    <h1>{u.sender_id}</h1>

                <li className='lee'> <span > sig_id:</span> {u.sig_id}</li>
                <hr />
                <li className='lee'><span >invite:</span> {u.invite}</li>
                <hr />
                <li className='lee'><span >vector: </span>{u.vector}</li>
                <hr />
                <li className='lee'><span>invite time:</span> {u.invite_time}</li>
                <hr />
                <li className='lee'><span >user id: </span>{u.user_id}</li>
                <hr />
                <li className='lee'><span >status: </span>{u.status}</li>
                <hr />
                <li className='lee'><span >invite id:</span> {u.invite_id}</li>
                  </div>
                ))}
                
            </ul>
        </div>
        
        
    </div>
        
        
    {/* </center>  */}
    </section>
  )
}

export default Listing