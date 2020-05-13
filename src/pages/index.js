import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Projects from "../components/projects"
import WorkExperience from "../components/workexperience"

// TODO: Google Analytics
// TODO: smooth scroll
// TODO: Carousel only works once


const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <About id="about"></About>
    <WorkExperience id="workexp"></WorkExperience>
    <Projects id="projects"></Projects>
  </Layout>
)

export default IndexPage
