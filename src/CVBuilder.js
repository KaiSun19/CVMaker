import React, { useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import './CVBuilder.css';
import {turnStringtoList} from './utils'
import WorkExperienceForm from './WorkExperienceForm';


function CVBuilder({childtoParent}) {

  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const phonenumber = useRef()
  const educationLevel = useRef()
  const InstName = useRef()
  const courseName = useRef()
  const avgGrade = useRef()
  const courseDescription = useRef()
  const skills = useRef()
  const awards = useRef()
  const personalStatement = useRef()
  const startDate = useRef()
  const endDate = useRef()
  const CompanyName = useRef()
  const jobTitle = useRef()
  const jobDesc = useRef()


  const handleChange = () =>{

    const personalInfo = {

      firstname : firstName.current.value,
      lastname : lastName.current.value,
      email: email.current.value,
      phonenumber : phonenumber.current.value,
      educationLevel : educationLevel.current.value, 
      InstName : InstName.current.value, 
      courseName : courseName.current.value,
      avgGrade : avgGrade.current.value,
      courseDescription : courseDescription.current.value,
      skills : turnStringtoList(skills.current.value),
      awards : turnStringtoList(awards.current.value),
      personalStatement : personalStatement.current.value,
      startDate : startDate.current.value, 
      endDate : endDate.current.value, 
      CompanyName : CompanyName.current.value, 
      jobTitle : jobTitle.current.value, 
      jobDesc : jobDesc.current.value

    }

    childtoParent(personalInfo) // personalInfo object is passed to childtoParent function and saved in App.js as the personalInfo state

  }

  function addWorkExperience(){
        
    return ( 
      <WorkExperienceForm />
    )
  }




  return (
    <div>
      <h1>CV Maker</h1>
        <Form>
          <Form.Group className="mb-3" controlId="first-name"  onChange={handleChange} style = {{width:"30%"}}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="" ref = {firstName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="last-name"  onChange={handleChange} style = {{width:"30%"}}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="" ref = {lastName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email"  onChange={handleChange} style = {{width:"40%"}}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref = {email} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phonenumber"  onChange={handleChange} style = {{width:"40%"}}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="" ref = {phonenumber} />
          </Form.Group>
        </Form>

        <h3>Education</h3>
          
        <Form className='education-form'>
        <Form.Group className="mb-3" controlId="education-level"  onChange={handleChange} style = {{width:"30%"}}>
            <Form.Label>Education Level</Form.Label>
            <Form.Control type="text" placeholder="" ref = {educationLevel} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="InstName"  onChange={handleChange} style = {{width:"30%"}}>
            <Form.Label>Institution Name</Form.Label>
            <Form.Control type="text" placeholder="" ref = {InstName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="course-name"  onChange={handleChange} style = {{width:"40%"}}>
            <Form.Label>Course Name</Form.Label>
            <Form.Control type="text" placeholder="" ref = {courseName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="course-name"  onChange={handleChange} style = {{width:"40%"}}>
            <Form.Label>Average Grade</Form.Label>
            <Form.Control type="text" placeholder="" ref = {avgGrade} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="courseDescription"  onChange = {handleChange} style = {{width:"100%"}}>
            <Form.Label>Course Description</Form.Label>
            <Form.Control as="textarea" rows={2} ref = {courseDescription}/>
          </Form.Group>

        </Form>

        <h3>Skills</h3>

        <Form className='skills'>

        <Form.Group className="mb-3" controlId="skills"  onChange={handleChange} style = {{width:"80%"}}>
            <Form.Label>List out relevant skills</Form.Label>
            <Form.Control type="text" placeholder="" ref = {skills} />
        </Form.Group>          

        </Form>

        <Form className='skills'>

          <Form.Group className="mb-3" controlId="awards"  onChange={handleChange} style = {{width:"80%"}}>
              <Form.Label>List out relevant awards</Form.Label>
              <Form.Control type="text" placeholder="" ref = {awards} />
          </Form.Group>          

        </Form>

        
        <Form className='personal-statement'>

          <Form.Group className="mb-3" controlId="personal-statement"  onChange={handleChange} style = {{width:"100%"}}>
              <Form.Label>Write about yourself </Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="" ref = {personalStatement} />
          </Form.Group>          

        </Form>

        <h4>Work Experience</h4>

          <Form className='experience-form'>

            <Form.Group className="mb-3" controlId="start-date"  onChange={handleChange} style = {{width:"30%"}}>
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" placeholder="" ref = {startDate} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="end-date"  onChange={handleChange} style = {{width:"30%"}}>
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" placeholder="" ref = {endDate} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="company-name"  onChange={handleChange} style = {{width:"40%"}}>
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="" ref = {CompanyName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="job-title"  onChange={handleChange} style = {{width:"40%"}}>
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" placeholder="" ref = {jobTitle} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="job-desc"  onChange={handleChange} style = {{width:"100%"}}>
              <Form.Label>Job Description</Form.Label>
              <Form.Control as = "textarea"  rows={3} placeholder="" ref = {jobDesc} />
            </Form.Group>

          </Form>

        

        


    </div>
  ) 
}

export default CVBuilder