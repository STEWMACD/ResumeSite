import React, { useState } from "react"
import "../styles/projects.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"

const WorkExperience = ({id})=>{




    return(
        <>
        
        <h1 id={id}>Work Experience</h1>
        <StaticQuery
        query={graphql`
        query {
            allWorkExperience {
              edges {
                node {
                  employer
                  endDate
                  keyPoints
                  startDate
                  title
                  description
                }
              }
            }
          }`}
          render={data=>{return getWorkExperience(data)}}/>
        </>
    );
}

const WorkExp= ({workExp}) =>{
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
    points.forEach(element => {
        
      returnArray.push(<li>{element}</li>)
    });
    return returnArray;
}

function getWorkExperience(data) {
    const projectsArray = [];
    data.allWorkExperience.edges.forEach(element => {
     
      projectsArray.push(<WorkExp workExp = {element}/>)
      projectsArray.push(<hr/>)
    });
    return projectsArray
  }