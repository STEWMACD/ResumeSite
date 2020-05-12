import React, { useState } from "react"
import "../styles/projects.css"
import { element } from "prop-types";
// import { Collapse, Alert } from 'reactstrap'
// import ImageModal from "./imageModal.js"
const WorkExperience = ({workExp}) =>{
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => {setIsOpen(!isOpen);
    //     setStatus(isOpen ? "more...":"less...");}
    // const [status, setStatus] = useState('more...')
    
    return(

    <div>
        <div className="title">{workExp.node.title}</div>
        <div className="emphasis">{workExp.node.employer} <div className="float-right">{workExp.node.startDate} - {workExp.node.endDate}</div></div>
        
        <div>{workExp.node.description}</div>
        <div>
            <ul>
            {listPoints(workExp.node.keyPoints)}
            </ul>
        </div>
    </div>
);}

export default WorkExperience

function listPoints(points) {
    const returnArray = [];
    console.log(points)
    points.forEach(element => {
        
      returnArray.push(<li>{element}</li>)
    });
    return returnArray;
  }