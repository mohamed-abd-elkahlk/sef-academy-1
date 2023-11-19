import React from 'react'
import '../App.css'
const applicantsJob = () => {
  return (
     <div className="article-item d-flex  " style={{
        height:'100px'}}>
        <p>Here's the applicant name</p>
        <p style={{ marginLeft: '40px' }}>2Years</p>
        <p style={{ marginLeft: '40px' }}>usertwo@gmail.com</p>
        <p style={{ marginLeft: '40px' }}>002011289304</p>


        <button style={{ backgroundColor: '#bf9b30', height: '30px', width: '140px', borderRadius: '5px', textAlign: 'center', marginLeft: '40px' }}>DOWNLOAD CV</button>


     

        </div>
  )
}

export default applicantsJob