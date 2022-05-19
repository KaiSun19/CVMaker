import React from 'react'
import './CVOutputs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getPDF } from './utils';



export const CVOutputs = React.forwardRef(({props}, ref) => { // use curly braces as it is destructured 

  return (

    <>

    <div className='form-right' ref = {ref} >
        <div className='name'>
            <h1 style = {{display : "flex"}}>
                {props.firstname} <span>   </span>{props.lastname}
            </h1>
        </div>
            <div className='contact-details'>
              <ul>
                <li>
                  {props.email }
                </li>
                <li>
                  {props.phonenumber}
                </li>
              </ul>
          </div>
          <hr className='header-break'></hr>
          <div className='main-body'>
            <div className='brief-details'>

              <div className='education'>
                <h4>Education</h4>
                <p><strong>{props.educationLevel}</strong><span> </span>{props.courseName}</p>
                <p>{props.InstName}</p>
                <p>Grade {props.avgGrade}</p>
                <p>{props.courseDescription}</p>
                <hr></hr>
              </div>
              <div className='skills'>

                <h4>Skills</h4>
                { props.skills && (<ul className='skills-list'>

                  {props.skills.map(
                    skill =>{
                      return <li>{skill}</li>
                    }
                  )}

                </ul>)}

                <hr></hr>
              </div>
              <div className='awards'>

                <h4>Awards</h4>


                { props.awards && (<ul>

                  {props.awards.map(
                    award =>{
                      return <li>{award}</li>
                    }
                  )}

                </ul>)}
                <hr></hr>
                </div>
            </div>
            <div className = "long-details">

            <div className='personal-statement'>
                    
                    <h4>Personal Statement</h4>

                    <p>{props.personalStatement}</p>
            
            <hr></hr>
            </div>

            <div className='experience'>

                <h4>Experience</h4>
                <ul className='job-dates'>
                    <li key = "start-date">Start : {props.startDate}</li>
                    <li key = "end-date">End : {props.endDate}</li>
                </ul>
                <div className='job-name'><p>{props.CompanyName}</p> <span> - </span> <p>{props.jobTitle}</p></div>
                <p>{props.jobDesc}</p>

            </div>

            </div>

          </div>
      </div>

      </>
  )
})