import React from "react";
import Fade from 'react-reveal/Fade';
import { graphql, StaticQuery } from "gatsby"
import moment from "moment"

const WorkExperience = ({id})=>{




    return(
        <>
        <Fade left>
          <h1 id={id}>Work Experience</h1>
          </Fade>
          
          <StaticQuery
          query={graphql`
          query {
              allWorkExperience (sort: {fields: endDate, order: DESC}){
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
            
            render={data=>(
              <Fade left>
              {getWorkExperience(data)}
              </Fade>
              )}/>
          
        </>
    );
}

const WorkExp= ({workExp}) =>{
    
    return(
        
      
    <div>
      
        <div className="title">{workExp.node.title}</div>
        <div className="emphasis">{workExp.node.employer} <div className="float-right">{moment(workExp.node.startDate).format("MMMM YYYY")} - {endDate(workExp.node.endDate)}</div></div>
        
        <div className="description">{workExp.node.description}</div>
        
        <div>
            <ul>
            {listPoints(workExp.node.keyPoints)}
            </ul>
        </div>
    </div>
    
);


}

function  endDate(date){
  if (date === "Present")
  return "Present"
  else return moment(date).format("MMMM YYYY")
}
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