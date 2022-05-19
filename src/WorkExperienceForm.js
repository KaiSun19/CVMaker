import React, {useRef} from 'react'
import { Form } from 'react-bootstrap'

function WorkExperienceForm() {

    const startDate = useRef()
    const endDate = useRef()
    const CompanyName = useRef()
    const jobTitle = useRef()
    const jobDesc = useRef()

    function handleChange(){
        return ""
    }

  return (

    <>

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
    </>
  )
}

export default WorkExperienceForm