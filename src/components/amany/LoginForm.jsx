import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'amany.css'
// import { PiUserRectangle } from "react-icons/pi";
// import { BiShow } from "react-icons/bi";
import Logo from '../assests/Images/seff_logo_black.jpg';


const LoginForm = () =>
{
    const [formData, setFormData] = useState({
    userId: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) =>
  {
    e.preventDefault();
  }



  return (
 
    <div className="login-form-container container-overlay">
         <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo-img" />
      </div>
 <MDBContainer fluid>

      <MDBRow className=' d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className=' my-5 mx-auto' >
            <MDBCardBody className='bg1 
            p-5 w-100 d-flex flex-column'>

                <MDBInput
                  wrapperClass='mb-4 w-100'
                  placeholder='USER ID'
                  id='formControlLg'
                  type='email'
                  size="lg"
                    name="userId"
                    value={formData.userId}
                    onChange={handleInputChange}
                />
                <MDBInput wrapperClass='mb-4 w-100' placeholder='password' id='formControlLg' type='password' size="lg"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                
              <p className='pForm'>Forget your password?</p>


                <MDBBtn  style={{ backgrounColor:'#bf9b30'}} >
                Login
              </MDBBtn>

         

                

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

      </MDBContainer>
  </div>
  )
}

export default LoginForm