import React from 'react'
import { useEffect, useState } from 'react'
import './Sample.css'
import Changed from './Changed'
import updData from './invitations_update.json'
// import toupdData from './invitations_update22copy.json'


const Sample = () => {


    // const [inv, setInv] = useState("");
    const [data, setData] = useState("");
    const [user , setUser] = useState("");
    // const [updater , setUpdater] = useState("");
    const [show ,setShow] =  useState("");
    const [display , setDisplay ] = useState("");
    

    useEffect(() => {
        const uId = localStorage.getItem("user_id")
        const { invites } = updData;
        // const { invitesss } = toupdData;
        // console.log(invitesss);
        console.log(invites);
        const user = invites.find((u) => u.user_id === uId)
        console.log(user)
        // setInv(inv)
        setUser(user)
        
    }, [])

    // useEffect(()=> {
    //     setTimeout(() => {
    //         setDisplay(!display);
    //         console.log("content changed")
   
    //     }, 5000);
    // } , [])

    

    

        

    

    return (
        <section>

      {/* <center> */}
      <div className="card">
      
        
        
        
        <div className='mid' >
            <ul>
                
                  
                  <div className="user_detailx" >
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
                  </div>

                {/* <div className="user_detailx" >
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
                  </div> */}
                  {/* { !display && <Changed/>} */}
                
            </ul>

            
        </div>
        
        
    </div>
        
        
    </section>
        
    )
}

export default Sample

