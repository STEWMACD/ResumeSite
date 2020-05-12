import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Project from "../components/project"


const projects = ({data}) => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    {getProjects(data)}

    
    
  </Layout>
);


function getProjects(data) {
  const projectsArray = [];
  data.allProject.edges.forEach(element => {
    projectsArray.push(<Project project = {element}/>)
    projectsArray.push(<hr/>)
  });
  return projectsArray
}

export default projects

export const query = graphql`
query {
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
