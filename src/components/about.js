import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {StaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"
import "../styles/abouts.css"

const About = ({})=>{

    return(
      <Container>
            <Row>
                <Col md="4" className="name">
                    <StaticQuery
                    query= {graphql`
                    query{
                      allFile(filter: {base: {eq: "headshot.png"}}) {
                          edges {
                            node {
                              childImageSharp{
                                fixed (width:250) {
                                  ...GatsbyImageSharpFixed
                                }
                                fluid{
                                  ...GatsbyImageSharpFluid
                                }
                              }
                            }
                          }
                      }
                  }`} 
                  render={data=>(<Img className= "name" fluid={data.allFile.edges[0].node.childImageSharp.fluid}/>)}/>          
                </Col>
                <Col>
                  <div>
                    <h1 className="name">Stewart MacDonald, E.I.T.</h1>
                    <div class="academics"> 
                      B.A.Sc Mechanical Engineering - Distinction <br/>2019 - UBC Okanagan
                      <hr/>
                    </div> 
                    <div class="summary">Junior Mechanical Engineer with professional experience in mechanical design. 
                      Strong analytical skills as shown by excellent academics, quick learner when it comes to software and technology. Hard worker willing to put the hours in to get the job done right.</div>
                  </div>
                  
                </Col>
            </Row>
            <hr></hr>
            <Row xs="1" sm="1" md="3">
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
            </Row><hr/>
        </Container>
        
        
    );
}

export default About

