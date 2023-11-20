import { React, useState, useEffect } from 'react'
import '../App.css';

import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";


const jobStatus = () =>
{
     const [status, setStatus] = useState('open'); 

  useEffect(() =>
  {
   
    const intervalId = setInterval(() =>
    {
      setStatus((prevStatus) => (prevStatus === 'open' ? 'closed' : 'open'));
    }, 4000);
   
    return () => clearInterval(intervalId);
  }, []); 


  return (
    
       <div className="article-item d-flex ">
        <p>Here's the company name </p>
        <p style={{marginLeft:'20px'}}>Here's the position</p>

        {status === 'open' ? (<span className="article-published  " style={{ width: '100px', backgroundColor:' #dbb338', marginLeft:'50px' }}
        >Open</span>):
          (<span className="article-published  " style={{ width: '100px', backgroundColor: 'grey', marginLeft: '50px' }}
          >Closed</span>)}
        {/* <button onClick={jobStatus}> Status</button> */}
        
        <div className="article-date" >
          <p>Monday, June 5th</p>
          <span>12:30 PM</span>
          
        </div>
        <p style={{ marginLeft: '30px' }}>20</p>
        
        <div className='editRemove  fs-5  d-flex' style={{marginLeft:'100px'}}>

          <FaRegEdit style={{ marginRight: '5px' }} />
          <FaRegTrashCan style={{ marginRight: '20px' }} />

        </div>
      </div>

  )
}

export default jobStatus