import React from 'react'


  const handleCancel = () =>
  {
    
  };


const cancel = () => {
  return (
     <div>
        
        <button type="submit" onClick={handleCancel} style={{ backgroundColor:'rgb(165, 165, 165)', color:'white', width:'130px', height:'35px', borderRadius:'5px',textAlign:'center'}}>CANCEl</button>
      </div>
  )
}

export default cancel