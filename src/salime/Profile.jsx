import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <>
      <div className="profile-container ">
            <div className="profile-overlayOnImage"></div>
            <div className='mt-5 mb-3'>
                <p className="profile-sub-title">Profile</p>
                <div className="profile-line"></div>
                <p className="profile-sub-title">23rd novembre 2023</p>
            </div>
            <div className="row Image-Name-Button-box py-4">
                <div className="col-10 ">
                    <div className="row justify-content-center">
                        <div className=" col-lg-2 col-md-2 col-12 d-flex justify-content-end"><img
                                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                alt="" className="rounded-pill " width="60" height="60"/></div>
                        <div className="col-md-9 col-12 Image-Name-Button-text ">
                            <h3>Balqees Hamdi Sabir</h3>
                            <p>Computer Science, international islamic university</p>
                        </div>
                    </div>
                </div>
                <div className="col-2 cleacrfix"><a className="btn float-end  Image-Name-Button-button"
                        href="/edituserprofile/64ff7cfb8c01c00437aa52de">EDIT PROFILE</a></div>
            </div>
            <div className="row mt-4 justify-content-between">
                <div className="col-lg-4  col-12 personal-education-contact-box">
                    <div className=" personal-info-title-box fw-bold">
                        <h4>Personal info</h4>
                    </div>
                    <div className=" row  personal-info-subtitle-box">
                        <div className="col-6 ">
                            <div className="personal-info-subtitle1  "><span>Student ID</span></div>
                            <div className="personal-info-subtitle1  "><span>Total</span></div>
                            <div className="personal-info-subtitle1"><span>Age</span> </div>
                            <div className="personal-info-subtitle1"><span>Nationality</span> </div>
                            <div className="personal-info-subtitle1"><span>Country</span> </div>
                            <div className="personal-info-subtitle1"><span>City</span> </div>
                        </div>
                        <div className="col-6">
                            <div className="personal-info-subtitle  "><span>2844564355</span></div>
                            <div className="personal-info-subtitle  "><span>707</span></div>
                            <div className="personal-info-subtitle"><span>25 yo</span> </div>
                            <div className="personal-info-subtitle"><span>Egyptian</span> </div>
                            <div className="personal-info-subtitle"><span>Egypt</span> </div>
                            <div className="personal-info-subtitle"> <span>Cairo</span> </div>
                        </div>
                    </div>
                    <div className=" education-title-box mt-4 ">
                        <h4 className='fw-bold'> Education</h4>
                    </div>
                    <div className=" education-subtitle-box"><label className=" education-subtitle">university</label>
                        <p className='mb-2'>international Islamic University</p><label className=" education-subtitle">Major</label>
                        <p className='mb-2'>Computer Science</p><label className=" education-subtitle">Graduation year</label>
                        <p>2018</p>
                    </div>
                    <div className="Contact-info-title-box">
                        <h4 className='fw-bold'>Contact info</h4>
                    </div>
                    <div className="Contact-info-subtitle-box">
                        <div className="row">
                            <div className="col-1 Contact-info-subtitle-icon"><i className="fa-solid fa-envelope"></i></div>
                            <div className="col-9"><span className="Contact-info-subtitle">Email</span>
                                <p>Balqees@gmail.com</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1 Contact-info-subtitle-icon"><i className="fa-solid fa-phone-volume "></i>
                            </div>
                            <div className="col-9"><span className="Contact-info-subtitle">Mobile Number</span>
                                <p>213552435678 </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-12 About-InProgress-Previous-box ">
                    <div className="About-Profile-box">
                        <h4 className="About-Profile-title mb-3 fw-bold">About</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos non ex accusantium voluptatem saepe blanditiis.</p>
                    </div>
                    <div>
                        <h4 className="mt-5 mb-3 InProgress-profile-title fw-bold">Inprogress</h4>
                        <div className="row Card-InProgressp-rofile-box  mb-4">
                            <div className="col-md-9 col-12">
                                <h5 className="Card-InProgressp-rofile-title">Front _7,R26</h5><span
                                    className="Card-InProgressp-rofile-subtitle">Instructor :</span> <span
                                    className="Card-InProgressp-rofile-subtitle1">Eslam</span>
                            </div>
                            <div className="col-md-3 col-3 Card-InProgressp-rofile-lev1">
                                <h5 className=" Card-InProgressp-rofile-lev1">LEV. 7</h5>
                            </div>
                        </div>
                        <div className="row Card-InProgressp-rofile-box  mb-4">
                            <div className="col-md-9 col-12">
                                <h5 className="Card-InProgressp-rofile-title">Front_8 , R28</h5><span
                                    className="Card-InProgressp-rofile-subtitle">Instructor :</span> <span
                                    className="Card-InProgressp-rofile-subtitle1">Eslam</span>
                            </div>
                            <div className="col-md-3 col-3 Card-InProgressp-rofile-lev1">
                                <h5 className=" Card-InProgressp-rofile-lev1">LEV. 8</h5>
                            </div>
                        </div>
                        <div className="row Card-InProgressp-rofile-box  mb-4">
                            <div className="col-md-9 col-12">
                                <h5 className="Card-InProgressp-rofile-title">Front_11-R30</h5><span
                                    className="Card-InProgressp-rofile-subtitle">Instructor :</span> <span
                                    className="Card-InProgressp-rofile-subtitle1">Eslam</span>
                            </div>
                            <div className="col-md-3 col-3 Card-InProgressp-rofile-lev1">
                                <h5 className=" Card-InProgressp-rofile-lev1">LEV. 1</h5>
                            </div>
                        </div>
                        <div className="row Card-InProgressp-rofile-box  mb-4">
                            <div className="col-md-9 col-12">
                                <h5 className="Card-InProgressp-rofile-title">Back 11-23</h5><span
                                    className="Card-InProgressp-rofile-subtitle">Instructor :</span> <span
                                    className="Card-InProgressp-rofile-subtitle1">Eslam</span>
                            </div>
                            <div className="col-md-3 col-3 Card-InProgressp-rofile-lev1">
                                <h5 className=" Card-InProgressp-rofile-lev1">LEV. 2</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="profile-background-color">
            <div className=" profile-container2"></div>
        </div>
    </>
  )
}

export default Profile