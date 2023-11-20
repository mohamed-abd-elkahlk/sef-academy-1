import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const articleStatusCard12 = () => {
  return (
        <div className="article-item d-flex ">
      <h6>Here's the article title</h6>
      <p>Tech</p>
      <span className="article-published ml-4 ">Published</span>
      <div className="article-date">
        <p>Monday, June 5th</p>
        <span>12:30 PM</span>
      </div>
      <div className='editRemove fs-5 pe-2 d-flex'>
       
        <FaRegEdit style={{marginRight:'5px'}} />
        <FaRegTrashCan style={{ marginRight: '20px' }} />
       
      </div>
      </div>

  )
}

export default articleStatusCard12