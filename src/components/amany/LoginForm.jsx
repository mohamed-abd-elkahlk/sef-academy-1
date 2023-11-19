import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./amany.css";
import { PiUserRectangle } from "react-icons/pi";
import { BiShow } from "react-icons/bi";
import Logo from "../../assets/Images/seff_logo_black.jpg";
import "./log.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-form-container container-overlay  ">
      <div className="logo-container position-relative">
        <img src={Logo} alt="Logo" className="logo-img img-fluid rounded-circle position-absolute" />
      </div>
      <MDBContainer fluid>
        <MDBRow className=" d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12 py-5 ">
            <MDBCard className="pt-5 my-5 mx-auto logform rounded-fill">
              <MDBCardBody
                className="bg1 p-5 w-100 d-flex flex-column">
                <div className="position-relative">
                <MDBInput
                  wrapperClass="mb-4 w-100 ps-5 "
                  className="bg-grey log-form py-3"
                  placeholder="USER ID"
                  id="formControlLg"
                  type="email"
                  size="lg"
                  name="userId"
                  value={formData.userId}
                  onChange={handleInputChange}
                />
                  <img src={Logo} alt="Logo" className="icon-user" />
                </div>
                <div className="position-relative">
                <MDBInput
                  wrapperClass="w-100 ps-5"
                  className="bg-grey log-form py-3"
                  placeholder="Password"
                  id="formControlLg"
                  type="password"
                  size="lg"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <img src={Logo} alt="Logo" className="icon-pass" />
                <img src={Logo} alt="Logo" className="showPass" />
                </div>
                <p className="pForm py-3 text-end text-light">Forget your password?</p>

                <MDBBtn className="btn btn-main border-none py-3 text-light">LOGIN</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            <p className="">Dont Have an acount yet? <a href="#" className="text-main">sign up</a></p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default LoginForm;
