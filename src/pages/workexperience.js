import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import WorkExperience from "../components/workExp"


const projects = ({data}) => (
  <>
  <Layout>
    <SEO title="Work Experience" />
    <h1>Work Experience</h1>
    {getWorkExperience(data)}

    
    
  </Layout>
  </>
);


function getWorkExperience(data) {
  console.log(data)
  const projectsArray = [];
  data.allWorkExperience.edges.forEach(element => {
   
    projectsArray.push(<WorkExperience workExp = {element}/>)
    projectsArray.push(<hr/>)
  });
  return projectsArray
}

export default projects

export const query = graphql`
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
}`
