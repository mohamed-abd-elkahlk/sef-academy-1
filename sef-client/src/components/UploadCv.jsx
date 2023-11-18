import React from 'react'

    
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function UploadCv({save,handleSave,cancel,handleCancel,email,yearsOfExperience,mobileNumber,handleYearsOfExperienceChange,
    handleEmailChange,handleMobileNumberChange}) {
  return (
 <>
 <div className='amount'> <span className='salary'style={{fontSize:25,marginLeft:700, }}>5000EGP-8000EGP</span>
 <h5 className='location'style={{fontSize:25,marginLeft:780, }}>Onsite</h5>
</div>
   <div className='Frontend'>
 <h2 className='title1' style={{fontSize:29, marginRight:300,}}>Front-end React JS Developer</h2>
 <p className="text1" style={{fontSize:25, marginRight:300,marginBottom:200}}> Eptikar IT solution</p>
 </div>


  <div className='info1'>
 <h2 className='title' style={{fontSize:29, marginRight:300,}}>Bilqees Sabir Hamdi</h2>
 <p className="info-text" style={{fontSize:25, marginRight:300,}}>Computer Sience, International Islamic University</p>

 </div>

    <Form>
      <Row className="email">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control style={{width:300,backgroundColor:"grey"}}  type="text"  id="validationDefault04"
                required
                onChange={handleEmailChange}
                value={email} />
        </Form.Group>

        <Form.Group as={Col} controlId="formYearsOfExperience">
          <Form.Label>Years of eperience</Form.Label>
          <Form.Control style={{backgroundColor:"grey" }} type="date"   id="validationDefault05"
                required
                onChange={handleYearsOfExperienceChange}
                value={yearsOfExperience} />
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" controlId="formMobileNumber">
        <Form.Label>Mobile number</Form.Label>
        <Form.Control type='number'  id="validationDefault06" style={{backgroundColor:"gray" }}
                required
                onChange={handleMobileNumberChange}
                value={mobileNumber}/>
      </Form.Group>

      <Button  type="cancel" onClick={handleCancel} value={cancel}  style={{backgroundColor:"grey",marginRight:7, width:100}}>
        Cancel
      </Button>
      <Button  type="save" onClick={handleSave} value={save}  style={{backgroundColor:"#bf9b30", width:100}}>
        Save
      </Button>




    </Form>
    </>
  );
}

export default UploadCv;