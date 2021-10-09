import React, { useState } from "react"
import { Collapse } from 'reactstrap'
import ImageModal from "./imageModal.js"
import moment from "moment"
import {graphql, StaticQuery, Link} from 'gatsby'

const Projects = ({id}) => {
    
    
    
    return(
    <div id={id}>
        <h1>Projects</h1>
        <StaticQuery
        query = {graphql`query {
          allProject(sort: {fields: date, order: DESC}) {
              edges {
                node {
                  longDescription
                  shortDescription
                  active
                  skills
                  title
                  inspiration
                  date
                  links {
                    path
                    text
                  }
                  images {
                    file {
                      childImageSharp {
                        fluid(pngQuality: 100, toFormat: PNG) {
                          ...GatsbyImageSharpFluid
                        }
                        fixed (width: 120 height:80) {
                          ...GatsbyImageSharpFixed
                        }
                      
                      }
                    }
                    tag
                    videoURL
                  }
                }
              }
            }
          }
          `
          }
        render={data=>{return getProjects(data)}}/>
    </div>

    );
}


  function getProjects(data) {
    const projectsArray = [];
    data.allProject.edges.forEach(element => {
      console.log(element)
      if (element.node.active === "yes"){
        projectsArray.push(<Project project = {element}/>)
        projectsArray.push(<hr/>)
      }
        
    });
    return projectsArray
  }
  
  function getLinks(links){
    if(links != null && links.length > 0){
      const returnArray =[];
      returnArray.push(<hr/> )
      returnArray.push('Link(s): ')
      links.forEach((link,index)=>{
        returnArray.push(<Link to={link.path}>{link.text}</Link>)
        if (index != links.length-1)
          returnArray.push(', ')
      })
      return returnArray;
    }
    return (<></>)
  }

const Project = ({project}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen);
        setStatus(isOpen ? "more...":"less...");}
    const [status, setStatus] = useState('more...')
    
    
    return(

    <div>
        <div className="title">{project.node.title}</div>
        <div className="emphasis">{project.node.inspiration} | {moment(project.node.date).format("MMMM YYYY")}</div>
        <div>{project.node.shortDescription}
        </div>
        <div>
            <Collapse isOpen = {isOpen}>
                <div className="CollapseContainer bg-light border">
                    <div>
                        {project.node.longDescription}
                        {getLinks(project.node.links)}
                      <ImageModal images={project.node.images}/>
                    </div>
             
                    <div>
                      
                    </div>
            </div>
            
            </Collapse>
        </div>
        <a className="moreLess" href="javascript:void(0);" onClick={toggle}>{status}</a>
        
        <div className="skills">Skills: {project.node.skills}</div>
    </div>
);}

export default Projects

