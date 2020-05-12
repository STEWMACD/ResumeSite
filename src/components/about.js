import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {StaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"
import "../styles/abouts.css"

const About = ({data})=>{

    console.log(data)
    return(
      <StaticQuery
      query= {graphql`
      query{
        allFile(filter: {base: {eq: "headshot.png"}}) {
            edges {
              node {
                childImageSharp{
                  fixed (width:300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
        }
    }`} 
    render={data=>(
        <Container fluid="sm">
            <Row xs="2">
                <Col xs="auto" offset="1">
                <Img fixed={data.allFile.edges[0].node.childImageSharp.fixed}></Img>
                </Col>
                <Col >
                  <div>
                    <h2 class="name">Stewart MacDonald, E.I.T.</h2>
                    <div class="academics"> 
                      B.A.Sc Mechanical Engineering - Distinction <br/>2019 - UBC Okanagan
                      <hr/>
                    </div> 
                    <div class="summary">Junior Mechanical Engineer with professional experience in mechanical design. 
                      Strong analytical skills as shown by strong academics, quick learner when it comes to software and technology. Hard worker willing to put the hours in to get the job done right.</div>
                  </div>
                  
                </Col>
            </Row>
            <hr></hr>
            <Row xs="3">
              <Col className="">
                Skills:
                <ul>
                  <li>Computer Programming</li>
                  <li>CAD</li>
                  <li>Mechanical Design</li>
                  <li>Mechatronics</li>
                </ul>
              </Col>
              <Col className="">
                Programming Languages:
                <ul>
                  <li>C++</li>
                  <li>SQL</li>
                  <li>Python</li>
                  <li>MATLAB</li>
                </ul>
              </Col>
              <Col className="">
                Certifications/Courses:
                <ul>
                  <li>Certified Solidworks Professional</li>
                  <li>Certified PDM User</li>
                  <li>Biomedical Engineering Course</li>
                  <li>Advanced Controls Courses</li>
                </ul>
              </Col>
            </Row>
        </Container>
        )}
        />
    );
}

export default About

