
import { React, useState, useEffect } from 'react'
import '../App.css';

import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";


const userStatus = () =>
{
    const [status, setStatus] = useState('active');

  useEffect(() =>
  {

    const intervalId = setInterval(() =>
    {
      setStatus((prevStatus) => (prevStatus === 'active' ? 'inActive' : 'active'));
    }, 4000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="article-item d-flex ">
        <p>Here's the username </p>
        
       
        {status === 'active' ? (<span className="article-published  " style={{ width: '100px', backgroundColor: ' #dbb338', marginLeft: '130px' }}
        >Active</span>) :
          (<span className="article-published  " style={{ width: '100px', backgroundColor: 'grey', marginLeft: '130px' }}
          >Inactive</span>)}
     
        <p style={{marginLeft:'50px'}}>FE-2303</p>
        <p style={{ marginLeft: '50px' }}>Student</p>
        <p style={{ marginLeft: '50px' }}>user@gmail.com</p>

        <div className='editRemove  fs-5  d-flex' style={{ marginLeft: '50px' }}>

          <FaRegEdit style={{ marginRight: '5px' }} />
          <FaRegTrashCan style={{ marginRight: '20px' }} />

        </div>
      </div>
  )
}

export default userStatus