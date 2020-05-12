import React, { useState } from "react"
import "../styles/projects.css"
import { Collapse, Alert } from 'reactstrap'
import ImageModal from "./imageModal.js"

// TODO: Sort the projects by date - Investigate JSON Dates

const Project = ({project}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {setIsOpen(!isOpen);
        setStatus(isOpen ? "more...":"less...");}
    const [status, setStatus] = useState('more...')
    
    return(

    <div>
        <div className="title">{project.node.title}</div>
        <div className="emphasis">{project.node.inspiration} | {project.node.date}</div>
        <div>{project.node.shortDescription}
        </div>
        <div>
            <Collapse isOpen = {isOpen}>
                <div className="CollapseContainer bg-light border">
                    <div>
                        {project.node.longDescription}
                    </div>
            
            <ImageModal images={project.node.images}/>
            </div>
            
            </Collapse>
        </div>
        <a className="moreLess" href="javascript:void(0);" onClick={toggle}>{status}</a>
        
        <div className="skills">Skills: {project.node.skills}</div>
    </div>
);}

export default Project

