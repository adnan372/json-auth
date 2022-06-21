import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import inviteData from './invitations.json'

const Listing = ({invite_id ,sender_id , sig_id , invite , vector ,  invite_time , user_id ,  status}) => {
  
  

  
  
  return (
    <section>

      
      <div className="main">
      <center>
        
        <h1>Sender_Id</h1>
        <div className="user_detail">
            <ul>
                <li>sender_id</li>
                <li>sig_id</li>
                <li>invite</li>
                <li>vector</li>
                <li>invite_time</li>
                <li>user_id</li>
                <li>status</li>
                {/* <li>invite_id</li> */}
            </ul>
        </div>
        
        </center>
    </div>
        
        
    
    </section>
  )
}

export default Listing