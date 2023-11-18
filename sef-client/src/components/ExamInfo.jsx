import React from 'react'

    
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ExamInfo({courseName,date,duration,publish,handlePublish,handleCourseNameChange,handleDateChange,handleDurationChange}) {
  return (
 <>
 <div className='new-exam'>
    <p className='create-exam' style={{fontSize:25, marginRight:300,}}> Create new exam</p>
     <p className='line' style={{width:200,height:5,backgroundColor:'#bf9b30',}}></p>
       <p className='month-date' style={{fontSize:25, marginRight:300,}}>6th June 2023</p>
 </div>
 <div className='exam-info1'>
 <h2 className='exam-info-title' style={{fontSize:29, marginRight:300,}}>Add exam details</h2>
 <p className="exam-info-text" style={{fontSize:25, marginRight:300,}}>Exam information</p>

 </div>
    <Form>
      <Row className="exam-info">
        <Form.Group as={Col} controlId="formCourseName">
          <Form.Label>Course Name</Form.Label>
          <Form.Control style={{width:300,backgroundColor:"grey"}}  type="text"  id="validationDefault01"
                required
                onChange={handleCourseNameChange}
                value={courseName} />
        </Form.Group>

        <Form.Group as={Col} controlId="formDate">
          <Form.Label>Date</Form.Label>
          <Form.Control style={{backgroundColor:"grey" }} type="date"   id="validationDefault02"
                required
                onChange={handleDateChange}
                value={date} />
        </Form.Group>
      </Row>


      <Form.Group className="mb-3" controlId="formDuration">
        <Form.Label>Duration</Form.Label>
        <Form.Control type='time'  id="validationDefault03" style={{backgroundColor:"gray" }}
                required
                onChange={handleDurationChange}
                value={duration}/>
      </Form.Group>

      <Row className="mb-3">


      </Row>


      <Button  type="submit" onClick={handlePublish} value={publish}  style={{backgroundColor:"#bf9b30"}}>
        Publish
      </Button>

    </Form>
    <div className='questios'>

        <h4 className='Questions' style={{marginTop:70}}>Questions</h4>
    </div>
    </>
  );
}

export default ExamInfo;