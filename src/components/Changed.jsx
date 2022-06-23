import React from 'react'
import { useEffect, useState } from 'react'
import './Changed.css'
import toupdData from './invitations_update22copy.json'


const Changed = () => {
    const [updater , setUpdater] = useState("");

   useEffect(()=> {
    const uId = localStorage.getItem("user_id");
    const {invitesss} = toupdData ;
    console.log(invitesss)
    const updater = invitesss.find((u) => u.user_id === uId)
    console.log(updater)
    setUpdater(updater)
   },[])
    
  return (
    <section>

      {/* <center> */}
      <div className="card">
      
        
        
        
        <div className='mid' >
            <ul>
                
                  
                  {/* <div className="user_detailx" >
                    <h1>{user.sender_id}</h1>

                <li className='lee'> <span > sig_id:</span> {user.sig_id}</li>
                <hr />
                <li className='lee'><span >invite:</span> {user.invite}</li>
                <hr />
                <li className='lee'><span >vector: </span>{user.vector}</li>
                <hr />
                <li className='lee'><span>invite time:</span> {user.invite_time}</li>
                <hr />
                <li className='lee'><span >user id: </span>{user.user_id}</li>
                <hr />
                <li className='lee'><span >status: </span>{user.status}</li>
                <hr />
                <li className='lee'><span >invite id:</span> {user.invite_id}</li>
                  </div> */}

                <div className="user_detailz" >
                    <h1>{updater.sender_id}</h1>

                <li className='lee'> <span > sig_id:</span>{updater.sig_id} </li>
                <hr />
                <li className='lee'><span >invite:</span>{updater.invite} </li>
                <hr />
                <li className='lee'><span >vector: </span>{updater.vector}</li>
                <hr />
                <li className='lee'><span>invite time:</span>{updater.invite_time} </li>
                <hr />
                <li className='lee'><span >user id: </span>{updater.user_id}</li>
                <hr />
                <li className='lee'><span >status: </span>{updater.status}</li>
                <hr />
                <li className='lee'><span >invite id:</span>{updater.invite_id} </li>
                  </div> 
            </ul>

            
        </div>
        
        
    </div>
        
        
    </section>
  )
}

export default Changed