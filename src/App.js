import React, { useRef, useState } from 'react';
import './App.css';
import CVBuilder from './CVBuilder.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack } from 'react-bootstrap';
import {CVOutputs} from './CVOutputs';
import {turnStringtoList} from './utils'
import ReactToPrint from 'react-to-print';



function App() {

  const [personalInfo, setPersonalInfo] = useState("") // creates state to collect data from CVBuilder

  const childtoParent = (data) =>{ // function that allows personalInfo to be changed 

    setPersonalInfo(data)

  }

  const componentRef = useRef();

  return (

    <>

    <div className="App">
      <div className="cv-inputs">
        <CVBuilder childtoParent = {childtoParent}/> {/* childtoParent is passed as a prop to CVBuilder */}
      </div>
      <div className="cv-outputs">
        <CVOutputs props = {personalInfo} ref={componentRef}  />
      </div>
      <div className = "printToPdf">
        <ReactToPrint
              content={() => componentRef.current}
              trigger={() => <button className="btn btn-primary">Print to PDF</button>}
              />
      </div>
    </div>
    </>
  );
}

export default App;
