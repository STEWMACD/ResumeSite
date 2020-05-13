import React, { useState } from "react"
import "../styles/projects.css"
import { Collapse } from 'reactstrap'
import ImageModal from "./imageModal.js"
import moment from "moment"
import SEO from "./seo"
import {graphql, StaticQuery} from 'gatsby'

const Projects = ({id}) => {
    
    
    
    return(
    <div id={id}>
        <h1>Projects</h1>
        <StaticQuery
        query = {graphql`query {
            allProject {
              edges {
                node {
                  longDescription
                  shortDescription
                  skills
                  title
                  inspiration
                  date
                  images {
                    file {
                      childImageSharp {
                        fluid(pngQuality: 100, toFormat: PNG) {
                          ...GatsbyImageSharpFluid
                        }
                        fixed (width: 200, height: 150) {
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
      projectsArray.push(<Project project = {element}/>)
      projectsArray.push(<hr/>)
    });
    return projectsArray
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

